importPackage(Packages["okhttp3"]);

export class WebsocketClient {
    responses = {};
    userListeners = {};

    constructor(url) {
        let client = new OkHttpClient.Builder().retryOnConnectionFailure(true).build();
        let request = new Request.Builder().url(url).build();
        client.dispatcher().cancelAll();
        let webSocket = client.newWebSocket(request, new WebSocketListener({
            onMessage: function (webSocket, msg) {
                let message = JSON.parse(msg);
                if (message.response) {
                    global.ws.responses[message.response] = message.data;
                }else if(Object.keys(global.ws.userListeners).length > 0){
                    for (let i in global.ws.userListeners) {
                        global.ws.userListeners[i](webSocket, message);
                    }
                }
            }
        }));
        this.client = webSocket;
    }

    send(type, data) {
        this.client.send(JSON.stringify({
            type: type,
            imei: device.getIMEI(),
            data: data || {}
        }));
    }

    request(type, data) {
        let id = Math.round(Math.random() * 100000000);
        this.client.send(JSON.stringify({
            type: type,
            id: id,
            imei: device.getIMEI(),
            data: data || {}
        }));
        let result = threads.disposable();
        threads.start(function () {
            while (true) {
                sleep(1000);
                if (global.ws.responses[id] != undefined) {
                    result.setAndNotify(global.ws.responses[id]);
                    delete global.ws.responses[id];
                    threads.currentThread().interrupt();
                }
            }
        });
        return result.blockedGet();
    }

    bind(id, handler) {
        this.userListeners[id] = handler;
    }

    unbind(id) {
        if (this.userListeners[id] != undefined) {
            delete this.userListeners[id];
        }
    }
}
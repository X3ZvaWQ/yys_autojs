import { WebsocketClient } from './modules/websocket';
import { Logger } from './modules/logger';
import { MyAutomator } from './modules/automator';
import { Ocr } from './modules/ocr';
import { startThread } from './scripts/thread';

let url = 'ws://192.168.1.230:8988'
global.ws = new WebsocketClient(url);
global.logger = new Logger(ws);
global.ocr = new Ocr(ws);
global.automator = new MyAutomator(0);

class Syy{
    scriptThread;
    syncThread;

    constructor() {
        this.initState();
        this.initAutoServicePermission();
        this.initScreenCaptruePermission();
    }

    initAutoServicePermission() {
        let checked = auto.service != null;
        if(checked && auto.service == null) {
            toast('请打开该应用的无障碍权限');
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if(!checked && auto.service != null){
            auto.service.disableSelf();
        }
    }

    initScreenCaptruePermission() {
        threads.start(function (){
            console.log(': ' + device.width + '*' + device.height);
            if (!requestScreenCapture(device.width < device.height)) {
                toast("screenshot permission acquisition failed.");
                exit();
            }
        });
    }

    initState() {
        logger.warn('初始化：向服务器请求State数据。');
        global.state = global.ws.request('state/pull');
        logger.warn('初始化：State数据请求成功。已同步');
    }

    start() {
        this.scriptThread = startThread();
        this.syncThread = this.startSyncThread();
    }

    startSyncThread() {
        return threads.start(function() {
            setInterval(function(){
                global.ws.send('sync/push', {
                    imei: device.getIMEI(),
                    data: state
                });
            }, 30000);
        });
    }
}

let syy = new Syy();
syy.start(); 

setInterval(() => {
    if(!syy.syncThread.isAlive()) {
        syy.startSyncThread();
    }
    if(!syy.scriptThread.isAlive()) {
        exit();
    }
}, 1000);
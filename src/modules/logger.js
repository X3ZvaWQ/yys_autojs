export class Logger {
    constructor(ws) {
        this.ws = ws;
    }

    verbose(text) {
        console.log(text);
        this.ws.send('log', {
            level: 'verbose',
            message: text
        });
    }
    info(text) {
        console.log(text);
        this.ws.send('log', {
            level: 'info',
            message: text
        });
    }
    log(text) {
        console.log(text);
        this.ws.send('log', {
            level: 'info',
            message: text
        });
    }
    warn(text) {
        console.log(text);
        this.ws.send('log', {
            level: 'warn',
            message: text
        });
    }
    error(text) {
        console.log(text);
        this.ws.send('log', {
            level: 'error',
            message: text
        });
    }
}
import { Scene } from './scene';

export class Disconnection extends Scene {
    constructor() {
        super();
        this.scene_name = 'disconnection';
        this.judge_colors = ['disconnection'];
        this.colors = {
            "disconnection": {
                "region":[655,444,611,221],
                "desc":"已断开游戏服务器（",
                "first":"#beaa94",
                "colors":[[-3,0,"#3b362f"],[-7,2,"#74685b"],[-9,0,"#cab49e"],[-9,-2,"#978776"],[-8,-4,"#554d44"],[34,4,"#cab49d"],[33,1,"#887a6b"],[29,5,"#2e2a25"],[41,13,"#6b6054"]]
            },
        };
        this.buttons = {
            "reconnect_confirm": {
                "center": [963, 609], 
                "offset": [100, 30],
                "desc": "确认重连"
            },
        }
    }

    execute() {
        global.logger.info('掉线：5s后重连...')
        sleep(5000);
        this.clickButton('reconnect_confirm');
    }
}
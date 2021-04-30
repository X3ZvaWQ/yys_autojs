import { Scene } from './scene';

export class XianShi extends Scene {
    constructor() {
        super();
        this.scene_name = 'xianshi';
        this.judge_colors = ['xianshi_interface'];
        this.colors = {
            "xianshi_interface": {
                "region":[582,4,743,142],
                "desc":"现世妖约 界面",
                "first":"#21293a",
                "colors":[[-5,2,"#314152"],[-45,5,"#1d2a3b"],[-37,12,"#415263"],[-36,13,"#304051"],[-27,6,"#4d5e80"],[113,-30,"#bccdcd"],[114,-24,"#3e4f60"],[271,8,"#593716"],[275,7,"#c49741"],[277,5,"#dbb953"]]
            },
        };
        this.buttons = {
            "xianshi_exit": {
                "center": [79, 77], 
                "offset": [30, 30],
                "desc": "现世妖约里面的退出"
            },
            "xianshi_fengmo": {
                "center": [134, 986], 
                "offset": [50, 50],
                "desc": "现世妖约里面的现世封魔按钮"
            },
            "xianshi_digui": {
                "center": [356, 981], 
                "offset": [50, 50],
                "desc": "现世妖约里面的地域鬼王按钮"
            },
        }
    }

    execute() {
        if(this.timeTo('fengmo')) {
            this.clickButton('xianshi_fengmo');
            global.logger.info('现世妖约：进入逢魔之时');
            return;
        }
        if(this.timeTo('digui')) {
            this.clickButton('xianshi_digui');
            global.logger.info('现世妖约：进入地域鬼王');
            return;
        }
        this.clickButton('xianshi_exit');
        global.logger.info('现世妖约：退出');
    }
}
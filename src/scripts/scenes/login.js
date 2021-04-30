import { Scene } from './scene';

export class Login extends Scene {
    constructor() {
        super();
        this.scene_name = 'login';
        this.judge_colors = ['login'];
        this.colors = {
            "login": {
                "region":[1063,761,91,56],
                "desc":"登陆界面 服务器的切换按钮",
                "first":"#877057",
                "colors":[[-1,8,"#8e7760"],[-2,17,"#836d56"],[5,6,"#856e57"],[13,11,"#826c54"],[21,14,"#8c765f"],[23,7,"#89735b"],[34,6,"#8b7761"],[36,-1,"#93816c"],[36,18,"#87745e"],[49,15,"#8c7965"]]
            },
        };
        this.buttons = {
            "enter_game": {
                "center": [952, 898], 
                "offset": [100, 30],
                "desc": "进入游戏（"
            },
        }
    }

    execute() {
        sleep(5000);
        global.logger.info('登陆：进入游戏')
        this.clickButton('enter_game');
    }
}
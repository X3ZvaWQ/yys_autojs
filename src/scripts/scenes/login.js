import { Scene } from './scene';

export class Login extends Scene {
    constructor() {
        super();
        this.scene_name = 'login';
        this.judge_colors = ['login'];
        this.colors = {
            "login": {
                "region":[225,827,148,159],
                "desc":"登陆界面 服务器的切换按钮",
                "first":"#65c138",
                "colors":[[-3,6,"#59ad26"],[-4,6,"#7ac84c"],[-5,6,"#9ad578"],[-6,10,"#ffffff"],[-14,10,"#c8d9c8"],[-13,14,"#63c930"],[-14,20,"#ffffff"],[-10,26,"#489d26"],[-14,28,"#64c731"]]
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
import { Scene } from './scene';

export class Sign extends Scene {
    constructor() {
        super();
        this.scene_name = 'sign';
        this.judge_colors = ['sign_in_confirm', 'sign_in_result'];
        this.colors = {
            "sign_in_confirm": {
                "region":[782,109,346,512],
                "desc":"每日一签",
                "first":"#aa3300",
                "colors":[[0,-7,"#ddccbb"],[0,-15,"#932d0b"],[12,-11,"#a52e00"],[13,40,"#e4d3c2"],[13,42,"#dab69b"],[13,43,"#cd9270"],[15,42,"#d8c0ad"],[15,43,"#c69a84"],[16,44,"#aa4625"]]
            },
            "sign_in_result": {
                "region":[1086,564,402,465],
                "desc":"每日一签的结果",
                "first":"#ededed",
                "colors":[[6,2,"#252525"],[11,1,"#f3f3f3"],[21,1,"#faece4"],[18,-1,"#fafafa"],[24,13,"#fff3eb"],[28,17,"#323232"],[32,20,"#ffffff"],[31,25,"#282828"],[39,26,"#a7a7a7"]]
            },
        };
        this.buttons = {
            "sign_exit": {
                "center": [1307, 162], 
                "offset": [30, 30],
                "desc": "关掉签到结果"
            },
        }
    }

    execute() {
        if(this.match_tag == 'sign_in_confirm') {
            if (this.clickIfColorsExist('sign_in_confirm')) {
                global.logger.info('签到：每日一签');
                return;   
            }
        }
        if(this.match_tag == 'sign_in_result') {
            this.clickButton('sign_exit');
            global.logger.info('签到：关闭签到界面');
            return;
        }
        
    }
}
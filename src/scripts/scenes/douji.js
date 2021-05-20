import { Scene } from './scene';

export class DouJi extends Scene {
    constructor() {
        super();
        this.scene_name = 'douji';
        this.judge_colors = ['douji_main', 'douji_select', 'douji_levelup'];
        this.colors = {
            "douji_main": {
                "region":[8,1,512,208],
                "desc":"斗鸡左上角判定",
                "first":"#f8f3e0",
                "colors":[[6,-2,"#2c2a37"],[0,-12,"#f4efdd"],[6,-11,"#2c2837"],[42,9,"#f6f1df"],[45,9,"#a09d99"],[53,12,"#f1ecda"],[60,13,"#57545a"],[58,16,"#f7f2df"],[50,18,"#302c3c"]]
            },
            "douji_select": {
                "region":[890,25,136,147],
                "desc":"斗鸡，选式神",
                "first":"#7a4108",
                "colors":[[2,-1,"#f9e4b1"],[4,-1,"#ffeebd"],[9,-2,"#ffeecc"],[20,0,"#c16c04"],[29,-8,"#5c320a"],[41,-12,"#1c100c"],[5,23,"#a76b0f"],[-4,24,"#ffeecc"],[-7,34,"#754407"]]
            },
            "douji_auto": {
                "region":[14,164,147,143],
                "desc":"斗鸡，自动上阵",
                "first":"#826851",
                "colors":[[-19,-14,"#fafaf9"],[-15,-11,"#22180f"],[-13,-11,"#514942"],[-10,-12,"#ffffff"],[1,-16,"#221910"],[3,-18,"#dddbda"],[9,-19,"#8f8a85"],[14,-18,"#22180f"],[18,-19,"#fbfbfb"]]
            },
            "douji_levelup": {
                "region":[425,294,1035,361],
                "desc":"斗鸡，段位上升",
                "first":"#ead4c1",
                "colors":[[18,23,"#f5e7c3"],[13,43,"#dfce9b"],[17,87,"#e73d2c"],[37,82,"#a32015"],[50,86,"#967844"],[115,85,"#db3626"],[132,79,"#a4824f"],[165,67,"#ae9564"],[188,8,"#fff7dc"]]
            }
        };
        this.buttons = {
            "douji_fight": {
                "center": [1792, 924],
                "offset": [50,50],
                "desc": "斗鸡 战斗"
            },
            "fighting_victory_confirm": {
                "center": [951, 1040],
                "offset": [200,30],
                "desc": "点屏幕继续。"
            },
        }
    }

    execute() {
        if(this.match_tag == 'douji_main') {
            this.clickButton('douji_fight');
            state.global.fighting = 'douji';
            global.logger.info('斗鸡：战斗！');
        }

        if(this.match_tag == 'douji_select') {
            if(this.clickIfColorsExist('douji_auto')) {
                global.logger.info('斗鸡：自动上场');
            }
        }

        if(this.match_tag == 'douji_levelup') {
            this.clickButton('fighting_victory_confirm');
        }
    }
}
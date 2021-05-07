import { Scene } from './scene';

export class Award extends Scene {
    constructor() {
        super();
        this.scene_name = 'award';
        this.judge_colors = ['award1', 'award2', 'award3'];
        this.colors = {
            "award1": {
                "region":[450,228,1069,571],
                "desc":"通用获得奖励",
                "first":"#ebdba4",
                "colors":[[3,0,"#876532"],[23,0,"#eeeebb"],[32,2,"#70511e"],[34,-6,"#f9eec5"],[30,49,"#d9c37d"],[43,52,"#663311"],[65,95,"#663812"],[43,61,"#d2c17d"],[-2,44,"#70653d"]]
            },
            "award2": {
                "region":[639,584,607,412],
                "desc":"通用获得奖励",
                "first":"#752b11", 
                "colors":[[16,-12,"#0c0000"],[27,-17,"#662403"],[39,-17,"#0e0000"],[49,-19,"#783a11"],[58,-43,"#ab7937"],[50,-48,"#392119"],[41,-50,"#bb8844"],[39,-49,"#b07f41"],[-68,-64,"#88a5d6"],[38,-49,"#9e703c"]]
            },
            "award3": {
                "region":[671,194,563,192],
                "desc":"通用获得奖励",
                "first":"#dccb87",
                "colors":[[9,-37,"#f3e7b0"],[57,-38,"#faf1ca"],[47,21,"#d6bf7b"],[100,26,"#dcc684"],[125,40,"#cdb673"],[162,-15,"#fbf1ce"],[242,-9,"#fcedc6"],[256,50,"#bca462"],[376,15,"#ebdca7"],[413,42,"#cbab67"]]
            }
        };
        this.buttons = {
            "fighting_victory_confirm": {
                "center": [951, 1040],
                "offset": [200,30],
                "desc": "战斗结束的时候点屏幕继续。"
            },
        }
    }

    execute() {
        global.logger.info('奖励：确定领取奖励')
        this.clickButton('fighting_victory_confirm');
    }
}
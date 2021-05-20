import { Scene } from './scene';

export class Activity extends Scene {
    constructor() {
        super();
        this.scene_name = 'activity';
        this.judge_colors = ['activity_interface'];
        this.colors = {
            "activity_interface": {
                "region":[734,65,427,131],
                "desc":"活动界面判别点",
                "first":"#322624",
                "colors":[[-1,0,"#332825"],[-4,0,"#79593f"],[-5,1,"#bc8855"],[-11,1,"#7e613c"],[-12,-4,"#3c2e2a"],[-16,-2,"#a77e56"],[-11,9,"#332824"],[11,14,"#453723"],[15,14,"#a88653"],[18,18,"#624b39"]]
            },
            "activity_fengmo": {
                "region":[176,36,1550,980],
                "desc":"寻找逢魔的参加按钮",
                "first":"#8a6158",
                "colors":[[-397,-30,"#fdfdb9"],[-381,-22,"#fffad8"],[-381,-27,"#3c2b2b"],[-382,-26,"#383331"],[-383,-26,"#5a5a5a"],[-385,-26,"#e1e1e1"],[-387,-25,"#aaa5a5"],[-388,-25,"#302121"],[-392,-26,"#fffffe"],[-402,-20,"#eeeebb"]]
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

    openActiviey(activity) {
        if (activity == 'fengmo') {
            let point = this.findColors('activity_fengmo');
            if (point != null) {
                this.clickPoint(point);
            } else {
                global.automator.swipe([1471, 825], [1473, 291]);
                sleep(800);
                point = this.findColors('activity_fengmo');
                if (point != null) {
                    this.clickPoint(point);
                } else {
                    logger.warn('找不到封魔的按钮了Orz');
                }
            }
        }
    }

    execute() {
        if(state.temp.activityTo == 'fengmo') {
            this.openActiviey('fengmo');
        }
        
    }
}
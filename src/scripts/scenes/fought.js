import { Scene } from './scene';

export class Fought extends Scene {
    constructor() {
        super();
        this.scene_name = 'fought';
        this.judge_colors = ['fighting_victory_settle', 'fighting_victory_settle_1', 'fighting_failed_settle'];
        this.colors = {
            "fighting_victory_settle": {
                "region":[294,67,1267,432],
                "desc":"战斗结算界面的红鼓",
                "first":"#cfc0aa",
                "colors":[[0,-11,"#c9b8a7"],[2,-13,"#be8070"],[2,-14,"#a85342"],[2,-15,"#85301f"],[2,-17,"#822018"],[15,-6,"#ccbbaa"],[17,-6,"#be9281"],[18,-6,"#ac7261"],[20,-6,"#8e3524"]]
            },
            "fighting_victory_settle_1": {
                "region":[62,941,103,94],
                "desc":"战斗结算界面的左下角的统计",
                "first":"#a97b59",
                "colors":[[2,-12,"#3b2b22"],[-12,-14,"#b89666"],[13,-5,"#a7865c"],[-1,10,"#3e2d1c"],[-1,11,"#5a422d"],[-1,12,"#966a4b"],[-1,15,"#413020"],[-22,-10,"#a68451"],[-20,-10,"#46321b"]]
            },
            "fighting_failed_settle": {
                "region":[429,92,1055,361],
                "desc":"战斗失败",
                "first":"#b4a48b",
                "colors":[[0,-3,"#b8a795"],[0,-7,"#737373"],[0,-9,"#4a474e"],[0,-11,"#4c4454"],[-3,-16,"#4a4252"],[-16,-1,"#b6a58e"],[-21,4,"#70685e"],[-25,7,"#585061"],[23,-2,"#6e6665"]]
            },
        };
        this.buttons = {
            "fought_confirm": {
                "center": [951, 1040],
                "offset": [200,30],
                "desc": "战斗结束的时候点屏幕继续。"
            },
        }
    }

    execute() {
        //胜利
        if(this.match_tag == 'fighting_victory_settle' || this.match_tag == 'fighting_victory_settle_1') {
            this.clickButton('fought_confirm');
            //统计击杀次数
            if (state.global.fighting == 'tansuo' && state.tansuo.fighting == 'boss') {
                state.tansuo.fighting = null;
                state.tansuo.end = true;
                if (state.tansuo.level != null) {
                    // 判断探索列表有没有这个关卡的任务
                    if (state.tansuo.setting.list[state.tansuo.level] != undefined) {
                        // 有任务的话就把击杀次数-1， 如果-1之后是0就删除这个任务
                        state.tansuo.setting.list[state.tansuo.level] -= 1;
                        global.logger.log('战斗胜利：探索结束，任务完成次数+1，剩余次数：' + state.tansuo.setting.list[state.tansuo.level]);
                        if (state.tansuo.setting.list[state.tansuo.level] == 0) {
                            delete state.tansuo.setting.list[state.tansuo.level];
                            global.logger.log('战斗胜利：关卡 ' + state.tansuo.level + ' 的探索任务结束');
                        }
                    };
                }
            }
            //记录 封魔boss 已经击杀过了（
            if (state.global.fighting == 'fengmo') {
                state.fengmo.last_kill_fengmo_boss = Date.now();
            }
            return;
        }
        //退出战斗确认
        if(this.match_tag == 'fighting_failed_settle') {
            this.clickButton('fought_confirm');
            global.logger.info('战斗失败：确认结算');
            return;
        }
    }
}
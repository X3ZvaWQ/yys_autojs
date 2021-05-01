import { Scene } from './scene';

export class TanSuo extends Scene {
    constructor() {
        super();
        this.scene_name = 'tansuo';
        this.judge_colors = ['tansuo_prepare', 'tansuo_scene', 'tansuo_exit_confirm'];
        this.colors = {
            "tansuo_hard_prepare": {
                "region":[352,226,489,237],
                "desc":"探索，准备点探索进去的界面。困难",
                "first":"#461b17",
                "colors":[[2,0,"#8a6c6c"],[4,0,"#e2e2e2"],[6,1,"#dddddd"],[7,2,"#ada5a5"],[7,3,"#8d7272"],[6,4,"#6d3939"],[6,5,"#5f2b2a"],[5,5,"#491412"],[8,6,"#dfcdcd"]]
            },
            "tansuo_normal_prepare": {
                "region":[354,229,486,227],
                "desc":"探索，准备点探索进去的界面。普通",
                "first":"#382521",
                "colors":[[-223,-53,"#1b0e06"],[-218,-50,"#f7cfb3"],[-214,-53,"#33120c"],[-213,-57,"#3d1715"],[-213,-58,"#6e3e3d"],[-213,-59,"#aa8577"],[-213,-61,"#f7e9cb"],[-216,-75,"#452618"],[-229,-69,"#4d2e2b"]]
            },
            "tansuo_scene": {
                "region":[896,6,1016,130],
                "desc":"探索场景，取点右上方的樱饼和体力图标",
                "first":"#d8af86",
                "colors":[[155,12,"#cca379"],[139,-12,"#d3af85"],[-367,-32,"#ff913e"],[-361,-19,"#fb9540"],[-629,-11,"#fff4e3"],[-643,-39,"#fdd4df"],[-649,-17,"#85a654"],[-629,-8,"#f9e1c8"]]
            },
            "tansuo_tag_damo_1": {
                "region":[9,128,1902,857],
                "desc":"达摩tag 1",
                "first":"#8c231c",
                "colors":[[1,-1,"#bd6a3e"],[2,-2,"#e5b44c"],[3,-3,"#d8a631"],[4,-4,"#ca9723"],[5,-3,"#ca7623"],[6,-2,"#cb4629"],[7,-1,"#c33e29"],[8,0,"#b92f1f"],[9,1,"#cc2821"]]
            },
            "tansuo_tag_damo_2": {
                "region":[9,128,1902,857],
                "desc":"达摩tag 2",
                "first":"#b32c1a",
                "colors":[[1,-1,"#c33a1d"],[2,-2,"#c1631b"],[3,-3,"#c15d1b"],[4,-4,"#c4351e"],[3,-5,"#bb2514"],[2,-6,"#af1909"],[1,-7,"#ab150d"],[0,-8,"#a91313"]]
            },
            "tansuo_tag_damo_3": {
                "region":[9,128,1902,857],
                "desc":"达摩tag 3",
                "first":"#c2362d",
                "colors":[[1,1,"#cf3827"],[2,2,"#cf3827"],[3,3,"#cc3524"],[4,4,"#cb3423"],[5,5,"#c8311f"],[7,6,"#ad4341"],[8,6,"#ab4745"],[9,7,"#a43232"],[10,8,"#a62424"]]
            },
            "tansuo_fight_normal": {
                "region":[15,220,1896,689],
                "desc":"普通小怪",
                "first":"#f6f6fe",
                "colors":[[-1,-1,"#e4e4fa"],[-2,-2,"#d5d5f6"],[-3,-1,"#d5d5f6"],[-3,0,"#dadaf7"],[-3,1,"#e1e1f9"],[-2,2,"#fafaff"],[0,3,"#a1a1c2"],[0,4,"#9595b7"],[4,8,"#a3a3d6"],[5,9,"#515184"],[5,10,"#2a2a5c"]]
            },
            "tansuo_fight_boss": {
                "region":[6,153,1909,753],
                "desc":"boss",
                "first":"#463243",
                "colors":[[2,2,"#6c4d4a"],[3,3,"#dacebe"],[4,4,"#f7eedd"],[6,1,"#e6d6c9"],[6,0,"#e0cfc8"],[7,0,"#c8b7a7"],[6,-1,"#b2a1a1"],[6,-3,"#66555e"],[0,-9,"#4b3c62"]]
            },
            "tansuo_exit_confirm": {
                "region":[589,431,732,114],
                "desc":"探索，退出确认",
                "first":"#c0ab96",
                "colors":[[0,-1,"#867869"],[2,-1,"#2d2924"],[2,0,"#282521"],[3,4,"#554c43"],[4,2,"#62584d"],[5,2,"#b6a38e"],[19,2,"#cbb59e"],[22,4,"#b5a28d"],[23,4,"#887a6b"],[24,4,"#6f6457"]]
            },
        };
        this.buttons = {
            "tansuo_kunnan": {
                "center": [709, 346],
                "offset": [50, 50],
                "desc": "探索准备页面 切换困难"
            },
            "tansuo_putong": {
                "center": [502, 343],
                "offset": [50, 50],
                "desc": "探索准备页面 切换普通"
            },
            "tansuo_start": {
                "center": [1418, 812],
                "offset": [50, 50],
                "desc": "探索准备页面 探索"
            },
            "tansuo_prepare_exit": {
                "center": [1572, 225],
                "offset": [40, 40],
                "desc": "探索准备页面 退出"
            },
            "tansuo_scene_exit": {
                "center": [80, 97],
                "offset": [40, 40],
                "desc": "探索场景 退出"
            },
            "tansuo_scene_exit_confirm": {
                "center": [1166, 605],
                "offset": [50, 30],
                "desc": "探索场景 退出 确认"
            },
        }
    }

    findMonsterByTag(tag) {
        let centerPoint;
        for (let i = 0; i < 8; i++) {
            for (let j = 1; j < 4; j++) {
                centerPoint = this.findColors('tansuo_tag_' + tag + '_' + j);
                if (centerPoint != null) break;
            }
            if (centerPoint == null) {
                sleep(100);
                this.updateCapture();
                continue;
            } else {
                break;
            }
        }
        if (centerPoint == null) {
            return false;
        }
        let step = 80;
        let standard = (x, y, w, h) => {
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x + w > device.width) w = device.width - x;
            if (y + h > device.height) h = device.height - y;
            return [x, y, w, h]
        }
        let region = standard(centerPoint.x - step / 2, centerPoint.y - step / 2, step, step);
        let newPoint;
        for (let i = 0; i < 10; i++) {
            let newMultiColors = {
                region: region,
                first: multiColorsData['tansuo_fight_normal'].first,
                colors: multiColorsData['tansuo_fight_normal'].colors
            };
            newPoint = this.findColors(newMultiColors);
            if (newPoint != null) {
                this.clickPoint(newPoint);
                now.tansuo.findCount = 0;
                now.tansuo.fighting = 'normal';
                now.global.fighting = 'tansuo';
                return true;
            } else {
                step += 80;
                region = standard(centerPoint.x - step / 2, centerPoint.y - step / 2, step, step);
                continue;
            }
        }
        return false;
    }

    findTanSuoBoss() {
        if(this.clickIfColorsExist('tansuo_fight_boss')){
            global.state.tansuo.findCount = 0;
            global.state.tansuo.fighting = 'boss';
            global.state.global.fighting = 'tansuo';
            return true;
        }
        return false;
    }

    findTanSuoNormal() {
        if(this.clickIfColorsExist('tansuo_fight_normal')){
            global.state.tansuo.findCount = 0;
            global.state.tansuo.fighting = 'normal';
            global.state.global.fighting = 'tansuo';
            return true;
        }
        return false;
    }

    tanSuoSlide() {
        if (global.state.tansuo.findCount < 3 && global.state.tansuo.findCount >= 0) {
            global.automator.swipe(random(1600, 1800), random(225, 275), random(100, 300), random(225, 275), random(1000, 1200));
            global.logger.verbose('探索场景：没怪了，右划一下');
            global.state.tansuo.findCount += 1;
        } else if (global.state.tansuo.findCount >= 3) {
            global.automator.swipe(random(100, 300), random(225, 275), random(1600, 1800), random(225, 275), random(1000, 1200));
            global.logger.verbose('探索场景：右划好像到底了，开始左划');
            global.state.tansuo.findCount = -1;
        } else if (global.state.tansuo.findCount < 0 && global.state.tansuo.findCount >= -3) {
            global.automator.swipe(random(100, 300), random(225, 275), random(1600, 1800), random(225, 275), random(1000, 1200));
            global.logger.verbose('探索场景：没怪了，左划一下');
            global.state.tansuo.findCount -= 1;
        } else {
            global.logger.verbose('探索场景：找不到怪，退出探索');
            global.state.tansuo.findCount = 0;
            this.clickButton('tansuo_scene_exit');
        }
    }

    execute() {
        if(this.match_tag == 'tansuo_prepare') {
            if (this.timeTo('jiyang')||
            this.timeTo('digui')|| 
            this.timeTo('fengmo')||
            this.timeTo('liaotu')){
                this.clickButton('tansuo_prepare_exit');
                return;
            }
            if (global.state.tansuo.level != global.state.tansuo.target
                || Object.keys(global.state.tansuo.setting.list).indexOf(global.state.tansuo.level) == -1) {
                this.clickButton('tansuo_prepare_exit');
                return;
            }
            if (findColors('tansuo_normal_prepare') != null) {
                this.clickButton('tansuo_kunnan');
                return;
            }
            this.clickButton('tansuo_start');
            now.tansuo.end = false;
        }
        
        if(this.match_tag == 'tansuo_scene') {
            if (global.state.tansuo.end) {
                this.clickButton('tansuo_scene_exit');
                global.logger.info('探索场景：探索结束，退出探索界面');
                return;
            };
            if (global.state.tansuo.setting.mode == 'all_boss_first') {
                if (this.findTanSuoBoss()){
                    global.logger.info('探索场景：发现一只Boss，挑战之');
                    return;
                }
                if (this.findTanSuoNormal()){
                    global.logger.info('探索场景：发现一只小怪，挑战之');
                    return;
                }
                this.tanSuoSlide();
                return;
            } else if (global.state.tansuo.setting.mode == 'only_damo') {
                if (this.findTanSuoBoss()){
                    global.logger.info('探索场景：发现一只Boss，挑战之');
                    return;
                }
                if (this.findMonsterByTag('damo')){
                    global.logger.info('探索场景：发现一只达摩怪，挑战之');
                    return;
                }
                this.tanSuoSlide();
                return;
            }
        }

        if(this.match_tag == 'tansuo_exit_confirm') {
            this.clickButton('tansuo_scene_exit_confirm');
            global.logger.info('探索场景：确认退出');
            global.state.tansuo.findCount = 0;
        }
    }
}
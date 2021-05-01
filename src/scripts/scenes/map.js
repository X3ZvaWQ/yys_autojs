import { Scene } from './scene';

export class Map extends Scene{
    constructor() {
        super();
        this.scene_name = 'map'
        this.judge_colors = ['map_interface'];
        this.colors = {
            "map_interface": {
                "region":[56,912,165,166],
                "desc":"地图界面判定，取点右上方的体力和突破券",
                "first":"#f7e63c",
                "colors":[[2,2,"#893478"],[7,6,"#a49360"],[9,-1,"#85410e"],[17,8,"#c1a270"],[16,8,"#e4d6ab"],[19,10,"#925f1b"],[23,12,"#835c28"],[28,11,"#f3e7bc"],[31,15,"#8d5a27"]]
            },
            "tansuo_award": {
                "region":[6,124,193,877],
                "desc":"探索结束之后地图上出现的宝箱",
                "first":"#bb4422",
                "colors":[[4,-2,"#50272c"],[9,-2,"#44222e"],[10,0,"#672a27"],[10,1,"#8e3319"],[11,1,"#983d23"],[14,1,"#b54f2d"],[17,-1,"#c24b29"],[34,0,"#c3431c"],[37,-1,"#d27d39"]]
            },
        };
        this.buttons = {
            "map_return": {
                "center": [86, 86], 
                "offset": [50, 50],
                "desc": "地图左上方返回庭院按钮"
            },
            "map_juexing": {
                "center": [140, 990],
                "offset": [60, 50],
                "desc": "地图界面 觉醒按钮"
            },
            "map_yuhun": {
                "center": [300, 990],
                "offset": [60, 50],
                "desc": "地图界面 御魂按钮"
            },
            "map_tupo": {
                "center": [465, 990],
                "offset": [60, 50],
                "desc": "地图界面 结界突破按钮"
            },
            "map_yuling": {
                "center": [630, 990],
                "offset": [60, 50],
                "desc": "地图界面 御灵按钮"
            },
            "map_digui": {
                "center": [1290, 1000],
                "offset": [60, 50],
                "desc": "地图界面 地域鬼王按钮"
            },
            "map_tansuo_1": {
                "center": [1730, 371],
                "offset": [100, 25],
                "desc": "地图界面 右边探索关卡 第1个"
            },
            "map_tansuo_2": {
                "center": [1730, 550],
                "offset": [100, 25],
                "desc": "地图界面 右边探索关卡 第2个"
            },
            "map_tansuo_3": {
                "center": [1730, 730],
                "offset": [100, 25],
                "desc": "地图界面 右边探索关卡 第3个"
            },
            "map_tansuo_4": {
                "center": [1730, 903],
                "offset": [100, 25],
                "desc": "地图界面 右边探索关卡 第4个"
            },
        }
    }

    checkTupoTicket() {
        global.logger.verbose('检查当前突破券数量');
        let img = images.clip(this.screenshot, 1111, 23, 112, 41);
        global.logger.verbose('尝试ocr读取突破券数量');
        let number = global.ocr.recognize(img).replace(/(\d\d)730/, '$1/30').replace(/(\d+)\/30/, '$1');
        global.logger.verbose('收到服务器ocr响应结束，结果是:' + number);
        return parseInt(number);
    }

    tansuoScrollTo(to) {
        if (to == global.state.tansuo.last) return;
        global.automator.swipe([1850, 968], [1850, 335], undefined, undefined, random(100, 200));
        sleep(200);
        global.automator.swipe([1850, 968], [1850, 335], undefined, undefined, random(100, 200));
        sleep(200);
        global.automator.swipe([1850, 968], [1850, 335], undefined, undefined, random(100, 200));
        sleep(200);
        let from = global.state.tansuo.setting.max;
        while (from != to) {
            if (from > to) {
                let step = from - to > 3 ? 3 : from - to;
                global.automator.swipe([1871, 351], [1872, 351 + 134 * step], [0,0], [0,0], 600);
                sleep(random(1000, 1500));
                from -= step;
            }
            if (from < to) {
                let step = to - from;
                global.automator.swipe([1871, 884 - 134 * step], [1872, 884], [0,0], [0,0], 300);
                sleep(random(1000, 1500));
                from += step;
            }
        }
        if (from == to) {
            global.state.tansuo.last = to;
            return;
        }
    }

    openTanSuo(level) {
        logger.info('尝试前往：探索第' + level + '章');
        if (level < 4) {
            this.tansuoScrollTo(4);
            sleep(800);
            this.clickButton('map_tansuo_' + level);
            global.state.tansuo.level = level;
        } else {
            this.tansuoScrollTo(level);
            sleep(800);
            this.clickButton('map_tansuo_4');
            global.state.tansuo.level = level;
        }
    }

    execute() {
        if (this.timeTo('digui')) {
            this.clickButton('map_digui');
            global.logger.info('地图：准备地鬼/封魔日常');
            return;
        }
        if(this.timeTo('fengmo')) {
            this.clickButton('map_return');
            global.logger.info('地图：回庭院 准备封魔');
            return;
        }
        if (this.timeTo('jiyang')) {
            this.clickButton('map_return');
            global.logger.info('地图：回庭院 准备寄养');
            return;
        }
        if (this.checkTupoTicket() > global.state.tupo.geren_fight_min_ticket && Date.now() > global.state.tupo.refresh_time) {
            global.logger.info('地图：突破券积攒超过阈值，进入个人突破');
            this.clickButton('map_tupo');
            return;
        }
        if (this.timeTo('liaotu')) {
            global.logger.info('地图：寮突破冷却的差不多了，进入突破');
            this.clickButton('map_tupo');
            return;
        }
        if (this.clickIfColorsExist('tansuo_award')) return;
        if (Object.keys(global.state.tansuo.setting.list).length != 0) {
            let tansuolevel = Object.keys(global.state.tansuo.setting.list)[0];
            global.state.tansuo.target = tansuolevel;
            this.openTanSuo(tansuolevel);
            return;
        }
        global.logger.info('地图：没事干了，回庭院挂机！');
        this.clickButton('map_return');
    }
}
import { Scene } from './scene';

export class Digui extends Scene {
    constructor() {
        super();
        this.scene_name = 'digui';
        this.judge_colors = ['digui_interface', 'digui_map_dark', 'digui_prepare_interface', 'digui_share'];
        this.colors = {
            "digui_interface": {
                "region":[731,2,496,97],
                "desc":"地域鬼王 上头那几个大字（",
                "first":"#dfbd57",
                "colors":[[4,17,"#5c3a15"],[-1,17,"#af7c30"],[-1,18,"#7c4a1b"],[-1,21,"#cc9933"],[-169,-15,"#302523"],[-165,10,"#2f291e"],[-82,-7,"#2f2523"],[-85,20,"#2f2e1a"],[-221,8,"#2e271f"]]
            },
            "digui_fight_button": {
                "region":[1205,9,704,982],
                "desc":"地域鬼王 挑战 亮着的 能挑战的",
                "first":"#44170c",
                "colors":[[-1,-7,"#f7d88c"],[8,-7,"#f7e691"],[8,-10,"#decc77"],[9,-14,"#ebcc88"],[9,1,"#c6a460"],[13,2,"#491805"],[13,5,"#f1dc7c"],[7,7,"#e4c266"],[-7,6,"#620810"]]
            },
            "digui_map_dark": {
                "region":[1618,9,287,140],
                "desc":"点了热门之后界面有个蒙版，背景是黑的无法判断界面",
                "first":"#945a5a",
                "colors":[[5,-4,"#6d4442"],[7,-5,"#9a9a96"],[12,-4,"#704040"],[12,-10,"#663636"],[-5,-15,"#8f4f55"],[-2,-11,"#491e20"],[-13,-3,"#94948b"],[-14,-5,"#603d39"],[-7,9,"#6f3c38"]]
            },
            "digui_prepare_interface": {
                "region":[58,199,132,225],
                "desc":"地域鬼王准备阶段的判定点",
                "first":"#e3af75",
                "colors":[[3,0,"#292621"],[7,6,"#e5af74"],[12,8,"#a48057"],[13,8,"#ca9c68"],[14,8,"#e1ad72"],[19,11,"#272420"],[10,47,"#a88359"],[9,47,"#483c2f"],[8,47,"#2e2923"]]
            },
            "digui_damo_common": {
                "region":[793,913,738,147],
                "desc":"地鬼，第一个达摩，还没打",
                "first":"#b9b9a8",
                "colors":[[4,1,"#1e0809"],[7,2,"#6e0c1b"],[9,3,"#831c21"],[11,3,"#903d45"],[12,4,"#8f4b5b"],[14,5,"#2a0806"],[17,6,"#191813"],[24,8,"#222018"],[30,3,"#222019"]]
            },
            "digui_damo_end_1": {
                "region":[828,916,233,145],
                "desc":"地鬼，第一个达摩，领完奖励了",
                "first":"#68cefc",
                "colors":[[0,-4,"#301614"],[-4,-4,"#fad555"],[7,16,"#fdd5a2"],[54,13,"#d5a92b"],[30,-12,"#413b34"],[27,-16,"#a99876"],[30,-18,"#e7d6c5"],[33,-16,"#f6e9d8"],[10,20,"#b64319"]]
            },
            "digui_damo_end_2": {
                "region":[1017,915,233,145],
                "desc":"地鬼，第二个达摩，领完奖励了",
                "first":"#68cefc",
                "colors":[[0,-4,"#301614"],[-4,-4,"#fad555"],[7,16,"#fdd5a2"],[54,13,"#d5a92b"],[30,-12,"#413b34"],[27,-16,"#a99876"],[30,-18,"#e7d6c5"],[33,-16,"#f6e9d8"],[10,20,"#b64319"]]
            },
            "digui_damo_end_3": {
                "region":[1356,913,181,154],
                "desc":"地鬼，第三个达摩，领完奖励了",
                "first":"#911a09",
                "colors":[[0,5,"#f3c18e"],[-5,8,"#b8451b"],[14,-16,"#e0cfad"],[10,-12,"#f9c652"],[6,-9,"#335588"],[-15,-10,"#67bcef"],[-18,-7,"#85c3ee"],[-20,-5,"#3e82b5"],[-23,-9,"#fbd77e"]]
            },
            "digui_share": {
                "region":[788,990,184,59],
                "desc":"地鬼 分享界面",
                "first":"#f5f0dd",
                "colors":[[7,1,"#2d231a"],[19,4,"#714738"],[31,-2,"#c2bcab"],[29,12,"#a9a293"],[36,11,"#291d13"],[40,1,"#c9c3b2"],[46,4,"#231910"],[53,9,"#6e4637"],[67,4,"#beb8a8"]]
            }
        };
        this.buttons = {
            "digui_filter": {
                "center": [1700, 70],
                "offset": [30, 30],
                "desc": "地域鬼王 右上角 筛选按钮"
            },
            "digui_hot": {
                "center": [1822, 686],
                "offset": [30, 80],
                "desc": "地域鬼王筛选按钮之后的热门"
            },
            "digui_prepare_exit": {
                "center": [1737, 109],
                "offset": [25, 25],
                "desc": "地域鬼王准备页面 右上角 退出准备界面"
            },
            "digui_share": {
                "center": [1708, 627],
                "offset": [40, 40],
                "desc": "地域鬼王准备页面 分享按钮"
            },
            "digui_fight": {
                "center": [1700, 800],
                "offset": [80, 80],
                "desc": "地域鬼王点挑战"
            },
            "digui_exit": {
                "center": [106, 90],
                "offset": [30, 30],
                "desc": "地域鬼王退出"
            },
            "digui_award1": {
                "center": [913, 997],
                "offset": [40, 40],
                "desc": "地域鬼王奖励，第一个达摩"
            },
            "digui_award2": {
                "center": [1137, 997],
                "offset": [40, 40],
                "desc": "地域鬼王奖励，第二个达摩"
            },
            "digui_award3": {
                "center": [1446, 997],
                "offset": [30, 30],
                "desc": "地域鬼王奖励，第三个达摩"
            },
            "digui_share_wx": {
                "center": [1668, 1008],
                "offset": [30, 30],
                "desc": "地域鬼王分享，微信"
            },
            "digui_share_return": {
                "center": [87, 90],
                "offset": [30, 30],
                "desc": "地域鬼王分享，退出"
            }
        }
    }

    execute() {
        //地域鬼王地图
        if(this.match_tag == 'digui_interface') {
            if (this.timeTo('digui')) {
                this.clickButton('digui_filter');
                sleep(1200);
                this.clickButton('digui_hot');
                return;
            } else {
                this.clickButton('digui_exit');
                global.logger.info('地域鬼王：击杀结束，退出界面');
                return;
            }
        }

        //地域鬼王 热门
        if(this.match_tag == 'digui_map_dark') {
            if (this.clickIfColorsExist('digui_fight_button')) {
                return;
            };
            this.clickButton('digui_exit');
            return;
        }

        //地域鬼王 战斗准备界面
        if(this.match_tag == 'digui_prepare_interface') {
            if(!this.findColors('digui_damo_end_1')) {
                sleep(3000);
                this.updateCapture();
            }
            if (this.findColors('digui_damo_common') != null) {
                global.automator.swipe([644, 445], [644 - 460, 445], [0,0], [0, 30]);
                sleep(200);
                this.clickButton('digui_fight');
                global.logger.info('地域鬼王：开始战斗');
                global.state.global.fighting = 'digui';
                return;
            } else if (this.findColors('digui_damo_end_3') != null) {
                global.state.digui.last_kill_digui = Date.now();
                if(this.timeTo('diguiShare')){
                    this.clickButton('digui_share');
                    global.logger.info('地域鬼王：准备每周分享');
                    return;
                }
                this.clickButton('digui_prepare_exit');
                global.logger.info('地域鬼王：击杀结束，退出界面');
                return;
            } else {
                if (this.findColors('digui_damo_end_1') == null) {
                    this.clickButton('digui_award1');
                    global.logger.info('地域鬼王：领取第一个奖励');
                    return;
                }
                if (this.findColors('digui_damo_end_2') == null) {
                    this.clickButton('digui_award2');
                    global.logger.info('地域鬼王：领取第二个奖励');
                    return;
                }
                if (this.findColors('digui_damo_end_3') == null) {
                    this.clickButton('digui_award3');
                    global.logger.info('地域鬼王：领取第三个奖励');
                    return;
                }
            }
        }

        //地域鬼王， 分享
        if(this.match_tag == 'digui_share') {
            if(!this.timeTo('diguiShare')) {
                this.clickButton('digui_share_return');
                global.logger.info('地域鬼王：分享结束，返回');
            }else{
                sleep(1000);
                this.clickButton('digui_share_wx');
                global.logger.info('地域鬼王：默认使用微信分享');
                global.state.digui.last_share_digui = Date.now();
                sleep(5000);
            }
        }
    }
}
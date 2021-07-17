import { Scene } from './scene';

export class Onmyoryou extends Scene {
    constructor() {
        super();
        this.scene_name = 'jiejie';
        this.judge_colors = [
            'onmyoryou',
            'onmyoryou_shenshe',
            'onmyoryou_map',
            'jiejie',
            'jiejie_tilishihe',
            'jiejie_feed',
            'jiejie_jiyang_select',
            'onmyoryou_map_shouliezhan',
            'yinjie_prepare',
            'onmyoryou_caiban'
        ];
        this.colors = {
            "onmyoryou": {
                "region": [165, 710, 561, 181],
                "desc": "阴阳寮界面判定",
                "first": "#fae8a8",
                "colors": [[3, -1, "#8d5a27"], [10, -1, "#fbd984"], [14, -1, "#996644"], [263, -1, "#ddcccc"], [263, -4, "#736464"], [265, -8, "#665555"], [-2, 91, "#ebd5b3"], [-4, 89, "#cc7733"], [6, 84, "#633a29"]]
            },
            "jiejie": {
                "region": [205, 645, 193, 190],
                "desc": "结界界面判定，通过小白头顶的结界换肤按钮判断",
                "first": "#fde5f6",
                "colors": [[5, -8, "#10100c"], [6, 22, "#080807"], [4, 23, "#837077"], [1, 23, "#f6c4cf"], [-5, 23, "#c02727"], [-20, 22, "#0e0d09"], [24, 22, "#070606"], [23, 17, "#ecd6e1"], [25, 16, "#6a4f55"]]
            },
            "jiejie_feed": {
                "region": [114, 29, 287, 86],
                "desc": "式神育成界面",
                "first": "#f8f3e0",
                "colors": [[5, -5, "#2d241e"], [5, -8, "#a0998c"], [9, -5, "#f6f1de"], [38, -8, "#2e251f"], [40, -5, "#eae5d3"], [41, -3, "#a09a8c"], [44, 5, "#f8f3e0"], [75, 7, "#eae5d3"], [73, 7, "#c1bbac"]]
            },
            "jiejie_jiyang": {
                "region": [767, 160, 282, 187],
                "desc": "结界寄养 式神回来了的标记",
                "first": "#ffc210",
                "colors": [[0, -2, "#cc9720"], [0, -3, "#7b5d1c"], [0, -4, "#463513"], [2, -4, "#cc9720"], [1, -9, "#694d14"], [1, -10, "#9a7217"], [1, -11, "#bf901a"], [1, -12, "#d6a51d"], [-3, 14, "#252422"]]
            },
            "jiejie_tilishihe_tip": {
                "region": [1166, 604, 304, 175],
                "desc": "结界 体力食盒 可以领的提示",
                "first": "#832f16",
                "colors": [[0, 4, "#c34c2a"], [2, 9, "#d1581a"], [-1, 8, "#db642a"], [-3, 10, "#ba3707"], [-4, 10, "#ec7037"], [-9, 9, "#882b11"], [-9, 2, "#852e18"], [-9, -3, "#8e3917"], [-6, -5, "#250e0e"]]
            },
            "jiejie_tilishihe_tip_1": {
                "region": [1188, 622, 144, 137],
                "desc": "结界 体力食盒 可以领的提示",
                "first": "#cc2a22",
                "colors": [[-1, 0, "#d8522e"], [-1, -1, "#db7031"], [-2, -1, "#dc7132"], [-2, -2, "#d63d2c"], [-3, -3, "#be2c15"], [-3, -4, "#c04c1b"], [-4, -4, "#d15524"], [-5, -5, "#c74d1d"], [-6, -6, "#be4b21"]]
            },
            "jiejie_tilishihe": {
                "region": [833, 695, 288, 180],
                "desc": "结界体力食盒界面的判断",
                "first": "#2b1a0d",
                "colors": [[-8, 0, "#f8f3e0"], [-8, -2, "#b5ae9e"], [-8, -3, "#766e61"], [-8, -4, "#352b21"], [-5, -36, "#7b3018"], [-8, -37, "#8d4022"], [-8, -46, "#fc943f"], [-5, -70, "#cc2122"], [-12, -67, "#fe8f3c"]]
            },
            "jiejie_jiyang_null": {
                "region": [1675, 39, 204, 190],
                "desc": "寄养为空的时候",
                "first": "#cac4b1",
                "colors": [[-3, 1, "#25251e"], [-2, 1, "#8c8779"], [-10, 1, "#282421"], [-12, 1, "#aea999"], [-13, 1, "#cac4b1"], [-13, 3, "#484742"], [-13, 4, "#252520"], [-14, 18, "#bbb3a3"], [-13, 19, "#aba392"], [-12, 20, "#948e80"], [-9, 16, "#282420"]]
            },
            "jiejie_jiyang_select": {
                "region": [1128, 247, 225, 84],
                "desc": "选择结界卡的界面",
                "first": "#b17937",
                "colors": [[0, -2, "#6a4d2b"], [1, -4, "#2b2621"], [-3, -7, "#98652f"], [-2, -8, "#594126"], [-1, -10, "#272420"], [26, -4, "#9d6830"], [27, -2, "#2b2621"], [28, -1, "#272420"], [-24, 3, "#ae7637"]]
            },
            "jiejie_feed_other": {
                "region": [709, 4, 451, 150],
                "desc": "判断是不是在别人的结界里",
                "first": "#151210",
                "colors": [[0, -1, "#25201b"], [2, -4, "#18130e"], [2, -9, "#241c18"], [-50, 11, "#130c0a"], [-41, 20, "#0e0a07"], [0, 17, "#0b0806"], [60, 12, "#15100b"], [158, -2, "#1c1712"], [-129, -2, "#1d1813"]]
            },
            "jiejie_feed_own": {
                "region": [1592, 81, 57, 149],
                "desc": "判断是不是在别ziji的结界里",
                "first": "#f0f0ef",
                "colors": [[0, -6, "#5f5851"], [-4, -9, "#9b9692"], [-5, -10, "#f1f0f0"], [-12, -11, "#87817c"], [-12, -7, "#f3f2f2"], [-2, 14, "#2a1a10"], [-2, 18, "#e4e3e2"], [-2, 20, "#5c544e"], [-5, 30, "#2c231a"], [-9, 28, "#f8f7f7"], [-17, 37, "#30261e"]]
            },
            "award": {
                "region": [450, 228, 1069, 571],
                "desc": "通用获得奖励",
                "first": "#ebdba4",
                "colors": [[3, 0, "#876532"], [23, 0, "#eeeebb"], [32, 2, "#70511e"], [34, -6, "#f9eec5"], [30, 49, "#d9c37d"], [43, 52, "#663311"], [65, 95, "#663812"], [43, 61, "#d2c17d"], [-2, 44, "#70653d"]]
            },
            "onmyoryou_map": {
                "region": [6, 842, 283, 229],
                "desc": "阴阳寮地图",
                "first": "#e57777",
                "colors": [[3, -1, "#af6f6f"], [3, -2, "#b39292"], [4, -4, "#d2c1c1"], [-2, -17, "#c5beb4"], [-5, -20, "#a59d95"], [-25, -30, "#6ca0a4"], [-35, -31, "#f0dfc8"], [-39, -31, "#f0df9f"], [-34, -23, "#ccbbcc"]]
            },
            "onmyoryou_shenshe": {
                "region": [1739, 526, 120, 174],
                "desc": "阴阳寮神社",
                "first": "#c6713e",
                "colors": [[0, 3, "#dba864"], [0, 6, "#cf7e4a"], [5, 6, "#e3bd7a"], [7, 19, "#ffeedb"], [4, 21, "#af6a41"], [4, 28, "#ae6940"], [-3, 49, "#d17d4a"], [-5, 74, "#b4683a"], [-10, 76, "#feedda"], [-12, 79, "#ab6236"], [-6, 89, "#a75e33"]]
            },
            "onmyoryou_shenshe_shouliezhan": {
                "region": [168, 124, 1561, 849],
                "desc": "神社 狩猎战图标",
                "first": "#ddd7dd",
                "colors": [[4, 0, "#412031"], [9, -2, "#897878"], [14, -6, "#f7efef"], [1, -26, "#ffbfa5"], [-7, -26, "#e18372"], [-9, -23, "#fa9483"], [-14, -19, "#fffcf8"], [-19, -14, "#a77485"], [-28, -10, "#cc6756"]]
            },
            "onmyoryou_shenshe_shouliezhan_2": {
                "region": [134, 101, 1614, 903],
                "desc": "",
                "first": "#8c697a",
                "colors": [[0, -2, "#714f5f"], [0, -4, "#a06f70"], [0, -7, "#fcd4b3"], [10, -5, "#482434"], [20, -9, "#faf5f5"], [20, -5, "#b79898"], [-6, 38, "#8e7384"], [-9, 36, "#332233"], [-37, 40, "#eee6d2"]]
            },
            "onmyoryou_shenshe_caiban": {
                "region": [134, 101, 1614, 903],
                "desc": "",
                "first": "#f9c671",
                "colors": [[1, 2, "#ffb039"], [2, 0, "#f9a835"], [7, 0, "#ef9a12"], [16, 7, "#772299"], [47, 7, "#f2dede"], [47, 3, "#831e2e"], [44, 2, "#090000"], [-43, 2, "#f6d5b7"]]
            },
            "onmyoryou_shenshe_caiban_2": {
                "region": [168, 124, 1561, 849],
                "desc": "神社 采办图标",
                "first": "#fed26d",
                "colors": [[-1, -3, "#7d28b0"], [6, 9, "#9c4699"], [12, -2, "#f09c14"], [15, 0, "#ffd35c"], [23, -2, "#671489"], [26, -11, "#ffd27d"], [43, -7, "#fcfaf5"], [41, 13, "#642c2c"], [36, 11, "#f4d2d2"], [10, 46, "#fce3bb"]]
            },
            "onmyoryou_map_shouliezhan": {
                "region": [701, 4, 553, 96],
                "desc": "狩猎战的地图界面",
                "first": "#324164",
                "colors": [[6, 2, "#f5f5f8"], [17, 4, "#3d4771"], [74, 15, "#536485"], [82, 30, "#6a7393"], [134, 17, "#dddfe4"], [143, 16, "#515b7d"], [179, 13, "#eee0b1"], [188, 1, "#f2d9a7"], [198, 27, "#feecca"], [245, 27, "#959485"], [242, 33, "#f2f1cf"], [311, 13, "#e8ddae"]]
            },
            "yinjie_prepare": {
                "region": [739, 54, 446, 77],
                "desc": "阴界之门准备界面",
                "first": "#f6f1de",
                "colors": [[2, 3, "#3a3126"], [5, 5, "#eee8d6"], [12, 12, "#22180f"], [17, 15, "#ebe6d4"], [24, 17, "#22180f"], [31, 17, "#f8f3e0"], [45, 15, "#6a5949"], [48, 16, "#22180f"], [52, 18, "#f4eedc"], [106, 13, "#c3bdac"], [104, 18, "#2c2118"], [104, 28, "#f6f1df"], [222, 17, "#583716"], [234, 14, "#dfac46"], [237, 23, "#7c5719"]]
            },
            "onmyoryou_caiban": {
                "region": [603, 55, 708, 122],
                "desc": "阴阳寮采办",
                "first": "#f5db8b",
                "colors": [[-3, 16, "#b89650"], [7, 13, "#c8aa74"], [14, 16, "#e4c470"], [22, 41, "#b78440"], [25, 48, "#a77e33"], [56, 26, "#6c4827"], [75, 13, "#e8ca78"], [93, 32, "#bf9d4c"], [153, 30, "#5a4f26"], [179, 30, "#cea853"], [232, 32, "#b49455"], [259, 2, "#f1e08b"], [337, 17, "#765535"], [341, 25, "#5b3917"], [349, 23, "#e2c056"]]
            },
            "yinjie_kill": {
                "region": [395, 867, 362, 118],
                "desc": "",
                "first": "#2c2925",
                "colors": [[-4, 3, "#c7bdb2"], [5, 5, "#282521"], [0, 12, "#c7bdb2"], [35, 9, "#c7bdb2"], [39, 9, "#2a2622"], [45, 8, "#c7bdb2"], [88, -5, "#c7bdb2"], [83, 0, "#272420"], [132, -6, "#282521"]]
            }
        };
        this.buttons = {
            "onmyoryou_jiejie": {
                "center": [1471, 984],
                "offset": [70, 70],
                "desc": "从阴阳寮进入结界"
            },
            "onmyoryou_map": {
                "center": [1668, 984],
                "offset": [70, 70],
                "desc": "从阴阳寮进入地图"
            },
            "onmyoryou_shenshe": {
                "center": [1801, 609],
                "offset": [20, 20],
                "desc": "寮神社"
            },
            "onmyoryou_map_go": {
                "center": [78, 782],
                "offset": [30, 30],
                "desc": "前往寮的位置"
            },
            "onmyoryou_map_exit": {
                "center": [92, 95],
                "offset": [30, 30],
                "desc": "退出阴阳寮地图"
            },
            "onmyoryou_map_shouliezhan_exit": {
                "center": [120, 90],
                "offset": [30, 30],
                "desc": "退出阴阳寮狩猎战地图"
            },
            "onmyoryou_map_shouliezhan_fight": {
                "center": [1671, 975],
                "offset": [50, 50],
                "desc": "阴阳寮狩猎战 右下角"
            },
            "yinjie_go": {
                "center": [589, 930],
                "offset": [100, 30],
                "desc": "阴界之门 挑战"
            },
            "yinjie_exit": {
                "center": [1778, 112],
                "offset": [20, 20],
                "desc": "退出"
            },
            "yinjie_go_confirm": {
                "center": [1134, 647],
                "offset": [20, 20],
                "desc": "确定"
            },
            "onmyoryou_exit": {
                "center": [73, 48],
                "offset": [40, 40],
                "desc": "退出阴阳寮界面"
            },
            "jiejie_jiyang_get": {
                "center": [920, 249],
                "offset": [50, 50],
                "desc": "收取结界寄养"
            },
            "jiejie_feed": {
                "center": [920, 515],
                "offset": [20, 70],
                "desc": "点开式神育成"
            },
            "jiejie_exit": {
                "center": [63, 68],
                "offset": [40, 40],
                "desc": "退出结界界面"
            },
            "jiejie_tilishihe_max": {
                "center": [1393, 646],
                "offset": [30, 30],
                "desc": "最大体力食盒提取量"
            },
            "jiejie_tilishihe_get": {
                "center": [960, 816],
                "offset": [50, 50],
                "desc": "提取体力食盒"
            },
            "jiejie_shihe_exit": {
                "center": [1462, 243],
                "offset": [30, 30],
                "desc": "退出体力食盒/经验酒壶界面"
            },
            "jiejie_jiyang_select_first": {
                "center": [629, 333],
                "offset": [100, 30],
                "desc": "选寄养结界，点第一个牌"
            },
            "jiejie_jiyang_select_enter": {
                "center": [1233, 845],
                "offset": [100, 30],
                "desc": "选卡界面，进入结界"
            },
            "jiejie_jiyang_select_kuaqu": {
                "center": [617, 174],
                "offset": [40, 40],
                "desc": "选卡界面，跨区"
            },
            "jiejie_jiyang_select_haoyou": {
                "center": [439, 190],
                "offset": [40, 40],
                "desc": "选卡界面，好友"
            },
            "jiejie_jiyang_confirm": {
                "center": [1108, 814],
                "offset": [100, 30],
                "desc": "确定寄养"
            },
            "jiejie_to_jiyang": {
                "center": [1780, 136],
                "offset": [60, 60],
                "desc": "右上角可寄养的灯笼"
            },
            "jiejie_feed_first": {
                "center": [325, 865],
                "offset": [60, 60],
                "desc": "式神育成界面的第一个可选式神"
            },
            "jiejie_feed_exit": {
                "center": [64, 64],
                "offset": [30, 30],
                "desc": "退出式神育成界面"
            },
            "tupo_buff": {
                "center": [1251, 769],
                "offset": [30, 30],
                "desc": "结界突破勋章"
            },
            "caiban_buy_confirm": {
                "center": [961, 702],
                "offset": [80, 30],
                "desc": "确认购买"
            },
            "caiban_exit": {
                "center": [1589, 226],
                "offset": [30, 30],
                "desc": "退出采办"
            }
        }
    }

    resetJiyangSelect() {
        this.clickButton('jiejie_jiyang_select_kuaqu');
        sleep(random(800, 1200));
        this.clickButton('jiejie_jiyang_select_haoyou');
    }

    execute() {
        //阴阳寮界面
        if (this.match_tag == 'onmyoryou') {
            if (this.timeTo('liaotu_buy_buff')) {
                this.clickButton('onmyoryou_shenshe');
                global.logger.info('阴阳寮：进入寮神社');
            } else if (this.timeTo('jiyang')) {
                this.clickButton('onmyoryou_jiejie');
                global.logger.info('阴阳寮：进入结界');
            } else if (this.timeTo('liaotili')) {
                this.clickButton('onmyoryou_map');
                global.logger.info('阴阳寮：进入寮地图领体力');
            } else if (this.timeTo('yinjie')) {
                global.logger.info('阴阳寮：进入寮神社');
                this.clickButton('onmyoryou_shenshe');
                return;
            } else {
                this.clickButton('onmyoryou_exit');
                global.logger.info('阴阳寮：离开阴阳寮');
            }

            return;
        }

        if (this.match_tag == 'onmyoryou_shenshe') {
            if (this.timeTo('liaotu_buy_buff')) {
                if (this.clickIfColorsExist('onmyoryou_shenshe_caiban') || this.clickIfColorsExist('onmyoryou_shenshe_caiban_2')) {
                    global.logger.info('阴阳寮神社：进入寮内采办！')
                } else {
                    global.logger.warn('阴阳寮神社：找不到采办按钮！')
                    state.tupo.buy_buff = true;
                };
            } else if (this.timeTo('yinjie')) {
                if (this.clickIfColorsExist('onmyoryou_shenshe_shouliezhan') || this.clickIfColorsExist('onmyoryou_shenshe_shouliezhan_2')) {
                    global.logger.info('阴阳寮神社：进入狩猎战！')
                } else {
                    global.logger.warn('阴阳寮神社：找不到狩猎战按钮！')
                    state.global.last_kill_yinjie = Date.now();
                };
            } else {
                this.clickButton('onmyoryou_exit');
                global.logger.info('阴阳寮：离开阴阳寮');
            }
        }

        if (this.match_tag == 'onmyoryou_map') {
            if (!this.timeTo('liaotili')) {
                global.logger.info('阴阳寮地图：离开阴阳寮地图');
                this.clickButton('onmyoryou_map_exit');
                return;
            } else {
                global.logger.info('阴阳寮地图：前往寮的位置');
                this.clickButton('onmyoryou_map_go');
                sleep(5000);
                this.clickPoint([958, 323]);
                sleep(2000);
                this.clickPoint([1656, 446]);
                state.jiejie.last_get_liaotili = Date.now();
                return;
            }
        }

        if (this.match_tag == 'onmyoryou_map_shouliezhan') {
            if (this.timeTo('yinjie')) {
                global.logger.info('阴阳寮地图：狩猎战-前往阴界之门');
                this.clickButton('onmyoryou_map_shouliezhan_fight');
            } else {
                global.logger.info('阴阳寮地图：离开');
                this.clickButton('onmyoryou_map_shouliezhan_exit');
            }
        }

        if (this.match_tag == 'yinjie_prepare') {
            if (this.timeTo('yinjie')) {
                if (this.findColors('yinjie_kill')) {
                    state.global.last_kill_yinjie = Date.now();
                    global.logger.info('阴界之门：打过了，离开');
                    this.clickButton('yinjie_exit')
                    return;
                }
                global.logger.info('阴界之门：冲，战斗');
                this.clickButton('yinjie_go');
                sleep(random(800, 1200));
                this.clickButton('yinjie_go_confirm');
                state.team.fighting = 'yinjie';
                state.global.fighting = 'yinjie';
            } else {
                global.logger.info('阴界之门：打过了，离开');
                this.clickButton('yinjie_exit')
            }
        }

        if (this.match_tag == 'onmyoryou_caiban') {
            if (this.timeTo('liaotu_buy_buff')) {
                this.clickButton('tupo_buff');
                sleep(random(800, 1200));
                this.clickButton('caiban_buy_confirm');
                global.logger.warn('阴阳寮神社：购买突破勋章buff！')
                state.tupo.buy_buff = true;
            } else {
                this.clickButton('caiban_exit');
                global.logger.warn('阴阳寮神社：购买完毕，退出！')
            };
        }

        //结界
        if (this.match_tag == 'jiejie') {
            /* if(this.clickIfColorsExist('jiejie_tilishihe_tip_1') || this.clickIfColorsExist('jiejie_tilishihe_tip')){
                logger.info('结界：体力食盒可以领了，打开体力食盒');
                return;
            } */

            /* this.clickButton('jiejie_jiyang_get');
            sleep(random(1200, 1400));
            this.updateCapture();
            if(this.findColors('award')) {
                return;
            } */

            if (this.timeTo('jiyang')) {
                this.clickButton('jiejie_feed')
                logger.info('结界：进入式神育成，准备寄养');
                return;
            }

            this.clickButton('jiejie_exit');
            return;
        }

        //体力食盒
        if (this.match_tag == 'jiejie_tilishihe') {
            let img = images.clip(this.screenshot, 1024, 271, 184, 57);
            let tili = parseInt(global.ocr.recognize(img).replace(/(\d+)\/(\d+)/, '$1'));
            if (tili != 0) {
                this.clickButton('jiejie_tilishihe_max');
                sleep(random(200, 400));
                this.clickButton('jiejie_tilishihe_get');
                global.logger.info('体力食盒：收取体力食盒, 可收取体力：' + tili);
                return;
            } else {
                this.clickButton('jiejie_shihe_exit');
                global.logger.info('体力食盒：没体力可以领，退出体力食盒');
            }
            return;
        }

        //寄养
        if (this.match_tag == 'jiejie_feed') {
            if (this.findColors('jiejie_feed_own')) {
                sleep(random(1200, 1400))
                if (this.findColors('jiejie_jiyang_null')) {
                    global.logger.info('寄养，冲！');
                    this.clickButton('jiejie_to_jiyang')
                    sleep(2000);
                    return;
                } else {
                    if (state.jiejie.jiyang_end < Date.now()) {
                        state.jiejie.jiyang_end = Date.now() + 30 * 60 * 1000;
                        //这里由于不清楚多久能寄养结束，那个数字的位置很难OCR，就只好30分钟后再来看看了 
                        global.logger.info('寄养：不清楚您的寄养多久结束，30分钟后再回来看看');
                        this.clickButton('jiejie_feed_exit');
                        return;
                    } else {
                        global.logger.info('寄养：下一轮寄养将会在 ' + (state.jiejie.jiyang_end - Date.now()) / 1000 + ' 秒后继续');
                        this.clickButton('jiejie_feed_exit');
                        return;
                    }
                }
            } else {
                sleep(random(1200, 1400))
                global.logger.info('寄养：自动寄养第一个式神！');
                this.clickButton('jiejie_feed_first');
                sleep(random(1200, 1400))
                global.logger.info('寄养：确认寄养');
                this.clickButton('jiejie_jiyang_confirm');
                sleep(random(1200, 1400));
                state.jiejie.jiyang_end = Date.now() + 6 * 60 * 60 * 1000;
                this.clickButton('jiejie_exit');
                sleep(random(1200, 1400));
                this.clickButton('jiejie_exit');
                global.logger.info('寄养：离开好友的结界');
                return;
            }
            return;
        }

        //选卡
        if (this.match_tag == 'jiejie_jiyang_select') {
            let award_images = images.clip(this.screenshot, 1146, 633, 189, 40);
            let award = global.ocr.recognize(award_images);
            logger.info('寄养：识别奖励' + award);
            let award_arr = [award.match(/体力\+(\d+)/), award.match(/勾玉\+(\d+)/)];
            if (state.jiejie.jiyang_try_times == 20) {
                this.resetJiyangSelect()
                state.jiejie.jiyang_try_times += 1;
                return;
            }
            if (state.jiejie.jiyang_force >= 30) {
                this.resetJiyangSelect()
                sleep(1000);
                this.clickButton('jiejie_jiyang_select_enter');
                global.logger.info('寄养：没啥能选的了，直接第一个吧');
                state.jiejie.jiyang_try_times = 0;
                sleep(2000);
                return;
            } else if (state.jiejie.jiyang_try_times <= 20 && award_arr[0] != null && award_arr[0][1] >= state.jiejie.min_jiyang_tili_1
                || state.jiejie.jiyang_try_times > 20 && award_arr[0] != null && award_arr[0][1] >= state.jiejie.min_jiyang_tili_2) {
                this.clickButton('jiejie_jiyang_select_enter');
                global.logger.info('寄养：发现体力结界卡, 尝试进入');
                state.jiejie.jiyang_try_times = 0;
                sleep(2000);
                return;
            } else if (state.jiejie.jiyang_try_times <= 20 && award_arr[1] != null && award_arr[1][1] >= state.jiejie.min_jiyang_gouyu_1
                || state.jiejie.jiyang_try_times > 20 && award_arr[1] != null && award_arr[1][1] >= state.jiejie.min_jiyang_gouyu_2) {
                this.clickButton('jiejie_jiyang_select_enter');
                global.logger.info('寄养：发现勾玉结界卡, 尝试进入');
                state.jiejie.jiyang_try_times = 0;
                sleep(2000);
                return;
            }
            state.jiejie.jiyang_try_times += 1;
            global.automator.swipe([614, 530], [614, 380], [50, 0], [50, 0]);
            this.clickButton('jiejie_jiyang_select_first');
            sleep(400);
            return;
        }
    }

}
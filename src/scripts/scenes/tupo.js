import { Scene } from './scene';

export class TuPo extends Scene {
    constructor() {
        super();
        this.scene_name = 'tupo'
        this.judge_colors = [
            'tupo_geren_interface',
            'tupo_fight_confirm',
            'tupo_fight_confirm_2',
            'tupo_geren_refresh_confirm',
            'tupo_liao_interface'
        ];
        this.colors = {
            "tupo_geren_interface": {
                "region": [1729, 117, 187, 648],
                "desc": "个人突破界面判断",
                "first": "#9c591e",
                "colors": [[0, -3, "#d2b795"], [-1, -4, "#f5efdb"], [-2, 4, "#cba277"], [0, 6, "#f5edd8"], [-3, 19, "#c27a36"], [-2, 21, "#deb487"], [-1, 23, "#f4e8d0"], [0, 47, "#c57830"], [-1, 46, "#e5c59d"]]
            },
            "tupo_liao_interface": {
                "region": [1743, 120, 162, 645],
                "desc": "寮突破界面判断",
                "first": "#eee6d1",
                "colors": [[1, 2, "#9e7855"], [3, 5, "#844d1f"], [6, 9, "#efe6d0"], [7, 14, "#b48150"], [7, 15, "#a5662c"], [9, 32, "#bc6718"], [8, 36, "#f7f1de"], [10, 38, "#cf8e4e"], [8, 77, "#a76629"]]
            },
            "tupo_liao_close": {
                "region": [971, 257, 344, 356],
                "desc": "寮突破，会长未选择阴阳寮",
                "first": "#b3b3b3",
                "colors": [[-4, -5, "#050505"], [-8, -24, "#9b9b9b"], [-8, -7, "#bababa"], [-12, -9, "#020202"], [-20, -5, "#cacaca"], [-18, 4, "#393939"]]
            },
            "tupo_medal_0": {
                "region": [16, 46, 1893, 1004],
                "desc": "突破 0 勋章",
                "first": "#dacebc",
                "colors": [[76, 15, "#dacebc"], [81, 23, "#ae968a"], [92, 46, "#c9b6a5"], [14, 16, "#dacebc"], [21, 23, "#ae9689"], [34, 47, "#c9b6a5"], [-42, 15, "#dacebc"], [-24, 19, "#a99783"], [-21, 48, "#c9b6a5"], [-106, 17, "#daccbc"], [-81, 19, "#aa9885"], [-82, 47, "#c9b6a5"], [-166, 13, "#daccbc"], [-144, 19, "#a99683"], [-138, 45, "#c9b4a4"], [124, -70, "#dacbbc"], [151, -47, "#dacdbc"]]
            },
            "tupo_medal_1": {
                "region": [16, 46, 1893, 1004],
                "desc": "突破 1 勋章",
                "first": "#dacebc",
                "colors": [[68, 17, "#dacebc"], [85, 24, "#b5a393"], [84, 45, "#c9b6a5"], [4, 17, "#dacebc"], [30, 24, "#b49f90"], [28, 47, "#c9b6a5"], [-55, 14, "#dacebc"], [-31, 23, "#ae9b8a"], [-31, 54, "#c9b6a5"], [-112, 17, "#daccbc"], [-87, 25, "#b7a193"], [-91, 46, "#c9b6a5"], [-173, 21, "#d9cbbb"], [-142, 22, "#c4574b"], [-149, 54, "#e7e1dd"], [94, -59, "#dacebc"], [137, -32, "#dacebc"]]
            },
            "tupo_medal_2": {
                "region": [25, 10, 1869, 1046],
                "desc": "突破 2 勋章",
                "first": "#dacebc",
                "colors": [[65, 20, "#dacebc"], [80, 28, "#baa999"], [62, 41, "#bcab97"], [14, 27, "#b1a092"], [22, 48, "#c9b6a5"], [-2, 44, "#a99887"], [-29, 27, "#b7a193"], [-37, 50, "#c9b6a5"], [-66, 57, "#a05046"], [-99, 48, "#ded9d4"], [-156, 51, "#908a86"], [-149, 24, "#b4564a"], [-183, 61, "#935346"], [102, -63, "#daccbc"], [135, -38, "#dacebc"]]
            },
            "tupo_medal_3": {
                "region": [6, 9, 1904, 1065],
                "desc": "突破 3 勋章",
                "first": "#dacebc",
                "colors": [[86, 18, "#dacebc"], [86, 34, "#ac9b8c"], [104, 25, "#a99783"], [96, 42, "#c7b6a5"], [48, 41, "#c9b6a5"], [36, 51, "#c9b6a5"], [34, 30, "#b3a091"], [17, 58, "#9a6150"], [-7, 60, "#e7e2dd"], [-47, 28, "#945443"], [-68, 48, "#dbd6d1"], [-124, 27, "#b65343"], [-140, 52, "#e1dbd7"], [136, -60, "#dacdbc"], [164, -29, "#daccbc"]]
            },
            "tupo_medal_4": {
                "region": [16, 46, 1893, 1004],
                "desc": "突破 4 勋章",
                "first": "#dacebc",
                "colors": [[97, 19, "#dfd4b9"], [95, 21, "#d3bea4"], [95, 23, "#aa9884"], [95, 41, "#c7b6a4"], [5, 16, "#dacebc"], [33, 23, "#c05a49"], [-54, 20, "#dacebc"], [-27, 22, "#bc5543"], [-116, 20, "#daccbc"], [-83, 22, "#c25647"], [-177, 19, "#daccbc"], [-143, 22, "#bf5644"], [107, -64, "#daccbc"], [143, -38, "#dacdbc"]]
            },
            "tupo_medal_5": {
                "region": [33, 39, 1845, 1022],
                "desc": "突破 5 勋章",
                "first": "#dacebc",
                "colors": [[-3, 21, "#dacebc"], [25, 19, "#ba5745"], [-62, 22, "#dacebc"], [-34, 20, "#a84c40"], [-123, 24, "#d9cdbb"], [-89, 20, "#bf5545"], [-179, 20, "#d9cbbc"], [-149, 20, "#be5543"], [-243, 24, "#dacbbc"], [-208, 20, "#bf5544"], [74, -65, "#dacdbc"]]
            },
            "tupo_medal_5_gua": {
                "region": [198, 196, 1518, 625],
                "desc": "突破 5 勋章, 呱入侵",
                "first": "#dfd9cb",
                "colors": [[52, 22, "#e2d6c4"], [54, 35, "#86827d"], [-15, 17, "#e0dacb"], [-5, 47, "#c0bbb5"], [-73, 17, "#dfdacb"], [-51, 32, "#928d88"], [-130, 18, "#dfd9cb"], [-110, 33, "#96918c"], [-198, 24, "#dfd9cb"], [-175, 49, "#e9e4e0"], [85, -40, "#bfbfaf"]]
            },
            "tupo_geren_refresh_button": {
                "region": [1424, 840, 308, 118],
                "desc": "突破 个人 刷新按钮",
                "first": "#f4b25f",
                "colors": [[-3, -1, "#d19a54"], [-4, -1, "#7d603a"], [-5, -1, "#4b3d2b"], [-6, -1, "#2b2721"], [-7, -1, "#997343"], [-18, 0, "#f2b15f"], [-20, 3, "#322c23"], [14, 1, "#e9aa5c"], [15, 0, "#6d5435"], [16, -1, "#393126"], [19, 1, "#916e41"]]
            },
            "tupo_fight_confirm": {
                "region": [34, 14, 1869, 1051],
                "desc": "突破，进攻！",
                "first": "#3d3327", "colors": [[-4, 0, "#282520"], [-4, -7, "#282520"], [-12, -5, "#2c2721"], [-8, -3, "#f4b25f"], [-13, 3, "#2c2721"], [-11, 12, "#f4b25f"], [-6, 20, "#292621"], [35, -2, "#292621"], [39, 2, "#f4b25f"]]
            },
            "tupo_fight_confirm_2": {
                "region": [35, 31, 1858, 1027],
                "desc": "",
                "first": "#f4b25f",
                "colors": [[-19, 2, "#292520"], [-19, -6, "#272420"], [-26, -4, "#2a2621"], [-28, 4, "#2d2822"], [-23, 7, "#f4b25f"], [-25, 13, "#f4b25f"], [5, 13, "#312b23"], [13, 6, "#f2b15f"], [25, 11, "#282520"]]
            },
            "tupo_geren_refresh_confirm": {
                "region": [640, 413, 641, 125],
                "desc": "个人突破刷新的确认界面",
                "first": "#272420",
                "colors": [[3, 2, "#c9b39d"], [6, 1, "#6a5f53"], [8, 2, "#4e473e"], [10, 5, "#2e2a25"], [28, 5, "#cbb59e"], [29, 6, "#b5a28d"], [30, 7, "#807264"], [32, 6, "#3a342e"], [33, 7, "#988876"]]
            },
            "tupo_geren_damo_3": {
                "region": [513, 835, 194, 120],
                "desc": "已经打了三个结界的判定",
                "first": "#f7f2df",
                "colors": [[2, -8, "#3d1a0f"], [-5, -10, "#ede8d6"], [-7, -23, "#cc501e"], [-48, -17, "#efab45"], [-48, -10, "#ffb42e"], [-60, -16, "#f79c38"], [-57, -8, "#fa992d"], [-72, -17, "#ef9a45"], [-70, -9, "#fc8f28"], [-83, -17, "#ef8934"]]
            },
            "tupo_liao_last": {
                "region": [1660, 867, 101, 102],
                "desc": "寮突破，翻到底了的判断",
                "first": "#b27f5d",
                "colors": [[3, -2, "#b2895d"]]
            },
            "tupo_liao_boom": {
                "region": [411, 502, 154, 118],
                "desc": "寮突破，已经突破",
                "first": "#473f37",
                "colors": [[18, -9, "#79150f"], [23, 1, "#ffffff"], [28, 4, "#6e2f1f"], [31, 5, "#cccccc"], [32, 7, "#fbfafa"], [34, 9, "#5e3e3e"], [35, 8, "#d4caca"], [36, 7, "#ffffff"], [45, 5, "#561717"]]
            },
            "geren_level_60": {
                "region": [240, 263, 45, 36],
                "desc": "60级",
                "first": "#595045",
                "colors": [[-1, 1, "#a9a293"], [-2, 2, "#cac4b3"], [-3, 3, "#e3decc"], [-5, 5, "#eae5d2"], [-6, 10, "#c5bfaf"], [-6, 15, "#7a7265"], [9, 6, "#d0cab9"], [10, 11, "#898173"], [11, 19, "#bdb7a7"], [14, 20, "#8e8779"], [18, 9, "#4f463b"], [20, 11, "#ccc6b5"]]
            },
            "geren_level_59": {
                "region": [239, 262, 45, 36],
                "desc": "",
                "first": "#e9e4d1",
                "colors": [[1, 1, "#90887a"], [1, 5, "#71685c"], [1, 6, "#b4ae9e"], [1, 7, "#cdc7b6"], [0, 7, "#e8e3d1"], [3, 8, "#9b9385"], [6, 8, "#ece7d5"], [18, 0, "#aca696"], [20, 0, "#7a7265"], [21, 9, "#877f72"], [24, 10, "#c6c0af"], [24, 12, "#aca595"], [23, 13, "#857e70"], [23, 15, "#ebe6d4"], [19, 15, "#291f16"], [19, 18, "#e2ddcb"]]
            },
            "geren_level_58": {
                "region":[243,263,40,34],
                "desc":"",
                "first":"#5f574b",
                "colors":[[0,2,"#c6bfaf"],[-3,2,"#cfc9b8"],[-4,2,"#e9e4d1"],[-5,9,"#e6e1cf"],[-1,10,"#9b9385"],[2,10,"#ece7d5"],[3,13,"#a0998a"],[4,13,"#ede8d5"],[16,10,"#f2edda"],[16,9,"#a49d8e"],[17,8,"#5d5449"],[20,5,"#a29b8c"],[21,5,"#e6e0ce"],[21,16,"#afa898"],[16,20,"#847c6f"],[12,18,"#d1ccba"],[11,15,"#d0cab9"],[11,5,"#b5ae9f"]]
            },
            "geren_level_57": {
                "region":[242,263,40,34],
                "desc":"",
                "first":"#ede8d5",
                "colors":[[1,-1,"#a19a8b"],[6,-2,"#867e70"],[7,-1,"#bdb6a6"],[6,8,"#e8e2d0"],[3,8,"#979081"],[-2,17,"#e0dac9"],[2,17,"#787063"],[17,1,"#d7d2c0"],[21,1,"#8c8577"],[22,6,"#817a6c"],[21,12,"#d0cab9"],[20,15,"#efe9d7"],[18,17,"#aaa394"],[25,6,"#71695c"],[26,-1,"#5e564a"]]
            }
        };
        this.buttons = {
            "tupo_exit": {
                "center": [1809, 200],
                "offset": [30, 30],
                "desc": "退出突破"
            },
            "tupo_geren": {
                "center": [1847, 430],
                "offset": [30, 100],
                "desc": "切换到个人突破"
            },
            "tupo_liao": {
                "center": [1848, 610],
                "offset": [30, 100],
                "desc": "切换到寮突破"
            },
            "tupo_liao_showcd": {
                "center": [527, 865],
                "offset": [20, 20],
                "desc": "显示寮突cd"
            },
            "tupo_geren_refresh": {
                "center": [1576, 896],
                "offset": [100, 30],
                "desc": "结界突破，刷新"
            },
            "tupo_geren_refresh_confirm": {
                "center": [1136, 648],
                "offset": [100, 30],
                "desc": "结界突破，刷新"
            },
            "fighting_victory_confirm": {
                "center": [951, 1040],
                "offset": [200, 30],
                "desc": "战斗结束的时候点屏幕继续。"
            },
        }
    }

    findTupoTarget() {
        if (this.clickIfColorsExist('tupo_medal_5_gua')) {
            global.logger.info('个人突破：找到了5勋章呱，挑战之');
            return true;
        }
        let fight_order = state.tupo.setting.geren_order.split('');
        for (let medal of fight_order) {
            if (this.clickIfColorsExist('tupo_medal_' + medal)) {
                global.logger.info('个人突破：找到了 ' + medal + ' 勋章结界，挑战之');
                state.tupo.geren_fight_clicked = false;
                return true;
            };
        }
        return false;
    }

    exitOrToLiaoTupo() {
        if (this.timeTo('liaotu')) {
            global.logger.info('个人突破：没有能打的/票没了，寮突可以打了，去打寮突');
            this.clickButton('tupo_liao');
        } else {
            global.logger.info('个人突破：没有能打的/票没了，寮突打不了，去干点别的');
            this.clickButton('tupo_exit');
        }
    }

    findLiaoTupoTarget() {
        let fight_order = state.tupo.setting.liao_order.split('');
        for (let medal of fight_order) {
            if (this.clickIfColorsExist('tupo_medal_' + medal)) {
                global.logger.info('寮突破：找到了 ' + medal + ' 勋章结界，挑战之');
                state.tupo.liao_fight_ed = true;
                return true;
            };
        }
        if (this.findColors('tupo_liao_last')) {
            if (state.tupo.liao_fight_ed) {
                state.tupo.liao_clear = Date.now();
                state.tupo.liao_fight_ed = true;
                return false;
            }
            state.tupo.liao_fight_ed = false;
            //划到最上面，再次搜索;
            global.logger.info('寮突：翻到最后了，尝试从最前面开始找');
            global.automator.swipe([1712, 915], [1712, 12], [0, 0], [0, 0]);
            return false;
        } else {
            //往下翻点;
            global.logger.info('寮突：当前没有能打的了，尝试往下面翻翻');
            global.automator.swipe([1617, 820], [1617, 380], [0, 0], [0, 0], random(1500, 1800));
            return false;
        };
    }

    getTupoTicket() {
        global.logger.verbose('检查当前突破券数量');
        let img = images.clip(this.screenshot, 1556, 31, 120, 41);
        global.logger.verbose('尝试ocr读取突破券数量');
        let number = global.ocr.recognize(img).replace(/(\d+)\/30/, '$1');
        global.logger.verbose('收到服务器ocr响应结束，结果是:' + number);
        return parseInt(number);
    }

    getLiaoTuCd() {
        this.clickButton('tupo_liao_showcd');
        this.updateCapture();
        let cd_img = images.clip(this.screenshot, 555, 775, 128, 32);
        let time = global.ocr.recognize(cd_img).split(':').map(x => parseInt(x));
        time = time[0] * 60 * 60 + time[1] * 60 + time[2];
        return time * 1000;
    }

    getLiaoTuTimes() {
        let img = images.clip(this.screenshot, 409, 846, 66, 35);
        let liaotu_times = parseInt(global.ocr.recognize(img).replace(/(\d)\/6/, '$1'));
        logger.verbose('剩余寮突次数：' + liaotu_times);
        return liaotu_times;
    }


    execute() {
        if (this.match_tag == 'tupo_geren_interface') {
            /* 先寮突破cd是否好了，好了就切换到寮突破，不然就接着个人突破 */
            if (this.timeTo('liaotu')) {
                global.logger.info('寮突cd好了，先打寮突');
                this.clickButton('tupo_liao');
                return;
            }
            if (this.getTupoTicket() == 0) {
                this.exitOrToLiaoTupo();
                return;
            }
            if(this.findColors('geren_level_57')) {
                global.logger.warn('个人突破：掉级到了57，切换到全打模式');
                state.tupo.setting.geren_mode = 'all';
            }
            if(this.findColors('geren_level_59') || this.findColors('geren_level_60')) {
                global.logger.warn('个人突破：打到了59级或者以上，切换到只打三个模式');
                state.tupo.setting.geren_mode = 'only3';
            }
            if (state.tupo.setting.geren_mode == 'only3') {
                //当个人突破是only3模式的时候检查有没有打三个
                if (this.findColors('tupo_geren_damo_3') != null) {
                    if (this.clickIfColorsExist('tupo_geren_refresh_button')) {
                        //尝试刷新
                        global.logger.info('个人突破：打够三个了，尝试刷新');
                        return;
                    } else if (this.findTupoTarget()) {
                        //刷新不了，开始掉级
                        state.tupo.geren_demotion = true;
                        return;
                    } else {
                        state.tupo.refresh_time = Date.now() + 5 * 60 * 1000;
                        //都打过了，尝试退出或者切换到寮突破
                        this.exitOrToLiaoTupo();
                        return;
                    };
                }
            }
            //尝试找能打的或者找目标
            if (!this.findTupoTarget()) {
                global.logger.info('个人突破：没有能打的了');
                if (this.clickIfColorsExist('tupo_geren_refresh_button')) {
                    global.logger.info('个人突破：尝试刷新');
                    return;
                } else {
                    global.logger.info('个人突破：刷新cd没好');
                    let refreshCd = 5 * 60 * 1000;
                    state.tupo.refresh_time = Date.now() + refreshCd;
                    this.exitOrToLiaoTupo();
                    return;
                }
            }
        }

        if (this.match_tag == 'tupo_geren_refresh_confirm') {
            this.clickButton('tupo_geren_refresh_confirm');
            global.logger.info('确认刷新结界');
        }

        if (this.match_tag == 'tupo_fight_confirm' || this.match_tag == 'tupo_fight_confirm_2') {
            if (state.tupo.geren_fight_clicked) {
                global.logger.info('突破：好像没突破券了欸');
                state.tupo.geren_fight_clicked = false;
                this.clickButton('fighting_victory_confirm');
                this.clickButton('tupo_exit');
                return;
            }
            if (this.clickIfColorsExist('tupo_fight_confirm')) {
                state.tupo.geren_fight_clicked = true;
                state.global.fighting = 'tupo';
                global.logger.info('突破：确认进攻结界');
                return;
            };
            if (this.clickIfColorsExist('tupo_fight_confirm_2')) {
                state.tupo.geren_fight_clicked = true;
                state.global.fighting = 'tupo';
                global.logger.info('突破：确认进攻结界');
                return;
            };
        }

        if (this.match_tag == 'tupo_liao_interface') {
            if (this.findColors('tupo_liao_close')) {
                state.tupo.liao_cd = Date.now() + 30 * 60 * 1000;
                logger.info('寮突还没开，半个小时后再来看看');
                this.clickButton('tupo_geren');
                return;
            }
            let liaotu_times = this.getLiaoTuTimes();
            if (liaotu_times > 0) {
                if (this.findLiaoTupoTarget()) {
                    return;
                } else {
                    if (!this.timeTo('liaotu')) {
                        global.logger.info('突破：寮突清完了， 退出突破');
                        this.clickButton('tupo_exit');
                        return;
                    }
                }
            } else {
                if (state.tupo.liao_cd > Date.now()) {
                    global.logger.info('突破：寮突将会在 ' + ((state.tupo.liao_cd - Date.now()) / 1000) + ' 秒后冷却好，到时候再来打');
                    this.clickButton('tupo_geren');
                    return;
                } else {
                    let liaotucd = this.getLiaoTuCd();
                    state.tupo.liao_cd = Date.now() + liaotucd - 30 * 1000;
                    global.logger.info('突破：寮突将会在 ' + liaotucd / 1000 + ' 秒后冷却好，到时候再来打');
                    this.clickButton('tupo_geren');
                    return;
                }
            }
        }
    }
}
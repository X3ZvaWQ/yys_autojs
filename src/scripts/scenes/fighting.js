import { Scene } from './scene';

export class Fighting extends Scene {
    constructor() {
        super();
        this.scene_name = 'fighting';
        this.judge_colors = ['fighting', 'fighting_exchange', 'fighting_exchange_dark', 'fighting_exit_confirm', 'fighting_prepare'];
        this.colors = {
            "fighting": {
                "region": [6, 3, 324, 104],
                "desc": "战斗中",
                "first": "#463827",
                "colors": [[3, 2, "#7c6b5a"], [2, 5, "#d3c2a0"], [28, 4, "#d2c2a1"], [25, 0, "#80704e"], [23, 1, "#94845a"], [22, -4, "#301e0d"], [104, 3, "#48401e"], [104, 7, "#aa8b4e"], [112, 8, "#d7c5a2"]]
            },
            "fighting_manual": {
                "region": [4, 884, 244, 192],
                "desc": "手动战斗",
                "first": "#746c5e",
                "colors": [[-17, 2, "#f2ecda"], [-23, 0, "#382d20"], [-27, -2, "#e1dcca"], [-24, -7, "#8a8273"], [-27, -5, "#f8f3e0"], [-33, -12, "#e1dbc9"], [-26, -20, "#5a5271"], [-38, 1, "#51445d"], [-42, 13, "#8a7467"]]
            },
            "fighting_exit_confirm": {
                "region": [750, 421, 410, 102],
                "desc": "",
                "first": "#cbb59e",
                "colors": [[-1, 1, "#9f8e7c"], [-1, 2, "#7b6e60"], [-1, 3, "#433d36"], [0, 4, "#342f2a"], [30, 5, "#c5b09a"], [31, 4, "#6f6457"], [32, 0, "#35312b"], [40, -2, "#2a2722"], [61, 20, "#87796a"]]
            },
            "fighting_prepare": {
                "region": [1565, 683, 344, 392],
                "desc": "战斗准备页面， 判断鼓的下面一点不变色的部分",
                "first": "#ddb47a",
                "colors": [[18, -23, "#605850"], [15, -25, "#968675"], [8, -23, "#100a05"], [2, -20, "#b18b5a"], [-38, 14, "#bf8654"], [-38, 20, "#765a3a"], [-45, 27, "#cca56e"], [-67, 28, "#f3d6a1"], [-63, 30, "#9e743d"]]
            },
            "fighting_prepare_maxlevel_2": {
                "region": [585, 299, 358, 518],
                "desc": "战斗准备的时候从左往右第二个式神的满级标记",
                "first": "#ff9f17",
                "colors": [[7, -1, "#f9a41e"], [6, 6, "#fdb914"], [13, 19, "#f3dd1a"], [6, 14, "#e7c50a"], [-1, 14, "#f6cc11"], [-12, 22, "#fbea20"], [-14, 10, "#e5b21f"], [-11, -1, "#e7a32d"]]
            },
            "fighting_prepare_maxlevel_3": {
                "region": [935, 471, 325, 353],
                "desc": "战斗准备的时候从左往右第三个式神的满级标记",
                "first": "#eca831",
                "colors": [[9, 0, "#f69f25"], [13, 3, "#b4790d"], [16, 6, "#f5b112"], [17, 15, "#f3d116"], [4, 18, "#edcc08"], [-3, 21, "#fdec20"], [-1, 18, "#c0af25"], [-3, 10, "#eab71e"], [-4, 9, "#d8a51e"]]
            },
            "fighting_exchange_maxlevel_1": {
                "region": [133, 180, 350, 381],
                "desc": "战斗准备的时候 换式神阶段 从左往右第1个式神的满级标记",
                "first": "#c68214",
                "colors": [[6, 0, "#ec9721"], [9, 1, "#fe9f19"], [12, 3, "#a6720b"], [9, 6, "#f7b31d"], [8, 14, "#facc11"], [10, 14, "#cdaf11"], [13, 15, "#bf9d04"], [17, 16, "#efcd12"], [21, 19, "#f3e216"]]
            },
            "fighting_exchange_maxlevel_2": {
                "region": [726, 148, 450, 518],
                "desc": "战斗准备的时候 换式神阶段 从左往右第2个式神的满级标记",
                "first": "#f79f23",
                "colors": [[1, 5, "#f9a819"], [7, 6, "#fab616"], [7, 13, "#e9c70c"], [0, 13, "#facc11"], [-3, 21, "#bbaa00"], [16, 18, "#b89a07"], [-4, 14, "#fcca11"], [-2, 8, "#e5a119"], [1, 0, "#fe9f19"]]
            },
            "fighting_exchange_dark": {
                "region": [20, 394, 164, 174],
                "desc": "换式神界面选择式神种类",
                "first": "#4ab0d2",
                "colors": [[6, 0, "#288eb0"], [11, 0, "#3398ca"], [5, 4, "#399fc1"], [1, 18, "#66c5dd"], [4, 23, "#77cce3"], [6, 26, "#89deef"], [33, 26, "#7ce2f3"], [34, 13, "#55bbdd"], [49, 10, "#48b1d2"]]
            },
            "fighting_exchange": {
                "region": [1352, 1001, 219, 79],
                "desc": "换式神界面判断",
                "first": "#7d5b27",
                "colors": [[-1, 1, "#8a6636"], [-2, 2, "#8f6743"], [-3, 3, "#6d4e3e"], [-4, 4, "#402011"], [-3, 5, "#533222"], [-2, 5, "#684733"], [-1, 5, "#836142"], [-6, -4, "#342718"], [-8, -1, "#7d5e21"]]
            },
            "fighting_exchange_type_all": {
                "region": [24, 918, 155, 148],
                "desc": "",
                "first": "#9e9a96",
                "colors": [[5, 9, "#221810"], [4, 16, "#ffffff"], [9, 18, "#22180f"], [8, 27, "#484038"], [41, 1, "#ffffff"], [36, 9, "#f2f1f0"], [54, 9, "#ffffff"], [57, 6, "#69625c"], [60, 18, "#241c18"]]
            },
            "fighting_exchange_type_n": {
                "region": [22, 914, 160, 153],
                "desc": "",
                "first": "#adadad",
                "colors": [[-6, -12, "#8b8b8f"], [-8, -19, "#7e7e7e"], [-8, -28, "#412f20"], [10, -15, "#414140"], [12, -2, "#313131"], [11, 19, "#e3e3e3"], [-2, 20, "#3c3c3c"], [-14, 18, "#e7e7e7"], [21, -10, "#949494"]]
            },
            "fighting_exchange_type_sucai": {
                "region": [52, 950, 105, 78],
                "desc": "",
                "first": "#282817",
                "colors": [[-4, -5, "#5cc2d9"], [-1, -16, "#192f1e"], [8, -7, "#44aacc"], [2, 7, "#87ecf8"], [9, 14, "#93e8f8"], [13, 2, "#55ccdd"], [17, 1, "#18291d"], [-20, 12, "#83d9eb"], [-20, -18, "#2288aa"]]
            }
        };
        this.buttons = {
            "fighting_prepare": {
                "center": [1755, 838],
                "offset": [100, 100],
                "desc": "战斗准备按钮"
            },
            "fighting_prepare_exit": {
                "center": [53, 48],
                "offset": [30, 30],
                "desc": "战斗的时候左上角的退出"
            },
            "fighting_prepare_exit_confirm": {
                "center": [1112, 632],
                "offset": [70, 30],
                "desc": "确认退出战斗"
            },
            "fighting_exchange": {
                "center": [793, 826],
                "offset": [50, 50],
                "desc": "换狗粮"
            },
            "fighting_exchange_type": {
                "center": [98, 983],
                "offset": [50, 50],
                "desc": "换狗粮，左下角切换式神类型"
            },
            "fighting_exchange_type_sucai": {
                "center": [102, 482],
                "offset": [30, 30],
                "desc": "换狗粮，左下角切换式神类型 素材"
            },
            "fighting_exchange_type_n": {
                "center": [256, 503],
                "offset": [30, 30],
                "desc": "换狗粮，左下角切换式神类型N"
            },
        }
    }

    execute() {
        //战斗中
        if (this.match_tag == 'fighting') {
            if (this.clickIfColorsExist('fighting_manual')) {
                global.logger.info('切换自动战斗');
            }
            //todo 手动切自动
            return;
        }
        //退出战斗确认
        if (this.match_tag == 'fighting_exit_confirm') {
            this.clickButton('fighting_prepare_exit_confirm');
            global.logger.info('退出战斗：确认退出战斗');
            return;
        }
        //战斗准备
        if (this.match_tag == 'fighting_prepare') {
            // 探索准备的时候换狗粮
            if (state.global.fighting == 'tansuo' && state.tansuo.setting.change_food) {
                if (this.findColors('fighting_prepare_maxlevel_2') || this.findColors('fighting_prepare_maxlevel_3')) {
                    this.clickButton('fighting_exchange');
                    sleep(1200);
                    global.logger.info('狗粮更换：发现满级标志，准备更换狗粮');
                    return;
                }
            }
            //突破掉级
            if (state.global.fighting == 'tupo' && state.tupo.geren_demotion) {
                this.clickButton('fighting_prepare_exit');
                state.tupo.geren_fight_clicked = false;
                state.tupo.geren_demotion = false;
                global.logger.info('战斗准备：突破掉级，尝试直接退出战斗');
                return;
            }
            //防止错判没突破券
            if (state.global.fighting == 'tupo' && state.tupo.geren_fight_clicked) {
                state.tupo.geren_fight_clicked = false;
            }
            this.clickButton('fighting_prepare');
            sleep(500);
            global.logger.info('战斗准备：点击准备，开始战斗');
            return;
        }
        //换狗粮
        if (this.match_tag == 'fighting_exchange') {
            if (state.global.fighting == 'douji') {
                this.clickButton('fighting_prepare');
                global.logger.info('战斗准备：点击准备，开始战斗');
                sleep(random(3000, 5000))
                return;
            }
            if (this.findColors('fighting_exchange_maxlevel_1')) {
                if (!this.findColors('fighting_exchange_type_n') && !this.findColors('fighting_exchange_type_sucai')) {
                    this.clickButton('fighting_exchange_type');
                    sleep(1200);
                    return;
                }
                //移动
                global.automator.swipe([339, 860], [279, 500]);
                //复位
                sleep(800);
                global.automator.swipe([339, 860], [639, 860]);
                global.logger.info('狗粮更换：更换第一个位置的狗粮...');
                return;
            }
            if (this.findColors('fighting_exchange_maxlevel_2')) {
                if (!this.findColors('fighting_exchange_type_n') && !this.findColors('fighting_exchange_type_sucai')) {
                    this.clickButton('fighting_exchange_type');
                    sleep(1200);
                    return;
                }
                //移动
                global.automator.swipe([531, 873], [958, 500]);
                global.logger.log('狗粮更换：更换第二个位置的狗粮...');
                return;
            }
            this.clickButton('fighting_prepare');
            return;
        }
        //换狗粮 选素材类型
        if (this.match_tag == 'fighting_exchange_dark') {
            if (state.tansuo.setting.food_priority == 'sucai') {
                this.clickButton('fighting_exchange_type_sucai');
                global.logger.info('狗粮更换：根据用户设置, 切换到素材');
                return;
            } else if (state.tansuo.setting.food_priority == 'n') {
                this.clickButton('fighting_exchange_type_n');
                global.logger.info('狗粮更换：根据用户设置, 切换到N卡');
                return;
            } else {
                return;
            }
        }

    }
}
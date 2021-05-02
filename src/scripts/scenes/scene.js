export class Scene {
    constructor() {
        this.scene_name = 'unknown';
        this.colors = {
            friend_list: {
                region: [62, 910, 252, 169],
                desc: "好友列表",
                first: "#c92322",
                colors: [[-2, 7, "#543b1a"], [-6, 13, "#af2524"], [11, 30, "#eff1eb"], [6, 47, "#eeeedd"], [8, 46, "#f0c5d1"], [36, 53, "#6c4a17"], [34, 41, "#ffa1c3"], [40, 40, "#e399c4"], [61, -3, "#cb3131"]]
            },
            game_notice: {
                region: [765, 65, 362, 123],
                desc: "游戏公告",
                first: "#efdebd",
                colors: [[4, 8, "#2f1f1a"], [12, 10, "#f8deab"], [4, 16, "#1f1714"], [3, 23, "#f0ce9f"], [20, 23, "#1e1712"], [27, 10, "#f6e0b4"], [31, 17, "#251b13"], [52, -11, "#fdecb9"], [66, 5, "#764b41"]]
            },
            client_update: {
                region: [665, 378, 301, 82],
                desc: "客户端数据已更新，请重新启动客户端",
                first: "#ffffff",
                colors: [[-2, 1, "#414140"], [-4, 3, "#ffffff"], [-5, 6, "#090806"], [-5, 9, "#ffffff"], [-3, 10, "#090706"], [0, 13, "#ffffff"], [1, 18, "#090807"], [7, 20, "#ffffff"], [8, 24, "#090806"]]
            },
            pet_button: {
                region: [9, 727, 439, 344],
                desc: "后院按钮，用于检测是否误触打开宠物面板",
                first: "#c8eaea",
                colors: [[1, -1, "#a5b4a0"], [2, -2, "#826f44"], [3, -3, "#95764f"], [4, -4, "#b89663"], [5, -5, "#ba9865"], [4, -6, "#bb9966"], [3, -7, "#987652"], [2, -8, "#654333"], [1, -9, "#6e4d30"]]
            },
            award_preview: {
                region: [66, 28, 1794, 1013],
                desc: "奖励预览界面",
                first: "#7c6b5a",
                colors: [[1, 0, "#786251"], [2, 0, "#664d3e"], [3, 0, "#341b12"], [5, 0, "#543b2b"], [6, -2, "#4e3d2c"], [8, -3, "#51342f"], [-10, 2, "#704e3d"], [-7, 2, "#5d3b2a"], [-4, 4, "#2d1c1c"]]
            },
            tip: {
                region: [362, 400, 382, 441],
                desc: "通用提示框",
                first: "#f4f0e3",
                colors: [[2, -13, "#b50e0e"], [5, -15, "#f9f6f6"], [16, -13, "#bf9dae"], [15, -14, "#9d7d8c"], [14, -15, "#dcc9cb"], [13, -14, "#7b5c6a"], [11, -16, "#ceadb6"], [4, 46, "#e1e1de"], [6, 47, "#4d4d4d"]]
            },
            item_tip: {
                region: [6, 4, 1909, 1074],
                desc: "不小心点到了一个物品弹出物品介绍要尝试关掉",
                first: "#6f5027",
                colors: [[0, -1, "#7f5626"], [-1, -1, "#8a6137"], [-2, -1, "#795027"], [-3, -1, "#593007"], [9, 0, "#bc8b5a"], [9, -1, "#cc9966"], [10, 1, "#af947a"], [10, 2, "#b3997e"], [9, 4, "#d4a576"]]
            },
            home_dashu: {
                region: [391, 238, 1239, 568],
                desc: "庭院误触大树界面的判断",
                first: "#bd9a57",
                colors: [[-1, 0, "#d0ad6a"], [1, 1, "#a17f3c"], [2, 2, "#b89643"], [3, 3, "#a08239"], [4, 4, "#5f451d"], [5, 5, "#533a19"], [6, 6, "#5d4717"], [7, 7, "#675515"], [8, 8, "#73621e"], [9, 9, "#93813e"], [9, 10, "#a79452"]]
            },
            reward_request: {
                region: [1201, 557, 156, 292],
                desc: "协作 悬赏封印",
                first: "#3a2827",
                colors: [[-12, 11, "#58b361"], [17, 12, "#5cb765"], [1, 25, "#53ae5c"], [-1, 49, "#3b2929"], [6, 138, "#352120"], [-9, 148, "#d96655"], [-19, 163, "#3a2827"], [6, 168, "#d76958"], [39, 163, "#362524"]]
            },
            sell_1: {
                region: [1608, 840, 176, 173],
                desc: "典藏皮肤推销",
                first: "#e0cf8b",
                colors: [[6, 5, "#6e2119"], [12, 16, "#ebc985"], [17, 18, "#4e1503"], [35, 14, "#e8c682"], [66, 7, "#671212"], [59, 14, "#e3c17d"], [50, 55, "#ddbb66"], [46, 66, "#cab067"], [49, 62, "#320404"], [7, 54, "#ddbb66"]]
            },
            sell_2: {
                region: [619, 88, 647, 217],
                desc: "热门推荐",
                first: "#dbb77d",
                colors: [[-3, 9, "#5f3819"], [13, 20, "#d4ae6e"], [37, 18, "#d6bc75"], [51, 23, "#d5ad6f"], [140, -6, "#debe7f"], [168, -13, "#dec085"], [173, -4, "#613a13"], [234, 12, "#d5ae74"], [239, 20, "#6e3818"], [252, 31, "#dab36c"], [385, -2, "#5f391a"], [390, -13, "#d8bc80"], [412, -17, "#dabd82"]]
            }
        };
        this.buttons = {
            friend_switch: {
                center: [203, 998],
                offset: [50, 50],
                desc: "好友列表 切换到 友情点"
            },
            game_notice_exit: {
                center: [1828, 251],
                offset: [30, 30],
                desc: "关掉公告"
            },
            client_update_confirm: {
                center: [963, 675],
                offset: [100, 30],
                desc: "确认更新游戏"
            },
            screen_middle_down: {
                center: [951, 1040],
                offset: [200, 30],
                desc: "点屏幕中下部分继续"
            },
            reawrd_accept: {
                center: [1279, 629],
                offset: [50, 50],
                desc: "接受悬赏封印"
            },
            sell_1_exit: {
                center: [1715, 206],
                offset: [30, 30],
                desc: "关掉推销"
            },
            sell_2_exit: {
                center: [1515, 223],
                offset: [30, 30],
                desc: "关掉推销"
            },
            "fighting_victory_confirm": {
                "center": [951, 1040],
                "offset": [200, 30],
                "desc": "战斗结束的时候点屏幕继续。"
            },
        };
        this.judge_colors = [];
    }

    updateCapture() {
        global.screenshot = images.captureScreen();
        this.update();
    }

    update() {
        this.screenshot = global.screenshot;
    }

    //common function for any scenes
    clickPoint(point, offset) {
        global.automator.press(point.x || point[0], point.y || point[1], offset);
        return true;
    }

    clickButton(button) {
        logger.verbose('点击按钮：' + button);
        let button_data = this.buttons[button];
        if (button_data == undefined) {
            logger.error('错误：尝试点击没有数据的按钮 ' + button);
            return false
        }
        return this.clickPoint(button_data['center'], button_data['offset']);
    }

    findColors(color_tag) {
        if (typeof color_tag == 'string') {
            let colors_data = this.colors[color_tag];
            if (colors_data == undefined) {
                global.logger.error(`错误：找不到colors数据：${color_tag}`);
                exit();
            }
            let point = images.findMultiColors(this.screenshot, colors_data.first, colors_data.colors, {
                region: colors_data.region,
                threshold: 12
            });
            return point != null ? point : null;
        } else if (typeof color_tag == 'object') {
            let point = images.findMultiColors(this.screenshot, color_tag.first, color_tag.colors, {
                region: color_tag.region,
                threshold: 12
            });
            return point != null ? point : null;
        }
    };

    clickIfColorsExist(color_tag) {
        let point = this.findColors(color_tag);
        if (point != null) {
            this.clickPoint(point);
            return true;
        }
        return false;
    }

    isCurrentScene() {
        if (this.judge_colors.length == 0) {
            this.match_tag = null;
            return true;
        }
        for (let color of this.judge_colors) {
            if (this.findColors(color) != null) {
                if (this.scene_name + '_' + color != global.state.temp.last_scene) {
                    logger.verbose('当前界面：[' + this.scene_name + ']' + color);
                    global.state.temp.last_scene = this.scene_name + '_' + color;
                }
                this.match_tag = color;
                return true;
            }
        }
        return false;
    }

    timeTo(tag) {
        let judger = {
            liaotu: () => {
                let liaotu_clear = state.tupo.liao_clear;
                if (liaotu_clear === true || liaotu_clear === false) {
                    state.tupo.liao_clear = 0;
                    return true;
                }
                let tmp_date = new Date(liaotu_clear);
                tmp_date.setDate(tmp_date.getDate() + 1);
                tmp_date.setHours(5);
                if (tmp_date.getTime() < Date.now()) {
                    return state.tupo.liao_cd < Date.now();
                } else {
                    return false;
                };
            },
            fengmo: () => {
                let tmpTime = new Date();
                tmpTime.setHours(17);
                tmpTime.setMinutes(5);
                tmpTime.setSeconds(0);
                return state.global.last_kill_fengmo_boss < tmpTime.getTime() && new Date().getHours() <= 23 && new Date().getHours() >= 17;
            },
            digui: () => {
                let tmpTime = new Date();
                tmpTime.setHours(12);
                tmpTime.setMinutes(0);
                tmpTime.setSeconds(0);
                return state.global.last_kill_digui < tmpTime.getTime() && new Date().getHours() >= 12 && new Date().getHours() <= 23;
            },
            friendPoint: () => {
                if (state.friends.friend_point_send_count >= 20) {
                    state.friends.friend_point_send_count = 0;
                    state.friends.last_send_friend_point = Date.now();
                    return false;
                }
                let tmpTime = new Date();
                tmpTime.setHours(0);
                tmpTime.setMinutes(0);
                tmpTime.setSeconds(0);
                return state.friends.last_send_friend_point < tmpTime.getTime() && new Date().getHours() >= 17;
            },
            getBlackEgg: () => {
                let tmpTime = new Date();
                tmpTime.setHours(0);
                tmpTime.setMinutes(0);
                tmpTime.setSeconds(0);
                return state.global.last_get_free_blackegg < tmpTime.getTime();
            },
            jiyang: () => {
                return Date.now() > state.jiejie.jiyang_end
            }
        };

        if (judger[tag] != undefined) {
            return judger[tag]();
        } else {
            return false;
        }
    }

    execute() {
        if (this.findColors('friend_list')) {
            this.clickButton('friend_switch');
            return;
        }
        if (this.findColors('game_notice')) {
            this.clickButton('game_notice_exit');
            return;
        }
        if (this.findColors('client_update')) {
            this.clickButton('client_update_confirm');
            return;
        }
        if (
            this.findColors('pet_button') ||
            this.findColors('award_preview') ||
            this.findColors('tip') ||
            this.findColors('item_tip') ||
            this.findColors('home_dashu')
        ) {
            this.clickButton('fighting_victory_confirm');
            return;
        }
        if (this.findColors('reward_request')) {
            clickButton('reawrd_accept');
            return;
        }
        if (this.findColors('sell_1')) {
            clickButton('sell_1_exit');
            return;
        }
        if (this.findColors('sell_2')) {
            clickButton('sell_2_exit');
            return;
        }
    }
}
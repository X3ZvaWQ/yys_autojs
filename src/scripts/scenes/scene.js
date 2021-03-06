export class Scene {
    constructor() {
        this.scene_name = 'unknown';
        this.colors = {
            "friend_list": {
                region: [62, 910, 252, 169],
                desc: "好友列表",
                first: "#c92322",
                colors: [[-2, 7, "#543b1a"], [-6, 13, "#af2524"], [11, 30, "#eff1eb"], [6, 47, "#eeeedd"], [8, 46, "#f0c5d1"], [36, 53, "#6c4a17"], [34, 41, "#ffa1c3"], [40, 40, "#e399c4"], [61, -3, "#cb3131"]]
            },
            "game_notice": {
                region: [765, 65, 362, 123],
                desc: "游戏公告",
                first: "#efdebd",
                colors: [[4, 8, "#2f1f1a"], [12, 10, "#f8deab"], [4, 16, "#1f1714"], [3, 23, "#f0ce9f"], [20, 23, "#1e1712"], [27, 10, "#f6e0b4"], [31, 17, "#251b13"], [52, -11, "#fdecb9"], [66, 5, "#764b41"]]
            },
            "client_update": {
                region: [665, 378, 301, 82],
                desc: "客户端数据已更新，请重新启动客户端",
                first: "#ffffff",
                colors: [[-2, 1, "#414140"], [-4, 3, "#ffffff"], [-5, 6, "#090806"], [-5, 9, "#ffffff"], [-3, 10, "#090706"], [0, 13, "#ffffff"], [1, 18, "#090807"], [7, 20, "#ffffff"], [8, 24, "#090806"]]
            },
            "pet_button": {
                region: [9, 727, 439, 344],
                desc: "后院按钮，用于检测是否误触打开宠物面板",
                first: "#c8eaea",
                colors: [[1, -1, "#a5b4a0"], [2, -2, "#826f44"], [3, -3, "#95764f"], [4, -4, "#b89663"], [5, -5, "#ba9865"], [4, -6, "#bb9966"], [3, -7, "#987652"], [2, -8, "#654333"], [1, -9, "#6e4d30"]]
            },
            "award_preview": {
                region: [66, 28, 1794, 1013],
                desc: "奖励预览界面",
                first: "#7c6b5a",
                colors: [[1, 0, "#786251"], [2, 0, "#664d3e"], [3, 0, "#341b12"], [5, 0, "#543b2b"], [6, -2, "#4e3d2c"], [8, -3, "#51342f"], [-10, 2, "#704e3d"], [-7, 2, "#5d3b2a"], [-4, 4, "#2d1c1c"]]
            },
            "tip": {
                region: [362, 400, 382, 441],
                desc: "通用提示框",
                first: "#f4f0e3",
                colors: [[2, -13, "#b50e0e"], [5, -15, "#f9f6f6"], [16, -13, "#bf9dae"], [15, -14, "#9d7d8c"], [14, -15, "#dcc9cb"], [13, -14, "#7b5c6a"], [11, -16, "#ceadb6"], [4, 46, "#e1e1de"], [6, 47, "#4d4d4d"]]
            },
            "item_tip": {
                region: [6, 4, 1909, 1074],
                desc: "不小心点到了一个物品弹出物品介绍要尝试关掉",
                first: "#6f5027",
                colors: [[0, -1, "#7f5626"], [-1, -1, "#8a6137"], [-2, -1, "#795027"], [-3, -1, "#593007"], [9, 0, "#bc8b5a"], [9, -1, "#cc9966"], [10, 1, "#af947a"], [10, 2, "#b3997e"], [9, 4, "#d4a576"]]
            },
            "home_dashu": {
                region: [391, 238, 1239, 568],
                desc: "庭院误触大树界面的判断",
                first: "#bd9a57",
                colors: [[-1, 0, "#d0ad6a"], [1, 1, "#a17f3c"], [2, 2, "#b89643"], [3, 3, "#a08239"], [4, 4, "#5f451d"], [5, 5, "#533a19"], [6, 6, "#5d4717"], [7, 7, "#675515"], [8, 8, "#73621e"], [9, 9, "#93813e"], [9, 10, "#a79452"]]
            },
            "reward_request": {
                region: [1201, 557, 156, 292],
                desc: "协作 悬赏封印",
                first: "#3a2827",
                colors: [[-12, 11, "#58b361"], [17, 12, "#5cb765"], [1, 25, "#53ae5c"], [-1, 49, "#3b2929"], [6, 138, "#352120"], [-9, 148, "#d96655"], [-19, 163, "#3a2827"], [6, 168, "#d76958"], [39, 163, "#362524"]]
            },
            "sell_1": {
                region: [1608, 840, 176, 173],
                desc: "典藏皮肤推销",
                first: "#e0cf8b",
                colors: [[6, 5, "#6e2119"], [12, 16, "#ebc985"], [17, 18, "#4e1503"], [35, 14, "#e8c682"], [66, 7, "#671212"], [59, 14, "#e3c17d"], [50, 55, "#ddbb66"], [46, 66, "#cab067"], [49, 62, "#320404"], [7, 54, "#ddbb66"]]
            },
            "sell_2": {
                region: [619, 88, 647, 217],
                desc: "热门推荐",
                first: "#dbb77d",
                colors: [[-3, 9, "#5f3819"], [13, 20, "#d4ae6e"], [37, 18, "#d6bc75"], [51, 23, "#d5ad6f"], [140, -6, "#debe7f"], [168, -13, "#dec085"], [173, -4, "#613a13"], [234, 12, "#d5ae74"], [239, 20, "#6e3818"], [252, 31, "#dab36c"], [385, -2, "#5f391a"], [390, -13, "#d8bc80"], [412, -17, "#dabd82"]]
            },
            "common_exit_1": {
                "region": [5, 1, 535, 173],
                "desc": "通用退出按钮1",
                "first": "#c1d1f1",
                "colors": [[0, 2, "#7a93d9"], [2, 4, "#4462c5"], [6, 5, "#4556a6"], [8, 7, "#528099"], [-3, 12, "#4466cc"], [-4, 23, "#c5c6e7"], [-5, 41, "#3355cc"], [-18, 36, "#4a63c6"], [-13, 41, "#9cadcf"]]
            },
            "common_exit_2": {
                "region": [5, 1, 535, 173],
                "desc": "通用退出按钮2",
                "first": "#f3e09c",
                "colors": [[3, 3, "#e3b66f"], [5, 5, "#c08f4e"], [16, 8, "#9c6b40"], [10, 14, "#bb8347"], [8, 15, "#bf8b49"], [7, 18, "#f2e19d"], [-1, 16, "#efdc9a"], [-28, 6, "#b48352"], [-34, 7, "#895f3d"]]
            },
            "common_exit_3": {
                "region": [5, 1, 535, 173],
                "desc": "",
                "first": "#f2e1ae",
                "colors": [[5, 1, "#e8a45b"], [14, 1, "#c8833f"], [32, -4, "#302216"], [-15, -22, "#392b24"], [-8, -11, "#ab793b"], [-4, -8, "#fbeab2"], [-22, 19, "#2e2019"], [-5, 9, "#fbe8ae"], [6, 1, "#de9a46"]]
            },
            "common_exit_4": {
                "region": [5, 1, 535, 217],
                "desc": "",
                "first": "#ecf4fc",
                "colors": [[18, -3, "#324b95"], [22, -10, "#2e4095"], [28, 2, "#333b7d"], [18, 10, "#7587db"], [20, 13, "#b2c2f3"], [24, 11, "#2836a2"], [7, 27, "#4d6fde"], [-1, 26, "#c7d8fa"], [-21, -17, "#2f1f80"]]
            },
            "common_exit_5": {
                "region": [995, 6, 919, 464],
                "desc": "",
                "first": "#edcfcf",
                "colors": [[43, 28, "#e680dd"], [16, -34, "#ee9dec"], [-10, 19, "#e69191"], [-10, 11, "#f1cfcf"], [8, 7, "#dc8795"], [12, 9, "#dc8787"], [-21, -16, "#fbc2d1"], [-14, -4, "#d1758a"], [19, -2, "#b94286"]]
            },
            "reconnect_continue_fight": {
                "region":[622,313,672,445],
                "desc":"闪退之后 继续战斗",
                "first":"#cab49d",
                "colors":[[1,2,"#36312b"],[4,5,"#cbb59e"],[32,6,"#cbb59e"],[39,2,"#2b2723"],[44,7,"#beaa94"],[47,8,"#292621"],[45,16,"#cab49e"],[87,7,"#cab49e"],[88,8,"#7f7264"],[89,9,"#2a2622"],[126,17,"#cbb59e"],[127,18,"#827466"],[128,19,"#272420"],[320,13,"#cbb59e"],[322,14,"#504840"],[325,16,"#766a5d"],[324,21,"#cbb59e"]]
            }
        };
        this.buttons = {
            "continue_fight": {
                center: [1112, 634],
                offset: [50, 30],
                desc: "继续战斗"
            },
            "friend_switch": {
                center: [203, 998],
                offset: [50, 50],
                desc: "好友列表 切换到 友情点"
            },
            "game_notice_exit": {
                center: [1828, 251],
                offset: [30, 30],
                desc: "关掉公告"
            },
            "client_update_confirm": {
                center: [963, 675],
                offset: [100, 30],
                desc: "确认更新游戏"
            },
            "screen_middle_down": {
                center: [951, 1040],
                offset: [200, 30],
                desc: "点屏幕中下部分继续"
            },
            "reawrd_accept": {
                center: [1279, 629],
                offset: [50, 50],
                desc: "接受悬赏封印"
            },
            "sell_1_exit": {
                center: [1715, 206],
                offset: [30, 30],
                desc: "关掉推销"
            },
            "sell_2_exit": {
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
        sleep(random(state.settings.min_click_interval || 400, state.settings.max_click_interval || 600))
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

    clickIfColorsExist(color_tag, offset) {
        let point = this.findColors(color_tag);
        if (point != null) {
            this.clickPoint(point, offset);
            return true;
        }
        return false;
    }

    isCurrentScene() {
        if (this.judge_colors.length == 0) {
            if (state.temp.last_scene != 'unknown') {
                logger.verbose('当前界面：[unknown]');
                state.temp.last_scene = 'unknown';
                state.temp.last_scene_change = Date.now();
            }
            this.match_tag = null;
            if(this.timeTo('reconnect') && state.temp.last_scene.substr(0, 4) != 'home' && Date.now() - state.temp.last_scene_change > (state.settings.max_scene_away_allow*1000 || 3*60*1000)) {
                global.logger.warn(`错误：在${state.temp.last_scene}卡顿超过3分钟，尝试重启应用`);
                state.temp.last_scene_change = Date.now();
                app.stopPackage(state.settings.packageName);
            }
            return true;
        }
        for (let color of this.judge_colors) {
            if (this.findColors(color) != null) {
                if (this.scene_name + '_' + color != state.temp.last_scene) {
                    logger.verbose('当前界面：[' + this.scene_name + ']' + color);
                    state.temp.last_scene = this.scene_name + '_' + color;
                    state.temp.last_scene_change = Date.now();
                }
                this.match_tag = color;
                if(this.timeTo('reconnect') && state.temp.last_scene.substr(0, 4) != 'home' && Date.now() - state.temp.last_scene_change > (state.settings.max_scene_away_allow*1000 || 3*60*1000)) {
                    global.logger.warn(`错误：在${state.temp.last_scene}卡顿超过3分钟，尝试重启应用`);
                    state.temp.last_scene_change = Date.now();
                    app.stopPackage(state.settings.packageName);
                }
                state.temp.last_unknown = 0;
                if (this.match_tag != 'home_fold' && this.match_tag != 'home_spread') {
                    state.temp.home_excute_times = 0;
                }
                return true;
            }
        }
        return false;
    }

    timeTo(tag) {
        let judger = {
            liaotili: () => {
                if (state.switch.liaotili === false) return false;
                return Date.now() > state.jiejie.last_get_liaotili + 8 * 60 * 60 * 1000;
            },
            liaotu: () => {
                if (state.switch.liaotu === false) return false;
                let tmp_date = new Date();
                tmp_date.setHours(5);
                tmp_date.setMinutes(0);
                tmp_date.setSeconds(0)
                if (state.tupo.liao_clear < tmp_date.getTime()) {
                    return state.tupo.liao_cd < Date.now();
                } else {
                    return false;
                };
            },
            liaotu_start: () => {
                if (state.switch.digui === false) return false;
                let tmpTime = new Date();
                tmpTime.setHours(5);
                tmpTime.setMinutes(0);
                tmpTime.setSeconds(0);
                if(state.tupo.last_liao_start > tmpTime.getTime()) return false;
                return Date.now() >= tmpTime.getTime();
            },
            liaotu_buy_buff: () => {
                return state.tupo.buy_buff === false;
            },
            fengmo: () => {
                if (state.switch.fengmo === false) return false;
                let tmpTime = new Date();
                tmpTime.setHours(17);
                tmpTime.setMinutes(5);
                tmpTime.setSeconds(0);
                return state.fengmo.last_kill_fengmo_boss < tmpTime.getTime() && new Date().getHours() <= 23 && new Date().getHours() >= 17;
            },
            digui: () => {
                if (state.switch.digui === false) return false;
                let tmpTime = new Date();
                tmpTime.setHours(12);
                tmpTime.setMinutes(0);
                tmpTime.setSeconds(0);
                return state.digui.last_kill_digui < tmpTime.getTime() && new Date().getHours() >= 12 && new Date().getHours() <= 23;
            },
            diguiShare: () => {
                if (state.switch.diguiShare === false) return false;
                let now_time = new Date();
                let tmpTime = new Date(now_time.getFullYear(), now_time.getMonth(), now_time.getDate() - (now_time.getDay() == 0 ? 7 : now_time.getDay()) + 1);
                return state.digui.last_share_digui < tmpTime.getTime();
            },
            friendPoint: () => {
                if (state.switch.friendPoint === false) return false;
                if (state.friends.friend_point_send_count >= 20) {
                    state.friends.friend_point_send_count = 0;
                    state.friends.last_send_friend_point = Date.now();
                    return false;
                }
                let tmpTime = new Date();
                tmpTime.setHours(0);
                tmpTime.setMinutes(5);
                tmpTime.setSeconds(0);
                return state.friends.last_send_friend_point < tmpTime.getTime();
            },
            getBlackEgg: () => {
                let tmpTime = new Date();
                tmpTime.setHours(0);
                tmpTime.setMinutes(0);
                tmpTime.setSeconds(0);
                return state.global.last_get_free_blackegg < tmpTime.getTime();
            },
            jiyang: () => {
                if (state.switch.jiyang === false) return false;
                return Date.now() > state.jiejie.jiyang_end
            },
            reconnect: () => {
                if(state.settings.reconnect_mode == 'only') {
                    return true;
                }
                if(state.settings.reconnect_mode == 'no') {
                    return false;
                }
                if(state.settings.reconnect_mode == 'campus-net') {
                    let time = new Date();
                    let checkHours = time.getHours() + 1;
                    //是否在7：10 - 23：00可上网期间
                    if(checkHours <= 23 && (checkHours >= 9 || checkHours >= 8 && time.getMinutes() >= 10)) {
                        return true;
                    }
                    //是否是周五周六不断网期间
                    if(time.getDay() == 5 && time.getHours() >= 23 || time.getDay() == 0 && time.getHours() < 23 || time.getDay() == 6){
                        return true;
                    }
                    return false;
                }
            },
            yinjie: () => {
                if (state.switch.yinjie === false) return false;
                let tmpTime = new Date();
                if(tmpTime.getDay() != 5 && tmpTime.getDay() != 6 && tmpTime.getDay() != 0) return false;
                tmpTime.setHours(19);
                tmpTime.setMinutes(20);
                tmpTime.setSeconds(0);
                if(state.global.last_kill_yinjie > tmpTime.getTime()) return false;
                return Date.now() > tmpTime.getTime();
            }
        };

        if (judger[tag] != undefined) {
            return judger[tag]();
        } else {
            return false;
        }
    }

    execute() {
        if(this.findColors('reconnect_continue_fight')) {
            this.clickButton('continue_fight');
            return;
        }
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
            this.clickButton('reawrd_accept');
            return;
        }
        if (this.findColors('sell_1')) {
            this.clickButton('sell_1_exit');
            return;
        }
        if (this.findColors('sell_2')) {
            this.clickButton('sell_2_exit');
            return;
        }

        if (state.temp.last_unknown == 0) {
            state.temp.last_unknown = Date.now();
        };
        if (state.temp.last_unknown != 0 && Date.now() - state.temp.last_unknown > 30 * 1000) {
            if (
                this.clickIfColorsExist('common_exit_1') ||
                this.clickIfColorsExist('common_exit_2') ||
                this.clickIfColorsExist('common_exit_3') ||
                this.clickIfColorsExist('common_exit_4') ||
                this.clickIfColorsExist('common_exit_5')
            ) {
                global.logger.verbose('未知界面：尝试退出');
                return;
            }
            this.clickPoint({ x: 1, y: 1 });
            sleep(2000);
        }
        if (state.temp.last_unknown != 0 && Date.now() - state.temp.last_unknown > 180 * 1000) {
            state.temp.last_unknown = 0;
            global.logger.warn('未知界面退出失败，尝试重启应用');
            app.stopPackage(state.settings.packageName);
        }
    }
}
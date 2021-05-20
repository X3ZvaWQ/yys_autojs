import { Scene } from './scene';

export class JieJie extends Scene {
    constructor() {
        super();
        this.scene_name = 'jiejie';
        this.judge_colors = ['onmyoryou', 'onmyoryou_map', 'jiejie', 'jiejie_tilishihe', 'jiejie_feed', 'jiejie_jiyang_select'];
        this.colors = {
            "onmyoryou": {
                "region":[165,710,561,181],
                "desc":"阴阳寮界面判定",
                "first":"#fae8a8",
                "colors":[[3,-1,"#8d5a27"],[10,-1,"#fbd984"],[14,-1,"#996644"],[263,-1,"#ddcccc"],[263,-4,"#736464"],[265,-8,"#665555"],[-2,91,"#ebd5b3"],[-4,89,"#cc7733"],[6,84,"#633a29"]]
            },
            "jiejie": {
                "region":[205,645,193,190],
                "desc":"结界界面判定，通过小白头顶的结界换肤按钮判断",
                "first":"#fde5f6",
                "colors":[[5,-8,"#10100c"],[6,22,"#080807"],[4,23,"#837077"],[1,23,"#f6c4cf"],[-5,23,"#c02727"],[-20,22,"#0e0d09"],[24,22,"#070606"],[23,17,"#ecd6e1"],[25,16,"#6a4f55"]]
            },
            "jiejie_feed": {
                "region":[114,29,287,86],
                "desc":"式神育成界面",
                "first":"#f8f3e0",
                "colors":[[5,-5,"#2d241e"],[5,-8,"#a0998c"],[9,-5,"#f6f1de"],[38,-8,"#2e251f"],[40,-5,"#eae5d3"],[41,-3,"#a09a8c"],[44,5,"#f8f3e0"],[75,7,"#eae5d3"],[73,7,"#c1bbac"]]
            },
            "jiejie_jiyang": {
                "region":[767,160,282,187],
                "desc":"结界寄养 式神回来了的标记",
                "first":"#ffc210",
                "colors":[[0,-2,"#cc9720"],[0,-3,"#7b5d1c"],[0,-4,"#463513"],[2,-4,"#cc9720"],[1,-9,"#694d14"],[1,-10,"#9a7217"],[1,-11,"#bf901a"],[1,-12,"#d6a51d"],[-3,14,"#252422"]]
            },
            "jiejie_tilishihe_tip": {
                "region":[1166,604,304,175],
                "desc":"结界 体力食盒 可以领的提示",
                "first":"#832f16",
                "colors":[[0,4,"#c34c2a"],[2,9,"#d1581a"],[-1,8,"#db642a"],[-3,10,"#ba3707"],[-4,10,"#ec7037"],[-9,9,"#882b11"],[-9,2,"#852e18"],[-9,-3,"#8e3917"],[-6,-5,"#250e0e"]]
            },
            "jiejie_tilishihe_tip_1": {
                "region":[1188,622,144,137],
                "desc":"结界 体力食盒 可以领的提示",
                "first":"#cc2a22",
                "colors":[[-1,0,"#d8522e"],[-1,-1,"#db7031"],[-2,-1,"#dc7132"],[-2,-2,"#d63d2c"],[-3,-3,"#be2c15"],[-3,-4,"#c04c1b"],[-4,-4,"#d15524"],[-5,-5,"#c74d1d"],[-6,-6,"#be4b21"]]
            },
            "jiejie_tilishihe": {
                "region":[833,695,288,180],
                "desc":"结界体力食盒界面的判断",
                "first":"#2b1a0d",
                "colors":[[-8,0,"#f8f3e0"],[-8,-2,"#b5ae9e"],[-8,-3,"#766e61"],[-8,-4,"#352b21"],[-5,-36,"#7b3018"],[-8,-37,"#8d4022"],[-8,-46,"#fc943f"],[-5,-70,"#cc2122"],[-12,-67,"#fe8f3c"]]
            },
            "jiejie_jiyang_null": {
                "region":[1675,39,204,190],
                "desc":"寄养为空的时候",
                "first":"#cac4b1",
                "colors":[[-3,1,"#25251e"],[-2,1,"#8c8779"],[-10,1,"#282421"],[-12,1,"#aea999"],[-13,1,"#cac4b1"],[-13,3,"#484742"],[-13,4,"#252520"],[-14,18,"#bbb3a3"],[-13,19,"#aba392"],[-12,20,"#948e80"],[-9,16,"#282420"]]
            },
            "jiejie_jiyang_select": {
                "region":[1128,247,225,84],
                "desc":"选择结界卡的界面",
                "first":"#b17937",
                "colors":[[0,-2,"#6a4d2b"],[1,-4,"#2b2621"],[-3,-7,"#98652f"],[-2,-8,"#594126"],[-1,-10,"#272420"],[26,-4,"#9d6830"],[27,-2,"#2b2621"],[28,-1,"#272420"],[-24,3,"#ae7637"]]
            },
            "jiejie_feed_other": {
                "region":[709,4,451,150],
                "desc":"判断是不是在别人的结界里",
                "first":"#151210",
                "colors":[[0,-1,"#25201b"],[2,-4,"#18130e"],[2,-9,"#241c18"],[-50,11,"#130c0a"],[-41,20,"#0e0a07"],[0,17,"#0b0806"],[60,12,"#15100b"],[158,-2,"#1c1712"],[-129,-2,"#1d1813"]]
            },
            "award": {
                "region":[450,228,1069,571],
                "desc":"通用获得奖励",
                "first":"#ebdba4",
                "colors":[[3,0,"#876532"],[23,0,"#eeeebb"],[32,2,"#70511e"],[34,-6,"#f9eec5"],[30,49,"#d9c37d"],[43,52,"#663311"],[65,95,"#663812"],[43,61,"#d2c17d"],[-2,44,"#70653d"]]
            },
            "onmyoryou_map": {
                "region":[6,842,283,229],
                "desc":"阴阳寮地图",
                "first":"#e57777",
                "colors":[[3,-1,"#af6f6f"],[3,-2,"#b39292"],[4,-4,"#d2c1c1"],[-2,-17,"#c5beb4"],[-5,-20,"#a59d95"],[-25,-30,"#6ca0a4"],[-35,-31,"#f0dfc8"],[-39,-31,"#f0df9f"],[-34,-23,"#ccbbcc"]]
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
        }
    }

    resetJiyangSelect() {
        this.clickButton('jiejie_jiyang_select_kuaqu');
        sleep(random(800, 1200));
        this.clickButton('jiejie_jiyang_select_haoyou');
    }

    execute() {
        //阴阳寮界面
        if(this.match_tag == 'onmyoryou') {
            if(this.timeTo('jiyang')){
                this.clickButton('onmyoryou_jiejie');
                global.logger.info('阴阳寮：进入结界');
            }else if(this.timeTo('liaotili')){
                this.clickButton('onmyoryou_map');
                global.logger.info('阴阳寮：进入结界');
            }else {
                this.clickButton('onmyoryou_exit');
                global.logger.info('阴阳寮：离开阴阳寮');
            }
            return;
        }

        if(this.match_tag == 'onmyoryou_map') {
            if(!this.timeTo('liaotili')) {
                this.clickButton('onmyoryou_map_exit');
                return;
            }else{
                this.clickButton('onmyoryou_map_go');
                sleep(5000);
                this.clickPoint([958, 323]);
                sleep(2000);
                this.clickPoint([1656, 446]);
                state.jiejie.last_get_liaotili = Date.now();
                return;
            }
        }

        //结界
        if(this.match_tag == 'jiejie'){
            if(this.clickIfColorsExist('jiejie_tilishihe_tip_1') || this.clickIfColorsExist('jiejie_tilishihe_tip')){
                logger.info('结界：体力食盒可以领了，打开体力食盒');
                return;
            }

            this.clickButton('jiejie_jiyang_get');
            sleep(random(1200, 1400));
            this.updateCapture();
            if(this.findColors('award')) {
                return;
            }

            if(this.timeTo('jiyang')) {
                this.clickButton('jiejie_feed')
                logger.info('结界：进入式神育成，准备寄养');
                return;
            }

            this.clickButton('jiejie_exit');
            return;
        }

        //体力食盒
        if(this.match_tag == 'jiejie_tilishihe') {
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
        if(this.match_tag == 'jiejie_feed') {
            if (!this.findColors('jiejie_feed_other')) {
                sleep(random(1200, 1400))
                if (this.findColors('jiejie_jiyang_null')) {
                    global.logger.info('寄养，冲！');
                    this.clickButton('jiejie_to_jiyang')
                    sleep(2000);
                    return;
                } else {
                    if(state.jiejie.jiyang_end < Date.now()) {
                        state.jiejie.jiyang_end = Date.now() + 30*60*1000;
                        //这里由于不清楚多久能寄养结束，那个数字的位置很难OCR，就只好30分钟后再来看看了 
                        global.logger.info('寄养：不清楚您的寄养多久结束，30分钟后再回来看看');
                        this.clickButton('jiejie_feed_exit');
                        return;
                    }else{
                        global.logger.info('寄养：下一轮寄养将会在 ' + (state.jiejie.jiyang_end - Date.now())/1000 + ' 秒后继续');
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
        if(this.match_tag == 'jiejie_jiyang_select') {
            let award_images = images.clip(this.screenshot, 1146, 633, 189, 40);
            let award = global.ocr.recognize(award_images);
            logger.info('寄养：识别奖励'+award);
            let award_arr = [award.match(/体力\+(\d+)/), award.match(/勾玉\+(\d+)/)];
            if(state.jiejie.jiyang_try_times == 20) {
                this.resetJiyangSelect()
                state.jiejie.jiyang_try_times += 1;
                return;
            }
            if(state.jiejie.jiyang_force >= 30) {
                this.resetJiyangSelect()
                sleep(1000);
                this.clickButton('jiejie_jiyang_select_enter');
                global.logger.info('寄养：没啥能选的了，直接第一个吧');
                state.jiejie.jiyang_try_times = 0;
                sleep(2000);
                return;
            }else if(state.jiejie.jiyang_try_times <= 20 && award_arr[0] != null && award_arr[0][1] >= state.jiejie.min_jiyang_tili_1
                || state.jiejie.jiyang_try_times > 20 && award_arr[0] != null && award_arr[0][1] >= state.jiejie.min_jiyang_tili_2) {
                this.clickButton('jiejie_jiyang_select_enter');
                global.logger.info('寄养：发现体力结界卡, 尝试进入');
                state.jiejie.jiyang_try_times = 0;
                sleep(2000);
                return;
            }else if(state.jiejie.jiyang_try_times <= 20 && award_arr[1] != null && award_arr[1][1] >= state.jiejie.min_jiyang_gouyu_1
                || state.jiejie.jiyang_try_times > 20 && award_arr[0] != null && award_arr[0][1] >= state.jiejie.min_jiyang_gouyu_2) {
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
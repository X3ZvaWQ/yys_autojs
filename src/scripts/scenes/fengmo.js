import { Scene } from './scene';
import answers from '../../../assets/fengmo.json'

export class FengMo extends Scene {
    constructor() {
        super();
        this.scene_name = 'fengmo';
        this.judge_colors = [
            'fengmo_interface',
            'fengmo_question_interface',
            'fengmo_boss_mass_button',
            'fengmo_boss_prepare',
            'fengmo_boss_settlement'
        ];
        this.colors = {
            "fengmo_interface": {
                "region":[1454,936,175,141],
                "desc":"逢魔之时界面判定，通过右下角的寻找首领按钮判断",
                "first":"#673434",
                "colors":[[12,1,"#ba9980"],[23,4,"#ac9b9b"],[21,2,"#654847"],[-13,6,"#e3d2d2"],[-20,3,"#c0beae"],[-32,-14,"#bd9f8b"],[-29,-34,"#875454"],[4,-38,"#7a6f6f"]]
            },
            "fengmo_question": {
                "region":[1766,275,154,597],
                "desc":"封魔密信按钮",
                "first":"#ffdd1b",
                "colors":[[3,0,"#d2801c"],[3,-5,"#7f401e"],[2,-7,"#af7e20"],[3,-8,"#c98b4d"],[2,-8,"#9f7d5b"],[1,-8,"#825b26"],[7,-8,"#dfc197"],[8,-8,"#f1dcab"],[12,4,"#ddb989"]]
            },
            "fengmo_question_2": {
                "region":[1770,285,147,535],
                "desc":"封魔密信按钮",
                "first":"#ffe429",
                "colors":[[2,-1,"#d1841d"],[3,-3,"#db9e82"],[5,-3,"#9d3e1c"],[6,-3,"#e2c09e"],[7,-3,"#fcdab8"],[10,0,"#f4dbaa"],[11,1,"#d1b281"],[11,3,"#dbba89"],[-6,0,"#6e4f2d"]]
            },
            "fengmo_question_3": {
                "region":[1797,441,113,363],
                "desc":"封魔密信按钮",
                "first":"#fecc11",
                "colors":[[-2,7,"#dfa208"],[11,4,"#e3c18e"],[12,0,"#d3b281"],[10,-8,"#f3d3a4"],[-8,-17,"#ebc9a7"],[-17,-12,"#efca9e"],[-21,2,"#ebc69a"],[-17,6,"#dab183"],[-1,19,"#bb4501"]]
            },
            "fengmo_question_4": {
                "region":[1749,275,167,573],
                "desc":"封魔密信按钮",
                "first":"#f2b005",
                "colors":[[-6,-1,"#e4c28f"],[-5,-17,"#e9bf9e"],[1,-16,"#947250"],[9,-12,"#eeddaa"],[16,-3,"#dab988"],[13,9,"#e7c292"],[-1,16,"#d9c593"],[-17,9,"#e6be92"],[-23,3,"#e9c496"]]
            },
            "fengmo_question_5": {
                "region":[1749,275,167,573],
                "desc":"封魔密信按钮",
                "first":"#fbd00d",
                "colors":[[3,7,"#b97910"],[13,-9,"#efd3a4"],[17,0,"#e7c08e"],[-7,-21,"#ebc0a5"],[2,-17,"#ddc547"],[6,-16,"#a24e38"],[-22,2,"#ebc79a"],[-13,-11,"#edcc9a"],[-16,15,"#e3bd8e"]]
            },
            "fengmo_question_interface": {
                "region":[482,17,610,189],
                "desc":"封魔密信答题界面",
                "first":"#a72c01",
                "colors":[[4,-1,"#af4620"],[5,1,"#d4c2b3"],[10,3,"#a72c01"],[12,11,"#d5bfb0"],[15,13,"#c99780"],[16,16,"#a72c01"],[20,20,"#d7c6ba"],[48,20,"#d8c8bb"],[51,21,"#bc7051"],[55,20,"#a82e03"]]
            },
            "fengmo_damo_common": {
                "region":[1776,249,134,175],
                "desc":"逢魔之时，达摩亮着的时候，这个时候应该继续逢魔",
                "first":"#d99573",
                "colors":[[0,-6,"#f4f4e3"],[8,-6,"#dddddd"],[19,-6,"#efcd45"],[15,-11,"#000000"],[11,-12,"#af927e"],[-12,-14,"#251e1e"],[-15,-10,"#000000"],[-19,-7,"#e6cc77"],[-20,-4,"#fef7da"]]
            },
            "fengmo_damo_end": {
                "region":[1766,283,150,134],
                "desc":"封魔之时，达摩显示已领取，这个时候应该判断要不要打boss",
                "first":"#f8d6d6",
                "colors":[[1,1,"#ae1a1a"],[2,2,"#ac1313"],[3,3,"#c17b7b"],[6,4,"#e5bfbf"],[12,9,"#b8b1b1"],[15,9,"#383838"],[16,-4,"#0c0000"],[21,0,"#ad1414"],[22,2,"#db9393"]]
            },
            "fengmo_boss_mass_button": {
                "region":[1518,768,284,300],
                "desc":"封魔boss 集结按钮",
                "first":"#eed1a2",
                "colors":[[3,-4,"#272420"],[8,-4,"#e2cb9d"],[12,-2,"#272420"],[10,5,"#f3d5a5"],[5,11,"#272420"],[2,12,"#eed5a4"],[-9,10,"#f1d4a4"],[-10,11,"#726652"],[-12,12,"#272420"]]
            },
            "fengmo_boss_mass_confirm": {
                "region":[594,328,731,424],
                "desc":"封魔，集结挑战，每日只能挑战1只稀有boss的提示",
                "first":"#2e2a25",
                "colors":[[-1,4,"#cbb59e"],[5,4,"#2d2924"],[325,6,"#cbb59e"],[328,6,"#2a2622"],[333,6,"#cbb59e"],[338,10,"#292621"],[341,52,"#cbb59e"],[345,49,"#312d27"],[345,46,"#a49380"]]
            },
            "fengmo_boss_prepare": {
                "region":[7,2,309,143],
                "desc":"逢魔准备场景",
                "first":"#d6911a",
                "colors":[[11,6,"#e08b02"],[137,-5,"#e8940c"],[126,0,"#dc9820"],[127,-58,"#d7c5a2"],[125,-67,"#988765"],[218,-71,"#8a8a57"],[226,-80,"#d4c4a3"],[238,-62,"#d4c4a3"],[22,-70,"#2c1f0f"]]
            },
            "fengmo_boss_prepare_award": {
                "region":[4,164,1914,727],
                "desc":"逢魔准备场景的小怪送的奖励",
                "first":"#b1461f",
                "colors":[[19,-1,"#d26126"],[19,-5,"#ffeebb"],[23,-6,"#e9c27a"],[25,-6,"#cf5824"],[4,-13,"#fff5d3"],[4,-16,"#dc8742"],[4,-18,"#ad481d"],[-25,-2,"#6b2717"],[-16,7,"#fff4d2"]]
            },
            "fengmo_boss_settlement": {
                "region":[435,4,1009,291],
                "desc":"封魔boss打完的结算",
                "first":"#cfc0aa",
                "colors":[[3,-25,"#831a10"],[-27,-24,"#c4b39a"],[-26,-9,"#d4b2a1"],[-25,-6,"#902818"],[30,14,"#9e1c11"],[257,-18,"#bda573"],[280,-24,"#88693a"],[280,-26,"#e2c794"],[315,-28,"#e3d3a2"]]
            },
            "fengmo_boss_prepare_end": {
                "region":[14,703,135,146],
                "desc":"封魔boss打完之后停留的300秒",
                "first":"#eeccaa",
                "colors":[[0,-2,"#d0a280"],[0,-3,"#ac6d51"],[0,-4,"#7d2b18"],[-7,4,"#882211"],[-2,6,"#db7564"],[1,8,"#e6c491"],[5,7,"#951911"],[5,-1,"#eeccaa"]]
            },
        };
        this.buttons = {
            "fengmo_next": {
                "center": [1778, 985], 
                "offset": [80, 80],
                "desc": "逢魔之时右下角的逢魔按钮"
            },
            "fengmo_center": {
                "center": [963, 518],
                "offset": [100, 100],
                "desc": "逢魔屏幕中间，一般是首领的位置" 
            },
            "fengmo_find_boss":{
                "center": [1543, 999],
                "offset": [50, 50],
                "desc": "逢魔寻找首领" 
            },
            "fengmo_boss_mass": {
                "center": [1671, 898],
                "offset": [100, 100], 
                "desc": "封魔，集结挑战"
            },
            "fengmo_boss_mass_confirm_yes": {
                "center": [1139, 648],
                "offset": [100, 40], 
                "desc": "封魔，集结挑战，确定"
            },
            "fengmo_boss_mass_confirm_dontnotice": {
                "center": [843, 543],
                "offset": [40, 40], 
                "desc": "封魔，集结挑战，不再提示"
            },
            "fengmo_boss_mass_exit": {
                "center": [1709, 111],
                "offset": [30, 30], 
                "desc": "封魔，集结挑战，退出"
            },
            "fengmo_award": {
                "center": [1851, 350], 
                "offset": [80, 80],
                "desc": "逢魔之时四次之后领奖"
            },
            "fengmo_boss_prepare_exit": {
                "center": [53, 45],
                "offset": [30, 30], 
                "desc": "封魔boss，准备场景，退出"
            },
            "fengmo_boss_settlement_exit": {
                "center": [1645, 145],
                "offset": [200, 100], 
                "desc": "离开结算场景"
            },
            "fengmo_exit": {
                "center": [78, 70],
                "offset": [50, 50],
                "desc": "退出封魔"
            },
            "fighting_victory_confirm": {
                "center": [951, 1040],
                "offset": [200,30],
                "desc": "战斗结束的时候点屏幕继续。"
            },
        }
    }

    execute() {
        if(this.match_tag == 'fengmo_interface') {
            if (
                this.clickIfColorsExist('fengmo_question')||
                this.clickIfColorsExist('fengmo_question_2')||
                this.clickIfColorsExist('fengmo_question_3')||
                this.clickIfColorsExist('fengmo_question_4')||
                this.clickIfColorsExist('fengmo_question_5')
            ) {
                global.logger.info('逢魔之时：发现封魔密信，尝试点击');
                return;
            }
            if (this.findColors('fengmo_damo_common') != null) {
                global.logger.info('逢魔之时：下一次见鬼');
                this.clickButton('fengmo_next');
                sleep(random(3000, 4000));
                return;
            }
            if (this.findColors('fengmo_damo_end') != null) {
                if (this.timeTo('fengmo')) {
                    global.logger.info('逢魔之时：寻找首领');
                    this.clickButton('fengmo_find_boss');
                    sleep(2000);
                    global.logger.info('逢魔之时：点击首领');
                    this.clickButton('fengmo_center');
                    global.state.fengmo.clickedclicked = false;
                    return;
                } else {
                    global.logger.info('逢魔之时：封魔任务完成，离开该界面');
                    this.clickButton('fengmo_exit')
                    return;
                }
            } else {
                global.logger.info('逢魔之时：领取封魔奖励');
                this.clickButton('fengmo_award');
            }
        }

        if(this.match_tag == 'fengmo_question_interface') {
            let img = images.clip(this.screenshot, 644, 252, 666, 125);
            global.logger.verbose('尝试ocr获取问题');
            let question = global.ocr.recognize(img).replace('5', '?');
            global.logger.verbose('服务器ocr响应结束，问题是:' + question);
            let ans;
            let question_find = false;

            for (let ques of answers) {
                if (ques.question == question) {
                    ans = ques.answer;
                    question_find = true;
                    break;
                }
            }
            let opts = [
                {
                    opt: global.ocr.recognize(images.clip(this.screenshot, 690, 413, 559, 64)),
                    point: { x: 973, y: 447 }
                },
                {
                    opt: global.ocr.recognize(images.clip(this.screenshot, 688, 547, 555, 66)),
                    point: { x: 973, y: 576 }
                },
                {
                    opt: global.ocr.recognize(images.clip(this.screenshot, 679, 671, 579, 73)),
                    point: { x: 973, y: 708 }
                }
            ];
            global.logger.info('逢魔之时：可选答案：' + opts.map(x => x.opt).toString());
            if (!question_find) {
                global.logger.warn('逢魔之时：题库找不到问题，尝试点击第一个答案，请尽早添加该问题，问题：' + question);
                this.clickPoint(opts[0].point);
                sleep(800);
                return;
            }
            if (ans == undefined) {
                global.logger.warn('逢魔之时：找不到问题的答案，尝试点击第一个，问题：' + question);
                this.clickPoint(opts[0].point);
                sleep(800);
                return;
            }
            for (let opt of opts) {
                if (ans.split('|').indexOf(opt.opt) != -1) {
                    this.clickPoint(opt.point);
                    global.logger.info('逢魔之时：封魔密信-问题已回答，问题：' + question + ', 答案：' + opt.opt);
                    sleep(800);
                    return;
                }
            }
            global.logger.info('逢魔之时：找到问题的答案了，但是识别不出来答案在哪一个格子，点第一个');
            this.clickPoint(opts[0].point);
            sleep(800);
            return;
        }

        if(this.match_tag == 'fengmo_boss_mass_button') {
            if (global.state.fengmo.clicked) {
                if (global.state.fengmo.boss_try_times >= 4) {
                    global.logger.warn('逢魔之时：逢魔好多次都进不去，今天可能打了，明天见');
                    this.clickButton('fengmo_boss_mass_exit');
                    global.state.global.last_kill_fengmo_boss = Date.now();
                    global.state.fengmo.boss_try_times = 0;
                    sleep(2000);
                    return;
                }
                global.state.fengmo.boss_try_times += 1;
                global.logger.info('逢魔之时：逢魔，这只满了，下一只，第 ' + global.state.fengmo.boss_try_times + ' 次尝试');
                this.clickButton('fengmo_boss_mass_exit');
                global.state.fengmo.clicked = false;
                return;
            } else {
                global.logger.info('逢魔之时：逢魔，集结挑战');
                this.clickButton('fengmo_boss_mass');
                sleep(1200);
                if (this.findColors('fengmo_boss_mass_confirm')) {
                    this.clickButton('fengmo_boss_mass_confirm_dontnotice');
                    sleep(1200);
                    this.clickButton('fengmo_boss_mass_confirm_yes');
                }
                global.state.fengmo.clicked = true;
                sleep(2000);
            }
        }

        if(this.match_tag == 'fengmo_boss_prepare') {
            global.state.fengmo.clicked = false;
            global.state.fengmo.boss_try_times = 0;
            if (!this.timeTo('fengmo')) {
                this.clickButton('fengmo_boss_prepare_exit');
                global.logger.info('逢魔之时：退出集结界面');
                sleep(1000);
                this.clickButton('fighting_prepare_exit_confirm');
                return;
            }
            if (this.clickIfColorsExist('fengmo_boss_prepare_award')){
                global.logger.info('逢魔之时：看到了小纸人的奖励，尝试点击');
            };
            global.state.global.fighting = 'fengmo';
            return;
        }

        if(this.match_tag == 'fengmo_boss_settlement') {
            this.clickButton('fighting_victory_confirm');
            global.logger.info('逢魔boss击杀结束，更新boss击杀时间，确认结算');
            global.state.global.last_kill_fengmo_boss = Date.now();
        }
    }
}
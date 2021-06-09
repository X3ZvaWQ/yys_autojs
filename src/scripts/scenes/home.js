import { Scene } from './scene';

export class Home extends Scene {
    constructor() {
        super();
        this.scene_name = 'home';
        this.judge_colors = ['home_fold', 'home_spread'];
        this.colors = {
            "home_fold": {
                "region": [1683,854,227,221],
                "desc": "庭院右下角的卷轴收起来",
                "first": "#dd4444",
                "colors": [[3,0,"#7a2525"],[6,-2,"#f45b5b"],[6,-7,"#e3d3cb"],[12,-9,"#d8c9c4"],[13,-2,"#ba5050"],[13,3,"#6a1f28"],[25,1,"#aa9999"],[22,12,"#450b03"],[9,12,"#7c2716"]]
            },
            "home_spread": {
                "region": [1683,854,227,221],
                "desc": "庭院右下角的卷轴展开",
                "first": "#e7b380",
                "colors": [[0,2,"#87643f"],[0,5,"#e4c28f"],[5,5,"#583623"],[-11,5,"#6e3b2a"],[-11,-7,"#d6b481"],[-10,-13,"#83512f"],[11,-13,"#82542e"],[10,-7,"#4d1a09"],[20,0,"#8d6b5a"]]
            },
            "home_dashu": {
                "region":[391,238,1239,568],
                "desc":"庭院误触大树界面的判断",
                "first":"#bd9a57",
                "colors":[[-1,0,"#d0ad6a"],[1,1,"#a17f3c"],[2,2,"#b89643"],[3,3,"#a08239"],[4,4,"#5f451d"],[5,5,"#533a19"],[6,6,"#5d4717"],[7,7,"#675515"],[8,8,"#73621e"],[9,9,"#93813e"],[9,10,"#a79452"]]
            },
            "free_sushi": {
                "region":[6,520,1905,241],
                "desc":"庭院的免费体力*20",
                "first":"#fe3d24",
                "colors":[[2,-10,"#fa3221"],[-18,-10,"#dd501c"],[-18,11,"#0d0f0c"],[-5,11,"#c23c1c"],[9,19,"#aa2f1b"],[16,9,"#fb5625"],[18,-3,"#ee6525"],[11,-13,"#df5623"],[7,26,"#242a20"],[69,-32,"#484683"],[86,288,"#231f35"]]
            },
            "permanent_jade": {
                "region":[6,520,1905,241],
                "desc":"永久勾玉卡可以领的提示",
                "first":"#e11d0c",
                "colors":[[0,6,"#d1af9e"],[8,-18,"#880e0e"],[8,-24,"#f35c4b"],[4,-23,"#fdb9a8"],[-4,-22,"#fef1e0"],[-7,-23,"#d01515"],[-26,-21,"#d9c8b7"],[-20,-9,"#f8f8ed"],[-17,-7,"#5f2f1e"]]
            },
            "free_buff": {
                "region":[6,520,1905,241],
                "desc":"周末领buff的提示",
                "first":"#3a9ffe",
                "colors":[[0,2,"#0f73d7"],[2,2,"#877b74"],[5,-1,"#ad883d"],[5,-5,"#79b5a1"],[1,-9,"#26d0e1"],[-3,-3,"#667189"],[-7,-3,"#197fc3"],[-12,15,"#bf9f4f"],[-17,15,"#322100"],[-25,15,"#d18d2f"]]
            },
            "free_buff_confirm": {
                "region":[404,282,1122,492],
                "desc":"周末领免费buff时候的确认框",
                "first":"#f4b25f",
                "colors":[[19,-11,"#2a2621"],[18,-16,"#dea358"],[20,-3,"#ebac5c"],[-12,-3,"#eeae5d"],[-13,-8,"#81623c"],[-16,5,"#312b23"],[-106,-274,"#167ab5"],[-71,-264,"#e7c642"],[64,-260,"#b8520f"]]
            },
            "sign_in": {
                "region":[6,206,1900,663],
                "desc":"签到",
                "first":"#951c0b",
                "colors":[[-2,-4,"#ffece4"],[-7,2,"#fff5e5"],[-8,2,"#e0b2a2"],[-9,2,"#bd695a"],[-10,2,"#9a2a1d"],[-9,1,"#99170c"],[8,3,"#fdf3ea"],[10,6,"#9d2a22"],[3,15,"#d7776c"]]
            }
        };
        this.buttons = {
            "home_friends": {
                "center": [1323, 951], 
                "offset": [50, 50],
                "desc": "庭院 好友列表"
            },
            "home_store": {
                "center": [950, 950], 
                "offset": [50, 50],
                "desc": "庭院的商店按钮"
            },
            "home_tansuo": {
                "center": [756, 222], 
                "offset": [50, 50],
                "desc": "从庭院前往探索"
            },
            "home_huodong": {
                "center": [1067, 264], 
                "offset": [50, 50],
                "desc": "从庭院前往活动"
            },
            "home_xianshi": {
                "center": [384, 944], 
                "offset": [50, 50],
                "desc": "庭院的现世妖约按钮"
            },
            "home_onmyoryou": {
                "center": [755, 947],
                "offset": [50, 50],
                "desc": "庭院的阴阳寮按钮"
            }
        }
    }

    goToTanSuo() {
        global.automator.swipe([1678, 813], [65, 827]);
        sleep(800);
        this.clickButton('home_tansuo');
        sleep(1200);
    }

    goToHuoDong() {
        global.automator.swipe([1678, 813], [65, 827]);
        sleep(800);
        this.clickButton('home_huodong');
        sleep(1200);
    }

    execute() {
        state.temp.home_excute_times += 1;
        if(state.temp.home_excute_times >= 12) {
            global.logger.warn('游戏疑似卡死在首页，尝试重启游戏');
            app.stopPackage(state.settings.packageName);
            state.temp.home_excute_times = 0;
            return;
        }
        if(state.settings.mode == 'hd'){
            this.goToHuoDong();
            return;
        }
        if (this.clickIfColorsExist('free_sushi')){
            global.logger.info('庭院：领取庭院免费体力*20');
            return;
        } 
        if (this.clickIfColorsExist('permanent_jade')){
            global.logger.info('庭院：领取永久勾玉卡奖励');
            return;
        }
        if (this.clickIfColorsExist('free_buff')) {
            return;
        }
        if (this.clickIfColorsExist('free_buff_confirm')){
            global.logger.info('庭院：领取周末免费buff');
        }
        if (this.clickIfColorsExist('sign_in')){
            global.logger.info('庭院：签到');
            return;
        } 
        if (this.clickIfColorsExist('home_fold')){
            global.logger.info('庭院：打开庭院卷轴');
            return;
        }
        if (this.timeTo('jiyang') || this.timeTo('liaotili')) {
            this.clickButton('home_onmyoryou');
            global.logger.info('庭院：进入阴阳寮准备新一轮寄养/领取体力补给');
            return;
        }
        if (this.timeTo('getBlackEgg')) {
            global.logger.info('庭院：尝试领免费黑蛋礼包');
            this.clickButton('home_store');
            return;
        }
        if(this.timeTo('friendPoint')){
            global.logger.info('庭院：尝试开始送友情点');
            this.clickButton('home_friends');
            return;
        }
        if (this.timeTo('fengmo') || this.timeTo('digui')) {
            this.clickButton('home_xianshi');
            global.logger.info('庭院：冲！打封魔/地鬼去咯');
            return;
        }
        if (Object.keys(state.tansuo.setting.list) > 0 || this.timeTo('liaotu')) {
            global.logger.info('庭院：寮突冷却完毕/存在探索任务，前往地图');
            this.goToTanSuo();
            return;
        }
        state.temp.home_excute_times -= 1;
    }
}
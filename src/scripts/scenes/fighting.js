import { Scene } from './scene';

export class Fighting extends Scene {
    constructor() {
        super();
        this.scene_name = 'fighting';
        this.judge_colors = ['fighting', 'fighting_exit_confirm', 'fighting_prepare', 'fighting_exchange', 'fighting_exchange_dark'];
        this.colors = {
            "fighting": {
                "region":[6,3,324,104],
                "desc":"战斗中",
                "first":"#463827",
                "colors":[[3,2,"#7c6b5a"],[2,5,"#d3c2a0"],[28,4,"#d2c2a1"],[25,0,"#80704e"],[23,1,"#94845a"],[22,-4,"#301e0d"],[104,3,"#48401e"],[104,7,"#aa8b4e"],[112,8,"#d7c5a2"]]
            },
            "fighting_exit_confirm": {
                "region":[750,421,410,102],
                "desc":"",
                "first":"#cbb59e",
                "colors":[[-1,1,"#9f8e7c"],[-1,2,"#7b6e60"],[-1,3,"#433d36"],[0,4,"#342f2a"],[30,5,"#c5b09a"],[31,4,"#6f6457"],[32,0,"#35312b"],[40,-2,"#2a2722"],[61,20,"#87796a"]]
            },
            "fighting_prepare": {
                "region":[1565,683,344,392],
                "desc":"战斗准备页面， 判断鼓的下面一点不变色的部分",
                "first":"#ddb47a",
                "colors":[[18,-23,"#605850"],[15,-25,"#968675"],[8,-23,"#100a05"],[2,-20,"#b18b5a"],[-38,14,"#bf8654"],[-38,20,"#765a3a"],[-45,27,"#cca56e"],[-67,28,"#f3d6a1"],[-63,30,"#9e743d"]]
            },
            "fighting_prepare_maxlevel_2": {
                "region":[585,299,358,518],
                "desc":"战斗准备的时候从左往右第二个式神的满级标记",
                "first":"#ff9f17",
                "colors":[[7,-1,"#f9a41e"],[6,6,"#fdb914"],[13,19,"#f3dd1a"],[6,14,"#e7c50a"],[-1,14,"#f6cc11"],[-12,22,"#fbea20"],[-14,10,"#e5b21f"],[-11,-1,"#e7a32d"]]
            },
            "fighting_prepare_maxlevel_3": {
                "region":[935,471,325,353],
                "desc":"战斗准备的时候从左往右第三个式神的满级标记",
                "first":"#eca831",
                "colors":[[9,0,"#f69f25"],[13,3,"#b4790d"],[16,6,"#f5b112"],[17,15,"#f3d116"],[4,18,"#edcc08"],[-3,21,"#fdec20"],[-1,18,"#c0af25"],[-3,10,"#eab71e"],[-4,9,"#d8a51e"]]
            },
            "fighting_exchange_maxlevel_1": {
                "region":[133,180,350,381],
                "desc":"战斗准备的时候 换式神阶段 从左往右第1个式神的满级标记",
                "first":"#c68214",
                "colors":[[6,0,"#ec9721"],[9,1,"#fe9f19"],[12,3,"#a6720b"],[9,6,"#f7b31d"],[8,14,"#facc11"],[10,14,"#cdaf11"],[13,15,"#bf9d04"],[17,16,"#efcd12"],[21,19,"#f3e216"]]
            },
            "fighting_exchange_maxlevel_2": {
                "region":[726,148,450,518],
                "desc":"战斗准备的时候 换式神阶段 从左往右第2个式神的满级标记",
                "first":"#f79f23",
                "colors":[[1,5,"#f9a819"],[7,6,"#fab616"],[7,13,"#e9c70c"],[0,13,"#facc11"],[-3,21,"#bbaa00"],[16,18,"#b89a07"],[-4,14,"#fcca11"],[-2,8,"#e5a119"],[1,0,"#fe9f19"]]
            },
            "fighting_exchange_dark": {
                "region":[20,394,164,174],
                "desc":"换式神界面选择式神种类",
                "first":"#4ab0d2",
                "colors":[[6,0,"#288eb0"],[11,0,"#3398ca"],[5,4,"#399fc1"],[1,18,"#66c5dd"],[4,23,"#77cce3"],[6,26,"#89deef"],[33,26,"#7ce2f3"],[34,13,"#55bbdd"],[49,10,"#48b1d2"]]
            },
            "fighting_exchange": {
                "region":[2,319,81,102],
                "desc":"换式神界面判断",
                "first":"#104367",
                "colors":[[0,25,"#041a38"],[6,9,"#0a2f51"],[11,4,"#0e3d61"],[22,18,"#072445"],[31,11,"#0f4265"],[34,31,"#092e52"]]
            },
            "fighting_exchange_type_all": {
                "region":[24,918,155,148],
                "desc":"",
                "first":"#9e9a96",
                "colors":[[5,9,"#221810"],[4,16,"#ffffff"],[9,18,"#22180f"],[8,27,"#484038"],[41,1,"#ffffff"],[36,9,"#f2f1f0"],[54,9,"#ffffff"],[57,6,"#69625c"],[60,18,"#241c18"]]
            },
        };
        this.buttons = {
            "fighting_prepare_exit": {
                "center": [53, 48],
                "offset": [30,30],
                "desc": "战斗的时候左上角的退出"
            },
            "fighting_prepare_exit_confirm": {
                "center": [1112, 632],
                "offset": [70,30],
                "desc": "确认退出战斗"
            },
            "fighting_exchange": {
                "center": [793, 826],
                "offset": [50,50],
                "desc": "换狗粮"
            },
            "fighting_exchange_type": {
                "center": [98, 983],
                "offset": [50,50],
                "desc": "换狗粮，左下角切换式神类型"
            },
            "fighting_exchange_type_sucai": {
                "center": [102, 482],
                "offset": [50,50],
                "desc": "换狗粮，左下角切换式神类型 素材"
            },
            "fighting_exchange_type_n": {
                "center": [256, 503],
                "offset": [100,100],
                "desc": "换狗粮，左下角切换式神类型N"
            },
        }
    }

    execute() {
        //战斗中
        if(this.match_tag == 'fighting') {
            //todo 手动切自动
            return;
        }
        //退出战斗确认
        if(this.match_tag == 'fighting_exit_confirm') {
            this.clickButton('fighting_prepare_exit_confirm');
            global.logger.info('退出战斗：确认退出战斗');
            return;
        }
        //战斗准备
        if(this.match_tag == 'fighting_prepare') {
            // 探索准备的时候换狗粮
            if (global.state.global.fighting == 'tansuo') {
                if(this.findColors('fighting_prepare_maxlevel_2') || this.findColors('fighting_prepare_maxlevel_3')) {
                    this.clickButton('fighting_exchange');
                    global.logger.info('狗粮更换：发现满级标志，准备更换狗粮');
                    return;
                }
            }
            //突破掉级
            if (global.state.global.fighting == 'tupo' && global.state.tupo.geren_demotion) {
                this.clickButton('fighting_prepare_exit');
                global.state.tupo.geren_fight_clicked = false;
                global.state.tupo.geren_demotion = false;
                global.logger.info('战斗准备：突破掉级，尝试直接退出战斗');
                return;
            }
            //防止错判没突破券
            if (global.state.global.fighting == 'tupo' && global.state.tupo.geren_fight_clicked) {
                global.state.tupo.geren_fight_clicked = false;
            }
            this.clickButton('fighting_prepare');
            global.logger.info('战斗准备：点击准备，开始战斗');
            return;
        }
        //换狗粮
        if(this.match_tag == 'fighting_exchange') {
            if(this.findColors('fighting_exchange_maxlevel_1')){
                if(this.findColors('fighting_exchange_type_all')) {
                    this.clickButton('fighting_exchange_type');
                    return;
                }
                //移动
                global.automator.swipe([339, 860], [279, 649]);
                //复位
                sleep(800);
                global.automator.swipe([339, 860], [639, 860]);
                global.logger.info('狗粮更换：更换第一个位置的狗粮...');
                return;
            }
            if(this.findColors('fighting_exchange_maxlevel_2')){
                if(this.findColors('fighting_exchange_type_all')) {
                    this.clickButton('fighting_exchange_type');
                    return;
                }
                //移动
                global.automator.swipe([339, 860], [958, 595]);
                //复位
                sleep(800);
                global.automator.swipe([339, 860], [639, 860]);
                global.logger('狗粮更换：更换第二个位置的狗粮...');
                return;
            }
            this.clickButton('fighting_prepare');
            return;
        }
        //换狗粮 选素材类型
        if(this.match_tag == 'fighting_exchange_dark') {
            if(global.state.tansuo.setting.food_priority == 'sucai') {
                this.clickButton('fighting_exchange_type_sucai');
                global.logger.info('狗粮更换：根据用户设置, 切换到素材');
                return;
            }else if(global.state.tansuo.setting.food_priority == 'n') {
                this.clickButton('fighting_exchange_type_n');
                global.logger.info('狗粮更换：根据用户设置, 切换到N卡');
                return;
            }else {
                return;
            }
        }

    }
}
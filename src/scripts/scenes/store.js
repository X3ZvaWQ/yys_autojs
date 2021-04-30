import { Scene } from './scene';

export class Store extends Scene {
    constructor() {
        super();
        this.scene_name = 'store';
        this.judge_colors = ['store_gift', 'store_interface'];
        this.colors = {
            "free_blackegg": {
                "region":[234,201,270,292],
                "desc":"商城里的免费黑蛋",
                "first":"#a5834d",
                "colors":[[-4,104,"#db764e"],[-13,103,"#af6142"],[-15,102,"#312923"],[-19,100,"#96543b"],[-22,102,"#2f2822"],[-26,103,"#b25f41"],[-29,104,"#292520"],[9,102,"#272420"],[13,103,"#96593e"]]
            },
            "store_gift_red": {
                "region":[1644,876,227,200],
                "desc":"商店右下角 带红点的礼包屋",
                "first":"#d9732f",
                "colors":[[12,-7,"#fbac57"],[11,-10,"#cc3b33"],[15,-10,"#ce5735"],[15,-20,"#fcc271"],[19,-29,"#664337"],[19,-38,"#cbdfdf"],[38,-41,"#e9c7a5"],[40,-41,"#d95e4a"],[49,-41,"#fd0d0d"]]
            },
            "store_gift": {
                "region":[1715,111,187,356],
                "desc":"礼包屋的界面判断",
                "first":"#ffe2be",
                "colors":[[3,-2,"#8d6358"],[4,-4,"#572525"],[-4,-4,"#ffe7ca"],[-7,-4,"#d9bba4"],[-10,-4,"#5a2828"],[-10,9,"#f3d6b4"],[-9,11,"#855a51"],[-10,16,"#572525"],[-6,22,"#fbd7a9"],[-3,25,"#5c2a28"]]
            },
            "store_interface": {
                "region":[1446,909,175,166],
                "desc":"商店的魂玉屋图标，主要用来判断当前所处的界面",
                "first":"#f2dfaa",
                "colors":[[-2,2,"#f2d696"],[-3,-1,"#f9cc66"],[2,2,"#cd9e49"],[6,4,"#69474a"],[6,9,"#452836"],[6,11,"#423a32"],[6,12,"#cbc8c6"],[7,15,"#ffffff"],[-3,21,"#da63ff"]]
            },
        };
        this.buttons = {
            "store_exit": {
                "center": [76, 86],
                "offset": [30,30],
                "desc": "离开商店"
            },
            "store_gift_exit": {
                "center": [56, 40],
                "offset": [30,30],
                "desc": "离开礼包屋"
            },
        }
    }

    execute() {
        if(this.match_tag == 'store_gift') {
            if (!clickIfColorsExist('free_blackegg')) {
                state.global.last_get_free_blackegg = Date.now();
                global.logger.info('免费黑蛋领了/已经领过了，退出商店');
                this.clickButton('store_gift_exit');
                return;
            }
        }
        if(this.match_tag == 'store_interface') {
            if (!clickIfColorsExist('store_gift_red')) {
                state.global.last_get_free_blackegg = Date.now();
                global.logger.info('免费黑蛋领了/已经领过了，退出商店');
                this.clickButton('store_exit');
                continue;
            }
            break;
        }
    }
}
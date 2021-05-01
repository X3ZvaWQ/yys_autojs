import { Scene } from './scene';

export class Friend extends Scene {
    constructor() {
        super();
        this.scene_name = 'friend';
        this.judge_colors = ['friend_point'];
        this.colors = {
            "friend_point": {
                "region":[83,916,240,161],
                "desc":"友情点列表",
                "first":"#7b4346",
                "colors":[[-21,0,"#fc5252"],[20,1,"#fc5252"],[-9,19,"#d61c1b"],[6,22,"#cc1919"],[20,11,"#ff5544"],[0,46,"#ffecce"],[1,60,"#ff4f4f"],[17,64,"#ff4e51"],[27,74,"#fffaee"]]
            },
            "friend_received_1": {
                "region":[590,113,194,860],
                "desc":"粉色的收到友情点",
                "first":"#80103e",
                "colors":[[-2,2,"#fdb0d2"],[-4,5,"#d2638f"],[-6,7,"#ea579b"],[-9,6,"#e13f81"],[-9,8,"#f1adcf"],[8,3,"#f99ac1"],[12,0,"#fca5c7"],[10,9,"#eb6098"],[2,-3,"#e33c80"]]
            },
            "friend_send_1": {
                "region":[604,221,154,705],
                "desc":"橙色的发出友情点",
                "first":"#a88573",
                "colors":[[-2,2,"#e38252"],[-5,-6,"#eeccbb"],[-1,-7,"#461915"],[2,-10,"#a05533"],[6,-5,"#eda875"],[8,0,"#ed8d57"],[10,10,"#e07945"],[7,18,"#efd2d1"],[-3,16,"#d99681"]]
            },
            "friend_received_2": {
                "region":[594,240,166,654],
                "desc":"普通的收到友情点",
                "first":"#a38d4a",
                "colors":[[3,-4,"#dec662"],[6,2,"#f1cc64"],[7,11,"#dd9933"],[0,16,"#f1ffd9"],[-8,13,"#ffb311"],[-5,13,"#da8502"],[-9,3,"#ffba01"],[-5,-1,"#d7a14b"],[-4,-2,"#fff4c1"]]
            },
            "friend_send_2": {
                "region":[594,240,166,654],
                "desc":"普通的发出友情点",
                "first":"#66615b",
                "colors":[[1,1,"#100906"],[2,0,"#9d5a38"],[7,3,"#eb8550"],[20,7,"#e67c3c"],[29,11,"#e36c28"],[-4,22,"#fff9f1"],[-10,10,"#f38a5e"],[-16,-7,"#f8f4c8"],[-22,-20,"#c15426"]]
            }
        };
        this.buttons = {
            "friend_exit": {
                "center": [1770, 176], 
                "offset": [50, 50],
                "desc": "好友列表 切换到 友情点"
            },
            "friend_switch": {
                "center": [203, 998], 
                "offset": [50, 50],
                "desc": "好友列表 切换到 友情点"
            },
        }
    }

    execute() {
        if(!this.timeTo('friendPoint')){
            this.clickButton('friend_exit');
            global.logger.info('友情点：现在不是送友情点的时候，离开界面');
            return;
        }
        if(this.clickIfColorsExist('friend_send_1')){
            global.state.friends.friend_point_send_count += 1;
            global.logger.info('给亲友送出了一个友情点');
            return;
        }
        if(this.clickIfColorsExist('friend_received_1')){
            global.state.friends.friend_point_send_count += 1;
            global.logger.info('收到了亲友的一个友情点');
            return;
        }
        if(this.clickIfColorsExist('friend_send_2')){
            global.state.friends.friend_point_send_count += 1;
            global.logger.info('给好友送出了一个友情点');
            return;
        }
        if(this.clickIfColorsExist('friend_received_2')){
            global.state.friends.friend_point_send_count += 1;
            global.logger.info('收到了好友的一个友情点');
            return;
        }
        automator.swipe([479, 778], [479, 478]);
        return;
    }
}
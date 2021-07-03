import { Scene } from './scene';

export class Team extends Scene {
    constructor() {
        super();
        this.scene_name = 'team';
        this.judge_colors = ['tongxin_invite_left', 'tongxin_invite_right', 'team_invite_auto', 'team_invite', 'team_waiting', 'invite_again_or_not'];
        this.colors = {
            "tongxin_invite_left": {
                "region":[4,312,672,134],
                "desc":"同心之兰邀请",
                "first":
                "#4d70a5","colors":[[7,4,"#476ca3"],[11,6,"#e8dfcf"],[15,6,"#355f9e"],[19,3,"#a3aebc"],[20,3,"#e5ddcf"],[23,3,"#456aa2"],[-148,-28,"#85745e"],[-143,-13,"#58b361"],[-178,-1,"#836b54"],[-257,-19,"#826b55"],[-284,-25,"#df7464"]]
            },
            "tongxin_invite_right": {
                "region":[1171,191,748,148],
                "desc":"同心之兰邀请",
                "first":"#456aa2",
                "colors":[[2,2,"#d3cdc7"],[5,3,"#39629f"],[7,6,"#d2cec7"],[32,5,"#e5d8c7"],[32,8,"#5f7ca9"],[33,9,"#335e9d"],[103,-15,"#85715d"],[126,-18,"#dd6f5e"],[167,-16,"#867160"],[246,4,"#836c56"],[267,-11,"#5bb664"],[288,-42,"#826b54"]]
            },
            "team_invite_auto": {
                "region":[5,309,405,144],
                "desc":"组队邀请，可以点自动",
                "first":"#ebc58e",
                "colors":[[7,-11,"#d7ae6c"],[3,26,"#55b563"],[-3,39,"#84705c"],[-119,25,"#846f5b"],[-137,8,"#58b361"],[-150,-16,"#86715d"],[-164,-2,"#61bc6a"],[-255,7,"#836c57"],[-285,10,"#de6b5a"],[-285,-26,"#826a54"],[-319,1,"#7f654e"]]
            },
            "team_invite": {
                "region":[2,308,278,154],
                "desc":"组队邀请",
                "first":"#50ab58",
                "colors":[[3,-8,"#5cb26c"],[2,-10,"#71c37e"],[1,-12,"#706154"],[-1,-13,"#83755d"],[-19,15,"#836d5a"],[-112,-8,"#816b55"],[-118,-10,"#68311d"],[-124,-11,"#dc7665"],[-139,-29,"#806851"]]
            },
            "team_waiting": {
                "region":[129,24,103,83],
                "desc":"",
                "first":
                "#22180f","colors":[[-8,7,"#f8f3e0"],[0,7,"#22180f"],[0,12,"#f6f1de"],[4,13,"#362c22"],[5,14,"#8d8577"],[6,15,"#f3eedb"],[7,16,"#f1ecd9"],[9,16,"#6e6659"],[11,19,"#1f170f"],[32,10,"#22180f"],[35,16,"#f8f3e0"],[36,22,"#22180f"]]
            },
            "team_waiting_2_null": {
                "region":[1005,444,149,141],
                "desc":"",
                "first":"#7d7869",
                "colors":[[-1,-1,"#878072"],[-2,-2,"#9d9485"],[-3,-3,"#aca59a"],[-4,-4,"#ada9a8"],[-4,-6,"#a7a196"],[-3,-8,"#8e8480"],[-1,-10,"#7d737b"],[0,-13,"#867d7b"],[6,-13,"#8b837d"],[6,-16,"#8c857d"]]
            },
            "team_waiting_3_null": {
                "region":[1426,495,80,110],
                "desc":"",
                "first":"#493f3f",
                "colors":[[-9,-10,"#706f4d"],[-9,-14,"#797853"],[-16,-22,"#7a7a5b"],[-16,-34,"#8a7f75"],[-18,-33,"#8c8178"],[-20,-29,"#706e53"],[-23,-34,"#89806f"],[-28,-9,"#5f5c4a"],[-33,3,"#958b75"]]
            },
            "invite_again_or_not": {
                "region":[616,392,681,331],
                "desc":"",
                "first":"#332f29",
                "colors":[[-3,-1,"#beaa94"],[-5,4,"#bca792"],[0,6,"#312d27"],[-3,9,"#bca893"],[108,67,"#cbb59e"],[107,71,"#615448"],[107,81,"#715e4f"],[155,82,"#cbb59e"],[157,85,"#595047"],[154,87,"#b9a590"],[157,88,"#453e37"],[150,188,"#df6851"],[172,175,"#8e2844"],[224,206,"#cbb59e"],[274,176,"#d27d39"],[297,183,"#f4b25f"],[386,17,"#342f2a"],[390,18,"#cab49d"]]
            }
        };
        this.buttons = {
            "left_request_reject": {
                "center": [67, 382],
                "offset": [30,30],
                "desc": "拒绝"
            },
            "left_request_access": {
                "center": [211, 382],
                "offset": [30,30],
                "desc": "同意"
            },
            "left_request_auto": {
                "center": [356, 382],
                "offset": [30,30],
                "desc": "自动同意"
            },
            "right_request_reject": {
                "center": [1680, 266],
                "offset": [30,30],
                "desc": "拒绝"
            },
            "right_request_access": {
                "center": [1826, 266],
                "offset": [30,30],
                "desc": "同意"
            },
            "team_wait_go": {
                "center": [1830, 961],
                "offset": [30,30],
                "desc": "同意"
            },
            "default_invite_option": {
                "center": [963, 541], 
                "offset": [120, 15],
                "desc": "同意"
            },
            "invite_again_yes": {
                "center": [1135, 648],
                "offset": [100,30],
                "desc": "同意"
            },
        }
    }

    execute() {
        if(this.match_tag == 'tongxin_invite_left' || this.match_tag == 'tongxin_invite_right') {
            if(state.team.tongxin_request){
                this.clickButton(this.match_tag == 'tongxin_invite_left' ? 'left_request_access' : 'right_request_access');
            }else{
                this.clickButton(this.match_tag == 'tongxin_invite_left' ? 'left_request_reject' : 'right_request_reject');
            }
        }

        if(this.match_tag == 'team_invite_auto') {
            if(state.team.access_request) {
                this.clickButton('left_request_auto');
            }else{
                this.clickButton('left_request_reject')
            }
        }

        if(this.match_tag == 'team_invite') {
            if(state.team.access_request) {
                this.clickButton('left_request_access');
            }else{
                this.clickButton('left_request_reject')
            }
        }

        if(this.match_tag == 'team_waiting') {
            if(state.team.role != 'leader') {
                return;
            }
            if(state.team.number_of_teams == 2 && !this.findColors('team_waiting_2_null')) {
                this.clickButton('team_wait_go');
            }
            if(state.team.number_of_teams == 3 && !this.findColors('team_waiting_3_null')) {
                this.clickButton('team_wait_go');
            }
        }

        if(this.match_tag == 'invite_again_or_not') {
            if(state.team.role != 'leader') {
                return;
            }
            this.clickButton('default_invite_option');
            sleep(random(400, 800));
            this.clickButton('invite_again_yes');
        }
    }
}
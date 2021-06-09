import { Scene } from './scene';

export class HD_TMGL_END extends Scene {
    constructor() {
        super();
        this.scene_name = 'hd_tmgl';
        this.judge_colors = ['hd_interface', 'hd_fight_prepare'];
        this.colors = {
            "hd_fight_prepare": {
                "region":[127,15,298,92],
                "desc":"",
                "first":"#f8f3e0",
                "colors":[[0,-10,"#e4cf92"],[10,-4,"#47433a"],[17,-5,"#f5f0db"],[30,17,"#f8f3e0"],[51,2,"#f8f3e0"],[53,8,"#3e3023"],[61,13,"#f8f3e0"],[106,1,"#f8f3e0"],[110,2,"#574735"],[115,5,"#f7f1df"],[228,3,"#e6c45e"]]
            },
            "hd_interface": {
                "region":[120,12,315,95],
                "desc":"",
                "first":"#ddc988",
                "colors":[[9,8,"#f8f3e0"],[23,13,"#4f473e"],[50,14,"#f1ecd9"],[58,6,"#f8f3e0"],[88,21,"#ece6d3"],[98,17,"#f8f3e0"],[113,19,"#4d3929"],[112,23,"#ddd6c3"],[153,18,"#f8f3e0"],[213,23,"#583614"],[227,16,"#e9c761"]]
            }
        };
        this.buttons = {
            "start": {
                "center": [1753, 930], 
                "offset": [60, 60],
                "desc": ""
            },
            "fight_e": {
                "center": [967, 623], 
                "offset": [50, 50],
                "desc": ""
            }
        }
    }

    execute() {
        if(state.settings.mode != 'hd') {
            return;
        }
        if(this.match_tag == 'hd_fight_prepare') {
            this.clickButton('start');
            return;
        }
        if(this.match_tag == 'hd_interface') {
            this.clickButton('fight_e');
            return;
        }
    }
}
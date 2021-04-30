import { Scene } from './scene';

export class DingHao extends Scene{
    constructor() {
        super();
        this.sceneName = 'dinghao'
        this.judge_colors = ['dinghao'];
        this.colors = {
            dinghao: {
                region:[642,382,641,326],
                desc:"顶号",
                first:"#2f2b26",
                colors:[[1,2,"#706458"],[1,6,"#bfaa95"],[5,7,"#332e29"],[10,8,"#c8b29c"],[13,9,"#423c35"],[21,15,"#4e463e"],[33,5,"#574f45"],[37,3,"#c6b19b"],[38,7,"#3e3832"],[44,2,"#36312b"]]
            },
        };
        this.buttons = {
            dinghao_reconnection: {
                center: [968, 606],
                offset: [80,30],
                desc: "顶号，点确定重连"
            }
        }
    }

    execute() {
        let wait_time = state.settings.dinghao_wait;
        if(wait_time == undefined || wait_time == -1) {
            logger.error('顶号：根据设置顶号后不自动重连，退出操作线程');
            threads.currentThread().interrupt();
        }
        logger.error('顶号：检测到顶号行为，将会在5分钟后重连');
        sleep(wait_time);
        this.clickButton('dinghao_reconnection');
    }
}
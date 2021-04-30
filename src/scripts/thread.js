import {scenes} from './scenes/_list';

export function startThread() {
    return threads.start(function () {
        
        logger.warn('脚本开始运行');
        while(true) {
            sleep(random(state.settings.min_loop_interval || 600, state.settings.max_loop_interval || 1000));
            //check global switch
            if(!state.switch.global) {
                sleep(2000);
                continue;
            }
            //check game app is aliv
            if (currentPackage() != state.settings.packageName) {
                logger.warn('痒痒鼠崩溃了好像，5秒后重启...');
                sleep(5000);
                app.launchPackage(state.settings.packageName);
                sleep(5000);
                logger.warn('游戏重启结束');
                continue;
            }
        
            //update screenshot and find out scene.
            //then run scene's sxcute function.
            global.screenshot = images.captureScreen();
            for(let scene of scenes) {
                scene.update();
                if(scene.isCurrentScene()) {
                    scene.execute();
                    break;
                }
            }
        }
    })
}




import {scenes} from './scenes/_list';

export function startThread() {
    return threads.start(function () {
        
        logger.warn('脚本开始运行');
        sleep(2000);
        while(true) {
            sleep(random(state.settings.min_loop_interval || 600, state.settings.max_loop_interval || 1000));
            //check global switch
            if(!state.switch.global) {
                sleep(2000);
                continue;
            }
            //check game app is aliv
            if (currentPackage() != state.settings.packageName) {
                if(scenes[0].timeTo('reconnect')) {
                    state.temp.last_unknown = 0;
                    logger.warn('游戏崩溃：痒痒鼠崩溃了，5秒后重启...');
                    sleep(5000);
                    app.launchPackage(state.settings.packageName);
                    sleep(5000);
                    logger.warn('游戏崩溃：游戏重启结束');
                    continue;
                }else{
                    global.logger.info('游戏崩溃：非重连时间，5min后检查...');
                    sleep(5*60*1000);
                }
                
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




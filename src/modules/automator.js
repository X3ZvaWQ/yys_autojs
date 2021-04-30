export class MyAutomator {
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    constructor(tapType) {
        this.tapType = tapType;
        if (tapType == 1) {
            this.RA = new RootAutomator();
        } else if (tapType == 2) {
            this.shell = new Shell(true);
        }
    }

    press(x, y, offset, delay) {
        //init delay
        if(!delay) delay = this.random(35, 85);

        //init offset
        if(offset == undefined) {
            x += this.random(-50, 50);
            y += this.random(-50, 50);
        }else{
            x += this.random(-offset.x || -offset[0], offset.x || offset[0]);
            y += this.random(-offset.y || -offset[1], offset.y || offset[1]);
        }

        //avoid out of screen 
        if(x < 0) x = 0;
        if(x > device.width) x = device.width;
        if(y < 0) y = 0;
        if(y > device.height) y = device.height;

        //excute
        if (this.tapType == 0) {
            press(x, y, delay);
        } else if (this.tapType == 1) {
            this.RA.press(x, y, delay);
        } else if (this.tapType == 2) {
            this.shell.execAndWaitFor('input swipe ' + x + ' ' + y + ' ' + x + ' ' + y + ' ' + delay);
        } else if (this.tapType == 3) {
            Tap(x, y);
        }

        sleep(100);
    }

    swipe(from, to, offset_from, offset_to, delay) {
        from = {
            x: from.x || from[0],
            y: from.y || from[1]
        }
        to = {
            x: to.x || to[0],
            y: to.y || to[1]
        }

        //init delay
        if(delay == undefined){
            delay = this.random(600, 800);
        }

        //init offset
        if(offset_from != undefined) {
            from.x += this.random(-offset_from.x || -offset_from[0], offset_from.x || offset_from[0]);
            from.y += this.random(-offset_from.y || -offset_from[1], offset_from.y || offset_from[1]);
        }else{
            from.x += this.random(-50, 50);
            from.y += this.random(-50, 50);
        }
        if(offset_to != undefined) {
            to.x += this.random(-offset_to.x || -offset_to[0], offset_to.x || offset_to[0]);
            to.y += this.random(-offset_to.y || -offset_to[1], offset_to.y || offset_to[1]);
        }else{
            to.x += this.random(-50, 50);
            to.y += this.random(-50, 50);
        }

        //avoid out of screen 
        if(from.x < 0) from.x = 0;
        if(from.x > device.width) from.x = device.width;
        if(from.y < 0) from.y = 0;
        if(from.y > device.height) from.y = device.height;
        if(to.x < 0) to.x = 0;
        if(to.x > device.width) to.x = device.width;
        if(to.y < 0) to.y = 0;
        if(to.y > device.height) to.y = device.height;


        //excute
        if (this.tapType == 0) {
            swipe(from.x, from.y, to.x, to.y, delay);
        } else if (this.tapType == 1) {
            this.RA.swipe(from.x, from.y, to.x, to.y, delay);
        } else if (this.tapType == 2) {
            this.shell.execAndWaitFor('input swipe ' + from.x + ' ' + from.y + ' ' + to.x + ' ' + to.y + ' ' + delay);
        } else if (this.tapType == 3) {
            Swipe(from.x, from.y, to.x, to.y, delay);
        }

        sleep(100);

    }
}
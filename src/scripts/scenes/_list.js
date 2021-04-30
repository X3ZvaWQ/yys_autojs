import { Scene } from './scene';
import { DingHao } from './dinghao';
import { Home } from './home';
import { Sign } from './sign';
import { Award } from './award';
import { Login } from './login';
import { XianShi } from './xianshi';
import { Disconnection } from './disconnection';
import { Store } from './store';

const scenes = [
    new Award(),
    new Login(),
    new DingHao(),
    new Home(),
    new Sign(),
    new XianShi(),
    new Store(),
    new Disconnection(),
    new Scene()
]

export { scenes };
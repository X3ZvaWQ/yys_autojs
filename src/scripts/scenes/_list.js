import { Scene } from './scene';
import { DingHao } from './dinghao';
import { Home } from './home';
import { Sign } from './sign';
import { Activity } from './activity';
import { Award } from './award';
import { Login } from './login';
import { Digui } from './digui';
import { TuPo } from './tupo';
import { Fighting } from './fighting';
import { Fought } from './fought';
import { TanSuo } from './tansuo';
import { JieJie } from './jiejie';
import { XianShi } from './xianshi';
import { Disconnection } from './disconnection';
import { Store } from './store';
import { Map } from './map';
import { FengMo } from './fengmo';

const scenes = [
    new Award(),
    new Activity(),
    new Login(),
    new Digui(),
    new TuPo(),
    new Map(),
    new Fighting(),
    new Fought(),
    new JieJie(),
    new TanSuo(),
    new DingHao(),
    new Home(),
    new FengMo(),
    new Sign(),
    new XianShi(),
    new Store(),
    new Disconnection(),
    new Scene()
]

export { scenes };
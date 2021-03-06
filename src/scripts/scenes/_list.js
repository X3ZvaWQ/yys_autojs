import { Scene } from './scene';
import { DingHao } from './dinghao';
import { Home } from './home';
import { Sign } from './sign';
import { Activity } from './activity';
import { Award } from './award';
import { DouJi } from './douji';
import { Login } from './login';
import { Digui } from './digui';
import { TuPo } from './tupo';
import { Fighting } from './fighting';
import { Fought } from './fought';
import { TanSuo } from './tansuo';
import { XianShi } from './xianshi';
import { Disconnection } from './disconnection';
import { Store } from './store';
import { Map } from './map';
import { FengMo } from './fengmo';
import { Friend } from './friend';
import { HD_TMGL_END } from './hd_tmgy_end';
import { Team } from './team';
import { Onmyoryou } from './onmyoryou';

const scenes = [
    new Team(),
    new Award(),
    new Activity(),
    new Digui(),
    new TuPo(),
    new Map(),
    new DouJi(),
    new Fighting(),
    new Friend(),
    new Fought(),
    new Onmyoryou(),
    new TanSuo(),
    new DingHao(),
    new Home(),
    new FengMo(),
    new Sign(),
    new XianShi(),
    new Store(),
    new Disconnection(),
    new Login(),
    new Scene(),
]

export { scenes };
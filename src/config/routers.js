import Home from '../pages/Home';
import Kh1 from '../pages/Kh/kh1';
import Kh2 from '../pages/Kh/kh2';
import Kh3 from '../pages/Kh/kh3';
import Data11 from '../pages/Tables/data/data11';
import Data12 from '../pages/Tables/data/data12';
import Data13 from '../pages/Tables/data/data13';
import Data14 from '../pages/Tables/data/data14';
import Data15 from '../pages/Tables/data/data15';
import Edit from '../pages/Editor';
export default [
    {
        path:'/',
        component:Home
    },{
        path:'/kh1',
        component:Kh1
    }
    , {
        path: '/kh2',
        component: Kh2
    }
    , {
        path: '/kh3',
        component: Kh3
    }
    , {
        path: '/data11',
        component: Data11
    }
    , {
        path: '/data12',
        component: Data12
    }
    , {
        path: '/data13',
        component: Data13
    }
    , {
        path: '/data14',
        component: Data14
    }, {
        path: '/data15',
        component: Data15
    },{
        path:'/editor',
        component: Edit
    }
]

import tpl from './index.html';
import ejs from './index.tpl'
import './index.scss';
// require('./index.scss')

function layer () {
    return {
        name : 'dingming',
        tpl : tpl,
        ejs : ejs,
    };
}

export default layer;
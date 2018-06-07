import axios from 'axios';
import env from '../../build/env';

let util = {

};
util.title = function(title) {
    title = title ? title + '|和电科技'  : '和电科技';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;
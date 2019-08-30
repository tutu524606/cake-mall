import axios from 'axios'
import qs from 'qs'
// import store from '../../store'

var loadingInstance;
// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 依据不同框架：加载中...

        if (!config.data) config.data = {};
        // config.data["token"] = store.state.token;
        // config.data = qs.stringify(config.data);
        return config;
    },
    error => {
        switch (true) {
            case !!error.response:
                if (error.response.status == 401) {

                }
                break;
            case !!error.request:
                /**
                 * readyState状态值：
                 * 0：初始化，XMLHttpRequest对象还没有完成初始化
                 * 1：载入，XMLHttpRequest对象开始发送请求
                 * 2：载入完成，XMLHttpRequest对象的请求发送完成
                 * 3：解析，XMLHttpRequest对象开始读取服务器的响应
                 * 4：完成，XMLHttpRequest对象读取服务器响应结束
                 */
                if (error.request.readyState == 4 && error.request.status == 0) {
                    //我在这里重新请求
                }
                break;
        }
        // 依据不同框架：加载超时...

        return Promise.reject(error);
    }
)

function http(options) {
    const token = window.sessionStorage.getItem("token");
    const auth = {
        'token': token,
    };
    // if (process.envConfig != 'test') createRequestOptions.baseURL = config_host;
    return axios.request({
        method: options.method,
        url: options.url,
        data: (/\b(put|post|delete)\b/i.test(options.method)) ? options.params : {},
        params: (/^get$/i.test(options.method)) ? options.params : {},
        // baseURL: config_host,
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
            // 'Authority': auth ? auth : {},
            'token': auth.token ? auth.token : (options.auth ? options.auth.token : ''),
            // 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
            'responseType': options.headers && options.headers.responseType ? 'stream' : 'json', // 默认值是json
        },
        crossDomain: true,
        withCredentials: true, // 跨域
    }).then(data => {
        // 关闭loading

        if (data.data != null) {

        }
        if (options.success) {
            options.success(data);
        }
        return data;
    }).catch((error => {
        // 加载失败...
        options.error ? options.error(error) : console.log(error);
        return Promise.reject(error);
    }))
}
window.http = http;
export default {
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            '$http': {
                value: http
            },
        })
    }
}
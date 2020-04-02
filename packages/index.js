import Button from './button';
import './icon/iconfont.css';
// 存储组件列表
const components = [
    Button
];
const install = function (Vue) {
    // 全局注册所有的组件
    components.forEach((item) => {
        Vue.component(item.ComponentName, item);
    });
};
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install
};
//# sourceMappingURL=index.js.map
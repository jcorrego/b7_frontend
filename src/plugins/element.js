import Vue from 'vue';
import { Button, DatePicker, Cascader } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Cascader);

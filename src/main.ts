import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import { 
  Button,
  Container,
  Header,
  Aside,
  Main,
  MenuItem,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(Button)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(MenuItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
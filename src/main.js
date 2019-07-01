import Vue from "vue";
import { store } from './store';

import { router }  from "./router";
//import Axios from 'axios';
import App from "./App.vue";


import MaterialKit from "./plugins/material-kit";
import ToggleButton from 'vue-js-toggle-button';
import VeeValidate from 'vee-validate';
// import Authentication from '@/components/pages/Authentication'



Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(ToggleButton);
Vue.use(VeeValidate);

VeeValidate.Validator.extend('verify_password', {
        getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
        validate: value => {
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            return strongRegex.test(value);
        }
    });


const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});


new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount("#app");


import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);

new Vue({
    el: '#app',
    data() {
      return {
      };
    },
    template: `
      <div>
        <ejs-button cssClass='e-primary'>Button</ejs-button>
      </div>
    `,
  });

import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

enableRipple(true);
Vue.use(ButtonPlugin);
Vue.use(CheckBoxPlugin);

new Vue({
    el: '#app',
    data() {
      return {
        isCheckboxChecked: false,
      };
    },
    methods: {
        toggleBodyClass() {
            if (this.isCheckboxChecked) {
              document.body.classList.add('e-dark-mode', 'dark'); // Add your desired classes here
            } else {
              document.body.classList.remove('e-dark-mode', 'dark'); // Remove your desired classes here
            }
          },
        },
    template: `
      <div>
        <ejs-checkbox label='Default' v-model="isCheckboxChecked" @change="toggleBodyClass"></ejs-checkbox><br/>
        <ejs-button cssClass='e-primary'>Button</ejs-button>
        <ejs-button cssClass='e-success'>Button</ejs-button>
        <ejs-button cssClass='e-info'>Button</ejs-button>
        <ejs-button cssClass='e-warning'>Button</ejs-button>
        <ejs-button cssClass='e-danger'>Button</ejs-button>
      </div>
    `,
  });
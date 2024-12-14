import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-dropdownbutton :items='items' :popupWidth='popupWidth'>DropDownButton</ejs-dropdownbutton>
  `,

  data() {
    return {
      items: [
        {
          text: 'Selection',
          iconCss: 'e-icons e-list-unordered'
        },
        {
          text: 'Yes / No',
          iconCss: 'e-icons e-check-box'
        },
        {
          text: 'Text',
          iconCss: 'e-icons e-caption'
        },
        {
          text: 'None',
          iconCss: 'e-icons e-mouse-pointer'
        }
      ],
      popupWidth: '200px'
    };
  }
});
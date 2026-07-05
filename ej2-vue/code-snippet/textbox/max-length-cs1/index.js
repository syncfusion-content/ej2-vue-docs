import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(TextBoxPlugin);

new Vue({
  el: '#app',
  template: `
    <div class='wrap'>
      <div id='input-container'>
        <ejs-textbox id='default' placeholder='Enter your comments' maxLength='20'></ejs-textbox>
      </div>
    </div>
  `,
  data: function () {
    return {};
  }
});

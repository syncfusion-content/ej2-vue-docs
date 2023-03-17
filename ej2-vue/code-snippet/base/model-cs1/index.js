
import Vue from 'vue';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-checkbox v-model="checked" label="EJ2 Vue Checkbox" :checked="checked" />
    <p>
      Checkbox State: <span id="checked-state" v-text="checked" ></span>
    </p>
  </div>
`,

  data () {
    return {
      checked: true
    }
  }

});
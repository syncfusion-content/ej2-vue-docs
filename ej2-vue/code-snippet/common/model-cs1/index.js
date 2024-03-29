
import { createApp } from 'vue';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

createApp({
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

}).use(CheckBoxPlugin).mount('#app');
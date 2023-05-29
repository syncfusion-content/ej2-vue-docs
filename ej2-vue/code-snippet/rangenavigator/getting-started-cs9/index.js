
import Vue from 'vue';
import { RangeNavigatorPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(RangeNavigatorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-rangenavigator></ejs-rangenavigator>
  </div>
`,

  data () {
    return {
    }
  }

});
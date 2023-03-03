
import Vue from 'vue';
import { ChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(ChartPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-chart id="container"> </ejs-chart>
  </div>
`,

  data () {
    return {
    }
  }

});
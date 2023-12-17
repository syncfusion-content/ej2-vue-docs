
import Vue from 'vue';
import { ChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(ChartPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-chart3d id="container"> </ejs-chart3d>
  </div>
`,

  data () {
    return {
    }
  }

});
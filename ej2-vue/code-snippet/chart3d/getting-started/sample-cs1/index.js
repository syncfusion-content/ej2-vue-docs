
import Vue from 'vue';
import { Chart3DPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(Chart3DPlugin);

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
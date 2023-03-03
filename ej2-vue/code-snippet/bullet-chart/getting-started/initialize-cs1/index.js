
import Vue from 'vue';
import { BulletChartPlugin } from '@syncfusion/ej2-vue-charts';
Vue.use(BulletChartPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
      <ejs-bulletchart id="bulletChart"> </ejs-bulletchart>
  </div>
`,

  data () {
    return {
    }
  }

});
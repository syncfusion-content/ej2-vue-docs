
import Vue from 'vue';
import { BulletChartPlugin } from '@syncfusion/ej2-vue-charts';
Vue.use(BulletChartPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        height="300"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
      > </ejs-bulletchart>
  </div>
`,

  data () {
    return {
      data: [
       { value: 100, target: 80 },
       { value: 200, target: 180 },
       { value: 300, target: 280 },
       { value: 400, target: 380 },
       { value: 500, target: 480 },
      ],
      minimum: 0, maximum: 500, interval: 50
    }
  }

});

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
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Sales Rate"
        :animation="animation"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="500" color="red"></e-bullet-range>
          <e-bullet-range end="1500" color="blue"></e-bullet-range>
          <e-bullet-range end="2000" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
`,

  data () {
    return {
      data: [{ value: 1500, target: 1000 }],
      minimum: 0, maximum: 2000, interval: 200,
      animation: { enable: true }
    }
  }

});
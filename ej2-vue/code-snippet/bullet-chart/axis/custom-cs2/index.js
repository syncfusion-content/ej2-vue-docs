
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
        title="Revenue"
        tickPosition="Inside"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="20" color="red"></e-bullet-range>
          <e-bullet-range end="25" color="blue"></e-bullet-range>
          <e-bullet-range end="30" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
`,

  data () {
    return {
      data: [{ value: 23, target: 22 }],
      minimum: 0, maximum: 30, interval: 5
    }
  }

});
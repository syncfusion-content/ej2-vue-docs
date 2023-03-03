
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
        title="Sales Rate in dollars"
        labelFormat="${value}"
        :titleStyle="titleStyle"
        subtitle="(in dollars $)"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="35" color="red"></e-bullet-range>
          <e-bullet-range end="50" color="blue"></e-bullet-range>
          <e-bullet-range end="100" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
`,

  data () {
    return {
      data: [{ value: 55, target: 45 }],
      minimum: 0, maximum: 100, interval: 20,
      titleStyle: { size: '22px', color: 'red', fontFamily: 'cursive', fontWeight: 'Bold' }
    }
  }

});
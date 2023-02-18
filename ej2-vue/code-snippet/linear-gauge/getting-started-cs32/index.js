
import Vue from 'vue';
import { LinearGaugePlugin, GaugeTooltip  } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :tooltip='tooltip' :tooltipRender='tooltipRender'>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data:function(){
    return {
      tooltip: {
        enable: true,
      }
    }
  },
  methods: {
    tooltipRender: function (event) {
    }
  },
  provide: {
    lineargauge: [GaugeTooltip]
  }
 
});
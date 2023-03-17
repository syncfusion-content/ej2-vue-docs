
import Vue from "vue";
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div align='center'>
      <ejs-lineargauge style='display:block' align='center'>
        <e-annotations>
          <e-annotation :content='contentTemplate' :zIndex='zindex' x=100 y=100>
          </e-annotation>
        </e-annotations>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data:function() {
    return{
      zindex: 1,
      contentTemplate: '<div id="first"><h1>Gauge</h1></div>',
    }
  },
  provide: {
    lineargauge: [Annotations]
  },

});
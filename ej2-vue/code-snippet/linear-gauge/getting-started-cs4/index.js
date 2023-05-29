
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
          <e-annotation :content='contentTemplate' :zIndex='zindex' horizontalAlignment='Near' verticalAlignment='Center' :x='x1' :y='y1'>
          </e-annotation>
          <e-annotation :content='contentTemplate1' :zIndex='zindex' verticalAlignment='Center' :x='x2' :y='y2'>
          </e-annotation>
        </e-annotations>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data:function() {
    return {
      zindex: 1,
      contentTemplate: '<div><h1 style="color:red;">Speed</h1></div>',
      contentTemplate1: '<div><h1 style="color:blue;">Meter</h1></div>',
      x1:290,
      y1:250,
      x2:10,
      y2:-190,
    }
  },
  provide: {
    lineargauge: [Annotations]
  },

});
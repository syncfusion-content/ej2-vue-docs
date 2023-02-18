
import Vue from 'vue';
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clicked">Click</button>
      <ejs-lineargauge ref='gauge'>
        <e-annotations>
            <e-annotation :content='contentTemplate' :zIndex='zindex' :axisValue='axisValue'>
            </e-annotation>
        </e-annotations>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer value=10></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data:function(){
    return{
        zindex: 1,
        contentTemplate : '10',
        axisValue: 0
    }
  },
  methods: {
    clicked: function (event) {
      this.$refs.gauge.ej2Instances.setAnnotationValue(0, '50', 50);
    }
  },
  provide: {
    lineargauge: [Annotations]
  }
 
});
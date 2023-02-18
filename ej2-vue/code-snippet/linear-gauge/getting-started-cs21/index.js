
import Vue from 'vue';
import { LinearGaugePlugin, Print } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="print">Print</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPrint='allowPrint' :beforePrint='beforePrint'>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data () {
    return {
      allowPrint: true
    }
  },
  methods: {
    beforePrint: function (event) {
    },
    print: function (event) {
      this.$refs.gauge.ej2Instances.print();
    }
  },
  provide: {
    lineargauge: [Print]
  }

});

import Vue from 'vue';
import { LinearGaugePlugin, PdfExport } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">PDF Export</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPdfExport='allowPdfExport'>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data () {
    return {
      allowPdfExport: true
    }
  },
  methods: {
    clickExport: function (event) {
      this.$refs.gauge.ej2Instances.export("PNG", "Gauge");
    }
  },
  provide: {
    lineargauge: [PdfExport]
  }

});
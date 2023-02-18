
import Vue from 'vue';
import { LinearGaugePlugin, ImageExport } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">Image Export</button>
      <ejs-lineargauge id="container" ref='gauge' :allowImageExport='allowImageExport'>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data () {
    return {
      allowImageExport: true
    }
  },
  methods: {
    clickExport: function (event) {
      this.$refs.gauge.ej2Instances.export("PNG", "Gauge");
    }
  },
  provide: {
    lineargauge: [ImageExport]
  }

});
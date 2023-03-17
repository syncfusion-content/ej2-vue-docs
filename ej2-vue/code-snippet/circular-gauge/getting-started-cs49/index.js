
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(CircularGaugePlugin, ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-button id='print' isToggle="true" v-on:click.native='clickPrint'>
            </ejs-button>
            <ejs-circulargauge id="gauge" ref="gauge">
            </ejs-circulargauge>
        </div>
  </div>
`,

  data () {
    return {
    }
  },
methods: {
    clickPrint:function(args){
        this.$refs.gauge.ej2Instances.print();
    }
}

});
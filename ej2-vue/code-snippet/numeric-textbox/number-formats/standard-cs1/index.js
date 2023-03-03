
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="percent" format='p2' placeholder="Percentage format" floatLabelType="Auto" :value="value" :step="step" :min="min" :max="max"></ejs-numerictextbox>
        </div>
        <div class='wrap'>
           <ejs-numerictextbox id="currency" placeholder="Currency format" floatLabelType="Auto" format='c2' :value="currencyvalue"></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,

        // sets currency with 2 numbers of decimal places format
        format: 'c2'
        currencyvalue: 10,
    }
  }

});
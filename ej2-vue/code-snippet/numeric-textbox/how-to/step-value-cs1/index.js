
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :showSpinButton='false' :value="value" :step="step" :min="min" :max="max"></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
        step: 2,
        min: 10,
        max: 100,
        value: 16
    }
  }

});

import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :value="value"></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
        // sets number of decimal places to be allowed by the NumericTextBox
        value: 10,
    }
  }

});
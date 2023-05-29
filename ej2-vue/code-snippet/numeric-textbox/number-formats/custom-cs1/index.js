
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" format='###.##' placeholder="Custom format string #" floatLabelType="Auto" :value="value"></ejs-numerictextbox>
        </div>
        <div class='wrap'>
           <ejs-numerictextbox id="numeric1" placeholder="Custom format string 0" floatLabelType="Auto" format='000.00' :value="numvalue"></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
        // sets the format using custom format string `#`
        value: 10,

        // sets the format using custom format string `0`
        numvalue: 10,
    }
  }

});
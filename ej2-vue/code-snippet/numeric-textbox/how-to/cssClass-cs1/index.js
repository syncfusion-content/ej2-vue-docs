
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :value="value" placeholder='Enter value' floatLabelType='Always' cssClass='e-style'></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
      value: 10
    }
  }

});
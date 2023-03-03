
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
  <div class='wrap'>
        <div class='e-input-group' style='margin-bottom:30px'>
        <input class='e-input' type='text' v-model='value' placeholder='Enter a number'  />
        </div>
           <ejs-numerictextbox v-model="value" :value="value"></ejs-numerictextbox>
        </div>
  </div>
  </div>
`,

  data () {
    return {
      value : 10
    }
  }

});
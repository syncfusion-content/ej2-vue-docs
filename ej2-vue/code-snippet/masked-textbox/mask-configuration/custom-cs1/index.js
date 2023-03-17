
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox :customCharacters='customCharacters' mask='00:00 >PM' placeholder='Time (ex: 10:00 PM, 10:00 AM)' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
  </div>
`,

  data () {
    return {
        customCharacters: {
            P: 'P,A,a,p',
            M: 'M,m'
        }
    }
  }

});
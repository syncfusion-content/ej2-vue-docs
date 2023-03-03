
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox mask='000-000-0000' placeholder='MaskedTextBox' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
  </div>
`,

  data () {
    return {}
  }

});

import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox mask='999-999-9999' promptChar="#"></ejs-maskedtextbox>
    </div>
  </div>
`,

  data () {
    return {}
  }

});
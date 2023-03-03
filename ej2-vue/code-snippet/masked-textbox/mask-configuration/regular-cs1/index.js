
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox mask='[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]' placeholder='IP Address (ex: 212.212.111.222)' id='mask1' name='mask_value' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
  </div>
  `,

  data () {
    return {}
  }

});
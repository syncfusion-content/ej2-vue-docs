
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox mask='00000' value='42648' placeholder='Enter User ID' cssClass='e-style' floatLabelType='Always' :focus='focus'></ejs-maskedtextbox>
    </div>
  </div>
`,

  data () {
    return {}
  },
  methods: {
      focus: function(args) {
           args.selectionEnd = args.selectionStart;
           }
    }

});

import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :value='value' placeholder='NumericTextBox' :created='onCreate' :blur='onBlur' floatLabelType='Always'></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
      value : null
    }
  },
  methods: {
    onCreate: function (event) {
      var numericObj=document.getElementById("numeric").ej2_instances[0];
      //  prevents nullable value during initialization
      if (numericObj.value==null) {
        numericObj.value=0;
      }
   }
   onBlur: function(args) {
     if(args.value == null) {
       numeric.value = 0;
     }
   }
}

});
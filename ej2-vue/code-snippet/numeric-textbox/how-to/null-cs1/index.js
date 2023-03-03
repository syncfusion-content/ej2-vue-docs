
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :value='value' format='n2' :decimals='decimals' placeholder='NumericTextBox' :change='onChange' :created='onCreate'></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
      value : 10,
      decimals : 2
    }
  },
  methods: {
    onChange: function (event) {
      var numericObj = document.getElementById("numeric").ej2_instances[0];
      numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
    },
     onCreate: function (event) {
      document.getElementById("numeric").addEventListener('focus',function(){
        var numericObj = document.getElementById("numeric").ej2_instances[0];
        numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
      });

   }
}

});
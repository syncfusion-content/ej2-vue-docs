
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

new Vue({
	el: '#app',
	template: `
  <div class="result"></div>
`,

  mounted:function(){
var  intl = new Internationalization();
var nFormatter = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD',minimumIntegerDigits:8});
var formattedValue  = nFormatter(1234545.65)
document.querySelector('.result').innerHTML = formattedValue;
  }

});
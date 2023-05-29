
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

new Vue({
	el: '#app',
	template: `
  <div class="result"></div>
`,

  mounted:function(){
var intl  = new Internationalization();
var date  = new Date();
var formattedString  =  intl.formatDate(new Date('1/12/2014 10:20:33'), { skeleton: 'GyMMM' });
document.querySelector('.result').innerHTML = formattedString;

  }


});
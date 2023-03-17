
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

new Vue({
	el: '#app',
	template: `
  <div class="result"></div>
`,

  mounted:function(){
var intl = new Internationalization();
var dFormatter = intl.getDateFormat({ skeleton: 'full', type: 'dateTime' });
var formattedString = dFormatter(new Date('1/12/2014 10:20:33'));
document.querySelector('.result').innerHTML = formattedString;
  }

});
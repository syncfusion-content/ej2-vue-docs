
import Vue from 'vue';
import {Internationalization} from '@syncfusion/ej2-base';

new Vue({
	el: '#app',
	template: `
  <div class="result"></div>
`,

  mounted:function(){
var intl = new Internationalization();
var val =  intl.parseDate('11/2016',{skeleton: 'yM'});
document.querySelector('.result').innerHTML = val.toString();

  }

});
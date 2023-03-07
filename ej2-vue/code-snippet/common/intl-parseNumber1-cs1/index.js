

import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

new Vue({
	el: '#app',
	template: `
<div class="result"></div>
`,

mounted:function(){
var intl  = new Internationalization();
var nParser  =  intl.getNumberParser({ format:'P2' , useGrouping: false});
var val  = nParser('123567.45%');
document.querySelector('.result').innerHTML = val + '';
}

});
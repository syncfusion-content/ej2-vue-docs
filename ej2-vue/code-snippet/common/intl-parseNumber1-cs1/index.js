

import { createApp } from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

createApp({
	template: `
<div ref="result"></div>
`,

mounted:function(){
var intl  = new Internationalization();
var nParser  =  intl.getNumberParser({ format:'P2' , useGrouping: false});
var val  = nParser('123567.45%');
this.$refs.result.innerHTML = val + '';
}

}).mount('#app');

import { createApp } from 'vue';
import {Internationalization} from '@syncfusion/ej2-base';

createApp({
	template: `
  <div ref="result"> </div>
`,

  mounted:function(){
var intl  = new Internationalization();
var dParser  = intl.getDateParser({skeleton: 'full', type: 'dateTime'});
var val = dParser('Friday, November 4, 2016 at 1:03:04 PM GMT+05:30');
this.$refs.result.innerHTML = val.toString();
}

}).mount('#app');
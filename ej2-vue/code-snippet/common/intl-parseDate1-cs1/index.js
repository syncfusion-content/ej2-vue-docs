
import { createApp } from 'vue';
import {Internationalization} from '@syncfusion/ej2-base';

createApp({
	template: `
  <div ref="result"></div>
`,

  mounted:function(){
var intl = new Internationalization();
var val =  intl.parseDate('11/2016',{skeleton: 'yM'});
this.$refs.result.innerHTML = val.toString();

  }

}).mount('#app');
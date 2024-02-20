
import { createApp } from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

createApp({
	template: `
  <div ref="result"></div>
`,

  mounted:function(){
var intl  = new Internationalization();
var date  = new Date();
var formattedString  =  intl.formatDate(new Date('1/12/2014 10:20:33'), { skeleton: 'GyMMM' });
this.$refs.result.innerHTML = formattedString;

  }


}).mount('#app');
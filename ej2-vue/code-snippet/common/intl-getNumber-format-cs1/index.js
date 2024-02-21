
import { createApp } from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

createApp({
	template: `
  <div ref="result"></div>
`,

  mounted:function(){
var  intl = new Internationalization();
var nFormatter = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD',minimumIntegerDigits:8});
var formattedValue  = nFormatter(1234545.65)
this.$refs.result.innerHTML = formattedValue;
  }

}).mount('#app');
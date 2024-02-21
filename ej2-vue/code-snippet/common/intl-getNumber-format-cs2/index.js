
import { createApp } from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

createApp({
	template: `
  <div ref="result"> </div>
`,

  mounted: function(){
var  intl = new Internationalization();
var formattedString  = intl.formatNumber(12345.65, { format:'C5' , useGrouping: false,
minimumSignificantDigits:1, maximumSignificantDigits:3 });
this.$refs.result.innerHTML = formattedString;
  }

}).mount('#app');
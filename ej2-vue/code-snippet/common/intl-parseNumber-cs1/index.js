
  
import { createApp } from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';

createApp({
	template: `
  <div ref="result"></div>
`,

  mounted:function(){
  var intl  = new Internationalization();
  var val  = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
  this.$refs.result.innerHTML = val + '';
}

}).mount('#app');
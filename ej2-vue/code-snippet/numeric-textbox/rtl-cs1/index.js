
import Vue from "vue";
import { loadCldr,L10n,Ajax } from '@syncfusion/ej2-base';
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

L10n.load({
    'ar-AE': {
      'numerictextbox': { incrementTitle: 'قيمة الزيادة', decrementTitle: 'قيمة تناقص'}
    }
});

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" locale='ar-AE' floatLabelType='Auto' placeholder='أدخل القيمة' :enableRtl='true' :value='value'></ejs-numerictextbox>
        </div>
  </div>
`,

  data (){
      return {
        value : 100
      }
    }
  }

});
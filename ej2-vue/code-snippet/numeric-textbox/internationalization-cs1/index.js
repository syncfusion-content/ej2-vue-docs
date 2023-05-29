
import Vue from "vue";
import { loadCldr,L10n,Ajax } from '@syncfusion/ej2-base';
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

import * as numberingSystems from './numberingSystems.json';
import * as currencyData from './currencyData.json';
import * as numbers from './numbers.json';
import * as currencies from './currencies.json';

Vue.use(NumericTextBoxPlugin);

loadCldr(numberingSystems, currencyData, numbers, currencies);

L10n.load({
    'de': {
      'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'}
    }
});

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" locale='de' currency='EUR' format='c2' :value='value'></ejs-numerictextbox>
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
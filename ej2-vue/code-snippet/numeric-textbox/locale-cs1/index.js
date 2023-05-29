
import Vue from "vue";
import { L10n } from '@syncfusion/ej2-base';
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);

// Load `German` culture to override spin buttons tooltip text
L10n.load({
    'de': {
        'numerictextbox': {
            incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
        }
    },

});

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" locale='de' :value="value"></ejs-numerictextbox>
        </div>
  </div>
`,

  data () {
    return {
        value: 10,
    }
  }

});

import Vue from 'vue';
import { CircularGaugePlugin } from '@syncfusion/ej2-vue-circulargauge';

Vue.use(CircularGaugePlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
         <ejs-circulargauge width='80%' height='50%'></ejs-circulargauge>
      </div>
    </div>
`,

});
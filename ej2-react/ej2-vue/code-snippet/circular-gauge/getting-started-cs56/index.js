
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
   <div id="app">
      <div class='wrapper'>
    <ejs-circulargauge enableRangeDrag='true' height='250px' width='250px'>
    <e-axes>
      <e-axis :ranges='ranges'>
        <e-pointers>
           <e-pointer value=50></e-pointer>
    </e-pointers>
    </e-axis>
    </e-axes>
    </ejs-circulargauge>
  </div>
  </div>
`,

    data: function () {
        return {
            ranges: [{
              start: 0,
              end: 100,
              startWidth: 8, endWidth: 8,
              radius: '108%',
              color: '#30B32D'
            }]
        }
    }

});
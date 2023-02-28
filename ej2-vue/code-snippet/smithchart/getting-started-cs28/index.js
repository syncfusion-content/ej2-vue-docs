
import Vue from 'vue';
import { SmithchartPlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SmithchartPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
        <ejs-smithchart id="smithchart"  :title='title'>
                <e-seriesCollection>
                    <e-series :dataSource='dataSource' :name='name' :reactance='reactance' :resistance='resistance'></e-series>
                </e-seriesCollection>
        </ejs-smithchart>
    </div>
`,

  data: function() {
    return {
        title : {
        enableTrim: true,
        maximumWidth: 70,
        textAlignment: 'Center',
        visible: true,
        text: 'Impedance Transmission',
        subtitle: {
            text: 'Transmission',
            visible: true,
            textAlignment: 'Far',
            enableTrim: true,
            maximumWidth: 40
        }
    },
        dataSource: [
                 { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ],
            name: 'Transmission1',
            reactance: 'reactance', resistance: 'resistance',
    }
  }

});
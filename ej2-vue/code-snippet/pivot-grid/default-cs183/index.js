
import Vue from "vue";
import { PivotViewPlugin, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption"
            :chartSettings="chartSettings" :height="height"> </ejs-pivotview>
    </div>
`,

    data() {
        return {
            dataSourceSettings: {
                dataSource: pivotData,
                expandAll: false,
                columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
                values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
                rows: [{ name: 'Country' }, { name: 'Products' }],
                formatSettings: [{ name: 'Amount', format: 'C0' }],
                filters: []
            },
            height: 350,
            displayOption: { view: 'Chart' },
            chartSettings: {
                chartSeries: {
                    dataLabel: {visible:true, position: 'Outside', connectorStyle: { length: '50px', width: 2, dashArray: '5,3', color: '#f4429e' } },
                    type: 'Funnel'
                }
            }
        }
    },
    provide: {
        pivotview: [PivotChart]
    }

});
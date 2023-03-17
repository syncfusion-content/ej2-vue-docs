
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
                drilledMembers: [{ name: 'Country', items: ['Germany'] }],
                columns: [{ name: 'Country' }, { name: 'Products' }],
                values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
                rows: [{ name: 'Year' }, { name: 'Quarter' }],
                formatSettings: [{ name: 'Amount', format: 'C0' }],
                filters: []
            },
            height: 350,
            displayOption: { view: 'Chart' },
            chartSettings: { columnHeader: "Germany-Road Bikes", columnDelimiter: '-', chartSeries: { type: 'Doughnut' } }
        }
    },
    provide: {
        pivotview: [PivotChart]
    }

});
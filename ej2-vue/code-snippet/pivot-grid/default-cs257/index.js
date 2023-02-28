
import Vue from "vue";
import { PivotViewPlugin, Toolbar} from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption" :chartSettings="chartSettings" :toolbar="toolbar" :showToolbar="showToolbar" :tooltipTemplate="tooltipTemplate"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Both' },
    chartSettings: {
        value: 'Amount', enableExport: true, chartSeries: { type: 'Column', animation: { enable: false } }, enableMultipleAxis: false,
        tooltip: { template: '<span class="pivotTooltipTemplateWrap">${aggregateType} of ${valueField}: ${value}</span>' }
    },
        toolbar: ['Grid', 'Chart'],
        showToolbar: true,
        tooltipTemplate: `<div class='pivotTooltipTemplateWrap'><span class='pivotTooltipHeader'>`+"${columnHeaders}"+`:</span ><span class='pivotTooltipValue'>`+"${value}"+`</span></div>`
    }
  },
  provide: {
      pivotview: [Toolbar]
  }

});

import Vue from "vue";
import { PivotViewPlugin, NumberFormatting, FieldList, NumberFormattingEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-button id="calculated-field-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Number Formatting</ejs-button>
      <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList" :allowNumberFormatting="allowNumberFormatting" :numberFormatting="numberFormatting"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, currency: 'EUR' }],            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        columns: [{ name: 'Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: []
      },
      height: 350,
      showFieldList: true,
      allowNumberFormatting: true,
      isPrimary: true,
   }
  },
  methods: {
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.numberFormattingModule.showNumberFormattingDialog();
    },
     numberFormatting: function (args: NumberFormattingEventArgs) {
        if(args.formatName === 'Amount') {
            args.cancel = true;
        }
  },
  provide: {
        pivotview: [NumberFormatting, FieldList]
    }

});
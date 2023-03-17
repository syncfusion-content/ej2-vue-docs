
import Vue from "vue";
import { PivotViewPlugin, PivotFieldListPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(PivotFieldListPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview_flist" :height="height"></ejs-pivotview>
        <ejs-pivotfieldlist id="pivotfieldlist1" :dataSourceSettings="dataSourceSettings" :enginePopulated="fieldEnginePopulated" :renderMode="renderMode"></ejs-pivotfieldlist>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      renderMode: "Fixed",
      showValuesButton: true,
    }
  },
  methods: {
    fieldEnginePopulated: function(args) {
      let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
      fieldListObj.updateView(pivotGridObj);
    }
  }

});
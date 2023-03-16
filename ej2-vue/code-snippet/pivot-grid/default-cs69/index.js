
import Vue from "vue";
import { PivotViewPlugin, PivotFieldListPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(PivotFieldListPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id="flist-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Show Field List</ejs-button>
        <ejs-pivotview id="pivotview_flist" :height="height" :enginePopulated="enginePopulated"></ejs-pivotview>
        <ejs-pivotfieldlist id="pivotfieldlist1" :dataSourceSettings="dataSourceSettings" :enginePopulated="fieldEnginePopulated" :renderMode="renderMode" :target="target"></ejs-pivotfieldlist>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      renderMode: 'Popup',
      height: 320,
      target: '#pivotfieldlist1',
      isPrimary: true
    }
  },
  methods: {
    btnClick: function(args) {
      let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      fieldListObj.dialogRenderer.fieldListDialog.show();
    },
    fieldEnginePopulated: function() {
      let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
      fieldListObj.updateView(pivotGridObj);
    },
    enginePopulated: function() {
      let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      if(fieldListObj) {
        fieldListObj.updateView(pivotGridObj);
      }
    }
  }

});
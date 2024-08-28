
import Vue from "vue";
import { GridPlugin, Filter, Sort, Edit, Toolbar, Page, Aggregate } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="display:inline-block; padding: 0px 0px 20px 200px">
      <label style="padding: 30px 17px 0 0;font-weight: bold;"> Select row rendering mode :</label>
      <ejs-dropdownlist ref="dropdown" index="0" width="150" :dataSource="dropDownData"  :change="changeAlignment">
      </ejs-dropdownlist>
    </div>
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' id='adaptivebrowser' :dataSource="data" height='100%' :enableAdaptiveUI='true'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings'
            :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
            <e-columns>
              <e-column field='SNO' headerText='S NO' width='150' :isPrimaryKey='true'
                :validationRules='orderidrules'></e-column>
              <e-column field='Model' headerText='Model Name' width='200' editType='dropdownedit'
                :validationRules='customeridrules'></e-column>
              <e-column field='Developer' headerText='Developer' width='200' :validationRules='customeridrules'
                :filter='menuFilter'></e-column>
              <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM'
                editType='datepickeredit'></e-column>
              <e-column field='AndroidVersion' headerText='Android Version' width='200' :validationRules='customeridrules'
                :filter='checkboxFilter'></e-column>
            </e-columns>
            <e-aggregates>
              <e-aggregate>
                <e-columns>
                  <e-column type="Count" field="Model" :footerTemplate="'sumTemplate'">
                  <template v-slot:sumTemplate="{data}"><span>Total Models: {{data.Count}}</span></template>
                  </e-column>
                </e-columns>
              </e-aggregate>
            </e-aggregates>
          </ejs-grid>
        </div>
      </div>
      <br>
      <div className="datalink">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones" target="_blank">Wikipedia: List of Android
          smartphones</a>
      </div>
    </div>
  </div>
`,

data() {
  return {
    data: data,
    orderidrules: { required: true, number: true },
    customeridrules: { required: true },
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    filterSettings: { type: 'Excel' },
    dropDownData: [
      { text: 'Horizontal', value: 'Horizontal' },
      { text: 'Vertical', value: 'Vertical' },
    ],
    menuFilter: {
      type: 'Menu'
    },
    checkboxFilter: {
      type: 'CheckBox'
    }
  };
},
methods: {
  load: function () {
    this.$refs.grid.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  },
 changeAlignment(args){
    this.$refs.grid.ej2Instances.rowRenderingMode = args.value;
  }
},
provide: {
  grid: [Filter, Sort, Edit, Toolbar, Page, Aggregate]
}

});
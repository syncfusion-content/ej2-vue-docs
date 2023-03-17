
import Vue from "vue";
import { GridPlugin, Filter, Sort, Edit, Toolbar, Page, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
        <ejs-grid ref='grid' id='adaptivebrowser' :dataSource="data" height='100%' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
                <e-columns>
                    <e-column field='SNO' headerText='S NO' width='150' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                    <e-column field='Model' headerText='Model Name' width='200' editType='dropdownedit' :validationRules='customeridrules'></e-column>
                    <e-column field='Developer' headerText='Developer' width='200' :validationRules='customeridrules' :filter='menuFilter'></e-column>
                    <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM' editType='datepickeredit'></e-column>
                    <e-column field='AndroidVersion' headerText='Android Version' width='200' :validationRules='customeridrules' :filter='checkboxFilter'></e-column>
                </e-columns>
                <e-aggregates>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Count" field="Model" :footerTemplate="sumTemplate" >
                            </e-column>
                        </e-columns>
                    </e-aggregate>
                </e-aggregates>
            </ejs-grid>
            </div>
            </div>
            <br></br>
            <div className="datalink">Source:
              <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones"
                target="_blank">Wikipedia: List of Android smartphones</a>
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
      rowMode: 'Vertical',
      menuFilter: {
        type : 'Menu'
      },
      checkboxFilter: {
        type : 'CheckBox'
      },
      sumTemplate: function() {
        return {
            template: Vue.component('sumTemplate', {
            template: `<span>Total Models: {{data.Count}}</span>`,
            data: function () {return {data: {data: {}}};}
            })
        }
      }
    };
  },
  methods: {
    load: function() {
        (this.$refs.grid as any).$el.ej2_instances[0].adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    }
  },
  provide: {
    grid: [Filter, Sort, Edit, Toolbar, Page, Aggregate]
  }

});
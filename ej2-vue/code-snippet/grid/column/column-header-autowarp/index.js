import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block">
        <label style="padding: 30px 17px 0 0">Autowrap for header column :</label>
        <ejs-dropdownlist index="0" width="150" :dataSource="dropdownData" :change="valueChange">
        </ejs-dropdownlist>
      </div>
      <div style="padding-top: 20px">
        <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :allowTextWrap="true" :textWrapSettings="wrapSettings" height="400">
          <e-columns>
            <e-column field="Inventor" headerText="Inventor Name" width="180" textAlign="Right">
            </e-column>
            <e-column field="NumberofPatentFamilies" headerText="Number of Patent Families" width="180" textAlign="Right">
            </e-column>
            <e-column field="Country" headerText="Country" width="140"></e-column>
            <e-column field="Active" width="120"></e-column>
            <e-column field="Mainfieldsofinvention" headerText="Main Fields Of Invention" width="200">
            </e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>`,
  data() {
    return {
      data: data,
      wrapSettings: { wrapMode: 'Header' },

      dropdownData: [
        { text: 'Header', value: 'Header' },
        { text: 'Both', value: 'Both' },
      ],
    };
  },
  methods: {
    valueChange: function (args) {
      this.$refs.grid.ej2Instances.textWrapSettings.wrapMode =args.value;
    },
  },
  provide: {
    grid: [Page]
  }
});
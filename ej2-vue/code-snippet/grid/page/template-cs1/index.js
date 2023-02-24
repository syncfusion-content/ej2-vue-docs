
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(NumericTextBoxPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' :pagerTemplate='pagerTemp'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 },
      pagerTemp: function() {
        return {
          template: Vue.component("pagerTemplate", {
            template: `<div class="e-pagertemplate">
                        <div class="col-lg-12 control-section">
                            <div class="content-wrapper">
                                <ejs-numerictextbox width="100" :value="value" :change='change'></ejs-numerictextbox>
                            </div>
                        </div>
                        <div id="totalPages" class="e-pagertemplatemessage"
                          style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                              <span class="e-pagenomsg">{{this.$data.data.currentPage}} of {{this.$data.data.totalPages}} pages
                              ({{this.$data.data.totalRecordsCount}} items)</span>
                        </div>
                      </div>`,
            computed: {
              value: function() {
                return this.$data.data.currentPage;
              }
            },
            methods: {
              change: function(args) {
                let grid: any = this.$el.closest(".e-grid").ej2_instances[0];
                grid.goToPage(args.value);
              }
            }
          })
        };
      }
    };
  },
  provide: {
    grid: [Page]
  }

});
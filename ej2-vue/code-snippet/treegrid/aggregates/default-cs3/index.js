
import Vue from "vue";
import { TreeGridPlugin, Aggregate } from "@syncfusion/ej2-vue-treegrid";
import { summaryData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='260px'>
            <e-columns>
                <e-column field='category' headerText='Category' width=160 textAlign='Right'></e-column>
                <e-column field='units' headerText='Total Units' width=130  type='number'></e-column>
                <e-column field='unitPrice' headerText='Unit Price($)' width=110 type='number' format= 'C2' textAlign='Right'></e-column>
                <e-column field='price' headerText='Price($)' type='number' width=160 format= 'C2' textAlign='Right'></e-column>
            </e-columns>
              <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="price"  format="C2" :footerTemplate='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: summaryData,
            footerSum: function () {
        return  { template : Vue.component('minTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
    provide: {
      treegrid: [Aggregate]
  }

});
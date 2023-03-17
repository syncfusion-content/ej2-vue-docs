
import Vue from "vue";
import { TreeGridPlugin, Sort } from "@syncfusion/ej2-vue-treegrid";
import { sortData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
          <ejs-treegrid :dataSource='data' :allowSorting='true' height='315px' childMapping='subtasks' :treeColumnIndex='1'  :actionComplete='actionHandler' :actionBegin='actionHandler'>
            <e-columns>
                <e-column field='Category' headerText='Category' width='140'></e-column>
                <e-column field='orderName' headerText='Order Name' width='200'></e-column>
                <e-column field='orderDate' headerText='Order Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='units' headerText='Units' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
`,

  data () {
    return {
      data: sortData
    };
  },
  provide: {
      treegrid: [ Sort ]
    },
    methods: {
    actionHandler: function(args) {
        alert(args.requestType + ' ' + args.type); // custom Action
    }
  },

});
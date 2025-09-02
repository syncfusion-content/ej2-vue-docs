
import Vue from "vue";
import { TreeGridPlugin, Page, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-treegrid";
import { summaryData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource="data" ref='treegrid' childMapping='subtasks' gridLines='Both' :treeColumnIndex='1' :allowExcelExport='true' :dataBound='dataBound' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' 
        :excelAggregateQueryCellInfo='excelAggregateQueryCellInfo' :height='380' >
            <e-columns>
                <e-column field='ID' headerText='Order ID' width='120' textAlign='Left'></e-column>
                <e-column field='Name' headerText='Shipment Name' width='230' clipMode='EllipsisWithTooltip'></e-column>
                <e-column field='shipmentDate' headerText='Shipment Date' width='150' type='date' format='yMd' textAlign='Right'></e-column>
                <e-column field='category' headerText='Category' width='220' minWidth='220'></e-column>
                <e-column field='units' headerText="Units" width='100' textAlign="Right" type='number'></e-column>
                <e-column field='unitPrice' headerText='Unit Price($)' format='c2' width='100' textAlign='Right' type='number'></e-column>
                <e-column field='price' headerText='Price($)' width='140' format='c' textAlign='Right'></e-column>
            </e-columns>
           <e-aggregates>
                <e-aggregate :showChildSummary='false'>
                    <e-columns>
                        <e-column columnName="category" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemp'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-treegrid>
    </div>
</div>
`,


  data ()  {
    return {
      data: summaryData,
      selectedCategory: "Seafood",
      toolbarOptions: ['ExcelExport'],
      footerTemp: function () {
        return  { template : createApp({}).component('footerTemplate', {
            template: `<span>Count of <input type="text" id="customers" /> : {{data.Custom}}</span>`,
            data () {return { data: {}};}
            })
          }
      },      
    };
  },
  methods: {
        //Custom aggregate function to calculate the count of items for the selected category.
      customAggregateFn : function (data) {
      
      ((this).$refs.treegrid).ej2Instances.grid.vueInstance = null;
        let sampleData = data.result ? getObject('result', data) : data;
         
        let countLength; countLength = 0;
        if(sampleData !== undefined){
        
        sampleData.filter((item) => {
            let data = getObject('category', item);
            if (data === selectedCategory) {
                countLength++;
            }
        });
        }
        return countLength;
      },

      //Initializes a DropDownList in the footer for category selection.
      dataBound: function() {
          let treeGridObj = ((this).$refs.treegrid);
            if (!isNullOrUndefined(listObj)) {
                listObj.destroy();
            }
            listObj = new DropDownList({
                dataSource: foods,
                fields: { value: 'food' },
                placeholder: 'Select a Category',
                width: '110px',
                value: selectedCategory,
                change:function () {
                    setTimeout(
                        function(){
                            if (listObj.value != null) {
                                selectedCategory = listObj.value.toString();
                                treeGridObj.refresh();
                            }
                        },
                        300
                    );
                }
            });
            listObj.appendTo('#customers');
            },
        toolbarClick: function(args) {
            let treeGridObj = ((this).$refs.treegrid);
        if (args['item'].text === 'Excel Export') {
          treeGridObj.excelExport();
        }
      },

      //Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
    excelAggregateQueryCellInfo(args) {
      if (args.cell.column.headerText === "Category") {
        args.style.value = `Count of ${selectedCategory}: ${args.row.data.category.Custom}`;
      }
    },
  },
    provide() {
    return {
      treegrid: [Page,Toolbar,ExcelExport]
    };
  }

});
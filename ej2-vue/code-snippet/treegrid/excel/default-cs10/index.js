import Vue from "vue";
import {
  TreeGridPlugin,
  Page,
  Toolbar,
  ExcelExport,
  Aggregate,
} from "@syncfusion/ej2-vue-treegrid";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { summaryData } from "./datasource.js";

Vue.use(TreeGridPlugin);

const categoryOptions = [
  { food: "Seafood" },
  { food: "Dairy" },
  { food: "Edible" },
  { food: "Crystal" },
];

new Vue({
  el: "#app",
  template: `
    <div id="app">
      <ejs-treegrid
        ref="treegrid"
        :dataSource="data"
        height="400"
        childMapping="subtasks"
        :treeColumnIndex="1"
        :allowPaging="true"
        :pageSettings="pageSettings"
        :allowExcelExport="true"
        :toolbar="toolbarOptions"
        :toolbarClick="toolbarClick"
        :aggregates="aggregates"
        :dataBound="onDataBound"
        :excelAggregateQueryCellInfo="formatExcelAggregateCell"
      >
        <e-columns>
          <e-column field="ID" headerText="Order ID" width="115" textAlign="Left"></e-column>
          <e-column field="Name" headerText="Shipment Name" width="230" clipMode="EllipsisWithTooltip"></e-column>
          <e-column field="shipmentDate" headerText="Shipment Date" width="135" format="yMd" type="date" textAlign="Right"></e-column>
          <e-column field="category" headerText="Category" width="220" minWidth="210"></e-column>
          <e-column field="units" headerText="Total Units" width="90" type="number" textAlign="Right"></e-column>
          <e-column field="unitPrice" headerText="Unit Price($)" width="100" type="number" format="C2" textAlign="Right"></e-column>
          <e-column field="price" headerText="Price($)" width="140" type="number" format="C0" textAlign="Right"></e-column>
        </e-columns>
      </ejs-treegrid>
      <div style="margin-top: 10px;">
        <label for="categoryDropdown">Select Category: </label>
        <input id="categoryDropdown" />
        <span style="margin-left: 10px;">Count of {{ selectedCategory }}: {{ categoryCount }}</span>
      </div>
    </div>
  `,
  data() {
    return {
      data: summaryData,
      selectedCategory: "Seafood",
      categoryCount: 0,
      toolbarOptions: ["ExcelExport", "CsvExport"],
      pageSettings: { pageSize: 7 },
      categoryDropdown: null,
    };
  },
  computed: {
    aggregates() {
      return [
        {
          showChildSummary: false,
          columns: [
            {
              type: "Custom",
              customAggregate: this.customAggregateFn,
              columnName: "category",
              footerTemplate: () => {
                return `<span>Count of ${this.selectedCategory}: ${this.categoryCount}</span>`;
              },
            },
          ],
        },
      ];
    },
  },
  methods: {
    customAggregateFn(data) {
      const records = Array.isArray(data) ? data : (data && data.result) ? data.result : [];
      const count = records.reduce((acc, item) => {
        return item.category === this.selectedCategory ? acc + 1 : acc;
      }, 0);
      this.categoryCount = count;
      return count;
    },

    formatExcelAggregateCell(args) {
       if (args.cell.column.headerText === "Category") {
        args.style.value =
          "Count of " +
          this.selectedCategory +
          " : " +
          args.row.data.category.Custom;
      }

      
    },

    toolbarClick(args) {
      if (args.item.text === "Excel Export") {
        this.$refs.treegrid.excelExport();
      } else if (args.item.text === "CSV Export") {
        this.$refs.treegrid.csvExport();
      }
    },

    onDataBound() {
      if (
        this.categoryDropdown &&
        this.categoryDropdown.element &&
        this.categoryDropdown.element.classList.contains("e-dropdownlist")
      ) {
        this.categoryDropdown.destroy();
      }

      this.categoryDropdown = new DropDownList({
        dataSource: categoryOptions,
        fields: { value: "food" },
        placeholder: "Select a Category",
        width: "150px",
        value: this.selectedCategory,
        change: (e) => {
          this.selectedCategory = e.value;
          this.$refs.treegrid.refresh();
        },
      });

      this.categoryDropdown.appendTo("#categoryDropdown");
    },
  },
  provide: {
    treegrid: [Page, Toolbar, ExcelExport, Aggregate],
  },
});

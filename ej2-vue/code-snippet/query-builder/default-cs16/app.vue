<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder width="70%" :dataSource="dataSource" :rule="importRules" sortDirection="Ascending">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
            </ejs-querybuilder>
        </div>
    </div>
</template>
<script>

import { QueryBuilderComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-querybuilder";

export default {
name: "App",
components: {
"ejs-querybuilder":QueryBuilderComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

    data: function() {
        return {
            dataSource: hardwareData,
            importRules: {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        },
        {
        'condition': 'and',
            'rules': [{
                'label': 'Status',
                'field': 'Status',
                'type': 'string',
                'operator': 'notequal',
                'value': 'Pending'
            },
            {
                'label': 'Task ID',
                'field': 'TaskID',
                'type': 'number',
                'operator': 'equal',
                'value': 5675
            }]
        }]
    }
        };
    }
}
var hardwareData = [{
      'TaskID': 1,
      'Name': 'Lenovo Yoga',
      'Category': 'Laptop',
      'SerialNo': 'CB27932009',
      'InvoiceNo': 'INV-2878',
      'Status': 'Assigned'
  },
  {
      'TaskID': 2,
      'Name': 'Acer Aspire',
      'Category': 'Others',
      'SerialNo': 'CB35728290',
      'InvoiceNo': 'INV-3456',
      'Status': 'In-repair'
  },
  {
      'TaskID': 3,
      'Name': 'Apple MacBook',
      'Category': 'Laptop',
      'SerialNo': 'CB35628728',
      'InvoiceNo': 'INV-2763',
      'Status': 'In-repair'
  }];
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/query-builder/index.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>
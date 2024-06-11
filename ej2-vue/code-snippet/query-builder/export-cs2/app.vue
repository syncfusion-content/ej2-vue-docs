<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="100%" :dataSource="dataSource" :rule="importRules">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
            </ejs-querybuilder>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="getSqlClick">Get Parameter Named sql</ejs-button>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="getRuleClick">Get Rule</ejs-button>
        </div>
        <ejs-dialog id="dialog" ref="Dialog" :header="header" :width="width" :visible="visible" :animationSettings="animateSettings" :showCloseIcon="showCloseIcon"></ejs-dialog>
    </div>
</template>
<script>

import { QueryBuilderComponent, QueryLibrary, QueryBuilder, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

QueryBuilder.Inject(QueryLibrary);

export default {
name: "App",
components: {
"ejs-querybuilder":QueryBuilderComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button":ButtonComponent,
"ejs-dialog":DialogComponent,

},

    data: function() {
        return {
            animateSettings: { effect: 'Zoom' },
            width:'50%',
            showCloseIcon: true,
            visible: false,
            header: 'Query builder',
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
    },
    methods: {
        getSqlClick: function() {
            this.$refs.Dialog.content = JSON.stringify(this.$refs.querybuilder.ej2Instances.getParameterizedNamedSql(this.$refs.querybuilder.ej2Instances.getRules()), null, 2);
            this.$refs.Dialog.show();
        },
        getRuleClick: function() {
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            this.$refs.Dialog.content = JSON.stringify(validRule, null, 4);
            this.$refs.Dialog.show();
        }
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
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>
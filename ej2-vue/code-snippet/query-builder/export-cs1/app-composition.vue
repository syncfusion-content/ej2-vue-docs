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
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="getSqlClick">Get Parameter sql</ejs-button>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="getRuleClick">Get Rule</ejs-button>
            <ejs-dialog id="dialog" ref="Dialog" :width="width" :header='header' :visible="visible" :animationSettings="animateSettings" :showCloseIcon="showCloseIcon"></ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, QueryLibrary, QueryBuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ref } from "vue";

QueryBuilder.Inject(QueryLibrary);

const querybuilder = ref(null);
const dialog = ref(null);

const dataSource = hardwareData;

const animateSettings = { effect: 'Zoom' };
const width = '50%';
const showCloseIcon = true;
const visible = false;
const header = 'Query builder';

const importRules = {
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
};

const getSqlClick = () => {
    dialog.value.content = JSON.stringify(querybuilder.value.ej2Instances.getParameterizedSql(querybuilder.value.ej2Instances.getRules()), null, 2);
    dialog.value.show();
};

const getRuleClick = () => {
    var validRule = querybuilder.value.ej2Instances.getValidRules(querybuilder.value.ej2Instances.rule);
    dialog.value.content = JSON.stringify(validRule, null, 4);
    dialog.value.show();
};

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
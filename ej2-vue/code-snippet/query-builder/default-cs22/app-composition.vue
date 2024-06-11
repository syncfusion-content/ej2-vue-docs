<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder width="70%"  ref="querybuilder" :dataSource="dataSource" :rule="importRules">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
            </ejs-querybuilder>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="getSql">Get SQL</ejs-button>
            <ejs-button cssClass="e-qbr-button" :isPrimary="true" v-on:click="getJson">Get JSON</ejs-button>
            <ejs-dialog ref="dialogObj" :header="header" :animationSettings="animationSettings" :showCloseIcon="true" :visible="false" width="500px" height="80%">
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ref } from "vue";

const querybuilder = ref(null);
const dialogObj = ref(null);

const dataSource = hardwareData;

const importRules = {
    'condition': 'or',
    'rules': [{
        'label': 'Category',
        'field': 'Category',
        'type': 'string',
        'operator': 'equal',
        'value': 'Laptop'
    }]
};

const header = 'Querybuilder rule';
const animationSettings = { effect: 'Zoom', duration: 400 };

const getSql = () => {
     dialogObj.value.content = querybuilder.value.ej2Instances.getSqlFromRules(querybuilder.value.ej2Instances.getRules());
     dialogObj.value.show();
};

const getJson = () => {
     var validRule = querybuilder.value.ej2Instances.getValidRules(querybuilder.value.ej2Instances.rule);
     dialogObj.value.content =  '<pre>' + JSON.stringify(validRule, null, 4) + '</pre>';
     dialogObj.value.show();
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
    .e-qb-button {
       margin: 2% 1% 0 15%;
   }
   .e-qbr-button {
       margin: 2% 1% 0 1%;
   }
</style>
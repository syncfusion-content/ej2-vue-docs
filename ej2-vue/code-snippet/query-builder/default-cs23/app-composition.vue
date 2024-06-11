<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
             <ejs-querybuilder ref="querybuilder" :dataSource="dataSource" :rule="importRules" width="70%">
                <e-columns>
                    <e-column field='Category' label='Category' type='string' />
                    <e-column field='PaymentMode' label='Payment Mode' type='string' :template='paymentTemplate' />
                    <e-column field='TransactionType' label='Transaction Type' type='boolean' />
                    <e-column field='Description' label='Description' type='string' />
                    <e-column field='Date' label='Date' type='date' />
                    <e-column field='Amount' label='Amount' type='number' />
                </e-columns>
            </ejs-querybuilder>
        </div>
    </div>
</template>

<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
import { DropDownList } from '@syncfusion/ej2-dropdowns'
import { createElement, getComponent} from "@syncfusion/ej2-base";
import { ref } from "vue";

const querybuilder = ref(null);

let inOperators = ['in', 'notin'];

const dataSource = expenseData;

const paymentTemplate = {
    create: () => {
        return createElement('input', { attrs: { 'type': 'text' } });
    },
    destroy: (args) => {
        let multiselect = getComponent(document.getElementById(args.elementId), 'multiselect');
        if(multiselect)
            multiselect.destroy();
        let dropdownlist = getComponent(document.getElementById(args.elementId), 'dropdownlist');
        if(dropdownlist)
            dropdownlist.destroy();
    },
    write: (args) => {
        let ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
        if (inOperators.indexOf(args.operator) > -1) {
            let multiSelectObj = new MultiSelect({
                dataSource: ds,
                value: args.values,
                mode: 'CheckBox',
                placeholder: 'Select Transaction',
                change: (e) => {
                    querybuilder.value.ej2Instances[0].notifyChange(e.value, e.element);
                }
            });
            multiSelectObj.appendTo('#' + args.elements.id);
        } else {
            let dropDownObj = new DropDownList({
                dataSource: ds,
                value: args.values,
                change: (e) => {
                    querybuilder.value.ej2Instances[0].notifyChange(e.itemData.value, e.element);
                }
            });
            dropDownObj.appendTo('#' + args.elements.id);
        }
    }
};

const importRules = {
    'condition': 'and',
    'rules': [{
        'label': 'Payment Mode',
        'field': 'PaymentMode',
        'type': 'string',
        'operator': 'equal',
        'value': 'Cash'
    }]
};

var expenseData = [{
    'Category': 'Food',
    'PaymentMode': 'Credit Card',
    'TransactionType': 'Expense',
    'Description': 'Boiled peanuts',
    'Amount': '7',
    'Date': '06/01/2017'
  }, {

    'Category': 'Food',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'Description': 'Peanuts in Coke',
    'Amount': '8',
    'Date': '06/04/2017'
  }, {
    'Category': 'Food',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'Description': 'Palmetto Cheese, Mint julep',
    'Amount': '11',
    'Date': '06/04/2017'
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
<template>
    <div class="control-section">
            <ejs-querybuilder  id="querybuilder" ref="querybuilder" :rule="importRules" width="100%" >
                <e-columns>
                    <e-column field='Category' label='Category' type='string'/>
                    <e-column field='PaymentMode' label='Payment Mode' type='string' :operators="customOperators" :template='paymentTemplate' />
                    <e-column field='TransactionType' label='Transaction Type' type='string' :operators="customOperators" :template='transactionTemplate' />
                    <e-column field='Description' label='Description' type='string' />
                    <e-column field='Date' label='Date' type='date' />
                    <e-column field='Amount' label='Amount' type='number' />
                </e-columns>
            </ejs-querybuilder>
    </div>
</template>

<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { getComponent } from "@syncfusion/ej2-base";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import {createApp} from "vue";

MultiSelect.Inject(CheckBoxSelection);
const app = createApp({});

const payTemplate = app.component('paymentTemplate', {
    components: {
        "ejs-dropdownlist": DropDownListComponent
    },
    template:
        `<div >
            <ejs-dropdownlist  :dataSource="ds"  v-model="data.rule.value" :change="paymentChange"></ejs-dropdownlist>
        </div>`,
    data(args) {
        return{
            qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
            data: Object.assign({}, args, true),
            ds: ['Cash', 'Debit Card', 'Credit Card', 'Net Banking']
        }
    },
    methods: {
        paymentChange: function(event){
            var elem = document.getElementById(ruleID).querySelector('.e-rule-value');
            this.qryBldrObj.notifyChange(event.value, elem, 'value');
        }
    }
});

const transTemplate = app.component('transactionTemplate', {
    components: {
        "ejs-checkbox": CheckBoxComponent
    },
    template:
        `<div >
            <ejs-checkbox  label='Is Expense' :checked="data.rule.value" :change="transactionChange"></ejs-checkbox>
        </div>`,
    data(args) {
        return{
            qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
            data: Object.assign({}, args, true)
        }
    },
    methods: {
        transactionChange: function(event){
            var elem = document.getElementById(ruleID).querySelector('.e-rule-value');
            this.qryBldrObj.notifyChange(event.checked === true ? 'Expense' : 'Income', elem, 'value');
        }
    }
});

const customOperators = [{value: 'equal', key: 'Equal'}, {value: 'notequal', key: 'Not Equal'}];

const importRules = {
    'condition': 'or',
    'rules': [{
        'label': 'TransactionType',
        'field': 'TransactionType',
        'type': 'boolean',
        'operator': 'equal',
        'value': 'Income'
        },
        {
            'label': 'PaymentMode',
            'field': 'PaymentMode',
            'type': 'string',
            'operator': 'equal',
            'value': 'Cash'
    }]
};

const paymentTemplate = () => {
    return {
        template: payTemplate
    }
};

const transactionTemplate = () => {
    return {
        template: transTemplate
    }
};

</script>
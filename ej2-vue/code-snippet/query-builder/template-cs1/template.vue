<template>
    <div class="control-section">
            <ejs-querybuilder ref="querybuilder" :rule="importRules" width="100%" >
                <e-columns>
                    <e-column field='Category' label='Category' type='string'/>
                    <e-column field='PaymentMode' label='Payment Mode' type='string' :operators="customOperators" :template='paymentTemplate' />
                    <e-column field='TransactionType' label='Transaction Type' type='boolean' :operators="customOperators" :template='transactionTemplate' />
                    <e-column field='Description' label='Description' type='string' />
                    <e-column field='Date' label='Date' type='date' />
                    <e-column field='Amount' label='Amount' type='number' />
                </e-columns>
            </ejs-querybuilder>
    </div>
</template>

<script>
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { Slider, TextBox } from '@syncfusion/ej2-inputs';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { createElement, getComponent, isNullOrUndefined } from "@syncfusion/ej2-base";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";


MultiSelect.Inject(CheckBoxSelection);
Vue.use(QueryBuilderPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownListPlugin);

export default {
    data: function() {
        return {
            customOperators: [{value: 'equal', key: 'Equal'}, {value: 'notequal', key: 'Not Equal'}],
            importRules:{
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
            },
            paymentTemplate: () => {
                return {
                    template: Vue.component('paymentTemplate', {
                        template:
                        `<div >
                        <ejs-dropdownlist  :dataSource="ds"  v-model="data.rule.value" :change="paymentChange"></ejs-dropdownlist>
                        </div>`,
                        data(args) {
                            return{
                               qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
                                data: Object.assign({}, args, true),
                                ds: ['Cash', 'Debit Card', 'Credit Card', 'Net Banking']; 
                            }
                        },
                        methods: {
                            paymentChange: function(event){
                                var elem = document.getElementById(ruleID).querySelector('.e-rule-value');
                                this.qryBldrObj.notifyChange(event.value as string, elem, 'value');
                            }
                        }
                    }
                }
            },
            transactionTemplate: () => {
                return{
                    template: Vue.component('transactionTemplate', {
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
                    }
                }
            }
        };
    }
}
       
</script>

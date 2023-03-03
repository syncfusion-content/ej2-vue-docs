
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { DropDownList } from '@syncfusion/ej2-dropdowns'
import { createElement, getComponent} from "@syncfusion/ej2-base";

let inOperators = ['in', 'notin'];
Vue.use(QueryBuilderPlugin);

];
new Vue({
	el: '#app',
	template: `
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
`,

    data: function() {
        return {
            dataSource: expenseData,
             paymentTemplate: {
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
                                this.$refs.querybuilder.$el.ej2_instances[0].notifyChange(e.value, e.element);
                            }
                        });
                        multiSelectObj.appendTo('#' + args.elements.id);
                    } else {
                        let dropDownObj = new DropDownList({
                            dataSource: ds,
                            value: args.values,
                            change: (e) => {
                                this.$refs.querybuilder.$el.ej2_instances[0].notifyChange(e.itemData.value, e.element);
                            }
                        });
                        dropDownObj.appendTo('#' + args.elements.id);
                    }
                }
            },
            importRules: {
        'condition': 'and',
        'rules': [{
                'label': 'Payment Mode',
                'field': 'PaymentMode',
                'type': 'string',
                'operator': 'equal',
                'value': 'Cash'
            }]
        }
        };
    }
}
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
  
});
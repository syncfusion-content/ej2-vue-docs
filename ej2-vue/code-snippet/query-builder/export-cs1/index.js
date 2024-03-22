import Vue from 'vue';
import { QueryBuilderPlugin, QueryLibrary, QueryBuilder } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);
Vue.use(QueryBuilderPlugin);
Vue.use(ButtonPlugin);
QueryBuilder.Inject(QueryLibrary);

new Vue({
	el: '#app',
	template: `
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
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click.native="getSqlClick">Get Parameter sql</ejs-button>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click.native="getRuleClick">Get Rule</ejs-button>
            <ejs-dialog id="dialog" ref="Dialog" :width="width" :header='header' :visible="visible" :animationSettings="animateSettings" :showCloseIcon="showCloseIcon"></ejs-dialog>
        </div>
    </div>
`,

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
    getSqlClick: function(event) {
        this.$refs.Dialog.content = JSON.stringify(this.$refs.querybuilder.ej2Instances.getParameterizedSql(this.$refs.querybuilder.ej2Instances.getRules()), null, 2);
        this.$refs.Dialog.show();
    },
    getRuleClick: function(event) {
        var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
        this.$refs.Dialog.content = JSON.stringify(validRule, null, 4);
        this.$refs.Dialog.show();
    }
   }
});
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
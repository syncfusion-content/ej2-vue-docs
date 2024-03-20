
import Vue from "vue";
import { QueryBuilderPlugin, QueryLibrary, QueryBuilder } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
QueryBuilder.Inject(QueryLibrary);
Vue.use(QueryBuilderPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="100%" :dataSource="dataSource">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
            </ejs-querybuilder>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click.native="importSqlClick">Set Named Parameter SQL Rules</ejs-button>
        </div>
    </div>
`,

    data: function() {
        return {
            dataSource: hardwareData
        };
    },
    methods: {
    importSqlClick: function(event) {
        this.$refs.querybuilder.ej2Instances.setParameterizedNamedSql({ sql: '(Category IN (:Category_1,:Category_2) OR TaskID IN (:TaskID_1,:TaskID_2))', params: {"Category_1": "Laptop", "Category_2": "Others", "TaskID_1": 1, "TaskID_2": 2} });
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
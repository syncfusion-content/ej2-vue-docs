
import Vue from "vue";
import { QueryBuilderPlugin } from '@syncfusion/ej2-vue-querybuilder';
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent, compile } from '@syncfusion/ej2-base';
import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';

Vue.use(QueryBuilderPlugin);
Vue.use(SliderPlugin);
Vue.use(DropDownListPlugin);


];

new Vue({
	el: '#app',
	template: `
    <div class="control-section">
        <div id="listbox-selection">
            <ejs-querybuilder id="querybuilder" ref="querybuilder" :actionBegin="actionBegin" :dataSource="dataSource" :rule="importRules">
                <e-columns>
                    <e-column field="EmployeeID" label="Employee ID" type="number"/>
                    <e-column field="FirstName" label="First Name" type="string"/>
                    <e-column field="LastName" label="LastName" type="string"/>
                    <e-column field="Age" label="Age" type="number" :ruleTemplate='ageTemplate'/>
                    <e-column field='City' label='City' type='string' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
    </div>
`,

    data: function() {
        return {
            dataSource: employeeData,
            importRules: {
                'condition': 'and',
                'rules': [{
                    'label': 'Age',
                    'field': 'Age',
                    'type': 'number',
                    'operator': 'greaterthanorequal',
                    'value': 30
                }]
            },
            ageTemplate: () => {
                return {
                    template : Vue.component('ruleTemplate', {
                        template:
                        `<div class="e-rule e-rule-template">
                            <div class="e-rule-filter e-custom-filter">
                                <ejs-dropdownlist :change='fieldChange' :value="data.rule.field" :dataSource="data.columns" :fields="data.fields">
                                </ejs-dropdownlist>
                            </div>
                            <div>
                                <div class="e-slider-value">
                                    <ejs-slider :min="min" :max="max" ref="slider" :ticks="rangeticks" :change="valueChange" :value="value" :id="valueID">
                                    </ejs-slider>
                                </div>
                                <div class="e-rule-btn">
                                    <button class="e-removerule e-rule-delete e-css e-btn e-small e-round">
                                        <span class="e-btn-icon e-icons e-delete-icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>`,
                        data(args) {
                            return {
                                qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
                                rangeticks: {
                                    placement: 'Before',
                                    largeStep: 5,
                                    smallStep: 1,
                                    showSmallTicks: true
                                },
                                min: 30,
                                max: 50
                            }
                        },
                        computed: {
                            valueID: function() {
                                return `${this.data.ruleID}_valuekey0`;
                            },
                            value: function() {
                                var num = 30;
                                if (this.data.rule.value !== '') {
                                    num = this.data.rule.value;
                                }
                                return num;
                            }
                        },
                        methods: {
                            fieldChange: function(args) {
                                this.qryBldrObj.notifyChange(args.value, args.element, 'field');
                            },
                            valueChange: function(args) {
                                if (args.isInteracted) {
                                    var elem = this.$refs.slider.$el;
                                    this.qryBldrObj.notifyChange(args.value, elem, 'value');
                                }
                            }
                        }
                    })
                }
            }
        };
    },
    methods: {
        actionBegin: function(args) {
            args.rule.operator = 'greaterthanorequal';
            if (args.requestType === 'template-initialize') {
                if (args.rule.value === '') {
                    args.rule.value = 30;
                }
            }
            if (args.requestType === 'template-create') {
                getComponent(document.getElementById(args.ruleID + '_valuekey0'), 'slider').refresh();
            }
        }
    }
}

var employeeData = [
    { 'EmployeeID': 1, 'FirstName': 'Nancy', 'Age': 31, 'City': 'Seattle', 'Country': 'USA' },
    { 'EmployeeID': 2, 'FirstName': 'Andrew', 'Age': 32, 'City': 'Tacoma', 'Country': 'USA' },
    { 'EmployeeID': 3, 'FirstName': 'Janet', 'Age': 33, 'City': 'Kirkland', 'Country': 'USA' },
    { 'EmployeeID': 4, 'FirstName': 'Margaret', 'Age': 33, 'City': 'Redmond', 'Country': 'USA' },
    { 'EmployeeID': 5, 'FirstName': 'Steven', 'Age': 34, 'City': 'London', 'Country': 'UK' },
    { 'EmployeeID': 6, 'FirstName': 'Michael', 'Age': 35, 'City': 'London', 'Country': 'UK' },
    { 'EmployeeID': 7, 'FirstName': 'Robert', 'Age': 36, 'City': 'London', 'Country': 'UK' },
    { 'EmployeeID': 8, 'FirstName': 'Laura', 'Age': 37, 'City': 'Seattle', 'Country': 'USA' },
    { 'EmployeeID': 9, 'FirstName': 'Anne', 'Age': 38, 'City': 'London', 'Country': 'UK' 
});
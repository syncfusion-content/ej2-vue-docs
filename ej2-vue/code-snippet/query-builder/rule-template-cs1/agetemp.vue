<template>
    <div class="e-rule e-rule-template">
        <div class="e-rule-filter e-custom-filter">
            <ejs-dropdownlist :change='fieldChange' :value="data.rule.field" :dataSource="data.columns" :fields="data.fields">
            </ejs-dropdownlist>
        </div>
        <div>
            <div class="e-slider-value">
                <ejs-slider :min="min" :max="max" ref="slider" :ticks="rangeticks" :created="created" :change="valueChange" :value="value" :id="valueID">
                </ejs-slider>
            </div>
            <div class="e-rule-btn">
                <button :id='optionID' @click="myFunction(data.ruleID)" class="e-primary e-btn e-small">
                    View Details
                </button>
                <button class="e-removerule e-rule-delete e-css e-btn e-small e-round">
                    <span class="e-btn-icon e-icons e-delete-icon"/>
                </button>
            </div>
        </div>
        <div :id='sectionID' class="e-rule-value-group e-hide">
            <div>
                <table id='datatable' class='e-rule-table e-hide'>
                    <thead>
                        <tr><th>EmployeeID</th><th>FirstName</th><th>Age</th></tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>     
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent, setValue, compile } from '@syncfusion/ej2-base';
import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';
import { employeeData } from './datasource.js';

Vue.use(SliderPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
    data: function(args) {
        return {
            qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
            data: Object.assign({}, args, true),
            rangeticks: {
                placement: 'Before',
                largeStep: 5,
                smallStep: 1,
                showSmallTicks: true
            },
            min: 30,
            max: 50
        };
    },
    computed: {
        valueID: function() {
            return `${this.data.ruleID}_valuekey0`;
        },
        optionID: function() {
            return `${this.data.ruleID}_option`;
        },
        sectionID: function() {
            return `${this.data.ruleID}_section`;
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
        created: function() {
           var elem = document.getElementById(this.$refs.slider.$el.id.split('_valuekey0')[0]);
           this.refreshTable(this.qryBldrObj.getRule(elem), elem.id);
        },

        fieldChange: function(args) {
           this.qryBldrObj.notifyChange(args.value, args.element, 'field');
        },

        valueChange: function(args) {
            if (args.isInteracted) {
                var elem = this.$refs.slider.$el;
                this.qryBldrObj.notifyChange(args.value, elem, 'value');
                this.refreshTable(this.qryBldrObj.getRule(elem), elem.id.split('_valuekey0')[0]);
            }
        },

        myFunction: function(ruleID) {
            var element = document.getElementById(ruleID + '_section');
            if (element.className.indexOf('e-hide') > -1) {
                element.className = element.className.replace('e-hide', '');
                document.getElementById(ruleID + '_option').textContent = 'Hide Details';
            } else {
                element.className += ' e-hide';
                document.getElementById(ruleID + '_option').textContent = 'View Details';
            }
        },

        refreshTable(rule, ruleID) {
            var template = '<tr><td>${EmployeeID}</td><td>${FirstName}</td><td>${Age}</td></tr>';
            var compiledFunction = compile(template);
            var predicate = this.qryBldrObj.getPredicate({condition: 'and', rules: [rule]});
            var dataManagerQuery = new Query().select(['EmployeeID', 'FirstName', 'Age']).where(predicate);
            var result = new DataManager(employeeData).executeLocal(dataManagerQuery);
            var table = document.querySelector('#' + ruleID + "_section #datatable");
            if (result.length) {
                table.style.display = 'block';
            } else {
                table.style.display = 'none';
            }
            table.querySelector('tbody').innerHTML = '';
            result.forEach((data) => {
                table.querySelector('tbody').appendChild(compiledFunction(data)[0].querySelector('tr'));
            });
        }
    }
});
</script>
<style>
    .e-rule-template {
        padding-bottom: 12px;
    }
    .e-rule-btn {
        float: right;
        padding-top: 12px;
    }
    .e-rule-value-group {
        margin: 12px;
        border-top: 1px solid #e0e0e0;
        min-height: 40px;
    }
    .e-query-builder .e-slider-container.e-horizontal {
        padding: 0px 0 0 18px;
        height: 0;
    }

    .e-query-builder .e-hide {
        display: none;
    }
    .e-query-builder .e-custom-filter {
        width: 40% !important;
    }

    .e-query-builder .e-slider-container.e-horizontal .e-slider {
        top: calc(50% - 10px);
    }

    .e-query-builder .e-slider-value {
        width: 40% !important;
        padding: 12px 0 12px 0;
        display: inline-block;
    }

    .e-rule-table {
        margin: 20px 0 0 20px;
        border: solid 1px #e0e0e0;
        border-collapse: collapse;
        font-family: Roboto;
        width: 320px;
        height: 180px;
        overflow-y: auto;
    }
    .e-rule-table th,
    .e-rule-table td {
        border: solid #e0e0e0;
        border-width: 1px 0 0;
        display: table-cell;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
        padding: 8px 21px;
        vertical-align: middle;
        white-space: nowrap;
        width: auto;
    }
</style>
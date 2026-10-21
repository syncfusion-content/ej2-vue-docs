<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Default Error Message </td>
                <td>
                    <ejs-inplaceeditor ref="dateObj" id="datePickerEle" mode="Inline" type="Date" emptyText="dd/mm/yyyy"
                        :model="datePickerModel" name="Today" :validationRules="dateValidationRules">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Customized Error Message </td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="dateObj1" id="datePickerEle" mode="Inline" type="Date"
                        :model="datePickerModel" name="date" :validationRules="dateValidationRule" :validating="valid"
                        emptyText="dd/mm/yyyy">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
    name: "App",
    components: {
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            datePickerModel: {
                placeholder: 'Select a date',
            },
            dateValidationRules: {
                Today: { required: true },
            },
            dateValidationRule: {
                date: { required: true },
            },
        };
    },
    methods: {
        valid: function (e) {
            e.errorMessage = "empty field";
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

.table-section {
    text-align: center;
    margin-top: 50px;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}

.sample-td {
    padding-top: 10px;
    min-width: 230px;
    height: 100px;
}
</style>

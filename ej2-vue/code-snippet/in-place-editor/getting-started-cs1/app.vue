<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>ShowButtons:</td>
                <td>
                    <ejs-checkbox ref="checkObj" id="showbuttons" checked=true :change="onChange"
                        :labelPosition="labelPosition" :label="label"></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Enter your name:</td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" mode="Inline" :model="textModel" type="Text" value="Andrew"
                        data-underline="false">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-checkbox": CheckBoxComponent,
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            textModel: {
                placeholder: 'Enter Some Text'
            },
            labelPosition: 'Before',
            label: 'show',
        };
    },
    mounted: function () {
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        onChange: function (args) {
            args.checked ? this.editObj.showButtons = true : this.editObj.showButtons = false
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

.table-section {
    margin: 0 auto;
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

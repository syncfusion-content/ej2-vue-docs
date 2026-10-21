<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>
                    <div>Disabled</div>
                </td>
                <td>
                    <div>
                        <ejs-checkbox ref="checkObj2" id="editorEnable" :change="onChangeEnable"
                            label='Disable'></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="sample-td">
                    <div>Enter your name: </div>
                </td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" actionOnBlur='Ignore'
                        value="Andrew" submitOnEnter="true">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { InPlaceEditorComponent } from "@syncfusion/ej2-vue-inplace-editor";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-checkbox": CheckBoxComponent,
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            labelPosition: 'Before',
        };
    },
    methods: {
        onChangeEnable: function (args) {
            let checkObj1 = this.$refs.checkObj2.ej2Instances;
            checkObj1.checked ? this.$refs.editObj.ej2Instances.disabled = true : this.$refs.editObj.ej2Instances.disabled = false;
        },
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

<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>
                    <div>EnableEditMode</div>
                </td>
                <td>
                    <div>
                        <ejs-checkbox ref="checkObj2" id="editorEnable" label='Enable' :checked="true"
                            :change="onChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="sample-td">
                    <div>Enter your name: </div>
                </td class="sample-td">
                <td>
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" actionOnBlur='Ignore'
                        enableEditMode=true value="Andrew" submitOnEnter="true">
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
        onChange: function (e) {
            this.$refs.editObj.ej2Instances.enableEditMode = e.checked;
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

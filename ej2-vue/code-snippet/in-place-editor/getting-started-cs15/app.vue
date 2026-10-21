<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Enter your name: </td>
                <td>
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew"
                        :actionSuccess="actionSuccess" submitOnEnter="true">
                    </ejs-inplaceeditor>
                </td>
        </table>
    </div>
</template>

<script>
import { InPlaceEditorComponent } from "@syncfusion/ej2-vue-inplace-editor";
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';

export default {
    name: "App",
    components: {
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    methods: {
        actionSuccess: function (e) {
            let pk = e.data['PrimaryKey'];
            if (isNOU(pk) || pk === '') {
                document.querySelector('.e-editable-value').classList.add('e-send-error');
            }
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

.e-inplaceeditor .e-editable-value-wrapper .e-editable-value.e-send-error {
    color: red;
}
</style>

<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>EditableOn:</td>
                <td>
                    <ejs-dropdownlist ref="editableOn" id="editableon" width='90%' :dataSource='editableData'
                        :change='onEditableOn' :value='editableValue' :fields='editableFields'>
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Enter your name:</td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew"
                        submitOnEnter="true" :model="textModel" locale='fr-BE'>
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'fr-BE': {
        'inplace-editor': {
            'save': 'enregistrer',
            'cancel': 'Annuler',
            'loadingText': 'Chargement...',
            'editIcon': 'Cliquez pour éditer',
            'editAreaClick': 'Cliquez pour éditer',
            'editAreaDoubleClick': 'Double-cliquez pour éditer'
        }
    }
});

export default {
    name: "App",
    components: {
        "ejs-dropdownlist": DropDownListComponent,
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            textModel: {
                placeholder: 'Enter employee name'
            },
            editableFields: { text: 'editable', value: 'id' },
            editableData: [{ id: 'Click', editable: 'Click' }, { id: 'DblClick', editable: 'Double Click' }, { id: 'EditIconClick', editable: 'Edit Icon Click' }],
            editableValue: 'Click',
        };
    },
    methods: {
        onEditableOn: function (args) {
            let editableOn = this.$refs.editableOn.ej2Instances.value;
            this.$refs.editObj.editableOn = editableOn;
            this.$refs.editObj.dataBind();
        },
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inplace-editor/styles/material.css";

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

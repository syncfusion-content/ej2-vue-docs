<template>
    <div class="app">
        <table class="table-section">
            <tr>
                <td>Select frameworks </td>
                <td>
                    <ejs-inplaceeditor ref="tagObj" id="inplace_tag_editor" data-underline='false' mode="Inline"
                        type="MultiSelect" emptyText="Enter your tags" :url="serviceUrl" name='skill'
                        :value="multiValue" :model="selectModel" :actionSuccess="onActionSuccess"
                        :actionFailure="onActionFailure" :popupSettings="tagPopupSettings" adaptor='UrlAdaptor'
                        primaryKey="FrameWork">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { InPlaceEditorComponent, MultiSelect, ActionEventArgs } from "@syncfusion/ej2-vue-inplace-editor";

export default {
    name: "App",
    components: {
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        let multiData = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
        return {
            selectModel: {
                mode: 'Box',
                dataSource: multiData,
                placeholder: 'Enter your tags'
            },
            serviceUrl: 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData',
            multiValue: ['TypeScript', 'JavaScript'],
            popupSettings: {
                model: { width: 300 }
            },
            tagPopupSettings: {
                model: { width: 'auto' }
            },
        };
    },
    mounted: function () {
        this.chipOnCreate(this.$refs.tagObj.ej2Instances.value);
    },
    methods: {
        onActionSuccess: function (e) {
            e.value = this.chipCreation(e.value.split(','), true);
        },
        onActionFailure: function (e) {
            e.value = this.chipCreation(e.value.split(','), false);
        },
        chipOnCreate: function () {
            this.$refs.tagObj.ej2Instances.element.querySelector('.e-editable-value').innerHTML = this.chipCreation(this.$refs.tagObj.ej2Instances.value);
        },
        chipCreation: function (data) {
            let value = '<div class="e-chip-list">';
            [].slice.call(data).forEach((val) => {
                value += '<div class="e-chip"> <span class="e-chip-text"> ' + val + '</span></div>';
            });
            value += '</div>';
            return value;
        },
    },
    provide: {
        "inplaceeditor": [MultiSelect]
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
</style>
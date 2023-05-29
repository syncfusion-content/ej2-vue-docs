

import Vue from 'vue';
import { InPlaceEditorPlugin, MultiSelect, ActionEventArgs } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
<div class="app">
    <table class="table-section">
        <tr>
            <td>Select frameworks </td>
            <td>
                <ejs-inplaceeditor ref="tagObj" id="inplace_tag_editor" data-underline='false' mode="Inline" type="MultiSelect" emptyText="Enter your tags" :url="serviceUrl" name='skill'  
                :value="multiValue" :model="selectModel" :actionSuccess= "onActionSuccess" :actionFailure = "onActionFailure" :popupSettings="tagPopupSettings"  adaptor='UrlAdaptor' primaryKey = "FrameWork">
                </ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
`,

  name: 'app',
      data () {
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
    mounted: function() {
   this.tagObj = this.$refs.tagObj.ej2Instances;
      this.chipOnCreate(this.tagObj.value);
    },
    methods: {
        onActionSuccess: function(e) {
            e.value = this.chipCreation(e.value.split(','), true);
        },
        onActionFailure: function(e) {
            e.value = this.chipCreation(e.value.split(','), false);
        },
        chipOnCreate: function() {
            this.tagObj.element.querySelector('.e-editable-value').innerHTML = this.chipCreation(this.tagObj.value);
        },
        chipCreation: function(data) {
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

});

import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <table class="table-section">
            <tr>
                <td>ActionOnBlur</td>
                <td>
                     <ejs-dropdownlist ref="actions" id="actions" :dataSource='blurActionData' :change='onEditableOn' :value='actionValue' :fields='actionFields'>
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Enter your Name</td>
                <td class="sample-td">
                <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew" submitOnEnter= "true" :model="textModel"  >
                </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
`,

  name: 'app',
      data () {
        return {
            textModel: {
                placeholder: 'Enter Some Text'
            },
            actionFields: { text: 'editable', value: 'id' },
            blurActionData: [{ id: 'Submit', editable: 'Submit' }, {id: 'Cancel', editable: 'Cancel'}, { id:'Ignore', editable: 'Ignore'}],
            actionValue: 'Submit',
        };
    },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        onEditableOn: function() {
            var actionType = this.$refs.actions.ej2Instances.value;
            this.$refs.editObj.ej2Instances.actionOnBlur = actionType;
            this.editObj.dataBind();
        },
    }

});
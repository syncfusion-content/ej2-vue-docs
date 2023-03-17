
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
                <td>Position</td>
                <td>
                    <ejs-dropdownlist ref="editorMode" id="editorMode" :dataSource='dataPlace' :change='changeEditorMode' :value='dataValue' :fields='placeFields'>
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="edit-heading sample-td">Enter your Name</td>
                <td class="sample-td">
                <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Popup" type="Text" value="Andrew" submitOnEnter= "true" :model="textModel" :popupSettings="textpopupsettings">
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
                placeholder: 'Enter Some Name',
            },
            textpopupsettings: {
                model: {
                position: 'BottomCenter'
                }
            },
            dataValue: 'BottomCenter',
            placeFields: { text: 'mode', value: 'id' },
            dataPlace: [{ id: 'TopLeft', mode: 'TopLeft' }, { id: 'TopCenter', mode: 'TopCenter' },{ id: 'TopRight', mode: 'TopRight' }, { id: 'BottomLeft', mode: 'BottomLeft' }, { id: 'BottomCenter', mode: 'BottomCenter' }, { id: 'BottomRight', mode: 'BottomRight' }, { id: 'LeftTop', mode: 'LeftTop' },{ id: 'LeftCenter', mode: 'LeftCenter' }, { id: 'LeftBottom', mode: 'LeftBottom' }, { id: 'RightTop', mode: 'RightTop' }, { id: 'RightCenter', mode: 'RightCenter' }, { id: 'RightBottom', mode: 'RightBottom' }],
        }
    },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        changeEditorMode: function(args) {
           var positions = this.$refs.editorMode.$el.value;
           this.$refs.editObj.ej2Instances.popupSettings.model.position = positions;
           this.editObj.dataBind();
        }
    }

});
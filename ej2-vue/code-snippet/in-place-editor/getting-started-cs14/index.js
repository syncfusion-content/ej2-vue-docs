
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <table class="table-section">
        <tr>
            <td>Open Animation:</td>
            <td>
         <ejs-dropdownlist ref="editorMode" id="editorMode" width='90%' :dataSource='dataPlace' :change='valueChange' :value='dataValue' :fields='placeFields'>
         </ejs-dropdownlist>
         </td>
        </tr>
        <tr>
            <td class="sample-td">Enter your name:</td>
            <td class="sample-td">
               <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Popup" type="Text" value="Andrew" submitOnEnter= "true" :model="textModel" :popupSettings=textPopupSettings>
              </ejs-inplaceeditor>
            </td>
        </tr>
    <table>
  </div>
`,

  data (){
    return {
        placeFields: { text: 'data', value: 'id' },
        dataPlace: [{ id: 'None', data: 'None' }, { id: 'FadeIn', data: 'FadeIn' }, { id: 'FadeZoomIn', data: 'FadeZoomIn'}, { id: 'ZoomIn', data: 'ZoomIn' }],
        dataValue: 'ZoomIn',
        textModel: {
            placeholder: 'Enter some text'
        },
        textPopupSettings: {
            title: 'Enter Employee Name',
            model: {
                animation: {
                    open: { effect: 'ZoomIn', duration: 1000, delay: 0 }
                }
            }
        },
    };
  },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        valueChange: function(e) {
            this.$refs.editObj.popupSettings.model.animation.open.effect = e.value;
            this.$refs.editObj.dataBind();
        }
    }

});
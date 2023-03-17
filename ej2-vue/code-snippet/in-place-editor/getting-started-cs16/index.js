
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(InPlaceEditorPlugin);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
<table class="table-section">
    <tr>
        <td>
            <div>Disabled</div>
        </td>
        <td>
            <div>
                <ejs-checkbox ref="checkObj2" id="editorEnable" :change="onChangeEnable" label='Disable'></ejs-checkbox>
                </div>
        </td>
    </tr>
    <tr>
        <td class="sample-td">
            <div>Enter your name: </div>
        </td>
        <td class="sample-td">
            <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" actionOnBlur='Ignore' value="Andrew" submitOnEnter= "true">
            </ejs-inplaceeditor>
        </td>
    </tr>
  </table>
  </div>
`,

  data (){
    return {
       labelPosition: 'Before',
    };
  },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        onChangeEnable: function(args) {
            var checkObj1 = this.$refs.checkObj2.ej2Instances;
            checkObj1.checked ? this.editObj.disabled = true : this.editObj.disabled = false;
        },
    }

});
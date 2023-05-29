
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';

Vue.use(InPlaceEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <table class="table-section">
        <tr>
           <td>Enter your name: </td>
           <td>
        <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew" :actionSuccess="actionSuccess" submitOnEnter= "true">
        </ejs-inplaceeditor>
        </td>
    </table>
  </div>
`,

  data (){
    return {
    };
  },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        actionSuccess: function(e) {
        let pk = e.data['PrimaryKey'];
        if (isNOU(pk) || pk === '') {
            document.querySelector('.e-editable-value').classList.add('e-send-error');
        }
    }
    }

});
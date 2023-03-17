
import Vue from 'vue';
import { InPlaceEditorPlugin, MultiSelect, ActionEventArgs } from "@syncfusion/ej2-vue-inplace-editor";

Vue.use(InPlaceEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div class="app">
    <table class="table-section">
       <tr>
       <td>Select customer name: </td>
       <td>
       <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList"  :model="dropdownModel" value="Maria Anders">
       </ejs-inplaceeditor>
       </td>
       </tr>
    </table>
    </div>
`,

  name: 'app',
      data () {
        let dropdownData =  [
          { Id: '1', Name: 'Maria Anders' },
          { Id: '2', Name: 'Ana Trujillo' },
          { Id: '3', Name: 'Antonio Moreno' },
          { Id: '4', Name: 'Thomas Hardy' },
          { Id: '5', Name: 'Chiristina Berglund' },
          { Id: '6', Name: 'Hanna Moos' }
        ];
        return {
              dropdownModel: {
            dataSource: dropdownData,
            placeholder: 'Select a customer',
             fields: { text: 'Name' },
        },
        };
    },
    mounted: function() {
   this.dropObj = this.$refs.dropObj.ej2Instances;
    },

});
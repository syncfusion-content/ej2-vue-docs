
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class="control-group">
        <h3> Modify Basic Details </h3>
          <table>
            <tr>
              <td>Name</td>
              <td class='left'>
                <ejs-inplaceeditor id="element" type="Text" mode="Inline" value="Andrew" :model="textModel"></ejs-inplaceeditor>
              </td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td class='left'>
                <ejs-inplaceeditor id="dateofbirth" type="Date" mode="Inline" :value="dateValue" :model="dateModel"></ejs-inplaceeditor>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td class='left'>
                <ejs-inplaceeditor id="gender" type="DropDownList" mode= "Inline" value="Male" :model="dropdownModel"></ejs-inplaceeditor>
              </td>
            </tr>
          </table>
      </div>
    </div>
`,

  name: 'app',
  data () {
    return {
      dateValue: new Date('04/12/2018'),
      dateModel: {
        showTodayButton: true,
         placeholder: 'Select date of birth'
      },
      textModel: {
          placeholder: 'Enter your name'
      },
      dropdownModel: {
           dataSource: ['Male', 'Female'],
           placeholder: 'Select gender'
      },
    }
  }

});
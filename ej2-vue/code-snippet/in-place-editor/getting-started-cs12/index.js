
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div id='container'>
         <div class="control-group">
          <table>
            <tr>
                <td><b>TextBox :</b></td>
                <ejs-inplaceeditor id="textbox" type="Text" mode="Inline" :model="textModel" v-model="value">
                </ejs-inplaceeditor>

                <ejs-inplaceeditor id="textbox2" type="Text" mode="Inline" :model="textModel" v-model="value">
                </ejs-inplaceeditor>
            </tr>
            <tr>
                <td><b>Datepicker :</b></td>
                <ejs-inplaceeditor id="dateeditor1" mode="Inline" type="Date" :model="dateModel" v-model="datePickerValue">
                </ejs-inplaceeditor>

                <ejs-inplaceeditor id="dateeditor2" mode="Inline" type="Date" :model="dateModel" v-model="datePickerValue">
                </ejs-inplaceeditor>
            </tr>
            <tr>
                <td><b>DropDownList :</b></td>
                <ejs-inplaceeditor id="dropDowneditor1" mode="Inline" type="DropDownList" :model="dropdownModel" v-model="dropdownValue">
                </ejs-inplaceeditor>

                <ejs-inplaceeditor id="dropDowneditor2" mode="Inline" type="DropDownList" :model="dropdownModel" v-model="dropdownValue">
                </ejs-inplaceeditor>
            </tr>
        </table>
      </div>
    </div>
`,

  name: 'app',
  data () {
    let frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript',
    'Angular', 'React', 'Vue','Ionic'];
    return {
      value: 'Andrew',
      dropdownValue: 'Android',
      datePickerValue: new Date('11/23/2018'),
      textModel: {
        placeholder: 'Enter employee name'
      },
      dropdownModel: {
        placeholder: 'Select frameWorks',
        dataSource: frameWorkList
      },
      dateModel: {
        placeholder: 'Select date'
      }
    }
  }

});
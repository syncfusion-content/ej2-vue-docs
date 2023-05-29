
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <table class="table-section">
            <tr>
                <td>select date: </td>
                <td>
                    <ejs-inplaceeditor ref="dateObj" id="datePickerEle" mode="Inline" type="Date" :value="datePickerValue" :model="datePickerModel">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
`,

  name: 'app',
      data () {
        return {
            datePickerModel: {
                placeholder: 'Select date',
                format: 'yyyy-MM-dd'
            },
           datePickerValue: new Date('11/23/2018'),
        };
    },
    mounted: function(){
        this.dateObj = this.$refs.dateObj.ej2Instances;
    },

});
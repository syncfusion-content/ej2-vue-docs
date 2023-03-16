
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
<h4>Example of data-underline attribute</h4>
    <table class="table-section">
        <tr>
        <td>Intractable UI</td>
        <td>
        <ejs-inplaceeditor mode="Inline" :model="textModel" type="Text" value="Andrew">
        </ejs-inplaceeditor>
        </td>
        </tr>
        <tr>
        <td class="sample-td">Normal UI </td>
        <td class="sample-td">
        <ejs-inplaceeditor mode="Inline" :model="textModel" type="Text" data-underline="false" value="Andrew">
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
        };
    }

});
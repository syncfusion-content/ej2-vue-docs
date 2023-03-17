
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Enter your name:</td>
                <td>
                    <ejs-inplaceeditor ref="editObj" id="editor" mode="Inline" value= 'Andrew' enableRtl=true>
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
`,

  name: 'app',
      data () {
        return {};
    },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },

});
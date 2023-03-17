
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target"  class="control-section">
        <ejs-dialog :target='target' :width='width' :content='content'>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: "#target",
            width: '335px',
            content: 'This is a Dialog with content.'
        }
    }

});
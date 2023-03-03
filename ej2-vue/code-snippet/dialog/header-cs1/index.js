
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target" class="control-section; position:relative" style="height:350px;">
        <!-- Render Dialog -->
        <ejs-dialog ref="headerDialog" :header='header' :target='target' :width='width' :content='content'>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: "#target",
            width: '335px',
            header: 'Dialog header',
            content: 'This is a Dialog with header.'
        }
    }

});
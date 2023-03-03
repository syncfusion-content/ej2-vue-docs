
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="target"  class="control-section">
        <ejs-dialog :header="header" :content="content" :allowDragging="draggable" :target='target' :width='width'> </ejs-dialog>
    </div>
`,

   data : function() {
    return {
        target: '#target',
        width: '300px',
        header: 'Dialog',
        draggable: true,
        content: 'This is a Dialog with drag enabled.'
    }
  }

});
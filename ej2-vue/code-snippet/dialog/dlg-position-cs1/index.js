
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
     <div id="target" class="control-section">
        <ejs-dialog id='firstDialog' header='Position-01' :position='position' width='360px' ref='dialogObj'
            target='#target' :content='content' :closeOnEscape='false'>
        </ejs-dialog>
        <ejs-dialog ref="secondDialog" header='Position-02' :height='height1' :target='target' width='360px'  :position='position1' :content='content1'>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: "#target",
            height: '120px',
            content: 'The dialog is positioned at {X: 160, Y: 14} coordinates.',
            position: { X: 420, Y: 14 },
            height1: '120px',
            content1: 'The dialog is positioned at {X: 160, Y: 240} coordinates',
            position1: { X: 420, Y: 240 }
        }
    },

});
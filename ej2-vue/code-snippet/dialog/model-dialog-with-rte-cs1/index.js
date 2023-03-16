
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
Vue.use(RichTextEditorPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="modalTarget" class="control-section; position:relative" style="height:350px;">
        <!-- Render Button to open the modal Dialog -->
        <ejs-button id='modalbtn' v-on:click.native="modalBtnClick">Open</ejs-button>
        <!-- Render modal Dialog -->
        <ejs-dialog ref="modalDialog"  :isModal='isModal' :header='header' :target='target' :width='width' :animationSettings='animationSettings' :content='content' :open="dlgopen" :close="modalDlgClose" :overlayClick="overlayClick">
        <ejs-richtexteditor  id='defaultRTE' ref="defaultRTE" > <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
         </ejs-richtexteditor>
        </ejs-dialog>
    </div>
  </div>
`,

   provide: {
            richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
        },
    data: function() {
        return {
            target: "#modalTarget",
            width: '300px',
            content: document.getElementById('defaultRTE'),
            isModal: true,
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function(){
        document.getElementById('modalbtn').focus();
    },
    methods: {
        modalBtnClick: function() {
            this.$refs.modalDialog.show();
        },
        modalDlgClose: function() {
            document.getElementById('modalbtn').style.display = '';
        },
       dlgopen: function() {
        this.$refs.defaultRTE.refreshUI();
       },
        overlayClick: function() {
            this.$refs.modalDialog.hide();
        }
    }

});
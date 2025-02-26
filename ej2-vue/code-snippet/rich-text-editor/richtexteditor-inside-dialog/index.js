import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { RichTextEditorPlugin,
  Toolbar,
  Link,
  Image,
  Count,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(ButtonPlugin);
Vue.use(DialogPlugin);
Vue.use(RichTextEditorPlugin);
  
new Vue({
	el: '#app',
	template: `
        <div>
            <ejs-button @click="openDialog">Open Dialog</ejs-button>
            
            <ejs-dialog
            ref="dialog"
            :width="'350px'"
            :height="'400px'"
            :showCloseIcon="true"
            :visible="false"
            :open="onDialogOpen"
            :header="headerTemplate"
            :footerTemplate="footerTemplate"
            >
            <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor></div>
            </ejs-dialog>
        </div>`,

        data() {
            return {
                headerTemplate: 'Dialog Header',
                footerTemplate: 'Dialog Footer',
            };
        },
        methods: {
            onDialogOpen() {
                this.$refs.editor.refreshUI();
            },
            openDialog() {
                this.$refs.dialog.show();
            },
        },
        provide: {
            richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
        },
});
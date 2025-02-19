import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';
Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="rteInstance" :height="350" :editorMode="editorMode" :value="value" :toolbarSettings="toolbarConfig" :created="created">
  </ejs-richtexteditor>
`,

    data() {
      return {
        value: `***Overview***
            The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor used to create and edit the content and return valid HTML markup or markdown (MD) of the content. The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.

            ***Key features***
            - *Mode*: Provides IFRAME and DIV mode.
            - *Module*: Modular library to load the necessary functionality on demand.
            - *Toolbar*: Provide a fully customizable toolbar.
            - *Editing*: HTML view to edit the source directly for developers.
            - *Third-party Integration*: Supports to integrate third-party library.
            - *Preview*: Preview the modified content before saving it.
            - *Tools*: Handling images, hyperlinks, video, uploads and more.
            - *Undo and Redo*: Undo/redo manager.
            - *Lists*:Creates bulleted and numbered list.`,
        editorMode: 'Markdown',
      }
    },
    
    provide: {
      richtexteditor: [Toolbar, Link, Image, MarkdownEditor]
    }
  
});
import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownEditor, MarkdownFormatter } from '@syncfusion/ej2-vue-richtexteditor';
Vue.use(RichTextEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="rteInstance" height="350" editorMode="Markdown" :value="value" :toolbarSettings="toolbarConfig" :created="created" :formatter="formatter">
  </ejs-richtexteditor>`,

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
        toolbarConfig: {
          items: [
            'Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|',
            {
              tooltipText: 'Preview',
              template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
            },
            '|', 'Undo', 'Redo'
          ]
        },
        formatter: new MarkdownFormatter({
            listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
            formatTags: {
                'Blockquote': '> '
            },
            selectionTags: {'Bold': ' __ ',  'Italic': ' _ '}
        }),
      }
    },
    methods: {
      created: function() {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
        document.head.appendChild(script);
        this.textArea = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');
        this.textArea.onkeyup = (Event) => {
        this.markDownConversion();
        };
        document.getElementById('preview-code').onclick = () => {
          this.fullPreview({ mode: true, type: 'preview'});
          if (event.target.parentElement.classList.contains('e-active')) {
            this.$refs.rteInstance.ej2Instances.disableToolbarItem([
              'Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
              'UnorderedList', 'CreateLink', 'Image'
            ]);
            event.target.parentElement.parentElement.nextElementSibling.classList.add('e-overlay');
          } else {
            this.$refs.rteInstance.ej2Instances.enableToolbarItem([
              'Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
              'UnorderedList', 'CreateLink', 'Image'
            ]);
            event.target.parentElement.parentElement.nextElementSibling.classList.remove('e-overlay');
          }
        };
      },
      markDownConversion: function() {
        if (document.getElementById('MD_Preview').classList.contains('e-active')) {
          var id = this.$refs.rteInstance.ej2Instances.getID() + 'html-view';
          var htmlPreview = this.$refs.rteInstance.$el.querySelector('#' + id);
          htmlPreview.innerHTML = marked.parse(this.textArea.value);
        }
      },
      fullPreview: function(event){
        var mdSource = document.getElementById('preview-code');
        var id = this.$refs.rteInstance.ej2Instances.getID() + 'html-view';
        var htmlPreview = this.$refs.rteInstance.$el.parentNode.querySelector('#' + id);
        if ((mdSource.classList.contains('e-active')) && event.mode) {
          mdSource.classList.remove('e-active');
          this.textArea.style.display = 'block';
          this.textArea.style.width = '100%';
          htmlPreview.style.display = 'none';
        } else {
          mdSource.classList.add('e-active');
          if (!htmlPreview) {
            htmlPreview = document.createElement('div');
            htmlPreview.id = id;
            htmlPreview.setAttribute('class', 'e-content');
            this.textArea.parentNode.appendChild(htmlPreview);
          }
          if (event.type === 'preview') {
            this.textArea.style.display = 'none';
            htmlPreview.classList.add('e-pre-source');
          } else {
            htmlPreview.classList.remove('e-pre-source');
            this.textArea.style.width = '50%';
          }
          htmlPreview.style.display = 'block';
          htmlPreview.innerHTML = marked.parse(this.$refs.rteInstance.ej2Instances.contentModule.getEditPanel().value);
          mdSource.parentElement.title = 'Code View';
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, MarkdownEditor]
    }
});
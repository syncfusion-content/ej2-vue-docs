
    import Vue from "vue";
    import { RichTextEditorPlugin, Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

    Vue.use(RichTextEditorPlugin);

    
new Vue({
	el: '#app',
	template: `
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor :imageUploading="onImageUploading" :insertImageSettings="insertImageSettings" :toolbarSettings="toolbarSettings" >
          </ejs-richtexteditor>
        </div>
    </div>
</div>
</div>
`,

        data: function() {
            return {
            toolbarSettings: {
                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
                    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                    'LowerCase', 'UpperCase', '|',
                    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                    'Outdent', 'Indent', '|',
                    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
            },
            insertImageSettings: {
                saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
                path: "../Images/"
            },
        }
        },
        methods: {
            onImageUploading: function(args){
                console.log("file is uploading");
                var imgSize = 500000;
                var sizeInBytes = args.fileData.size;
                if ( imgSize < sizeInBytes ) {
                args.cancel = true;
            }
            }
            },
            provide:{
                richtexteditor: [Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar]
            }
        }
    
});
<template>
    <ejs-richtexteditor  ref="smartEditor" :toolbarSettings="toolbarSettings" :slashMenuSettings="slashMenuSettings" :slashMenuItemSelect="onSlashMenuItemSelect" id="smartSuggestion" placeholder="Type '/' and choose format">
    </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Table, Audio, Video, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter, SlashMenu } from "@syncfusion/ej2-vue-richtexteditor";
export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent
    },    
    data: function() {
        return {
        meetingNotes:'<p><strong>Meeting Notes</strong></p><table class="e-rte-table" style="width: 100%; min-width: 0px; height: 150px;"> <tbody> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Attendees</strong></td> <td style="width: 50%;" class=""><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Date & Time</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Agenda</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Discussed Items</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Action Items</strong></td> <td style="width: 50%;"><br></td> </tr> </tbody> </table>',
        signature: '<p><br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', '|',
                'SourceCode', '|', 'Undo', 'Redo']
            },
            slashMenuSettings: {
                enable: true,
                items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'OrderedList', 'UnorderedList',
                    'CodeBlock', 'Blockquote', 'Link', 'Image', 'Video', 'Audio', 'Table', 'Emojipicker',
                    {
                        text: 'Meeting notes',
                        description: 'Insert a meeting note template.',
                        iconCss: 'e-icons e-description',
                        type: 'Custom',
                        command: 'MeetingNotes'
                    },
                    {
                        text: 'Signature',
                        description: 'Insert a signature template.',
                        iconCss: 'e-icons e-signature',
                        type: 'Custom',
                        command: 'Signature'
                    }
                ]
            }
        };
    },
    provide:{
        richtexteditor:[SlashMenu, Toolbar, Link, Image, Audio, Table, Video, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter]
    },
    methods: {
        onSlashMenuItemSelect: function (args) {
            if (args.itemData.command === 'MeetingNotes') {
                this.$refs.smartEditor.ej2Instances.executeCommand('insertHTML', this.meetingNotes, { undo: true });
            }
            if (args.itemData.command === 'Signature') {
                this.$refs.smartEditor.ej2Instances.executeCommand('insertHTML', this.signature, { undo: true });
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>
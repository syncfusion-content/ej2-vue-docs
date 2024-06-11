<template>
    <div>
        <div id="modalTarget" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the modal Dialog -->
            <ejs-button id='modalbtn' v-on:click="modalBtnClick">Open</ejs-button>
            <!-- Render modal Dialog -->
            <ejs-dialog ref="modalDialog" :isModal='isModal' :header='header' :target='target' :width='width'
                :animationSettings='animationSettings' :content='content' :open="dlgopen" :close="modalDlgClose"
                :overlayClick="overlayClick">
                <ejs-richtexteditor id='defaultRTE' ref="defaultRTE">
                    <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the
                        best user experience to create and update the content.Users can format their content using standard
                        toolbar commands.</p>
                </ejs-richtexteditor>
            </ejs-dialog>
        </div>
    </div>
</template>
<script>

import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { RichTextEditorComponent, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-dialog": DialogComponent,
        "ejs-richtexteditor": RichTextEditorComponent
    },
    provide: {
        richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    },
    data: function () {
        return {
            target: "#modalTarget",
            width: '300px',
            content: document.getElementById('defaultRTE'),
            isModal: true,
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function () {
        document.getElementById('modalbtn').focus();
    },
    methods: {
        modalBtnClick: function () {
            this.$refs.modalDialog.show();
        },
        modalDlgClose: function () {
            document.getElementById('modalbtn').style.display = '';
        },
        dlgopen: function () {
            this.$refs.defaultRTE.refreshUI();
        },
        overlayClick: function () {
            this.$refs.modalDialog.hide();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.control-section {
    height: 100%;
    min-height: 200px;
}
</style>
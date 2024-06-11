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
<script setup>
import { provide } from "vue";
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

import { onMounted, ref } from 'vue';

const modalDialog = ref(null);
const defaultRTE = ref(null);

provide('richtexteditor', [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]);

const target = "#modalTarget";
const width = '300px';
const content = document.getElementById('defaultRTE');
const isModal = true;
const animationSettings = { effect: 'None' };

onMounted(() => {
    document.getElementById('modalbtn').focus();
});

const modalBtnClick = () => {
    modalDialog.value.show();
};
const modalDlgClose = () => {
    document.getElementById('modalbtn').style.display = '';
};
const dlgopen = () => {
    defaultRTE.value.refreshUI();
};
const overlayClick = () => {
    modalDialog.value.hide();
};

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
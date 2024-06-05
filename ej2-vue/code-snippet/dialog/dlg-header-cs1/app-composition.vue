<template>
    <div>
        <div id="target" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the Dialog -->
            <ejs-button id='dlgbtn' v-on:click="btnClick">Open Dialog</ejs-button>
            <!-- Render Dialog -->
            <ejs-dialog ref="footerDialog" :target='target' :width='width' :buttons='buttons' :content='content'
                :close="dlgClose">
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { onMounted, ref } from 'vue';

const footerDialog = ref(null);

const target = "#target";
const width = '250px';
const content = 'This is a dialog without header.';

onMounted(() => {
    document.getElementById('dlgbtn').focus();
});

const btnClick = () => {
    footerDialog.value.show();
};
const dlgClose = () => {
    document.getElementById('dlgbtn').style.display = '';
};
const dlgButtonClick = () => {
    footerDialog.value.hide();
};
const buttons = [{ click: dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
{ click: dlgButtonClick, buttonModel: { content: 'Cancel' } }];

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
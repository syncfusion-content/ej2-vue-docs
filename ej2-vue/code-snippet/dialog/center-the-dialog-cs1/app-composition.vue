<template>
    <div>
        <div id="modalTarget" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the modal Dialog -->
            <ejs-button id='modalbtn' v-on:click="modalBtnClick">Open</ejs-button>
            <!-- Render modal Dialog -->
            <ejs-dialog ref="modalDialog" :isModal='isModal' :header='header' :target='target' :width='width'
                :animationSettings='animationSettings' :content='content' :open="modalDlgOpen" :close="modalDlgClose"
                :overlayClick="overlayClick">
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { onMounted, ref } from 'vue';

const modalDialog = ref(null);
const target = document.body;
const width = '335px';
const header = 'Software Update';
const content = 'Your current software version is up to date.';
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
const modalDlgOpen = () => {
    document.getElementById('modalbtn').style.display = 'none';
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

body {
    height: 1200px;
}
</style>
<template>
    <div>
        <div id="target" class="control-section; position:relative" style="height:350px;">

            <ejs-button id='modalbtn' v-on:click="btnClick">Open</ejs-button>

            <ejs-dialog ref="accessDialog" :header='header' :target='target' :width='width' :height='height'
                :showCloseIcon='true' :buttons='buttons' :content='content' :open="dlgOpen" :close="dlgClose">
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { onMounted, ref } from 'vue';

const accessDialog = ref(null);
const target = '#target';
const width = '335px';
const height = '350px';
const header = 'Feedback';
const content = "<form><div class='form-group'><label for='email'>Email:</label>" +
    "<input type='email' class='form-control' id='email'>" +
    "</div><div class='form-group'>" +
    "</div><div class='form-group'><label for='comment'>Comments:</label>" +
    "<textarea style='resize: none;' class='form-control' rows='4' id='comment'></textarea>" +
    "</div>" +
    "</form>";

onMounted(() => {
    document.getElementById('modalbtn').focus();
});
const btnClick = () => {
    accessDialog.value.show();
};
const dlgClose = () => {
    document.getElementById('modalbtn').style.display = '';
};
const dlgOpen = () => {
    document.getElementById('modalbtn').style.display = 'none';
};
const dlgButtonClick = () => {
    accessDialog.value.hide();
};
const buttons = [{ click: dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
{ click: dlgButtonClick, buttonModel: { content: 'Cancel' } }];

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

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
<template>
    <div>
        <div id="target">
            <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click="dialogBtnClick">Open</ejs-button>
            </center>

            <ejs-dialog id="dialog" ref="Dialog" :header='header' :showCloseIcon='showCloseIcon' :target='target'
                :width='width' :animationSettings='animationSettings' :footerTemplate='footer' :visible='visible'
                :content='content' :closeOnEscape='closeOnEscape'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { onMounted, ref } from 'vue';

const Dialog = ref(null);
const header = 'Delete Multiple Items';
const content = "Are you sure you want to permanently delete all of these items?"
const showCloseIcon = true;
const visible = false;
const footer = '<div><button id="Button1" class="e-control e-btn e-primary e-flat" data-ripple="true"><span class="e-btn-icon e-icons e-ok-icon e-icon-left"></span>Yes</button><button id="Button2" class="e-control e-btn e-flat" data-ripple="true"><span class="e-btn-icon e-icons e-close-icon e-icon-left"></span>No</button></div>';
const target = document.body;
const width = '300px';
const animationSettings = { effect: 'Zoom' };
const closeOnEscape = true;

onMounted(() => {
    document.getElementById('Button1').onclick = () => {
        Dialog.value.hide();
    };
    document.getElementById('Button2').onclick = () => {
        Dialog.value.hide();
    };
});

const dialogBtnClick = () => {
    Dialog.value.show();
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

#target {
    height: 100%;
    min-height: 350px;
}

.e-ok-icon::before {
    content: '\e7ff';
}

.e-close-icon::before {
    content: '\e825';
}
</style>
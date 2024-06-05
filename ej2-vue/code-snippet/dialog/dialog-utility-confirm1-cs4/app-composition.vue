<template>
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click="dialogBtnClick">Open Confirm
                Dialog</ejs-button></center>
    </div>
</template>
<script setup>
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const dialogBtnClick = () => {
    //  Initialize and render Confirm dialog with options
    DialogUtility.confirm({
        title: ' Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        okButton: { text: 'OK', click: okClick },
        cancelButton: { text: 'Cancel', click: cancelClick },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};
const okClick = () => {
    alert('you clicked OK button');
};
const cancelClick = () => {
    alert('you clicked Cancel button');
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
</style>
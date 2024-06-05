<template>
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click="dialogBtnClick">Open Alert
                Dialog</ejs-button></center>
    </div>
</template>
<script setup>

import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const dialogBtnClick = () => {
    DialogUtility.alert({
        title: 'Alert Dialog',
        content: "This is an Alert Dialog!",
        okButton: { text: 'OK', click: okClick },
        showCloseIcon: true,
        closeOnEscape: true
    });
};
const okClick = () => {
    alert('you clicked OK button');
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
<template>
   <div id='app'>
        <div>
            <ejs-button ref='infoButtonRef' class="e-btn e-control e-info" id="info_toast" v-on:click="infoToast">Info Message</ejs-button>
            <ejs-button ref='successButtonRef' class="e-btn e-control e-success" id="success_toast" v-on:click="successToast">Success Message</ejs-button>
            <ejs-button ref='warningButtonRef' class="e-btn e-control e-warning" id="warning_toast" v-on:click="warningToast">Warning Message</ejs-button>
            <ejs-button ref='dangerButtonRef' class="e-btn e-control e-danger" id="danger_toast" v-on:click="dangerToast">Danger Message</ejs-button>
        </div>
        <br/>
        <div>
            <center><ejs-button ref='hideButtonRef' class="e-btn" id="hide_toast" v-on:click="hideToast">Hide All</ejs-button></center>
        </div>
   </div>
</template>

<script setup>

import { ToastUtility } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

let ToastObj = undefined;

const infoToast = function(){
    ToastObj = ToastUtility.show('Please read the comments carefully', 'Information', 20000);
};

const successToast = function(){
    ToastObj = ToastUtility.show('Your message has been sent successfully', 'Success', 20000);
};

const warningToast = function(){
    ToastObj = ToastUtility.show('There was a problem with your network connection', 'Warning', 20000);
};

const dangerToast = function(){
    ToastObj = ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000);
};

const hideToast = function(){
    ToastObj.hide('All');
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>

<style lang="scss">
#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
</style>
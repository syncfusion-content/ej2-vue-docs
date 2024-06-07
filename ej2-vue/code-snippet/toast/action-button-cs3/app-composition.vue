<template>
   <div id='app'>
       <center><ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showToast">Show Toast</ejs-button></center>
   </div>
</template>

<script setup>

import { ToastUtility } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

let ToastObj = undefined;

const showToast = function(){
    ToastObj = ToastUtility.show({
      title: 'Toast Title',
      content: 'Toast shown using utility function with ToastModel',
      timeOut: 20000,
      position: { X: 'Right', Y: 'Bottom' },
      showCloseButton: true,
      click: toastClick,
      buttons:  [{
          model: { content: 'Close' }, click: toastClose
      }]
  });
};

const toastClose = function(){
  ToastObj.hide();
};

const toastClick = function(){
  console.log('Toast click event triggered');
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
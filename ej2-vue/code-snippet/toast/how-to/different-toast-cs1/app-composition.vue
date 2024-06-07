<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="showToast" v-on:click="showBtnClick">Show Types</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position'></ejs-toast>
   </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref, onMounted } from "vue";

const elementRef = ref(null);

const position = { X: 'Right', Y: 'Bottom' };

onMounted(() => {
    elementRef.value.show(toasts[toastFlag]);
});

const toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning' },
    { title: 'Success !', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success'},
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger' },
    { title: 'Information !', content: 'Please read the comments carefully.', cssClass: 'e-toast-info' }
];

let toastFlag = 0;

const showBtnClick = function(){
    elementRef.value.show(toasts[toastFlag]);
    ++toastFlag;
    if (toastFlag === (toasts.length)) {
       toastFlag = 0;
    }
};

</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css';
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
<template>
   <div id='app'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='elementRef' id='element' title='Sample Toast Title' content='Sample Toast content' :position='position' :beforeOpen='beforeOpen' :close="onClose" :created="onCreated"></ejs-toast>
   </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref, onMounted } from "vue";

const elementRef = ref(null);

let toasts;
let toastFlag;
let toastInstance = null;

const position = { X: 'Center' };

onMounted(() => {
    toastFlag = 0;
    toasts = [
             { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false },
             { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
             { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }];
    elementRef.value.show(toasts[toastFlag]);
    ++toastFlag;
});

const showBtnClick = function(){
    elementRef.value.show(toasts[toastFlag]);
    ++toastFlag;
    if (toastFlag === (toasts.length)) {
        toastFlag = 0;
    }
};

const beforeOpen = function(e){
    if (preventDuplicate(e)) {
        e.cancel = true;
    }
};

const onCreated = function() {
    if (!isNullOrUndefined(toastInstance)){
        toastInstance.show(toasts[toastFlag]);
        ++toastFlag;
    }
};

const onClose = function(e) {
    for (let i = 0; i < toasts.length; i++) {
        if (toasts[i].title === e.options.title) {
            toasts[i].isOpen = false;
        }
    }
};

const preventDuplicate = function(e){
   for (let i = 0; i < toasts.length; i++) {
       if (toasts[i].title === e.title && toasts[i].isOpen) {
           return true;
       }
   }
   return false;
};

</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css';
</style>
<template>
   <div id='app'>
        <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        <ejs-toast ref='elementRef' id='element' title='Sample Toast Title' content='Sample Toast content' :position='position' :beforeOpen='beforeOpen'></ejs-toast>
   </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref, onMounted } from "vue";

const elementRef = ref(null);

const position = { X: 'Right', Y: 'Bottom' };

let toasts;
let toastFlag;
let maxCount;

onMounted(() => {
    toastFlag = 0;
    maxCount = 3;
    toasts = [
             { title: 'Warning !', content: 'There was a problem with your network connection.' },
             { title: 'Success !', content: 'Your message has been sent successfully.' },
             { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },
             { title: 'Information !', content: 'Please read the comments carefully.' }];
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
    if (maxCount === elementRef.value.ej2Instances.element.childElementCount) {
        e.cancel =true;
    } else {
        e.cancel = false;
    }
};

</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css';
</style>
<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position' :click='onClick'></ejs-toast>
        <div id='templateToast' style="display: none;color:red"> System affected by virus !!! </div>
    </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref, onMounted } from "vue";

const elementRef = ref(null);

const position = { X: 'Right', Y: 'Bottom' };

let toastFlag;
let toasts;

onMounted(() => {
   toastFlag = 0;
   toasts = [
       { template: '2 Mail has received'},
       { template: 'User Guest Logged in'},
       { template: 'Logging in as Guest'},
       { template: 'Ticket has reserved '},
       { template: '#templateToast' }];
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

const onClick = function(e){
     e.clickToClose = true;
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
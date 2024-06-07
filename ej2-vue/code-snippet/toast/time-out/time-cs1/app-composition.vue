<template>
   <div id='app'>
       <div class="e-float-input"><input class="e-input" id="toast_input_index" required="" value="0"><span class="e-float-line"></span><label class="e-float-text">Enter timeOut</label></div>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementToastTime' id='elementToastTime' :position='position' title='Anjolie Stokes' content='<p><img src="https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png"></p>' width=230 height=250 :buttons='button'></ejs-toast>
   </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from "vue";

const elementToastTime = ref(null);

const position = { X: 'Right', Y: 'Bottom' };
const button = [
    { model: { content: "Ignore" } },
    { model: { content: "reply" } }
];

const showBtnClick = function(){
    let value = parseInt(document.getElementById('toast_input_index').value)
    elementToastTime.show({timeOut: value});
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
#app {
    max-width: 200px;
}

#elementToastTime {
    text-align: center;
  }

  #elementToastTime img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  #elementToastTime .e-toast-message {
    width: inherit;
  }

</style>
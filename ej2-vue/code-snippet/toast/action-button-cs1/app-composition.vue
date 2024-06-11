<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementToastTime' id='elementToastTime' :position='position' title='Anjolie Stokes' content='<p><img src="https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png"></p>' width=230 height=250 :buttons='button'></ejs-toast>
   </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { closest } from '@syncfusion/ej2-base';
import { ref } from 'vue';

const position =  { X: 'Right', Y: 'Bottom' };
const button = [{
    model: { content: "Ignore" },
    click: btnClick
}, {
    model: { content: "reply" }
}];

const elementToastTime = ref(null);
const showBtnClick = function(){
    elementToastTime.value.show();
};
const btnClick = function(e){
    let toastEle = closest(e.target, '.e-toast');
    elementToastTime.value.hide(toastEle);
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
<template>
  <div id="app">
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='defaultRef' title='File Downloading' content='<div class="progress"><span style="width: 80%"></span></div>' :position='position' showCloseButton=true target='#toast_target' newestOnTop=true showProgressBar=true progressDirection="Ltr"></ejs-toast>
       <br/><br/>
       <div id='toast_target'></div>
  </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from '@syncfusion/ej2-vue-notifications';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref, onMounted } from 'vue';

const defaultRef = ref(null);

const position = { X: 'Center' };

onMounted(() => {
    defaultRef.value.show();
});

const showBtnClick = function(){
    defaultRef.value.show();
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

.e-toast-message {
    width: 100%;
}

.progress {
    height: 20px;
    position: relative;
    margin: 20px 0 20px 0;
    background: #555;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
}

.progress span {
    background-color: #f0a3a3;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f0a3a3), color-stop(1, #f42323));
    display: block;
    height: 100%;
    border-radius: 10px;
    width: 50%;
    position: relative;
    overflow: hidden;
}

.progress span::after {
  background-image: -webkit-gradient(linear, 0 0, 100% 100%,
    color-stop(.25, rgba(255, 255, 255, .2)),
    color-stop(.25, transparent), color-stop(.5, transparent),
    color-stop(.5, rgba(255, 255, 255, .2)),
    color-stop(.75, rgba(255, 255, 255, .2)),
    color-stop(.75, transparent), to(transparent));
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: 50px 50px;
    -webkit-animation: moveAnimate 2s linear infinite;
    overflow: hidden;
}

@-webkit-keyframes moveAnimate {
    0% {
       background-position: 0 0;
    }
    100% {
       background-position: 50px 50px;
    }
}
</style>
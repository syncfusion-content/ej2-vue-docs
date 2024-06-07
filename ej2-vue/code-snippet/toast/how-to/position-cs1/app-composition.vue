<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Right Position Toast</ejs-button>
       <ejs-button ref='showButton1Ref' class="e-btn" id="show_toast1" v-on:click="showBtn1Click">Show Left Position Toast</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position' title='Warning !' content='There was a problem with your network connection.' :click='onClick'></ejs-toast>
       <ejs-toast ref='element1Ref' id='element1' :position='position1' title='Success !' content='Your message has been sent successfully.' :click='onClick'></ejs-toast>
   </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref, onMounted } from "vue";

const position = { X: 'Right', Y: 'Bottom' };
const position1 = { X: 'Left', Y: 'Bottom' };
const elementRef = ref(null);
const element1Ref = ref(null);

onMounted(() => {
    elementRef.value.show();
    element1Ref.value.show();
});

const showBtnClick = function(){
    elementRef.value.show();
};

const showBtn1Click = function(){
    element1Ref.value.show();
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
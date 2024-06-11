<template>
  <div class="predefinedDialogs">
    <ejs-button id="promptDlgBtn" v-on:click="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
  </div>
</template>

<script setup>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const promptBtnClick = () => {
  DialogUtility.confirm({
    title: "Join chat group",
    width: "250px",
    content: '<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
    position: { X: 'center', Y: 'center' }
  });
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>
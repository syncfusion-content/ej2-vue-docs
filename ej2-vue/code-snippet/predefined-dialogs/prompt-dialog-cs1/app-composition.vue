<template>
  <div class="predefinedDialogs">
    <ejs-button id="promptDlgBtn" v-on:click="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
    <span id="statusText"></span>
  </div>
</template>
<script setup>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

let dialogObj = undefined;
let value;

const promptBtnClick = () => {
  document.getElementById("statusText").style.display = "none";
  dialogObj = DialogUtility.confirm({
    title: "Join chat group",
    content: '<P>Enter your name:</p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
    okButton: { click: promptOkAction },
    cancelButton: { click: promptCancelAction },
    position: { X: 'center', Y: 'center' }
  });
};
const promptOkAction = () => {
  value = document.getElementById("inputEle").value;
  if (value == "") {
    dialogObj.hide();
    document.getElementById("statusText").innerHTML = "The user's input is returned as\" \"";
    document.getElementById("statusText").style.display = "block";
  }
  else {
    dialogObj.hide();
    document.getElementById("statusText").innerHTML = "The user's input is returned as" + " " + value;
    document.getElementById("statusText").style.display = "block";
  }
};
const promptCancelAction = () => {
  dialogObj.hide();
  document.getElementById("statusText").innerHTML = "The user canceled the prompt dialog";
  document.getElementById("statusText").style.display = "block";
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#statusText {
  font-size: 16px;
  margin-top: 20px;
}

.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>
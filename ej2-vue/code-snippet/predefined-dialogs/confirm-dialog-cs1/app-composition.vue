<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn" v-on:click="confirmBtnClick" cssClass="e-success">Confirm</ejs-button>
    <span id="statusText"></span>
  </div>
</template>
<script setup>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

let dialogObj = undefined;

const confirmBtnClick = () => {
  document.getElementById("statusText").style.display = "none";
  dialogObj = DialogUtility.confirm({
    title: " Delete multiple items",
    content: "Are you sure you want to permanently delete these items?",
    okButton: { click: confirmOkAction },
    cancelButton: { click: confirmCancelAction },
  });
};
const confirmOkAction = () => {
  dialogObj.hide();
  document.getElementById("statusText").innerHTML = "The user confirmed the dialog box";
  document.getElementById("statusText").style.display = "block";
};
const confirmCancelAction = () => {
  dialogObj.hide();
  document.getElementById("statusText").innerHTML = "The user canceled the dialog box.";
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
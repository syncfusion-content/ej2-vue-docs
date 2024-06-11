<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn" v-on:click="confirmBtnClick" cssClass="e-success">Confirm</ejs-button>
  </div>
</template>
<script setup>

import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const confirmBtnClick = () => {
  DialogUtility.confirm({
    title: 'Delete file',
    content: "Are you sure you want to permanently delete these file?",
    width: '300px',
    okButton: { text: 'Yes', icon: 'e-icons e-check' },
    cancelButton: { text: 'No', icon: 'e-icons e-close' }
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
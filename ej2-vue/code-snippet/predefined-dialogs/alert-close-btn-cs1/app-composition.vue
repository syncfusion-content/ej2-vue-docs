<template>
  <div class="predefinedDialogs">
    <ejs-button id="alertDlgBtn" v-on:click="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
  </div>
</template>

<script setup>

import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const alertBtnClick = () => {
  DialogUtility.alert({
    title: "Low battery",
    content: "10% of battery remaining",
    width: "250px",
    showCloseIcon: true,
    closeOnEscape: true
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
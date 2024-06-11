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
    title: "About syncfusion succinctly series",
    content: "The succinctly series was born in 2012.",
    cssClass: "customClass",
  });
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}

.e-dialog.customClass {
  min-width: 300px;
  min-height: 200px;
}
</style>
<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn" v-on:click="confirmBtnClick" cssClass="e-success">Confirm </ejs-button>
  </div>
</template>

<script setup>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const confirmBtnClick = () => {
  DialogUtility.confirm({
    title: "Join chat group",
    content: '<p>Enter your name: </p><input class="e-input"/>',
    width: "350px",
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
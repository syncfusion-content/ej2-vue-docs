<template>
  <div id="app">
    <ejs-checkbox v-model="checked" label="EJ2 Vue Checkbox" :checked="checked" />
    <p>
      Checkbox State: <span id="checked-state" v-text="checked" ></span>
    </p>
  </div>
</template>
<script setup>
import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';
const checked = true;
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  #app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
  }
</style>
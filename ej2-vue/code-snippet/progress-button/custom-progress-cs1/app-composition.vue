<template>
  <ejs-progressbutton ref="progressbutton" :content="content" duration=4000 :enableProgress="true" :cssClass="cssClass"
    :begin="begin" :end="end"></ejs-progressbutton>
</template>

<script setup>

import { ProgressButtonComponent as EjsProgressbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const begin = function (args) {
  this.$refs.progressbutton.content = 'Uploading...';
  this.$refs.progressbutton.cssClass = 'e-hide-spinner e-info';
}
const end = function (args) {
  this.$refs.progressbutton.content = 'Success...';
  this.$refs.progressbutton.cssClass = 'e-hide-spinner e-success';
  setTimeout(() => {
    this.$refs.progressbutton.content = 'Upload';
    this.$refs.progressbutton.cssClass = 'e-hide-spinner';
  }, 500)
}
const content = 'Upload';
const cssClass = 'e-hide-spinner';
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
</style>
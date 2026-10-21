<template>
<ejs-checkbox label='Default'></ejs-checkbox>
</template>

<script setup>
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/check-box/index.css";
.e-checkbox-wrapper {
  margin-top: 18px;
}
</style>
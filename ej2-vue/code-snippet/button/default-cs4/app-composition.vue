<template>
<div>
    <ejs-button cssClass='e-block'>Block Button</ejs-button>
    <ejs-button cssClass='e-block' isPrimary=true>Block Button</ejs-button>
    <ejs-button cssClass='e-block e-success'>Block Button</ejs-button>
</div>
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
button {
  margin: 25px 0;
}
</style>
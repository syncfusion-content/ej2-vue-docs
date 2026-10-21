<template>
    <ejs-button id='button' isPrimary=true>Button</ejs-button>
</template>

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
document.getElementById('button').setAttribute('title', 'Primary Button');
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
button {
  margin: 25px 5px 20px 20px;
}
</style>
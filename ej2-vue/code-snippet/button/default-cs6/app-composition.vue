<template>
    <ejs-button cssClass='e-custom'>Custom</ejs-button>
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-custom {
  border-radius: 0;
  height: 30px;
  width: 80px;
}

.e-custom, .e-custom:hover, .e-custom:focus, .e-custom:active {
  background-color: #ff6e40;
  color: #fff;
}

button {
  margin: 25px 5px 20px 20px;
}
</style>
<template>
<ejs-button cssClass='e-round-corner'>Button</ejs-button>
</template>

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-round-corner {
  border-radius: 5px;
}

button {
  margin: 25px 5px 20px 20px;
}
</style>
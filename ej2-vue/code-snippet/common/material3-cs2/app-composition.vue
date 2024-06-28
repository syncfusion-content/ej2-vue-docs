<template>
<div>
    <ejs-button cssClass='e-primary'>Button</ejs-button>
</div>
</template>

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';

button {
  margin: 25px 5px 20px 20px;
}
:root {
	--color-sf-primary: 104, 134, 164;
}
</style>
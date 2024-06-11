<template>
    <div>
        <ejs-button cssClass='e-flat'>Flat</ejs-button>
        <ejs-button cssClass='e-outline'>Outline</ejs-button>
        <ejs-button cssClass='e-round' iconCss='e-icons e-plus-icon' isPrimary=true></ejs-button>
    </div>
</template>

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

button {
  margin: 25px 5px 20px 20px;
}

.e-plus-icon::before {
  content: '\e823';
}
</style>
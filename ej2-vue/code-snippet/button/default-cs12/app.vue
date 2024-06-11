<template>
<div>
    <ejs-button cssClass='e-primary'>Primary</ejs-button>
    <ejs-button cssClass='e-success'>Success</ejs-button>
    <ejs-button cssClass='e-info'>Info</ejs-button>
    <ejs-button cssClass='e-warning'>Warning</ejs-button>
    <ejs-button cssClass='e-danger'>Danger</ejs-button>
    <ejs-button cssClass='e-link'>Link</ejs-button>
</div>
</template>

<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
name: "App",
components: {
"ejs-button":ButtonComponent
},
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

button {
  margin: 25px 5px 20px 20px;
}
</style>
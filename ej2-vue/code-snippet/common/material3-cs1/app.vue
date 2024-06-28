<template>
<div>
    <ejs-checkbox label='Default'></ejs-checkbox>
    <ejs-button cssClass='e-primary'>Button</ejs-button>
    <ejs-button cssClass='e-success'>Button</ejs-button>
    <ejs-button cssClass='e-info'>Button</ejs-button>
    <ejs-button cssClass='e-warning'>Button</ejs-button>
    <ejs-button cssClass='e-danger'>Button</ejs-button>
</div>
</template>

<script>

import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
name: "App",
components: {
"ejs-checkbox":CheckBoxComponent,
"ejs-button":ButtonComponent
},
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';

.e-checkbox-wrapper {
  margin-top: 18px;
}
button {
  margin: 25px 5px 20px 20px;
}
.dark
{
  background-color:black;
}
</style>


<template>
<div>
    <ejs-button cssClass='e-block'>Block Button</ejs-button>
    <ejs-button cssClass='e-block' isPrimary=true>Block Button</ejs-button>
    <ejs-button cssClass='e-block e-success'>Block Button</ejs-button>
</div>
</template>

<script>
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);

export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

button {
  margin: 25px 0;
}
</style>



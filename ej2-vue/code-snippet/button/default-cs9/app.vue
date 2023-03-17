

<template>
    <ejs-button iconCss='e-icons e-setting-icon' enableRtl=true>Settings</ejs-button>
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

.e-setting-icon::before {
  content: '\e434';
}

button {
  margin: 25px 5px 20px 20px;
}
</style>



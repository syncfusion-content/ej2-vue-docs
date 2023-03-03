

<template>
  <div class='wrap'>
    <h4>Sign here</h4>
    <ejs-signature id="signature"></ejs-signature>
  </div>
</template>

<script>
import Vue from 'vue';
import { SignaturePlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SignaturePlugin);

export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

#signature {
    border: 1px solid lightgray;
    height: 100%;
    width: 100%;
}

.wrap {
    height: 300px;
    width: 550px;
}
</style>



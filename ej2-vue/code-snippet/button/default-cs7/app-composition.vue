<template>
<div>
    <div>
        <input type='button' value='Input Button' class='e-btn e-link' />
    </div>
    <br>
    <div>
        <a id='anchorbtn' class='e-btn e-primary' href='#'>Google</a>
    </div>
</div>
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {}
</script>
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
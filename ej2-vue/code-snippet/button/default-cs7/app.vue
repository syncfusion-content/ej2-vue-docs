

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

<script>
import Vue from 'vue';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
name: "App",
components: {
"ejs-button":ButtonComponent
}
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>



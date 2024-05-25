<template>
    <div>
    <div class='wrapper1'>
        <h4>Choose Color</h4>
        <ejs-colorpicker v-model="value"></ejs-colorpicker>
    </div>
    <div class="wrapper2">
    <h4>Choose Color</h4>
        <ejs-colorpicker v-model="value"></ejs-colorpicker>
    </div>
    </div>
</template>

<script setup>

import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const value=null;
 
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrapper1 {
  /* margin: 0 auto;
  width: 300px;
  text-align: center; */
  float: left;
  padding: 10px 0 0 160px;
}

.wrapper2 {
    float: right;
    padding: 10px 330px 0 0;
}
</style>
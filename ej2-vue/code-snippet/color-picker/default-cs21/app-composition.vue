<template>
  <div class='wrap'>
    <h4>Select Color</h4>
    <ejs-colorpicker id="element" :showRecentColors="true"></ejs-colorpicker>
  </div>
</template>
  
<script setup>

import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

</script>
  
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/color-picker/index.css";

.wrap {
  margin: 0 auto;
  width: 300px;
  text-align: center;
}

h4,
#preview {
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
  font-size: 14px;
}
</style>
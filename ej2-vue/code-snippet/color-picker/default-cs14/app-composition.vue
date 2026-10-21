<template>
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker :showButtons="false"></ejs-colorpicker>
</div>
</template>

<script setup>

import { ColorPickerComponent as EjsColorpicker} from '@syncfusion/ej2-vue-inputs';
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
</style>
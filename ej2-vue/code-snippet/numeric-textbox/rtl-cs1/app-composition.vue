<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" locale='ar-AE' floatLabelType='Auto' placeholder='أدخل القيمة' :enableRtl='true' :value='value'></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { L10n } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent as EjsNumerictextbox} from "@syncfusion/ej2-vue-inputs";

L10n.load({
    'ar-AE': {
      'numerictextbox': { incrementTitle: 'قيمة الزيادة', decrementTitle: 'قيمة تناقص'}
    }
});
const value = 100;
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 0px auto;
    width: 240px;
}
</style>
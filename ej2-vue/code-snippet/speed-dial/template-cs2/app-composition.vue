<template>
  <div>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
    <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' content="Edit" :popupTemplate="popupTemplateContent"
      cssClass='popupSpeedDial' target='#targetElement'>
      <template v-slot:popupTemplateContent>
        <div>
          <div class="speeddial-form">
            <p>Here you can customize your code.</p>
          </div>
        </div>
      </template>
    </ejs-speeddial>
  </div>
</template>

<script setup>

import { SpeedDialComponent as EjsSpeeddial } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const popupTemplateContent = "<div><div class='speeddial-form'><p>Here you can customize your code.</p></div></div>"
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.speeddial-form {
  width: 200px;
  height: 80px;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  background: #f5f5f5;
  padding: 15px;
}
</style>
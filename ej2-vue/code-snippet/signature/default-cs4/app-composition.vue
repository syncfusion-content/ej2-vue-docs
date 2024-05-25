<template>
  <div class='wrap'>
    <div id="input">
      <input type="text" id="text" placeholder="Enter the Background Color Value">
      <ejs-button cssClass="e-primary" v-on:click="onSet">Set Background Color</ejs-button>
    </div>
    <div id="signature-control">
      <ejs-signature id="signature"></ejs-signature>
    </div>
  </div>
</template>

<script setup>

import { SignatureComponent as EjsSignature } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const onSet = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  var bgColor = document.getElementById('text').value;
  signature.backgroundColor = bgColor;
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#signature {
  border: 1px solid lightgray;
  height: 100%;
  width: 100%;
}

#signature-control {
  height: 250px;
}

#input {
  margin-bottom: 30px;
}

#text {
  height: 30px;
  width: 300px;
}

.wrap {
  height: 300px;
  width: 550px;
}
</style>
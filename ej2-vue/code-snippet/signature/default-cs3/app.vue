<template>
  <div class='wrap'>
    <div id="input">
      <input type="text" id="text" placeholder="Enter the Stroke Color Value">
      <ejs-button cssClass="e-primary" v-on:click="onSet">Set Stroke Color</ejs-button>
    </div>
    <div id="signature-control">
      <ejs-signature id="signature"></ejs-signature>
    </div>
  </div>
</template>

<script>

import { SignatureComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-signature": SignatureComponent
  },
  data: function () {
    return {
    };
  },
  methods: {
    onSet: function () {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      var color = document.getElementById('text').value;
      signature.strokeColor = color;
    }
  }
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
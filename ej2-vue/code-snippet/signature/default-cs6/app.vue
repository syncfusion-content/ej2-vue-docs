<template>
  <div class='wrap'>
    <div id="signature-control">
      <ejs-signature id="signature"></ejs-signature>
    </div>
    <div id="input">
      <table>
        <tbody>
          <tr>
            <td>
              <div>Enter the Text:</div>
            </td>
            <td><input type="text" id="text" placeholder="Enter the Text"></td>
          </tr>
          <tr>
            <td style="padding-top:10px">
              <div>Font Family:</div>
            </td>
            <td style="padding-top:10px">
              <ejs-dropdownlist ref="font" :dataSource='fontsData' :value="fontValue"
                @change="fontChange"></ejs-dropdownlist>
            </td>
          </tr>
          <tr>
            <td style="padding-top:10px">
              <div>Font Size:</div>
            </td>
            <td style="padding-top:10px">
              <ejs-dropdownlist ref="size" :dataSource='sizeData' :value="sizeValue"
                @change="sizeChange"></ejs-dropdownlist>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <ejs-button cssClass="e-primary" v-on:click="onDraw">Draw</ejs-button>
    </div>
  </div>
</template>

<script setup>

import { SignatureComponent as EjsSignature } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from 'vue';

enableRipple(true);

const font = ref(null);
const size = ref(null);

let fontValue = "Arial", sizeValue = 20;
const fontsData = ['Arial', 'Serif', 'Sans-serif', 'Cursive', 'Fantasy'];
const sizeData = [20, 30, 40, 50];

const onDraw = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  var text = document.getElementById('text').value;
  signature.draw(text, font.value.ej2Instances.value, size.value.ej2Instances.value);
};
const fontChange = (args) => {
  fontValue = args.value;
};
const sizeChange = (args) => {
  sizeValue = args.value;
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#signature {
  border: 1px solid lightgray;
  height: 100%;
  width: 100%;
}

#signature-control {
  height: 300px;
  width: 500px;
  float: left;
}

#input {
  margin-top: 30px;
  margin-right: 20px;
  float: right;
}

#text {
  height: 30px;
}

.wrap {
  height: 300px;
  width: 100%;
}
</style>
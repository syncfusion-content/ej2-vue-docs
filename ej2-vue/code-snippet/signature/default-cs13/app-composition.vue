<template>
  <div class='wrap'>
      <div id="option">
          <table>
              <tr>
                  <td>
                      <ejs-button id="undo" cssClass="e-primary" :disabled="undoDisable"
                          v-on:click="onUndo">UNDO</ejs-button>
                  </td>
                  <td>
                      <ejs-button id="redo" cssClass="e-primary" :disabled="redoDisable"
                          v-on:click="onRedo">REDO</ejs-button>
                  </td>
                  <td>
                      <ejs-button id="clear" cssClass="e-primary" :disabled="clearDisable"
                          v-on:click="onClear">CLEAR</ejs-button>
                  </td>
                  <td>
                      <div style="margin-bottom: 5px; margin-left: 200px;"><ejs-checkbox label='Disabled'
                              :change="disableChange"></ejs-checkbox></div>
                      <div style="margin-left: 200px;"><ejs-checkbox label='ReadOnly'
                              :change="readOnlyChange"></ejs-checkbox></div>
                  </td>
              </tr>
          </table>
      </div>
      <div id="signature-control">
          <ejs-signature id="signature" :change="onChange"></ejs-signature>
      </div>
  </div>
</template>
  
<script setup>

import { SignatureComponent as EjsSignature } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from 'vue';

// Define reactive variables
let undoDisable = ref(true);
let redoDisable = ref(true);
let clearDisable = ref(true);
enableRipple(true);


const onUndo = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  if (!signature.disabled && !signature.isReadOnly) {
      signature.undo();
  }
};
const onRedo = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  if (!signature.disabled && !signature.isReadOnly) {
      signature.redo();
  }
};
const onClear = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  if (!signature.disabled && !signature.isReadOnly) {
      signature.clear();
  }
};
const disableChange = (args) => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  signature.disabled = args.checked;
};
const readOnlyChange = (args) => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  signature.isReadOnly = args.checked;
};
const onChange = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  if (!signature.disabled && !signature.isReadOnly) {
      if (signature.canUndo()) {
          undoDisable.value = false;
      } else {
          undoDisable.value = true;
      }
      if (signature.canRedo()) {
          redoDisable.value = false;
      } else {
          redoDisable.value = true;
      }
      if (!signature.isEmpty()) {
          clearDisable.value = false;
      } else {
          clearDisable.value = true;
      }
  }
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
  width: 550px;
}

#option {
  margin-bottom: 10px;
}

.wrap {
  height: 300px;
  width: 100%;
}
</style>
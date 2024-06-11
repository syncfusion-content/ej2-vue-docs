<template>
  <div class='wrap'>
    <span>Sign here</span>
    <div id="signature-control">
      <ejs-signature id="signature"></ejs-signature>
    </div>
    <ejs-button id="save" cssClass="e-primary" v-on:click="onSave">Save as Base64</ejs-button>
    <ejs-dialog ref="dialogObj" header="Base64 of the signature" :animationSettings="animationSettings"
      :showCloseIcon="true" :visible="false" width="80%">
    </ejs-dialog>
  </div>
</template>

<script setup>

import { SignatureComponent as EjsSignature } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from 'vue';

enableRipple(true);

const dialogObj = ref(null);
const animationSettings = { effect: 'Zoom', duration: 400 };


const onSave = () => {
  var signature = getComponent(document.getElementById('signature'), 'signature');
  dialogObj.value.ej2Instances.content = signature.getSignature();
  dialogObj.value.ej2Instances.show();
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

#signature {
  border: 1px solid lightgray;
  height: 100%;
  width: 100%;
}

#signature-control {
  height: 300px;
  width: 550px;
}

#save {
  margin-top: 30px;
}

.wrap {
  height: 300px;
  width: 550px;
}
</style>
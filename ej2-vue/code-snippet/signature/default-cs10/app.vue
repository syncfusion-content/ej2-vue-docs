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

<script>

import { SignatureComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "App",
  components: {
    "ejs-signature": SignatureComponent,
    "ejs-button": ButtonComponent,
    "ejs-dialog": DialogComponent,
  },
  data: function () {
    return {
      animationSettings: { effect: 'Zoom', duration: 400 },
    };
  },
  methods: {
    onSave: function () {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      this.$refs.dialogObj.ej2Instances.content = signature.getSignature();
      this.$refs.dialogObj.ej2Instances.show();
    }
  }
}
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
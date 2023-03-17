

<template>
<div class='wrap'>
    <div id="input">
        <input type="text" id="text" placeholder="Enter the URL of the background Image" >
        <ejs-button cssClass="e-primary" v-on:click.native="onSet">Set Background Image</ejs-button>
    </div>
    <div id="signature-control">
        <ejs-signature id="signature"></ejs-signature>  
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { SignaturePlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SignaturePlugin);
Vue.use(ButtonPlugin);

export default {
   data: function() {
    return {
    };
  },
  methods: {
    onSet: function() {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        var bgImage = document.getElementById('text').value;
        signature.backgroundImage = bgImage;
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




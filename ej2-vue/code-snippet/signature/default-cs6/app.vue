

<template>
<div class='wrap'>
    <div id="signature-control">
            <ejs-signature id="signature"></ejs-signature>
        </div>
        <div id="input">
            <table>
                <tbody>
                    <tr>
                        <td><div>Enter the Text:</div></td>
                        <td><input type="text" id="text" placeholder="Enter the Text"></td>
                    </tr>
                    <tr>
                        <td style="padding-top:10px"><div>Font Family:</div></td>
                        <td style="padding-top:10px">
                          <ejs-dropdownlist ref="font" :dataSource='fontsData' :value="fontValue" @change="fontChange"></ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top:10px"><div>Font Size:</div></td>
                        <td style="padding-top:10px">
                          <ejs-dropdownlist ref="size" :dataSource='sizeData' :value="sizeValue"  @change="sizeChange"></ejs-dropdownlist>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <ejs-button cssClass="e-primary" v-on:click.native="onDraw">Draw</ejs-button>
        </div>
</div>
</template>

<script>
import Vue from 'vue';
import { SignaturePlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownListPlugin);
Vue.use(SignaturePlugin);
Vue.use(ButtonPlugin);

export default {
   data: function() {
    return {
      fontValue: "Arial", sizeValue: 20,
      fontsData: ['Arial', 'Serif', 'Sans-serif', 'Cursive', 'Fantasy'],
      sizeData: [ 20, 30, 40, 50],
    };
  },
  methods: {
    onDraw: function(args) {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        var text = document.getElementById('text').value;
        signature.draw(text, this.$refs.font.value, this.$refs.size.value);
    },
    fontChange: function(args) {
      this.fontValue = args.value;
    },
    sizeChange: function(args) {
      this.sizeValue = args.value;
    }
  }
}
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




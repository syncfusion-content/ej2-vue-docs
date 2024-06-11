<template>
    <div id="app" class="barcodeStyle">
         <ejs-barcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :displayText="displaytext"
              :type="type"
              :value="value"
              :mode="mode"
            ></ejs-barcodegenerator>
     </div>
</template>
<style>
    .barcodeStyle {
            height: 150px;
            width: 200px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script setup>

import { BarcodeGeneratorComponent as EjsBarcodegenerator} from '@syncfusion/ej2-vue-barcode-generator';

const width = "200px";
const height = "150px";
const displaytext = { text: 'text' };
const mode = "SVG";
const type = "Code128";
const value = "SYNCFUSION";

</script>
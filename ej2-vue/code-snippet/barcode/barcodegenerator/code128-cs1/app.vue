<template>
    <div id="app" class="barcodeStyle">
         <ejs-barcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
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
<script>

import { BarcodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-barcodegenerator":BarcodeGeneratorComponent
    },
    data () {
        return {
              width: "200px",
              height: "150px",
              mode: "SVG",
              type: "Code128",
              value: "SYNCFUSION",
        }
    }
}
</script>
<template>
    <div id="app" class="barcodeStyle">
        <ejs-qrcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :foreColor="foreColor"
              :value="value"
              :mode="mode"
            ></ejs-qrcodegenerator>
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

import { QRCodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-qrcodegenerator":QRCodeGeneratorComponent
    },
    data () {
        return {
            width: "200px",
            height: "150px",
            mode: "SVG",
            foreColor:"red",
            value: "Syncfusion",
        }
    }
}
</script>
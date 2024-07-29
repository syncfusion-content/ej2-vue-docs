<template>
    <div id="app" class="barcodeStyle">
        <ejs-qrcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :logo="logo"
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
            logo: { imageSource: 'https://www.syncfusion.com/web-stories/wp-content/uploads/sites/2/2022/02/cropped-Syncfusion-logo.png' },
            mode: "SVG",
            value: "Syncfusion",
        }
    }
}
</script>
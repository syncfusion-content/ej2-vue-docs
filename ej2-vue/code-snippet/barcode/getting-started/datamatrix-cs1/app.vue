<template>
    <div id="app" class="barcodeStyle">
        <ejs-datamatrixgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
            ></ejs-datamatrixgenerator>
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
import { DataMatrixGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-datamatrixgenerator":DataMatrixGeneratorComponent
    },
    data () {
        return {
             width: "200px",
             height: "150px",
             mode: "SVG",
             value: "Syncfusion",
        }
    }
}
</script>
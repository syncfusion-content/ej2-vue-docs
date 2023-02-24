

<template>
    <div id="app" class="barcodeStyle">
        <ejs-datamatrixgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :foreColor="foreColor"
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
import Vue from 'vue';
import { DataMatrixGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(DataMatrixGeneratorPlugin);
export default {
    name: 'app'
    data () {
        return {
             width: "200px",
             height: "150px",
             mode: "SVG",
             foreColor:"red"
             value: "Syncfusion",
        }
    }
}
</script>



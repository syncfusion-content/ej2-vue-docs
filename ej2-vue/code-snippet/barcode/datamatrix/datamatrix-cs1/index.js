
import Vue from 'vue';
import { DataMatrixGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(DataMatrixGeneratorPlugin);

new Vue({
	el: '#app',
	template: `
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
`,

    name: 'app'
    data () {
        return {
             width: "200px",
             height: "150px",
             mode: "SVG",
             value: "Syncfusion",
        }
    }

});
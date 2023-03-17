
import Vue from 'vue';
import { QRCodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(QRCodeGeneratorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app" class="barcodeStyle">
        <ejs-qrcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
            ></ejs-qrcodegenerator>


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
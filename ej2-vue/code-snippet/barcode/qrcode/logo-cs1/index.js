
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
              :logo="logo"
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
            logo: { imageSource: 'https://www.syncfusion.com/web-stories/wp-content/uploads/sites/2/2022/02/cropped-Syncfusion-logo.png' },
            mode: "SVG",
            value: "Syncfusion",
        }
    }

});
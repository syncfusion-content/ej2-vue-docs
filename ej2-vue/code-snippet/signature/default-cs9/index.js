
import Vue from 'vue';
import { SignaturePlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SignaturePlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <div id="input">
        <input type="text" id="text" placeholder="Enter the Base64 or URL of signature" >
        <ejs-button cssClass="e-primary" v-on:click.native="onOpen">Open</ejs-button>
    </div>
    <div id="signature-control">
        <ejs-signature id="signature"></ejs-signature>
    </div>
</div>
`,

   data: function() {
    return {
    };
  },
  methods: {
    onOpen: function() {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        var sign = document.getElementById('text').value;
        signature.load(sign);
    }
  }

});
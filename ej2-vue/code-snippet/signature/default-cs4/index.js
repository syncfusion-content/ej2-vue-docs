
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
        <input type="text" id="text" placeholder="Enter the Background Color Value" >
        <ejs-button cssClass="e-primary" v-on:click.native="onSet">Set Background Color</ejs-button>
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
    onSet: function() {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        var bgColor = document.getElementById('text').value;
        signature.backgroundColor = bgColor;
    }
  }

});
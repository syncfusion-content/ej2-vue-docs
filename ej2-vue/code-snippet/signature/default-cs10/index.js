
import Vue from 'vue';
import { SignaturePlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DialogPlugin);
Vue.use(SignaturePlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <span>Sign here</span>
    <div id="signature-control">
        <ejs-signature id="signature"></ejs-signature>  
    </div>
    <ejs-button id="save" cssClass="e-primary" v-on:click.native="onSave">Save as Base64</ejs-button>
    <ejs-dialog ref="dialogObj" header="Base64 of the signature" :animationSettings="animationSettings" :showCloseIcon="true" :visible="false" width="80%">
            </ejs-dialog>
</div>
`,

   data: function() {
    return {
      animationSettings: { effect: 'Zoom', duration: 400 },
    };
  },
  methods: {
    onSave: function(args) {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        this.$refs.dialogObj.content = signature.getSignature();
        this.$refs.dialogObj.show();
    }
  }

});

import Vue from 'vue';
import { SignaturePlugin } from "@syncfusion/ej2-vue-inputs";
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { getComponent } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SignaturePlugin);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <div>
        <span>Sign here</span>
        <ejs-splitbutton :items='items' content='Save' iconCss='e-sign-icons e-save' :select="onSelect"></ejs-splitbutton>
    </div>
    <div id="signature-control">
        <ejs-signature id="signature"></ejs-signature>  
    </div>
</div>
`,

   data: function() {
    return {
      items:[
            {
                text: 'Png'
            },
            {
                text: 'Jpeg'
            },
            {
                text: 'Svg'
            }]
    };
  },
  methods: {
    onSelect: function(args) {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        signature.save(args.item.text, 'Signature');
    }
  }

});
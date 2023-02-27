
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(SpeedDialPlugin);

new Vue({
	el: '#app',
	template: `
    <div>
      <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
      <ejs-speeddial id='speeddial'  openIconCss='e-icons e-edit' content="Edit" :itemTemplate ="itemTemplateContent" target='#targetElement' :items='items'>
      </ejs-speeddial>
    </div>
`,

    data() {
        return {
            itemTemplateContent:"<div class='itemlist'><span class='icon ${iconCss}' style='padding:3px'></span><span class='text' style='padding:0 5px'>${text}</span></div>",
            items: [
                { iconCss: 'e-icons e-cut', text: 'Cut' },
                { iconCss: 'e-icons e-copy', text: 'Copy' },
                { iconCss: 'e-icons e-paste', text: 'Paste' }
            ]
        };
    }

});
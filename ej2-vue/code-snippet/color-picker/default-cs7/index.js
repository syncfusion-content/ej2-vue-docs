
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker cssClass="e-custom-picker" value="#344aae" :modeSwitcher="false" :open="onOpen"></ejs-colorpicker>
</div>
`,

  methods: {
        onOpen: function(args) {
          args.element.querySelector('.e-handler').classList.add('e-icons');
        }
  }

});
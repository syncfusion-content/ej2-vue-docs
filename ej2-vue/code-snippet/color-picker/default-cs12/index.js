
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);

;
new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <div id='preview'></div>
    <h4>Select Color</h4>
    <ejs-colorpicker id="element" value="#ba68c8" mode="Palette" :noColor="true" :showButtons="false" :modeSwitcher="false" :change="onChange"></ejs-colorpicker>
</div>
`,

  methods: {
    onChange: function(args) {
      var preview = document.getElementById('preview');
      preview.style.backgroundColor = args.currentValue.hex;
      preview.textContent = args.currentValue.hex ? args.currentValue.hex : 'No color';
    }
  },
  mounted: function() {
      var preview = document.getElementById('preview');
      preview.style.backgroundColor = '#ba68c8';
      preview.textContent = '#ba68c8';
  }

});
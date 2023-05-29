
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
    <h4>Choose Color</h4>
    <ejs-colorpicker id="element" :change="onChange"></ejs-colorpicker>
</div>
`,

  methods: {
    onChange: function(args) {
      document.querySelector('.e-colorpicker-wrapper .e-selected-color').style.borderBottomColor = args.currentValue.rgba;
    }
  },
  mounted: function() {
      var previewIcon = document.querySelector('.e-colorpicker-wrapper .e-selected-color');
      previewIcon.classList.add("e-icons");
  }

});

import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(ColorPickerPlugin);

;
new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker id="element" type="text" class="e-input"></ejs-colorpicker>
</div>
`,

  mounted: function() {
    var target = document.getElementById("element");
    target.nextElementSibling.insertBefore(target, target.nextElementSibling.children[1]);
  }

});
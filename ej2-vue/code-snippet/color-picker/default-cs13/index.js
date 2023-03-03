
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { SplitButtonPlugin } from '@syncfusion/ej2-vue-splitbuttons';

Vue.use(ColorPickerPlugin);
Vue.use(SplitButtonPlugin);

;
new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <ul id="target" tabindex="0">
          <li class="e-item e-palette-item">
            <ejs-colorpicker id="element" ref="colorPicker" value="#f44336" mode="Palette" :inline="true" :columns="4" :showButtons="false" :modeSwitcher="false" :presetColors="presets" :beforeTileRender="beforeTileRender" :change="onChange"></ejs-colorpicker>
          </li>
          <li class="e-item" id="no-color" tabindex="-1">
            <span class="e-menu-icon e-nocolor"></span>
            No color
          </li>
      </ul>
    <div>
      <div id='preview'></div>
      <h4>Select Color</h4>
      <ejs-splitbutton id="splitbtn" ref="splitBtn" iconCss="e-cp-icons e-picker-icon" target="#target"></ejs-splitbutton>
    </div>
</div>
`,

  data() {
    return {
      presets: {
        'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4', '#009688',             '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
      }
    };
  },
  methods: {
    onChange: function(args) {
      document.querySelector(".e-split-btn .e-picker-icon").style.borderBottomColor = args.currentValue.hex;
      var preview = document.getElementById('preview');
      var splitBtnObj = this.$refs.splitBtn.ej2Instances;
      preview.style.backgroundColor = args.currentValue.hex;
      preview.textContent = args.currentValue.hex;
      if (splitBtnObj.element.getAttribute("aria-expanded")) {
        splitBtnObj.toggle();
        splitBtnObj.element.focus();
      }
    },
    beforeTileRender: function(args) {
      args.element.classList.add('e-custom-tile');
    }
  },
  mounted: function() {
      var preview = document.getElementById('preview');
      preview.style.backgroundColor = '#ba68c8';
      preview.textContent = '#ba68c8';
      document.getElementById('no-color').onclick = function() {
          //sets color picker value property to null
          this.$refs.colorPicker.ej2Instances.setProperties({ 'value': '' }, true);
          document.querySelector('.e-split-btn .e-picker-icon').style.borderBottomColor = 'transparent';
          preview.textContent = 'No color';
          preview.style.backgroundColor = 'transparent';
        }
  }

});

import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { SplitButtonPlugin } from '@syncfusion/ej2-vue-splitbuttons';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.use(ColorPickerPlugin);
Vue.use(SplitButtonPlugin);
Vue.use(DialogPlugin);

var pickerDlgContent = Vue.component("demo", {
    template: '<div class="dialogContent"><ejs-colorpicker id="picker" :inline="true" :modeSwitcher="false" :change="onPickerChange"></ejs-colorpicker></div>',
    data() {
        return {
            data: {}
        };
    },
    methods: {
      onPickerChange: function(args) {
        document.getElementById('splitbtn').children[0].style.borderBottomColor = args.currentValue.rgba;
        document.getElementById('pickerdlg').ej2_instances[0].hide();
      }
    }
});

;
new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <ul id="target" tabindex="0">
      <li class="e-item e-palette-item">
        <ejs-colorpicker ref="palette" id="palette" mode="Palette" :inline="true" :showButtons="false" :modeSwitcher="false" :change="onPaletteChange"></ejs-colorpicker>
      </li>
      <li class="e-item" tabindex="-1">
        <span class="e-menu-icon"></span>
        More colors...
      </li>
    </ul>
    <h4>Select color</h4>
    <ejs-splitbutton id="splitbtn" ref="splitBtn" iconCss="e-icons e-font-icon" target="#target" :open="onDdPopupOpen" :beforeClose="onBeforeDdPopupClose"></ejs-splitbutton>
     <ejs-dialog id="pickerdlg" ref="pickerDlg" cssClass="e-dlg-picker" :isModal="true" :target="target" :width="width" :height="height" :visible="false" :animationSettings="animationSettings" :content="pickerDlgContent" :open="pickerDlgOpen" :overlayClick="closePickerDlg"></ejs-dialog>
</div>
`,

  data() {
    return {
      target: ".wrap",
      width: "270px",
      height: "336px",
      animationSettings: { effect: 'Zoom' },
      pickerDlgContent: function () {
        return { template : pickerDlgContent }
      }
    };
  },
  methods: {
        onPaletteChange: function(args) {
          document.getElementById('splitbtn').children[0].style.borderBottomColor = args.currentValue.rgba;
        },
        onDdPopupOpen: function(args) {
          args.element.children[1].addEventListener('click', this.openPickerDlg);
        },
        onBeforeDdPopupClose: function(args) {
          args.element.children[1].removeEventListener('click', this.openPickerDlg);
        },
        pickerDlgOpen: function() {
          var colorPickerInst = document.getElementById('picker').ej2_instances[0];
          colorPickerInst.refresh();
          colorPickerInst.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', this.closePickerDlg);
        },
        openPickerDlg: function() {
          this.$refs.pickerDlg.ej2Instances.show();
        },
        closePickerDlg: function() {
          this.$refs.pickerDlg.ej2Instances.hide();
        }
  }

});
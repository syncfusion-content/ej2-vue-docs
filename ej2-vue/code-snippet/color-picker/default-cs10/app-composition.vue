<template>
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
</template>

<script setup>
  
import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { SplitButtonComponent as EjsSplitbutton } from '@syncfusion/ej2-vue-splitbuttons';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { createApp, ref } from "vue";

const pickerDlg = ref(null);
const app = createApp();

var pickerDlgContent1 = app.component("inlineTemplate", {
  data: () => ({}),
  components: {
    "ejs-colorpicker": EjsColorpicker,
  },
  template: `<div class="dialogContent"><ejs-colorpicker id="picker" :inline="true" :modeSwitcher="false" :change="onPickerChange"></ejs-colorpicker></div>`,
  methods: {
    onPickerChange: function (args) {
      document.getElementById('splitbtn').children[0].style.borderBottomColor = args.currentValue.rgba;
      document.getElementById('pickerdlg').ej2_instances[0].hide();
    }
  }
});
  
const target = ".wrap";
const width = "270px";
const height = "336px";
const animationSettings = { effect: 'Zoom' };
const pickerDlgContent = () => {
  return { template: pickerDlgContent1 }
};


const onPaletteChange = (args) => {
  document.getElementById('splitbtn').children[0].style.borderBottomColor = args.currentValue.rgba;
};
const onDdPopupOpen = (args) => {
  args.element.children[1].addEventListener('click', openPickerDlg);
};
const onBeforeDdPopupClose = (args) => {
  args.element.children[1].removeEventListener('click', openPickerDlg);
};
const pickerDlgOpen = () => {
  var colorPickerInst = document.getElementById('picker').ej2_instances[0];
  colorPickerInst.refresh();
  colorPickerInst.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', closePickerDlg);
};
const openPickerDlg = () => {
  pickerDlg.value.ej2Instances.show();
};
const closePickerDlg = () => {
  pickerDlg.value.ej2Instances.hide();
};
    
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 0 auto;
  min-height: 345px;
  text-align: center;
}

/* Primary button icon preview */
.e-btn-icon.e-font-icon {
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

/* Primary button icon */
.e-btn-icon.e-font-icon::before {
  content: '\e34c';
}

.e-colorpicker-wrapper.e-hide-palette {
  display: none;
}

.e-dropdown-popup ul .e-item:first-child.e-palette-item {
  height: auto;
  padding: 0;
}

.e-dlg-picker.e-dialog .e-dlg-content {
  padding: 0;
  background-color: transparent;
}

/* Sets ColorPicker height */
.e-dlg-picker.e-dialog {
  max-height: 336px !important;
  background-color: transparent;
}

/* More colors li icon customization */
.e-dropdown-popup ul .e-item:last-child .e-menu-icon {
  height: 24px;
  margin-top: 6px;
  width: 24px;
  background-image: linear-gradient(to bottom, #fff 0, #000 100%);
  background-color: #0450c2;
  background-blend-mode: hard-light;
}
</style>
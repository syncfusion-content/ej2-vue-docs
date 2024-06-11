<template>
  <div>
      <div class="col-lg-12 control-section">
          <div id="signature-toolbar-control">
              <ejs-toolbar id="toolbar" :created="onCreate" :clicked="clicked">
                  <e-items>
                      <e-item text='Undo' prefixIcon='e-icons e-undo' tooltipText='Undo (Ctrl + Z)'></e-item>
                      <e-item text='Redo' prefixIcon='e-icons e-redo' tooltipText='Redo (Ctrl + Y)'></e-item>
                      <e-item type='Separator'></e-item>
                      <e-item tooltipText='Save (Ctrl + S)' :template='SaveTemplate'></e-item>
                      <e-item type='Separator'></e-item>
                      <e-item tooltipText='Stroke Color' :template='StrokeColorTemplate'></e-item>
                      <e-item type='Separator'></e-item>
                      <e-item tooltipText='Background Color' :template='BgColorTemplate'></e-item>
                      <e-item type='Separator'></e-item>
                      <e-item tooltipText='Stroke Width' :template='StrokeWidthTemplate'></e-item>
                      <e-item type='Separator'></e-item>
                      <e-item text='Clear' prefixIcon='e-sign-icons e-clear' tooltipText='Clear'></e-item>
                      <e-item tooltipText='Disabled' :template='DisableTemplate' align='Right'></e-item>
                  </e-items>
              </ejs-toolbar>
              <div id="signature-control">
                  <ejs-signature id="signature" :maxStrokeWidth="maxStrokeWidth" style="height: 90%; width:100%;"
                      :change="signChange"></ejs-signature>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>

import { SignatureComponent as EjsSignature, ColorPickerComponent as EjsColorpicker } from "@syncfusion/ej2-vue-inputs";
import { ToolbarComponent as EjsToolbar } from "@syncfusion/ej2-vue-navigations";
import { SplitButtonComponent as EjsSplitbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { getComponent, addClass, createElement } from '@syncfusion/ej2-base';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { enableRipple } from '@syncfusion/ej2-base';
import { createApp } from 'vue';

enableRipple(true);

const maxStrokeWidth = 2;

const SaveTemplate = () => {
  return {
      template: createApp().component('SplitButtonComponent', {
          data() {
              return {
                  items: [
                      {
                          text: 'Png'
                      },
                      {
                          text: 'Jpeg'
                      },
                      {
                          text: 'Svg'
                      }
                  ]
              };
          },
          components: {
              "ejs-splitbutton": EjsSplitbutton
          },
         
          template: '<ejs-splitbutton content="Save" id="save-option" :items="items" iconCss= "e-sign-icons e-save" :select="onSelect" disabled="true"></ejs-splitbutton>',
         
          methods: {
              onSelect: function (args) {
                  const signature1 = getComponent(document.getElementById('signature'), 'signature');
                  signature1.save(args.item.text, 'Signature');
              }
          }
      })
  }
};

const StrokeColorTemplate = () => {
  return {
      template: createApp().component('ColorPickerComponent', {
          data() {
              return {
                  customColors: {
                      'custom': ['#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                          '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
                  }
              };
          },
          components: {
              "ejs-colorpicker": EjsColorpicker
          },
          template: '<ejs-colorpicker id="stroke-color" mode="Palette" cssClass="e-stroke-color" :change="strokeColorChanged"  :modeSwitcher= "false" :columns="4" :presetColors="customColors" :beforeTileRender="beforeTileRender" :showButtons= "false"></ejs-colorpicker>',
          
          
          methods: {
              beforeTileRender: function (args) {
                  args.element.classList.add('e-circle-palette');
                  args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
              },
              strokeColorChanged: function (args) {
                  const signature2 = getComponent(document.getElementById('signature'), 'signature');
                  const strokecolor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
                  if (signature2.disabled) {
                      return;
                  }
                  const selElem1 = strokecolor.element.nextElementSibling.querySelector('.e-selected-color');
                  selElem1.style.borderBottomColor = args.currentValue.rgba;
                  signature2.strokeColor = args.currentValue.rgba;
              }
          }
      })
  }
};

const BgColorTemplate = () => {
  return {
      template: createApp().component('ColorPickerComponent', {
          data() {
              return {
                  customColors: {
                      'custom': ['#ffffff', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                          '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
                  }
              };
          },
          components: {
              "ejs-colorpicker": EjsColorpicker
          },
          template: '<ejs-colorpicker id="bg-color" noColor="true" mode="Palette" cssClass="e-bg-color" :change="bgColorChanged" :modeSwitcher= "false" :columns="4" :presetColors="customColors" :beforeTileRender="beforeTileRender1" :showButtons= "false"></ejs-colorpicker>',
          
          
          methods: {
              beforeTileRender1: function (args) {
                  args.element.classList.add('e-circle-palette');
                  args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
              },
              bgColorChanged: function (args) {
                  const signature3 = getComponent(document.getElementById('signature'), 'signature');
                  const bgcolor = getComponent(document.getElementById('bg-color'), 'colorpicker');
                  if (signature3.disabled) {
                      return;
                  }
                  const selElem2 = bgcolor.element.nextElementSibling.querySelector('.e-selected-color');
                  signature3.backgroundColor = args.currentValue.rgba;
                  selElem2.style.borderBottomColor = args.currentValue.rgba;
              }
          }
      })
  }
};

const DisableTemplate = () => {
  return {
      template: createApp().component('CheckBoxComponent', {
          data() {
              return {
              };
          },
          components: {
              "ejs-checkbox": EjsCheckbox
          },
          
          template: '<ejs-checkbox label="Disabled" :change="change1"></ejs-checkbox>',
          
          methods: {
              change1: function (args) {
                  const signature4 = getComponent(document.getElementById('signature'), 'signature');
                  signature4.disabled = args.checked;
              }
          }
      })
  }
};

const StrokeWidthTemplate = () => {
  return {
      template: createApp().component('DropDownListComponent', {
          data() {
              return {
                  value: 2,
                  items: [1, 2, 3, 4, 5]
              };
          },
          components: {
              "ejs-dropdownlist": EjsDropdownlist
          },
          template: '<ejs-dropdownlist  :value="value" width="60" :dataSource="items":change="numChange"></ejs-dropdownlist>',
         
         
          methods: {
              numChange: function (args) {
                  const signature5 = getComponent(document.getElementById('signature'), 'signature');
                  signature5.maxStrokeWidth = args.value;
              }
          }
      })
  }
};

const onCreate = () => {
  const strokeColor1 = getComponent(document.getElementById('stroke-color'), 'colorpicker');
  const bgColor1 = getComponent(document.getElementById('bg-color'), 'colorpicker');
  addClass([strokeColor1.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
  addClass([bgColor1.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
  document.getElementById('save-option').addEventListener('click', saveBtnClick);
  const cBtn1 = clearButton();
  cBtn1.disabled = true;
  const toolbarlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
  for (let i = 0; i < toolbarlItems.length; i++) {
      if (toolbarlItems[i].children[0].classList.contains('e-undo')) {
          const undoButton1 = getComponent(toolbarlItems[i], 'btn');
          undoButton1.disabled = true;
      }
      if (toolbarlItems[i].children[0].classList.contains('e-redo')) {
          const redoButton = getComponent(toolbarlItems[i], 'btn');
          redoButton.disabled = true;
      }
  }
};

const clicked = (args) => {
  const signature6 = getComponent(document.getElementById('signature'), 'signature');
  const saveBtn2 = getComponent(document.getElementById("save-option"), 'split-btn');
  if (signature6.disabled) {
      return;
  }
  switch (args.item.tooltipText) {
      case 'Undo (Ctrl + Z)':
          if (signature6.canUndo()) {
              signature6.undo();
              updateUndoRedo();
              updateSaveBtn();
          }
          break;
      case 'Redo (Ctrl + Y)':
          if (signature6.canRedo()) {
              signature6.redo();
              updateUndoRedo();
              updateSaveBtn();
          }
          break;
      case 'Clear':
          signature6.clear();
          if (signature6.isEmpty()) {
              const cBtn2 = clearButton();
              cBtn2.disabled = true;
              saveBtn2.disabled = true;
          }
          break;
      case 'Disabled':
          signature6.disabled = !(args.item.template).checked;
  }
};

const signChange = () => {
  const signature7 = getComponent(document.getElementById('signature'), 'signature');
  const saveBtn3 = getComponent(document.getElementById("save-option"), 'split-btn');
  if (!signature7.isEmpty()) {
      const cBtn3 = clearButton();
      saveBtn3.disabled = false;
      cBtn3.disabled = false;
  }
  updateUndoRedo();
};

const saveBtnClick = () => {
  const signature8 = getComponent(document.getElementById('signature'), 'signature');
  signature8.save();
};

const clearButton = () => {
  const tlItems2 = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
  for (let i = 0; i < tlItems2.length; i++) {
      if (tlItems2[i].children[0].classList.contains('e-clear')) {
          var clrBtn = getComponent(tlItems2[i], 'btn');
      }
  }
  return clrBtn;
};

const updateSaveBtn = () => {
  const signature9 = getComponent(document.getElementById('signature'), 'signature');
  const saveBtn1 = getComponent(document.getElementById("save-option"), 'split-btn');
  if (signature9.isEmpty()) {
      saveBtn1.disabled = true;
  }
};

const updateUndoRedo = () => {
  const signature10 = getComponent(document.getElementById('signature'), 'signature');
  let undoButton2; let redoButton1;
  const tlItems1 = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
  for (let i = 0; i < tlItems1.length; i++) {
      if (tlItems1[i].children[0].classList.contains('e-undo')) {
          undoButton2 = getComponent(tlItems1[i], 'btn');
      }
      if (tlItems1[i].children[0].classList.contains('e-redo')) {
          redoButton1 = getComponent(tlItems1[i], 'btn');
      }
  }
  if (signature10.canUndo()) {
      undoButton2.disabled = false;
  } else {
      undoButton2.disabled = true;
  }
  if (signature10.canRedo()) {
      redoButton1.disabled = false;
  } else {
      redoButton1.disabled = true;
  }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

@font-face {
  font-family: 'font-icons';
  src:
      url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
  font-weight: normal;
  font-style: normal;
}

.e-sign-icons {
  font-family: 'font-icons' !important;
  font-size: 55px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#signature-toolbar-control {
  border: 1px solid lightgray;
}

.highcontrast #signature-toolbar-control {
  border: 1px solid white;
}

#signature-toolbar-control #toolbar {
  border: none;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
}

#signature-toolbar-control #toolbar {
  height: 44px !important;
}

#signature-toolbar-control .e-btn:disabled {
  opacity: 0.5 !important;
  pointer-events: none;
}

#signature-toolbar-control #signature-control {
  height: 300px;
  width: 100%;
  margin: 0;
}

#signature-toolbar-control #signature {
  border: none !important;
}

.e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn .e-selected-color {
  background: none;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  width: 14px;
  margin: 0px 2px;
  border-bottom-color: #ffffff;
}

.e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn .e-selected-color {
  background: none;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  width: 14px;
  margin: 0px 2px;
  border-bottom-color: #000000;
}

.e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn .e-selected-color .e-split-preview,
.e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn .e-selected-color .e-split-preview {
  display: none;
}

.e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn .e-selected-color::before {
  content: '\e707';
}

.e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn .e-selected-color::before {
  content: '\e704';
}

#signature-toolbar-control .e-clear::before {
  content: '\e706';
}

#signature-toolbar-control .e-save::before {
  content: '\e701';
}

/* Circle palette customization */
.e-container .e-palette .e-circle-palette {
  border: 0;
  height: 32px;
  width: 32px;
  border-radius: 20px;
  margin: 4px;
}

.e-container .e-palette .e-circle-palette:hover {
  box-shadow: none;
  transform: scale(1.2);
  transition: transform .2s ease-out;
}

.e-circle-palette .e-circle-selection {
  height: 32px;
  width: 32px;
  border-radius: 20px;
  display: inline-block;
  transform: scale(0);
  transition: transform 1.2s ease-in;
}

.e-circle-palette.e-selected .e-circle-selection {
  transform: scale(0.8);
  background-color: #fff;
  transition: transform .2s ease-out;
}

#circle-palette+.e-container,
#scroll-palette+.e-container {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

.e-container .e-palette .e-circle-palette.e-selected {
  outline: none;
}

.e-bg-color .e-circle-palette.e-nocolor-item.e-selected .e-circle-selection {
  background: transparent;
}

.e-bg-color .e-circle-palette.e-nocolor-item.e-selected {
  border: 3px solid lightgray;
}</style>
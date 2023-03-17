
import Vue from 'vue';
import { SignaturePlugin, ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { CheckBoxPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { getComponent, addClass, createElement } from '@syncfusion/ej2-base';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SignaturePlugin);
Vue.use(ColorPickerPlugin);
Vue.use(ToolbarPlugin);
Vue.use(SplitButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);



new Vue({
	el: '#app',
	template: `
  <div>
    <div class="col-lg-12 control-section">
      <div id="signature-toolbar-control">
        <ejs-toolbar id="toolbar" :created="onCreate" :clicked="clicked">
          <e-items>
            <e-item text='Undo' prefixIcon='e-icons e-undo' tooltipText='Undo (Ctrl + Z)'></e-item>
            <e-item text='Redo' prefixIcon='e-icons e-redo' tooltipText='Redo (Ctrl + Y)' ></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Save (Ctrl + S)' :template= 'SaveTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Stroke Color' :template= 'StrokeColorTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Background Color' :template= 'BgColorTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Stroke Width' :template= 'StrokeWidthTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item  text= 'Clear' prefixIcon= 'e-sign-icons e-clear' tooltipText= 'Clear'></e-item>
            <e-item tooltipText= 'Disabled' :template='DisableTemplate' align='Right'></e-item>
          </e-items>
        </ejs-toolbar>
        <div id="signature-control">
          <ejs-signature #signature id="signature" :maxStrokeWidth="maxStrokeWidth" style="height: 90%; width:100%;" :change="signChange"></ejs-signature>
        </div>
      </div>
    </div>
  </div>
`,

  data: function() {
    return {
      maxStrokeWidth: 2,
      SaveTemplate: function () {
        return {
            template: Vue.component('SplitButtonComponent', {
            template: '<ejs-splitbutton content="Save" id="save-option" :items="items" iconCss= "e-sign-icons e-save" :select="onSelect" disabled="true"></ejs-splitbutton>',
            data() { return {
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
              ]};
            },
            methods: {
              onSelect: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                signature.save(args.item.text, 'Signature');
             }
            }
          })
        }
      },
      StrokeColorTemplate: function () {
        return {
            template: Vue.component('ColorPickerComponent', {
            template: '<ejs-colorpicker id="stroke-color" mode="Palette" cssClass="e-stroke-color" :change="strokeColorChanged"  :modeSwitcher= "false" :columns="4" :presetColors="customColors" :beforeTileRender="beforeTileRender" :showButtons= "false"></ejs-colorpicker>',
            data() { return {
              customColors:{
                'custom': ['#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
              }
            };},
            methods: {
              beforeTileRender: function(args) {
                args.element.classList.add('e-circle-palette');
                args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
              },
              strokeColorChanged: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                var strokecolor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
                if (signature.disabled) {
                  return;
                }
                var selElem= strokecolor.element.nextElementSibling.querySelector('.e-selected-color');
                selElem.style.borderBottomColor = args.currentValue.rgba;
                signature.strokeColor = args.currentValue.rgba;
              }
             }
          })
        }
      },
      BgColorTemplate: function () {
        return {
          template: Vue.component('ColorPickerComponent', {
            template: '<ejs-colorpicker id="bg-color" noColor="true" mode="Palette" cssClass="e-bg-color" :change="bgColorChanged" :modeSwitcher= "false" :columns="4" :presetColors="customColors" :beforeTileRender="beforeTileRender1" :showButtons= "false"></ejs-colorpicker>',
            data() { return {
              customColors:{
                'custom': ['#ffffff', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
              }
            };},
            methods: {
              beforeTileRender1: function(args) {
                args.element.classList.add('e-circle-palette');
                args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
              },
              bgColorChanged: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                var bgcolor = getComponent(document.getElementById('bg-color'), 'colorpicker');
                if (signature.disabled) {
                  return;
                }
                var selElem= bgcolor.element.nextElementSibling.querySelector('.e-selected-color');
                signature.backgroundColor = args.currentValue.rgba;
                selElem.style.borderBottomColor = args.currentValue.rgba;
              }
            }
          })
        }
      },
      DisableTemplate: function () {
        return {
          template: Vue.component('CheckBoxComponent', {
            template: '<ejs-checkbox label="Disabled" :change="change1"></ejs-checkbox>',
            data() { return {
            };},
            methods: {
              change1: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                signature.disabled = args.checked;
              }
            }
          })
        }
      },
      StrokeWidthTemplate: function () {
        return {
          template: Vue.component('DropDownListComponent', {
            template: '<ejs-dropdownlist  :value="value" width="60" :dataSource="items":change="numChange"></ejs-dropdownlist>',
            data() { return {
              value: 2,
              items:[1, 2, 3, 4, 5]
            };},
            methods: {
              numChange: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                signature.maxStrokeWidth = args.value;
              }
            }
          })
        }
      }
    };
  },
  methods: {
    onCreate: function() {
      var strokeColor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
      var bgColor = getComponent(document.getElementById('bg-color'), 'colorpicker');
      addClass([strokeColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
      addClass([bgColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
      document.getElementById('save-option').addEventListener('click', this.saveBtnClick);
      var cBtn = this.clearButton();
      cBtn.disabled = true;
      var toolbarlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
      for (var i = 0; i < toolbarlItems.length; i++) {
        if (toolbarlItems[i].children[0].classList.contains('e-undo')) {
          var undoButton = getComponent(toolbarlItems[i] , 'btn');
          undoButton.disabled = true;
        }
        if (toolbarlItems[i].children[0].classList.contains('e-redo')) {
          var redoButton= getComponent(toolbarlItems[i], 'btn');
          redoButton.disabled = true;
        }
      }
    },
    clicked:function(args) {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      var saveBtn =  getComponent(document.getElementById("save-option"), 'split-btn');
      if (signature.disabled) {
        return;
      }
      switch (args.item.tooltipText) {
        case 'Undo (Ctrl + Z)':
          if (signature.canUndo()) {
            signature.undo();
            this.updateUndoRedo();
            this.updateSaveBtn();
          }
          break;
        case 'Redo (Ctrl + Y)':
          if (signature.canRedo()) {
            signature.redo();
            this.updateUndoRedo();
            this.updateSaveBtn();
          }
          break;
        case 'Clear':
          signature.clear();
          if (signature.isEmpty()) {
            var cBtn = this.clearButton();
            cBtn.disabled = true;
            saveBtn.disabled = true;
          }
          break;
        case 'Disabled':
          signature.disabled = !(args.item.template).checked;
      }
    },
    signChange: function() {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      var saveBtn =  getComponent(document.getElementById("save-option"), 'split-btn');
      if (!signature.isEmpty()) {
        var cBtn = this.clearButton();
        saveBtn.disabled = false;
        cBtn.disabled = false;
      }
      this.updateUndoRedo();
    },
    saveBtnClick: function() {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      signature.save();
    },
    clearButton: function() {
      var tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
      for (var i = 0; i < tlItems.length; i++) {
        if (tlItems[i].children[0].classList.contains('e-clear')) {
          var clrBtn = getComponent(tlItems[i], 'btn');
        }
      }
      return clrBtn;
    },
    updateSaveBtn: function() {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        var saveBtn = getComponent(document.getElementById("save-option"), 'split-btn');
        if (signature.isEmpty()) {
            saveBtn.disabled = true;
        }
    },
    updateUndoRedo: function() {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      var undoButton; var redoButton;
      var tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
      for (var i = 0; i < tlItems.length; i++) {
        if (tlItems[i].children[0].classList.contains('e-undo')) {
          undoButton = getComponent(tlItems[i], 'btn');
        }
        if (tlItems[i].children[0].classList.contains('e-redo')) {
          redoButton = getComponent(tlItems[i], 'btn');
        }
      }
      if (signature.canUndo()) {
        undoButton.disabled = false;
      } else {
        undoButton.disabled = true;
      }
      if (signature.canRedo()) {
        redoButton.disabled = false;
      } else {
        redoButton.disabled = true;
      }
    }
  }

});
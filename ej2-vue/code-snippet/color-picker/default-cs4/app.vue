

<template>
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker :inline="true" :modeSwitcher="false" :change="onChange"></ejs-colorpicker>
    <ejs-dropdownbutton id="dropdownbtn" ref="ddb" target=".e-colorpicker-wrapper" iconCss="e-dropdownbtn-preview" :beforeClose="beforeDdbClose" :open="ddbOpen"></ejs-dropdownbutton>
</div>
</template>

<script>
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { DropDownButtonPlugin } from '@syncfusion/ej2-vue-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);
Vue.use(DropDownButtonPlugin);

export default {
  methods: {
        onChange: function(args) {
          this.$refs.ddb.ej2Instances.element.children[0].style.backgroundColor = args.currentValue.rgba;
          this.closePopup();
        },
        ddbOpen: function(args) {
          args.element.querySelector('.e-cancel').addEventListener('click', this.closePopup);
          this.tooltip();
        },
        beforeDdbClose: function(args) {
          args.element.querySelector('.e-cancel').removeEventListener('click', this.closePopup);
        },
        closePopup: function() {
          this.$refs.ddb.ej2Instances.toggle()
        },
        tooltip: function() {
          var zindex = (document.getElementsByClassName('e-color-picker-tooltip')[0]).style.zIndex;
          var zindexIntValue = parseInt(zindex) + 2;
          (document.getElementsByClassName('e-color-picker-tooltip')[0]).style.zIndex = zindexIntValue.toString();
        }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 0 auto;
  width: 300px;
  text-align: center;
}

/* DropDownButton preview customization */
#dropdownbtn .e-btn-icon.e-dropdownbtn-preview {
  background-color: #008000;
  height: 18px;
  width: 18px;
  margin-top: 0;
}

#dropdownbtn {
  padding: 4px;
}
</style>



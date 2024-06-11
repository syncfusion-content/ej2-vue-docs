<template>
<div class='wrap'>
    <div id="preview"></div>
    <h4>Choose Color</h4>
    <ejs-colorpicker mode="Palette" value="#ba68c8" :columns="4" :inline="true" :showButtons="false" :modeSwitcher="false" :presetColors="customColors" :beforeTileRender="tileRender" :change="onChange"></ejs-colorpicker>
</div>
</template>

<script setup>

import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const customColors= {
  'custom1': ['#ef9a9a', '#e57373', '#ef5350', '#f44336', '#f48fb1', '#f06292',
              '#ec407a', '#e91e63', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#b39ddb',
              '#9575cd', '#7e57c2', '#673AB7'],
  'custom2': ['#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#90CAF9', '#64B5F6',
              '#42A5F5', '#2196F3', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',
              '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4'],
  'custom3': ['#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#A5D6A7', '#81C784',
              '#66BB6A', '#4CAF50', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#E6EE9C',
              '#DCE775', '#D4E157', '#CDDC39']
        };

const onChange = (args) => {
  document.getElementById("preview").style.backgroundColor = args.currentValue.hex;
};
const tileRender = (args) => {
  args.element.classList.add("e-icons");
  args.element.classList.add("e-custom-tile");
};

</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.e-container {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

/* Tile customization styles */
.e-container .e-palette .e-custom-tile {
  border: 0;
  color: #fff;
  height: 36px;
  font-size: 18px;
  width: 36px;
  line-height: 36px;
  border-radius: 50%;
  margin: 2px 5px;
}

.e-container .e-custom-palette.e-palette-group {
  height: 182px;
}

/* Selected state icon */
.e-container .e-palette .e-custom-tile.e-selected::before {
  content: '\e933';
}

.e-container .e-palette .e-custom-tile.e-selected {
  outline: none;
}

.wrap {
  margin: 0 auto;
  width: 300px;
  text-align: center;
}

#preview {
  background-color: #ba68c8;
  height: 50px;
  width: 100%;
}
</style>
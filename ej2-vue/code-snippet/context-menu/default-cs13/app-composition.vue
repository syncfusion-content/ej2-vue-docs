<template>
  <div>
    <div id="target">Right click / Touch hold to open the ContextMenu</div>
    <ejs-contextmenu target='#target' :items='menuItems' :beforeItemRender="onBeforeItemRender"></ejs-contextmenu>
  </div>
</template>

<script setup>

import { ContextMenuComponent as EjsContextmenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, createElement } from '@syncfusion/ej2-base';

enableRipple(true);

const menuItems = [
  {
    text: 'Save as...'
  },
  {
    text: 'View page source'
  },
  {
    text: 'Inspect'
  }];
const onBeforeItemRender = (args) => {
  var shortCutSpan = createElement('span');
  var text = args.item.text;
  var shortCutText = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ?
    'Ctrl + U' : 'Ctrl + Shift + I');
  shortCutSpan.textContent = shortCutText;
  args.element.appendChild(shortCutSpan);
  shortCutSpan.setAttribute('class', 'shortcut');
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

#target {
  border: 1px dashed;
  height: 150px;
  padding: 10px;
  position: relative;
  text-align: justify;
  color: gray;
  user-select: none;
}

.shortcut {
  float: right;
  font-size: 10px;
  opacity: 0.5;
  padding-left: 50px;
}
</style>
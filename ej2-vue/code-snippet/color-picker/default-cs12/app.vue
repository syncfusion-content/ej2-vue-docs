<template>
  <div class='wrap'>
    <div id='preview'></div>
    <h4>Select Color</h4>
    <ejs-colorpicker id="element" value="#ba68c8" mode="Palette" :noColor="true" :showButtons="false"
      :modeSwitcher="false" :change="onChange"></ejs-colorpicker>
  </div>
</template>

<script>

import { ColorPickerComponent } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "App",
  components: {
    "ejs-colorpicker": ColorPickerComponent
  },
  methods: {
    onChange: function (args) {
      var preview = document.getElementById('preview');
      preview.style.backgroundColor = args.currentValue.hex;
      preview.textContent = args.currentValue.hex ? args.currentValue.hex : 'No color';
    }
  },
  mounted: function () {
    var preview = document.getElementById('preview');
    preview.style.backgroundColor = '#ba68c8';
    preview.textContent = '#ba68c8';
  }
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
  width: 300px;
  text-align: center;
}

#preview {
  border: 1px solid;
  height: 40px;
  line-height: 40px;
}

h4,
#preview {
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
  font-size: 14px;
}
</style>
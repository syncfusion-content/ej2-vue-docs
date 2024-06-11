<template>
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox mask='00000' value='42648' placeholder='Enter User ID' cssClass='e-style' floatLabelType='Always' :focus='focus'></ejs-maskedtextbox>
    </div>
  </div>
</template>
<script setup>

import { MaskedTextBoxComponent as EjsMaskedtextbox} from "@syncfusion/ej2-vue-inputs";

const focus = (args) => {
  args.selectionEnd = args.selectionStart;
};
    
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
.wrap {
    margin: 0 auto;
    width: 240px;
}
.e-widget.e-mask.e-style .e-control.e-maskedtextbox {
  color: #00ffff ;
  letter-spacing: 10px ;
  font-size: xx-large ;
  border: 1px ;
  border-color: #ffffff ;
}

.e-widget.e-control-wrapper.e-mask.e-float-input.e-style .e-float-line::before {
  background: #ffffff ;
}

.e-widget.e-control-wrapper.e-mask.e-float-input.e-style .e-float-line::after {
  background: #ffffff ;
}

.e-widget.e-control-wrapper.e-mask.e-float-input.e-style .e-float-text.e-label-top {
  color: #00ffff ;
  font-size: medium ;
}
</style>
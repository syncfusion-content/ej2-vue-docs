<template>
 <ejs-progressbutton content="Submit"  :spinSettings="spinSettings" ></ejs-progressbutton>
</template>

<script>

import { ProgressButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


export default {
name: "App",
components: {
"ejs-progressbutton":ProgressButtonComponent
},
    data () {
        return {
            spinSettings: { position: 'Right', width: 20, template: '<div class="template"></div>' }
        };
    }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @keyframes custom-rolling {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .template {
    border: 2px solid green;
    border-style: dotted;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    height: 16px;
    width: 16px;
  }
  .template {
    -webkit-animation: custom-rolling 1.3s linear infinite;
    animation: custom-rolling 1.3s linear infinite;
  }
</style>
<template>
   <div id='app'>
      <div id='container'>
        <ejs-tooltip id="tooltip" content="This tooltip has 180px width and 40px height" width='180px' height='40px' target="#target">
          <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
              <ejs-button id='target'>Show Tooltip</ejs-button>
          </div>
        </ejs-tooltip>
      </div>
    </div>
</template>
<script>
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-tooltip":TooltipComponent,
"ejs-button":ButtonComponent
},
    data() {
    return {
    };
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>
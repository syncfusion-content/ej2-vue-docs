<template>
   <div id='app'>
    <ejs-tooltip id='tooltip' :content='content' target='#box'>
        <div id='container'>
            <div id="box" style="display: inline-block;">
                <ejs-button id='disabledbutton' disabled=true>Disabled button</ejs-button>
            </div>
        </div>
    </ejs-tooltip>
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
  data: function() {
    return {
        content: "Tooltip from disabled element"
    };
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#disabledbutton {
    pointer-events: none;
    font-size: 22px;
    padding: 10px;
}
#container {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 75px;
}
</style>
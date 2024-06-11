<template>
    <table class='switch-control'>
        <tr>
            <td class='lSize'><label for='switch1'>USB Tethering</label></td>
            <td>
                <ejs-switch id="switch1"></ejs-switch>
            </td>
        </tr>
    </table>
</template>

<script setup>

import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
import { rippleMouseHandler } from '@syncfusion/ej2-buttons';

enableRipple(true);
    const mounted = function(){
        var elemArray = document.querySelectorAll('.switch-control label');
        for (var i = 0, len = elemArray.length; i < len; i++) {
            elemArray[i].addEventListener('mouseup', rippleHandler);
            elemArray[i].addEventListener('mousedown', rippleHandler);
        }
        function rippleHandler(e) {
            var rippleSpan = this.parentElement.nextElementSibling.querySelector('.e-ripple-container');
            rippleSpan && rippleMouseHandler(e, rippleSpan);
        }
    }
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";

.switch-control tr td {
  padding: 10px;
}

.switch-control .lSize {
  font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif";
  font-size: 13px;
  cursor: pointer;
  user-select: none;
}
</style>
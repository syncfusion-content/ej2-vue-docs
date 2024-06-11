<template>
    <table class='size'>
        <tr>
            <td class='lSize'>Small</td>
            <td>
                <ejs-switch id="switch1" checked=true cssClass="e-small"></ejs-switch>
            </td>
        </tr>
        <tr>
            <td class='lSize'>Default</td>
            <td>
                <ejs-switch id="switch2"></ejs-switch>
            </td>
        </tr>
    </table>
</template>

<script>

import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-switch": SwitchComponent
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";

.size tr td {
    padding: 10px;
}

.size .lSize {
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif";
    font-size: 13px;
    cursor: pointer;
    user-select: none;
}
</style>
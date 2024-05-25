<template>
    <form>
        <table class='size'>
            <tr>
                <td class='lSize'><label>USB</label></td>
                <td>
                    <ejs-switch id="switch1" name="tethering" value="USB" checked=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td class='lSize'><label>Wi-Fi</label></td>
                <td>
                    <ejs-switch id="switch2" name="hotspot" value="wifi" checked=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td class='lSize'><label class="e-disabled">Bluetooth</label></td>
                <td>
                    <ejs-switch id="switch3" name="tethering" value="bluetooth" disabled=true></ejs-switch>
                </td>
            </tr>
            <tr>
                <td>
                    <ejs-button id="btn" isPrimary=true>Submit</ejs-button>
                </td>
            </tr>
        </table>
    </form>
</template>

<script>

import { SwitchComponent, ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-switch": SwitchComponent,
        "ejs-button": ButtonComponent
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
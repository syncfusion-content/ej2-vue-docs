<template>
    <div>
        <ejs-switch id="switch1" :checked="true" :beforeChange="beforeChange"></ejs-switch>
    </div>
</template>

<script>
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-switch": SwitchComponent
    },
    methods: {
        beforeChange(args) {
            // Set cancel to true to prevent the switch state change
            args.cancel = true;
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";
</style>
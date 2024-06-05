<template>
    <div id='app'>
        <ejs-tooltip ref="tooltip" content="Tooltip content" position='TopCenter' target="#tooltip">
            <div id='container'>
                <ejs-button id="tooltip">Show tooltip</ejs-button>
                <div class="ddl">
                    <select id="positions" ref="positions" class="form-control" style="width:150px" v-on:click='onclick'
                        v-on:change='onchange'>
                        <option value="TopLeft">Top Left</option>
                        <option value="TopCenter" selected>Top Center</option>
                        <option value="TopRight">Top Right</option>
                        <option value="BottomLeft">Bottom Left</option>
                        <option value="BottomCenter">Bottom Center</option>
                        <option value="BottomRight">Bottom Right</option>
                        <option value="LeftTop">Left Top</option>
                        <option value="LeftCenter">Left Center</option>
                        <option value="LeftBottom">Left Bottom</option>
                        <option value="RightTop">Right Top</option>
                        <option value="RightCenter">Right Center</option>
                        <option value="RightBottom">Right Bottom</option>
                    </select>
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
        "ejs-tooltip": TooltipComponent,
        "ejs-button": ButtonComponent
    },
    data() {
        return {
        };
    },
    methods: {
        onclick: function () {
            this.$refs.tooltip.close();
        },
        onchange: function () {
            this.$refs.tooltip.ej2Instances.position = this.$refs.positions.value;
            this.$refs.tooltip.dataBind();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#container {
    display: inline-block;
    position: relative;
    left: 50%;
    margin-top: 100px;
    transform: translateX(-50%);
    height: 200px;
}

#tooltip {
    display: inline-block;
    margin: 30px 130px 30px 50px;
}

.ddl {
    display: inline-block;
    margin: 0 30px;
}
</style>
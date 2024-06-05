<template>
    <div class="col-lg-8 control-section">
        <!--  DashboardLayout element declaration -->
        <ejs-dashboardlayout id="defaultLayout" :cellSpacing="spacing" :columns="5" :enableRtl="enableRtl">
            <e-panels>
                <e-panel id="panel0" :row="0" :col="0" :sizeX="1" :sizeY="1" header="<div>Panel 0</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
                <e-panel id="panel1" :row="0" :col="1" :sizeX="3" :sizeY="2" header="<div>Panel 1</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
                <e-panel id="panel2" :row="0" :col="4" :sizeX="1" :sizeY="3" header="<div>Panel 2</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
                <e-panel id="panel3" :row="1" :col="0" :sizeX="1" :sizeY="1" header="<div>Panel 3</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
                <e-panel id="panel4" :row="2" :col="0" :sizeX="2" :sizeY="1" header="<div>Panel 4</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
                <e-panel id="panel5" :row="2" :col="2" :sizeX="1" :sizeY="1" header="<div>Panel 5</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
                <e-panel id="panel6" :row="2" :col="3" :sizeX="1" :sizeY="1" header="<div>Panel 6</div>"
                    content='<div class="content">Panel Content<div>'></e-panel>
            </e-panels>
        </ejs-dashboardlayout>
        <!-- end of dashboardlayout element -->
    </div>
</template>

<script setup>

// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from "@syncfusion/ej2-vue-layouts";

const spacing = [10, 10];
const enableRtl = true;

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

/* DashboardLayout element styles  */
#defaultLayout .e-panel .e-panel-container .e-panel-header {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    padding: 10px
}

.e-panel-content {
    padding: 20px;
}

#defaultLayout .e-panel {
    transition: none !important;
}
</style>
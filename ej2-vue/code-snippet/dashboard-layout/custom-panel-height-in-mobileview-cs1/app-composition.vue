<template>
    <div className="col-lg-12 control-section" id="control_dash">
        <div className="content-wrapper">
            <div id="dashboardElement">
                <!--  Dashboard Layout component declaration -->
                <ejs-dashboardlayout ref="dashboard" id='dashboard_default' :cellSpacing="cellSpacing" :mediaQuery="mediaQuery"
                    :columns="columns">
                    <e-panels>
                        <e-panel id="Panel0" :sizeX="1" :sizeY="1" :row="0" :col="0" :mobilePanelHeight="0.25"
                            content="<div class='content'>0</div>"></e-panel>
                        <e-panel id="Panel1" :sizeX="1" :sizeY="1" :row="0" :col="1" :mobilePanelHeight="0.5"
                            content="<div class='content'>1</div>"></e-panel>
                        <e-panel id="Panel2" :sizeX="1" :sizeY="1" :row="1" :col="0" :mobilePanelHeight="0.75"
                            content="<div class='content'>2</div>"></e-panel>
                        <e-panel id="Panel3" :sizeX="1" :sizeY="1" :row="2" :col="0" :mobilePanelHeight="1"
                            content="<div class='content'>3</div>"></e-panel>
                    </e-panels>
                </ejs-dashboardlayout>
                <!-- end of Dashboard Layout component -->
            </div>
        </div>
    </div>
</template>

<script setup>

    // Import syncfusion Dashboard Layout component from layouts package
    import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from "@syncfusion/ej2-vue-layouts";
    import { ref } from 'vue';

    const cellSpacing = [20, 20];
    const mediaQuery = 'max-width: 700px';
    const columns = 5;

</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

    /* Dashboard Layout component styles  */
    #dashboard_default .e-panel .e-panel-content {
        vertical-align: middle;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        line-height: 100px;
    }

    #dashboardElement {
        padding-top: 30px;
    }

    #dashboard_default .e-panel {
        transition: none !important;
    }
</style>
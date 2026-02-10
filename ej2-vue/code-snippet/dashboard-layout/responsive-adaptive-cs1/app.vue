<template>
    <div className="control-section">
        <ejs-dashboardlayout id='dashboard_layout' ref="dashboard" :cellSpacing='cellSpacing' :mediaQuery='mediaQuery'
            :columns="7">
            <e-panels>
                <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0" content="<div>0</div>"></e-panel>
                <e-panel :sizeX="2" :sizeY="2" :row="0" :col="1" content="<div>1</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div>2</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0" content="<div>3</div>"></e-panel>
            </e-panels>
        </ejs-dashboardlayout>
    </div>
</template>

<script>

    // Import syncfusion Dashboard Layout component from layouts package
    import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from "@syncfusion/ej2-vue-layouts";

    export default {
        name: "App",
        components: {
            "ejs-dashboardlayout": DashboardLayoutComponent,
            "e-panels": PanelsDirective,
            "e-panel": PanelDirective
        },
        data: function () {
            return {
                cellSpacing: [20, 20],
                mediaQuery: 'max-width: 700px',
            };
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

    /* Dashboard Layout component styles  */
    #dashboard_layout .e-panel .e-panel-container {
        vertical-align: middle;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        line-height: 80px;
    }

    #dashboard_layout .e-panel {
        transition: none !important;
    }
</style>
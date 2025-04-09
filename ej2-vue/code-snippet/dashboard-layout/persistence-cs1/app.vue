<template>
    <div>
        <div className="col-lg-8 control-section" id="control_dash">
            <div className="content-wrapper">
                <ejs-dashboardlayout id='defaultLayout' :enablePersistence='enablePersistence' :cellSpacing='cellSpacing' :columns="7">
                    <e-panels>
                        <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0"
                            content="<div class='panel-content'>0</div>"></e-panel>
                        <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1"
                            content="<div class='panel-content'>1</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4"
                            content="<div class='panel-content'>2</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0"
                            content="<div class='panel-content'>3</div>"></e-panel>
                        <e-panel :sizeX="2" :sizeY="1" :row="2" :col="0"
                            content="<div class='panel-content'>4</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2"
                            content="<div class='panel-content'>5</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3"
                            content="<div class='panel-content'>6</div>"></e-panel>
                    </e-panels>
                </ejs-dashboardlayout>
            </div>
        </div>
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
            "e-panel": PanelDirective,
        },

        data: function () {
            return {
                cellSpacing: [20, 20],
                enablePersistence: true,
            };
        },
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

    /* Dashboard Layout component styles  */
    #defaultLayout .e-panel .e-panel-container {
        vertical-align: middle;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
    }

    .panel-content {
        line-height: 80px;
    }
</style>
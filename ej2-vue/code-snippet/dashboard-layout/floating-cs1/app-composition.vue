<template>
    <div>
        <div>
            <!--  Button component declaration -->
            <ejs-button id="toggle" ref="toggle" class="e-flat e-primary e-outline" :isToggle="true"
                v-on:click="onChange">Enable Floating</ejs-button>
            <!-- end of button component -->
        </div>
        <div id="control_dash">
            <!--  Dashboard Layout component declaration -->
            <ejs-dashboardlayout id='dashboard_default' ref="dashboard" :allowFloating="false"
                :cellSpacing='cellSpacing' :columns="7">
                <e-panels>
                    <e-panel :sizeX="2" :sizeY="2" :row="1" :col="0" content="<div class='content'>0</div>"></e-panel>
                    <e-panel :sizeX="2" :sizeY="2" :row="2" :col="2" content="<div class='content'>1</div>"></e-panel>
                    <e-panel :sizeX="2" :sizeY="2" :row="3" :col="4" content="<div class='content'>2</div>"></e-panel>
                </e-panels>
            </ejs-dashboardlayout>
            <!-- end of Dashboard Layout component -->
        </div>
    </div>
</template>

<script setup>

    // Import syncfusion Dashboard Layout component from layouts package
    import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from "@syncfusion/ej2-vue-layouts";
    // Import syncfusion button component from buttons package
    import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
    import { onMounted, ref } from "vue";


    const toggle = ref(null);
    const dashboard = ref(null);
    const cellSpacing = [10, 10];
    let resetPanels = [];


    const onChange = () => {
        if (toggle.value.ej2Instances.content == "Disable Floating and Reset") {
            toggle.value.ej2Instances.content = 'Enable Floating';
            dashboard.value.ej2Instances.allowFloating = false;
            dashboard.value.ej2Instances.panels = resetPanels;
        } else {
            toggle.value.ej2Instances.content = 'Disable Floating and Reset';
            dashboard.value.ej2Instances.allowFloating = true;
        }
    }

    onMounted(() => {
        resetPanels = dashboard.value.serialize();
        resetPanels[0].content = '<div class="content">0</div>';
        resetPanels[1].content = '<div class="content">1</div>';
        resetPanels[2].content = '<div class="content">2</div>';
    });
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";

    #dashboard_default .e-panel .e-panel-content {
        vertical-align: middle;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        line-height: 100px;
    }

    #control_dash {
        display: block;
        width: 60%;
        float: left;
    }

    #dashboard_default .e-panel {
        transition: none !important;
    }
</style>
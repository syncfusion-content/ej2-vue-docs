<template>
    <div>
        <div>
            <!--  Button component declaration -->
                <ejs-button id="toggle" ref="toggle" class="e-flat e-primary e-outline" :isToggle="true" v-on:click.native="onChange" >Enable Floating</ejs-button>
            <!-- end of button component -->
        </div>
        <div  id="control_dash">
            <!--  Dashboard Layout component declaration -->
            <ejs-dashboardlayout id='dashboard_default' ref="dashboard" :allowFloating="false" :cellSpacing='cellSpacing' :columns="7">
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
  
<script>
  
  // Import syncfusion Dashboard Layout component from layouts package
  import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from "@syncfusion/ej2-vue-layouts";
  // Import syncfusion button component from buttons package
  import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
  
  export default {
    name: "App",
    components: {
        "ejs-button":ButtonComponent,
        "ejs-dashboardlayout":DashboardLayoutComponent,
        "e-panels":PanelsDirective,
        "e-panel":PanelDirective,    
    },  
    data: function() {
        return {
            cellSpacing: [10, 10],
            resetPanels:[],
        };
    },
    methods: {
        onChange: function() {
            if (this.$refs.toggle.ej2Instances.content == "Disable Floating and Reset") {
                this.$refs.toggle.ej2Instances.content = 'Enable Floating';
                this.$refs.dashboard.ej2Instances.allowFloating = false;
                this.$refs.dashboard.ej2Instances.panels = this.resetPanels;
            } else {
                this.$refs.toggle.ej2Instances.content = 'Disable Floating and Reset';
                this.$refs.dashboard.ej2Instances.allowFloating = true;
            }
        }
    },
    mounted() {
        this.resetPanels = this.$refs.dashboard.serialize();
        this.resetPanels[0].content = '<div class="content">0</div>';
        this.resetPanels[1].content = '<div class="content">1</div>';
        this.resetPanels[2].content = '<div class="content">2</div>';
    }
  }
</script>
  
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  
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
  transition:none !important;
  }
</style>
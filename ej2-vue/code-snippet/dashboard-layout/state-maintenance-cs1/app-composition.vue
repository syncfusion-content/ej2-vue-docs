<template>
  <div>
    <div className="col-lg-8 control-section" id="control_dash">
      <div className="content-wrapper">
        <ejs-dashboardlayout id='dashboard_default' ref="dashboard" :cellSpacing='cellSpacing' :columns="5"
          :created="onSave">
          <e-panels>
            <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0" content="<div class='content'>0</div>"></e-panel>
            <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1" content="<div class='content'>1</div>"></e-panel>
            <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div class='content'>2</div>"></e-panel>
            <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0" content="<div class='content'>3</div>"></e-panel>
            <e-panel :sizeX="2" :sizeY="1" :row="2" :col="0" content="<div class='content'>4</div>"></e-panel>
            <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2" content="<div class='content'>5</div>"></e-panel>
            <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3" content="<div class='content'>6</div>"></e-panel>
          </e-panels>
        </ejs-dashboardlayout>
      </div>
    </div>
    <div className="col-lg-4 property-section dashboard" id="api_property">
      <div className="row property-panel-content">
        <div className="card-body">
          <div className="form-group row">
            <table id="remove">
              <tbody>
                <tr>
                  <td> Properties Panel </td>
                </tr>
                <tr>
                  <td>
                    <!--  Button component declaration -->
                    <ejs-button id="save" cssClass="e-primary" v-on:click="onSave">Save Panel</ejs-button>
                  </td>
                  <td>
                    <!--  Button component declaration -->
                    <ejs-button id="restore" cssClass="e-flat e-outline" v-on:click="onRestore">Restore
                      Panel</ejs-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  
  // Import syncfusion Dashboard Layout component from layouts package
  import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from "@syncfusion/ej2-vue-layouts";
  // Import syncfusion button component from buttons package
  import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
  import { ref } from 'vue';
  
  
  
  const dashboard = ref(null);
  const cellSpacing = [20, 20];
  let restoreModel = [];
  
  
  // Restore the initial panels
  const onRestore = () => {
    // Create instances for Dashboard Layout component
    dashboard.value.$el.ej2_instances[0].panels = restoreModel;
  };
  
  // Save the current panels
  const onSave = () => {
    // Create instances for Dashboard Layout component
    restoreModel = dashboard.value.$el.ej2_instances[0].serialize();
    restoreModel[0].content = '<div class="content">0</div>';
    restoreModel[1].content = '<div class="content">1</div>';
    restoreModel[2].content = '<div class="content">2</div>';
    restoreModel[3].content = '<div class="content">3</div>';
    restoreModel[4].content = '<div class="content">4</div>';
    restoreModel[5].content = '<div class="content">5</div>';
    restoreModel[6].content = '<div class="content">6</div>';
  };
  
</script>
  
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  
  /* Dashboard Layout component styles  */
  #dashboard_default .e-panel .e-panel-content {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
  
  #control_dash {
    display: block;
    width: 60%;
    float: left;
  }
  
  #api_property {
    display: inline-block;
  }
  
  #float_id {
    border: 1px solid black;
    padding: 20px;
    margin: 30px;
  }
  
  #remove {
    border: 1px solid black;
    margin: 30px;
  }
  
  td {
    padding: 20px;
  }
  
  #dashboard_default .e-panel {
    transition: none !important;
  }
</style>
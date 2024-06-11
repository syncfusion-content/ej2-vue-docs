<template>
    <div id="app" class="col-lg-12 control-section default-splitter">
      <ejs-splitter id='splitter' ref='splitterObj' width='600px' height='200px'>
        <e-panes>
          <e-pane :collapsible=true content='Left Pane' size='200px'></e-pane>
          <e-pane :collapsible=true content='Middle Pane' size='200px'></e-pane>
          <e-pane :collapsible=true content='Right Pane' size='200px'></e-pane>
        </e-panes>
      </ejs-splitter>
      <div style="margin: 10px">
        <ejs-button id='expand' v-on:click="expandClick">Expand</ejs-button>
        <ejs-button id='collapse' v-on:click="collapseClick">Collapse</ejs-button>
      </div>
    </div>
  
  </template>
  <script setup>
  
  import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';
  import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
  import { ref } from 'vue';
  
  const splitterObj = ref(null);
  const expandClick = () => {
    splitterObj.value.expand(0);
  };
  const collapseClick = () => {
    splitterObj.value.collapse(0);
  };
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  
  #app {
    text-align: center;
    margin: 45px auto;
  }
  
  .content {
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 9px;
  }
  
  .e-splitter {
    margin: 0 auto;
  }
  
  .e-pane {
    text-align: center;
    align-items: center;
    display: grid;
  }
  
  #collapse {
    margin-left: 10px;
  }
  </style>
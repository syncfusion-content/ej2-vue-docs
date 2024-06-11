<template>
    <div id="app" class="col-lg-12 control-section default-splitter">
      <ejs-splitter id='splitter' ref='splitterObj' width='600px' height='200px'>
        <e-panes>
          <e-pane :content='content1' size='30%'></e-pane>
          <e-pane :content='content2' size='40%'></e-pane>
          <e-pane :content='content3' size='30%'></e-pane>
        </e-panes>
      </ejs-splitter>
    </div>
  </template>
  <script setup>
  
  import { SplitterComponent as EjsSplitter, PanesDirective as EPanes, PaneDirective as EPane } from '@syncfusion/ej2-vue-layouts';
  import { createApp } from 'vue';
  
  var contentVue1 = createApp().component("contentTemp1", {
    template: `<div>Left pane</div>`,
    data() {
      return {
        data: {}
      };
    }
  });
  
  var contentVue2 = createApp().component("contentTemp2", {
    template: `<div>Middle pane</div>`,
    data() {
      return {
        data: {}
      };
    }
  });
  
  var contentVue3 = createApp().component("contentTemp3", {
    template: `<div>Right pane</div>`,
    data() {
      return {
        data: {}
      };
    }
  });
  
  
  const content1 = () => {
    return { template: contentVue1 }
  };
  const content2 = () => {
    return { template: contentVue2 }
  };
  const content3 = () => {
    return { template: contentVue3 }
  };
  
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
  
  #app {
    text-align: center;
    margin: 65px auto;
  }
  
  .content {
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  
  .e-splitter {
    margin: 0 auto;
  }
  
  .e-pane {
    align-items: center;
    display: grid;
  }
  </style>
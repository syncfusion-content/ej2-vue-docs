<template>
    <div id="app" class="col-lg-12 control-section default-splitter">
      <ejs-splitter id='splitter' ref='splitterObj' width='600px' height='200px'>
        <e-panes>
          <e-pane :content='content1' size='200px'></e-pane>
          <e-pane :content='content2' size='200px'></e-pane>
          <e-pane :content='content3' size='200px'></e-pane>
        </e-panes>
      </ejs-splitter>
    </div>
  </template>
  <script>
  
  import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-vue-layouts';
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
  export default {
    name: "App",
    components: {
      "ejs-splitter": SplitterComponent,
      "e-panes": PanesDirective,
      "e-pane": PaneDirective
    },
  
    data() {
      return {
        content1: function () {
          return { template: contentVue1 }
        },
        content2: function () {
          return { template: contentVue2 }
        },
        content3: function () {
          return { template: contentVue3 }
        }
      }
    }
  }
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
  
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
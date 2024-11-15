

<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <ejs-speeddial id='speeddial'  openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' cssClass='custom-css' target='#targetElement' :items='items'></ejs-speeddial>
    </div>
  </template>
  
  <script>
  import Vue from 'vue';
  import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";
  import { enableRipple } from '@syncfusion/ej2-base';
  enableRipple(true);
  Vue.use(SpeedDialPlugin);
  export default {
    data() {
        return {
            items: [
                { iconCss: 'e-icons e-cut' },
                { iconCss: 'e-icons e-copy' },
                { iconCss: 'e-icons e-paste' }
            ]
        };
    }
  }
  </script>
  
  <style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  
  .custom-css .e-btn-icon {
    color: darkgreen;
  }
  </style>
  
<template>
  <div>
      <ejs-button cssClass='e-primary'>Button</ejs-button>
  </div>
  </template>
  
  <script>
  import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
  import { enableRipple } from '@syncfusion/ej2-base';
  
  enableRipple(true);
  
  export default {
    name: 'App',
    components: {
      'ejs-button': ButtonComponent
    }
  }
  </script>
  
  <style>
  @import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.3.css';
  
  button {
    margin: 25px 5px 20px 20px;
  }
  :root {
    --color-sf-primary: rgba(104, 134, 164, 1);
  }
  </style>
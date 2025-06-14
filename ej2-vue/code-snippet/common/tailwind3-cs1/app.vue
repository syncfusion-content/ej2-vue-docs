<template>
  <div>
      <div>
        <ejs-checkbox label='Default' v-model="isCheckboxChecked" @change="toggleBodyClass"></ejs-checkbox><br/>
        <ejs-button cssClass='e-primary'>Button</ejs-button>
        <ejs-button cssClass='e-success'>Button</ejs-button>
        <ejs-button cssClass='e-info'>Button</ejs-button>
        <ejs-button cssClass='e-warning'>Button</ejs-button>
        <ejs-button cssClass='e-danger'>Button</ejs-button>
      </div>
  </div>
  </template>
  
  <script>
  import Vue from 'vue';
import {
  ButtonComponent,
  CheckBoxComponent,
} from '@syncfusion/ej2-vue-buttons';
  import { enableRipple } from '@syncfusion/ej2-base';
  
  enableRipple(true);
  
  export default {
    name: 'App',
      components: {
        'ejs-button': ButtonComponent,
        'ejs-checkbox': CheckBoxComponent,
      },
  data() {
    return {
      isCheckboxChecked: false,
    };
  },
  methods: {
    toggleBodyClass() {
      if (this.isCheckboxChecked) {
        document.body.classList.add('e-dark-mode', 'dark'); // Add your desired classes here
      } else {
        document.body.classList.remove('e-dark-mode', 'dark'); // Remove your desired classes here
      }
    },
  },
  }
  </script>
  
  <style>
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  
  .e-checkbox-wrapper {
    margin-top: 18px;
  }
  button {
    margin: 25px 5px 20px 20px;
  }
  .dark
  {
    background-color:black;
  }
  </style>
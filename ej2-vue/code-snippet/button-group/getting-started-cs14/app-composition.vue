<template>
  <div id='app'>
    <div class="e-btn-group">
        <div class='e-btn-group'>
            <ejs-button >HTML</ejs-button>
            <ejs-button >CSS</ejs-button>
            <ejs-button >Javascript</ejs-button>
            <ejs-dropdownbutton :items='items'>More</ejs-dropdownbutton>
        </div>
    </div>
  </div>
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
const items = [
            {
                text: 'Learn SQL'
            },
            {
                text: 'Learn PHP'
            },
            {
                text: 'Learn Bootstrap'
            }];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button-group/index.css";
  #app {
   margin: 20px;
  }

</style>
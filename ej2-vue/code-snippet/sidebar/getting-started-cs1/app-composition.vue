<template>
    <div id="app">
        <ejs-sidebar id="default-sidebar" :width="width" :mediaQuery="mediaQuery">
            <div class="title"> Sidebar content</div>
        </ejs-sidebar>
        <div>
            <div class="title">Main content</div>
            <div class="sub-title">
                * Sidebar will collapse and expand in based on screen resolution automatically
            </div>
        </div>
    </div>
</template>

<script setup>

  import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations';

  const width = '280px';
  const mediaQuery = window.matchMedia('(min-width: 600px)');

</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

  .title {
    text-align: center;
    font-size: 20px;
    padding: 15px;
  }

  .sub-title {
    text-align: center;
    font-size: 12px;
    padding: 10px;
  }

  #default-sidebar {
    background-color: rgb(25, 118, 210);
    color: #ffffff;
  }
</style>
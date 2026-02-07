<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit">FREE TRIAL</ejs-button>
    </ejs-appbar>
    <div class="appbar-content" style="font-size: 12px">
      <p>
        The AppBar also known as action bar or nav bar displays information and actions related to the current
        application screen. It is used to show branding, screen titles, navigation, and actions. The control supports
        height mode, color mode, positioning, and more.
      </p>
      <p>
        The AppBar control provides flexible ways to configure the look and feel of the bar to match your requirement.
      </p>
      <p>
        Developers can control the appearance and behaviors of the AppBar using a rich set of APIs.
      </p>
      <p>
        The AppBar component supports built-in themes such as Material, Bootstrap, Fabric (Office 365), Tailwind CSS,
        and high contrast. Users can customize these built-in themes or create new themes to achieve their desired look
        and feel by either simply overriding SASS variables or using our Theme Studio application.
      </p>
    </div>
  </div>
</template>

<script setup>
import { AppBarComponent as EjsAppbar } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

.control-container {
  height: 220px;
  margin: 0 auto;
  width: 500px;
  overflow-y: scroll;
}

.control-container .e-btn.e-inherit {
  margin: 0 3px;
}
</style>
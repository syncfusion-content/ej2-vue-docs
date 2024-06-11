<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary" mode="Prominent" cssClass="prominent-appbar">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <span class="prominent">AppBar Component with Prominent mode</span>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit">FREE TRIAL</ejs-button>
    </ejs-appbar>
  </div>
</template>

<script setup>

import { AppBarComponent as EjsAppbar } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

.prominent-appbar .prominent {
  align-self: center;
  white-space: break-spaces;
  text-align: inherit;
  font-size: 35px;
  line-height: 50px;
}

.prominent-appbar.e-appbar {
  background-image: url("https://ej2.syncfusion.com/demos/src/appbar/images/prominent.png");
  background-size: 100% 350px;
  color: #ffffff;
  background-repeat: no-repeat;
  height: 350px;
}

.prominent-appbar .e-inherit.e-btn {
  background: transparent;
}

.prominent-appbar .e-inherit.e-btn:hover,
.prominent-appbar .e-inherit.e-btn:focus,
.prominent-appbar .e-inherit.e-btn:active,
.prominent-appbar .e-inherit.e-btn.e-active,
.prominent-appbar .e-inherit.e-css.e-btn:hover,
.prominent-appbar .e-inherit.e-css.e-btn:focus .prominent-appbar .e-inherit.e-css.e-btn:active .prominent-appbar .e-inherit.e-css.e-btn.e-active {
  background: rgba(255, 255, 255, .08);
}
</style>
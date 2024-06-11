<template>
  <div class="container" style="height:250px;margin-top: 50px;">
    <ejs-timeline id="timeline" css-class="dot-color">
      <e-items>
        <e-item content='Ordered' css-class="state-completed" />
        <e-item content='Shipped' css-class="state-progress" />
        <e-item content='Delivered' />
      </e-items>
    </ejs-timeline>
  </div>
</template>

<script setup>
import { TimelineComponent as EjsTimeline, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-layouts";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

.dot-color .state-completed .e-dot {
  background-color: #ff9900;
  outline: 1px dashed #ff9900;
  border-color: #ff9900;
}

.dot-color .state-progress .e-dot {
  background: #33cc33;
  outline: 1px dashed #33cc33;
  border-color: #33cc33;
}
</style>
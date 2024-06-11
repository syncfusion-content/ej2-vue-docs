<template>
  <div class="container" style="height:250px;margin-top: 50px;">
    <ejs-timeline id="timeline" css-class="dot-shadow">
      <e-items>
        <e-item content='Ordered' />
        <e-item content='Shipped' />
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

.dot-shadow .e-dot {
  --dot-outer-space: 3px;
  --dot-border: 3px;
  --dot-size: 20px;
  outline-color: #dee2e6;
  border-color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5), 2px -2px 4px rgba(255, 255, 255, 0.5) inset;
}
</style>
<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
    <ejs-timeline id="timeline">
      <e-items>
        <e-item content='Shipped' />
        <e-item content='Departed' />
        <e-item content='Arrived' />
        <e-item content='Out for Delivery' />
      </e-items>
    </ejs-timeline>
  </div>
</template>
<script setup>
import { TimelineComponent as EjsTimeline, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-layouts";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
</style>
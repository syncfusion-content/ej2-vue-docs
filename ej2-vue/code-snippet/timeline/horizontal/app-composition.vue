<template>
  <div class="container" style="margin-top: 50px;">
    <ejs-timeline id="timeline" orientation="Horizontal">
      <e-items>
        <e-item content='Day 1, 4:00 PM' oppositeContent='Check-in and campsite visit' />
        <e-item content='Day 1, 7:00 PM' oppositeContent='Dinner with music' />
        <e-item content='Day 2, 5:30 AM' oppositeContent='Sunrise between mountains' />
        <e-item content='Day 2, 8:00 AM' oppositeContent='Breakfast and check-out' />
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
</style>
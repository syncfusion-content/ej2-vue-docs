<template>
  <div class="container" style="height:250px;margin-top: 50px;">
    <ejs-timeline id="timeline" css-class="custom-connector">
      <e-items>
        <e-item content='Eat' css-class="state-initial" />
        <e-item content='Code' css-class="state-intermediate" />
        <e-item content='Repeat' />
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

  .custom-connector .e-timeline-item.state-initial.e-connector::after {
    border: 1.5px #f8c050 dashed;
  }

  .custom-connector .e-timeline-item.state-intermediate.e-connector::after {
    border: 1.5px #4d85f5 dashed;
  }
</style>
<template>
  <div class="container" style="height:250px;margin-top: 50px;">
    <ejs-timeline id="timeline" css-class="dot-size">
      <e-items>
        <e-item content='Extra Small' css-class="x-small" />
        <e-item content='Small' css-class="small" />
        <e-item content='Medium' css-class="medium" />
        <e-item content='Large' css-class="large" />
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

.dot-size .e-dot {
  background: #33cc33;
}

.dot-size .x-small .e-dot {
  --dot-size: 12px;
}

.dot-size .small .e-dot {
  --dot-size: 18px;
}

.dot-size .medium .e-dot {
  --dot-size: 24px;
}

.dot-size .large .e-dot {
  --dot-size: 30px;
}
</style>
<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
    <ejs-timeline id="timeline" >
      <e-items>
        <e-item content='Eat' css-class="eat" />
        <e-item content='Code' css-class="code" />
        <e-item content='Repeat' css-class="repeat" />
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

.eat .e-dot, .eat.e-timeline-item.e-connector::after {
  background-color: aqua;
  border-color: aqua;
}

.code .e-dot, .code.e-timeline-item.e-connector::after {
  background-color: blue;
  border-color: blue;
}

.repeat .e-dot, .repeat.e-timeline-item.e-connector::after {
  background-color: yellow;
  border-color: yellow;
}
</style>
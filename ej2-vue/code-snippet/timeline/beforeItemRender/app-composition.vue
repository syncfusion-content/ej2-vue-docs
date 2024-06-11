<template>
  <div class="container" style="height:250px;margin-top: 30px;">
    <ejs-timeline id="timeline" :before-item-render="beforeItemRender">
      <e-items>
        <e-item content='Planning' />
        <e-item content='Developing' />
        <e-item content='Testing' />
        <e-item content='Launch' />
      </e-items>
    </ejs-timeline>
  </div>
</template>

<script setup>
import { TimelineComponent as EjsTimeline, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-layouts";

const beforeItemRender = () => {
  //Your required action here
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
</style>
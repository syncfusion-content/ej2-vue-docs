<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
    <ejs-timeline id="timeline" align="AlternateReverse">
      <e-items>
        <e-item content='ReactJs' opposite-content='Owned by Facebook' />
        <e-item content='Angular' opposite-content='Owned by Google' />
        <e-item content='VueJs' opposite-content='Owned by Evan you' />
        <e-item content='Svelte' opposite-content='Owned by Rich Harris' />
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
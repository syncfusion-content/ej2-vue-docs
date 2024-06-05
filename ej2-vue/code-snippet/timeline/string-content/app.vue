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

<script>
import { TimelineComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-layouts";
export default {
  name: "App",
  components: {
    'ejs-timeline': TimelineComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective
  },
  data() {
    return {
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
</style>
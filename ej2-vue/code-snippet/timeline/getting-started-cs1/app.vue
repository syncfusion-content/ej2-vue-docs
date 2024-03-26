<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
    <ejs-timeline id="timeline">
        <e-items>
          <e-item></e-item>
          <e-item></e-item>
          <e-item></e-item>
          <e-item></e-item>
        </e-items>
    </ejs-timeline>
  </div>
</template>
<script>
import { TimelineComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-layouts";
export default {
    components: {
      'ejs-timeline': TimelineComponent,
      "e-items": ItemsDirective,
      "e-item": ItemDirective
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
</style>
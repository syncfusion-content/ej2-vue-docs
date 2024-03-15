<template>
  <div class="container" style="height:250px">
    <ejs-timeline id="timeline">
      <e-items>
        <e-item content='Breakfast' oppositeContent='8:00 AM' />
        <e-item content='Lunch' oppositeContent='1:00 PM' />
        <e-item content='Dinner' oppositeContent='8:00 PM' />
      </e-items>
    </ejs-timeline>
  </div>
</template>

<script>
import { TimelineComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-layouts";
export default {
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

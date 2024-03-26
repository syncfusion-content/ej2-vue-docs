<template>
  <div class="container" style="height:250px;margin-top: 50px;">
    <ejs-timeline id="timeline" css-class="custom-connector">
      <e-items>
        <e-item content='Eat' />
        <e-item content='Code' />
        <e-item content='Repeat' />
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

  .custom-connector .e-timeline-item.e-connector::after {
    border-color: #f7c867;
    border-width: 1.4px;
    animation: progress 2s;
  }

  @keyframes progress {
    from {
      height: 0%;
    }

    to {
      height: 100%;
    }
  }
</style>

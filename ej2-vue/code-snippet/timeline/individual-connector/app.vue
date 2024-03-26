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

  .custom-connector .e-timeline-item.state-initial.e-connector::after {
    border: 1.5px #f8c050 dashed;
    animation: progress 1.5s ease-in-out;
  }

  .custom-connector .e-timeline-item.state-intermediate.e-connector::after {
    border: 1.5px #4d85f5 dashed;
    animation: progress 1.5s ease-in-out;
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

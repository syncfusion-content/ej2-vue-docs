<template>
  <div class="container" style="height:250px;margin-top: 50px;">
    <ejs-timeline id="timeline" css-class="dot-variant">
      <e-items>
        <e-item content='Filled' css-class="dot-filled" />
        <e-item content='Flat' css-class="dot-flat" />
        <e-item content='Outlined' css-class="dot-outlined" />
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
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

.dot-variant .dot-filled .e-dot::before {
  content: 'A';
  color: #fff;
}

.dot-variant .dot-flat .e-dot::before {
  content: 'B';
  color: #fff;
}

.dot-variant .dot-outlined .e-dot::before {
  content: 'C';
}

.dot-variant .dot-filled .e-dot {
  background: #33cc33;
  --dot-outer-space: 3px;
  outline-color: #81ff05;
  --dot-size: 25px;
}

.dot-variant .dot-flat .e-dot {
  background: #33cc33;
  --dot-size: 25px;
  --dot-radius: 10%;
}

.dot-variant .dot-outlined .e-dot {
  outline-color: #33cc33;
  --dot-outer-space: 3px;
  background-color: unset;
  --dot-size: 25px;
}
</style>
<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
    <ejs-timeline id="timeline">
      <e-items>
        <e-item content='Default' />
        <e-item content='Icon' dotCss='e-icons e-check' />
        <e-item content='Image' dotCss='custom-image' />
        <e-item content='Text' dotCss='custom-text' />
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

.e-dot.custom-image {
  background-image: url(https://ej2.syncfusion.com/demos/src/listview/images/margaret.png);
}

.e-dot.custom-text::before {
  content: 'A';
}
</style>
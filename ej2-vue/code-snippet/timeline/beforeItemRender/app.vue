<template>
  <div class="container" style="height:250px">
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

<script>
import { TimelineComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-layouts";
export default {
  components: {
    'ejs-timeline': TimelineComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective
  },
  methods: {
    beforeItemRender: function(args) {
      //Your required action here
    }
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

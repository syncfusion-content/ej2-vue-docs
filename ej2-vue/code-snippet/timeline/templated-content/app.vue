<template>
  <div class="container" style="height: 330px;margin-top: 30px;">
    <ejs-timeline id="timeline" css-class="test">
      <e-items>
        <e-item :content="'contentTemplate'" />
        <e-item :content="'contentTemplate'" />
        <e-item :content="'contentTemplate'" />
        <e-item content='Out for Delivery' />
      </e-items>
      <template v-slot:contentTemplate="{ data }">
        <div class="content-container">
          <div class="title">
            <span v-if='data.itemIndex == 0'>Shipped</span>
            <span v-else-if='data.itemIndex == 1'>Departed</span>
            <span v-else>Arrived</span>
          </div>
          <div class="description">
            <span v-if='data.itemIndex == 0'>Package details received</span>
            <span v-else-if='data.itemIndex == 1'>In-transit</span>
            <span v-else>Package arrived at nearest hub</span>
          </div>
          <div class="info">
            <span v-if='data.itemIndex == 0'>Awaiting dispatch</span>
            <span v-else-if='data.itemIndex == 1'>(International warehouse)</span>
            <span v-else>(New york - US)</span>
          </div>
        </div>
      </template>
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
@import "../../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

.content-container {
  position: relative;
  width: 180px;
  padding: 10px;
  margin-left: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: ghostwhite;
}

.content-container::before {
  content: '';
  position: absolute;
  left: -8px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 8px solid silver;
}

.content-container .title {
  font-size: 16px;
}

.content-container .description {
  color: #999999;
  font-size: 12px;
}

.content-container .info {
  color: #999999;
  font-size: 10px;
}

/* END --- Customizing Icon and progress line */
</style>

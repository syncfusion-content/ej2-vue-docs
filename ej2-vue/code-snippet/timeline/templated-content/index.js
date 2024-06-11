
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
  <div class="container" style="height: 330px;margin-top: 30px;">
  <ejs-timeline id="timeline" css-class="test">
    <e-items>
      <e-item :content="'contentTemplate'" />
      <e-item :content="'contentTemplate'" />
      <e-item :content="'contentTemplate'" />
      <e-item content='order id' />
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
`,

  name: 'app',
  data() {
    return {
    }
  }
});

import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height: 150px; width: 600px;">
  <ejs-timeline id="timeline" orientation="Horizontal" css-class="custom-timeline" template="timelineTemplate">
    <e-items>
      <e-item content='Kickoff meeting' />
      <e-item content='Content approved' />
      <e-item content='Design approved' />
      <e-item content='Product delivered' />
    </e-items>
    <template v-slot:timelineTemplate="{ data }">
      <div :class="'template-container item-' + data.itemIndex">
      <div class="content-container">
          <div class="timeline-content"> <span v-html="data.item.content"></span></div>
      </div>
      <div class="content-connector"></div>
      <div class="progress-line">
          <span class="indicator"></span>
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
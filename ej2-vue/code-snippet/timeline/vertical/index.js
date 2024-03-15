
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container">
  <ejs-timeline id="timeline" orientation="Vertical">
    <e-items>
      <e-item content='Day 1, 4:00 PM' oppositeContent='Check-in and campsite visit' />
      <e-item content='Day 1, 7:00 PM' oppositeContent='Dinner with music' />
      <e-item content='Day 2, 5:30 AM' oppositeContent='Sunrise between mountains' />
      <e-item content='Day 2, 8:00 AM' oppositeContent='Breakfast and check-out' />
    </e-items>
  </ejs-timeline>
</div>
`,

  name: 'app',
  data() {
    return {
    }
  }
});
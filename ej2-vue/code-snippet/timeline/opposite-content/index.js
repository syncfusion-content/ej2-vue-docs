
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:250px">
  <ejs-timeline id="timeline">
    <e-items>
      <e-item content='Breakfast' oppositeContent='8:00 AM' />
      <e-item content='Lunch' oppositeContent='1:00 PM' />
      <e-item content='Dinner' oppositeContent='8:00 PM' />
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
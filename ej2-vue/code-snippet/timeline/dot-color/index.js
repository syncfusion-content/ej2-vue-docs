
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:250px">
  <ejs-timeline id="timeline" css-class="dot-color">
    <e-items>
      <e-item content='Ordered' css-class="state-completed" />
      <e-item content='Shipped' css-class="state-progress" />
      <e-item content='Delivered' />
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
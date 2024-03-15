
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:250px">
  <ejs-timeline id="timeline" css-class="dot-size">
    <e-items>
      <e-item content='Extra Small' css-class="x-small" />
      <e-item content='Small' css-class="small" />
      <e-item content='Medium' css-class="medium" />
      <e-item content='Large' css-class="large" />
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
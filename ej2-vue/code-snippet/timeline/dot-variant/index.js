
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:250px">
  <ejs-timeline id="timeline">
    <e-items>
      <e-item content='Filled' css-class="dot-filled" />
      <e-item content='Flat' css-class="dot-flat" />
      <e-item content='Outlined' css-class="dot-outlined" />
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
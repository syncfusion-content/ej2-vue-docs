
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:350px">
  <ejs-timeline id="timeline">
    <e-items>
      <e-item content='Default' />
      <e-item content='Icon' dotCss='e-icons e-check' />
      <e-item content='Image' dotCss='custom-image' />
      <e-item content='Text' dotCss='custom-text' />
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
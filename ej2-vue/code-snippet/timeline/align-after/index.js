
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:350px">
  <ejs-timeline id="timeline" align="After">
    <e-items>
      <e-item content='ReactJs' opposite-content='Owned by Facebook' />
      <e-item content='Angular' opposite-content='Owned by Google' />
      <e-item content='VueJs' opposite-content='Owned by Evan you' />
      <e-item content='Svelte' opposite-content='Owned by Rich Harris' />
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
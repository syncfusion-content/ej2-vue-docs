
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:350px">
  <ejs-timeline id="timeline" >
    <e-items>
      <e-item content='Eat' css-class="eat" />
      <e-item content='Code' css-class="code" />
      <e-item content='Repeat' css-class="repeat" />
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
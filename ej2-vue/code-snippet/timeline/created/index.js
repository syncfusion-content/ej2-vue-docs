
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:250px">
  <ejs-timeline id="timeline" :created="created">
    <e-items>
      <e-item content='Planning' />
      <e-item content='Developing' />
      <e-item content='Testing' />
      <e-item content='Launch' />
    </e-items>
  </ejs-timeline>
</div>
`,

  name: 'app',
  methods: {
    created: function() {
      //Your required action here
    }
  },
  data() {
    return {
    }
  }
});
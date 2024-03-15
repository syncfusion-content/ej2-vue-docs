
import Vue from 'vue';
import { TimelinePlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(TimelinePlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="container" style="height:250px">
    <ejs-timeline id="timeline">
        <e-items>
          <e-item></e-item>
          <e-item></e-item>
          <e-item></e-item>
          <e-item></e-item>
        </e-items>
    </ejs-timeline>
  </div>
</template>
`,
data: function () {
  return {
  };
  }
});
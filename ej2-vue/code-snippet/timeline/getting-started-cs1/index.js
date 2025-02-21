
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
        <e-item content='Shipped' />
        <e-item content='Departed' />
        <e-item content='Arrived' />
        <e-item content='Out for Delivery' />
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
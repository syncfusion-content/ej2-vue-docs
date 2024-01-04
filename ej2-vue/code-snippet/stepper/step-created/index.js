
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="created-event">
      <ejs-stepper id="stepper" :created="stepCreated">
        <e-steps>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
        </e-steps>
      </ejs-stepper>
    </div>
  </template>
`,
data: function () {
  return {
  };
},
methods: {
  stepCreated: function(args) {
    //Your required action here
  }
}
});
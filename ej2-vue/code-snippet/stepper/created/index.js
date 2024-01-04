
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <ejs-stepper id="stepper" :created="created">
    <e-steps>
      <e-step></e-step>
      <e-step></e-step>
      <e-step></e-step>
      <e-step></e-step>
    </e-steps>
  </ejs-stepper>
  </template>
`,
data: function () {
  return {
  };
},
methods: {
  created: function(args) {
    //Your required action here
  }
}
});
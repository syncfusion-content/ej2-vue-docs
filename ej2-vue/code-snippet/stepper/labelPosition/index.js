
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="step-label-position">
    <div class="e-btn-group">
      <input type="radio" id="start" name="position" value="start" v-on:click="updateLabelPosition" />
      <label class="e-btn" for="start">Start</label>
      <input type="radio" id="end" name="position" value="end" v-on:click="updateLabelPosition" checked />
      <label class="e-btn" for="end">End</label>
      <input type="radio" id="top" name="position" value="top" v-on:click="updateLabelPosition" />
      <label class="e-btn" for="top">Top</label>
      <input type="radio" id="bottom" name="position" value="bottom" v-on:click="updateLabelPosition" />
      <label class="e-btn" for="bottom">Bottom</label>
    </div>
    <div class="label-stepper-control">
      <ejs-stepper id="stepper" ref="stepper" labelPosition="end" :activeStep="value">
        <e-steps>
          <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step label='Delivery Address' iconCss='sf-icon-transport'></e-step>
          <e-step label='Payment' iconCss='sf-icon-payment' optional=true></e-step>
          <e-step label='Confirmation' iconCss='sf-icon-success'></e-step>
        </e-steps>
      </ejs-stepper>
    </div>
  </div>
</template>
`,
data: function () {
  return {
    value: 1
  };
},
methods: {
  updateLabelPosition: function (args) {
    this.$refs.stepper.ej2Instances.labelPosition = args.currentTarget.value;
  }
}
});
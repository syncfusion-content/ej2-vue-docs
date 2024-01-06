
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="step-type">
    <div class="e-btn-group">
      <input type="radio" id="linear" name="Linear"  value="true" v-on:click="updateLinear" checked/>
      <label class="e-btn" for="linear">Linear</label>
      <input type="radio" id="nonLinear" name="Linear" value="false" v-on:click="updateLinear" />
      <label class="e-btn" for="nonLinear">Non-Linear</label>
    </div>
    <div class="linear-stepper-control">
      <ejs-stepper id="stepper" ref="stepper" linear="true">
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
  };
},
methods: {
  updateLinear: function (args) {
    this.$refs.stepper.ej2Instances.linear = (/true/).test(args.currentTarget.value) ? true : false;
    this.$refs.stepper.ej2Instances.reset();
  }
}
});
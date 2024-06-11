<template>
	<ejs-stepper id="stepper" :beforeStepRender="beforeStepRender">
		<e-steps>
			<e-step></e-step>
			<e-step></e-step>
			<e-step></e-step>
			<e-step></e-step>
		</e-steps>
	</ejs-stepper>
</template>
<script>

import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-vue-navigations";

export default {
	name: "App",
	components: {
		'ejs-stepper': StepperComponent,
		"e-steps": StepsDirective,
		"e-step": StepDirective
	},
	methods: {
		beforeStepRender: function () {
			//Your required action here
		}
	}
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
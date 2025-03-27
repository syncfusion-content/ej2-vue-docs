
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
	<div id="chip-draganddrop-wrapper">
		<div class="chips-headers">To-do lists</div>
		<div class="sample-padding">
			<ejs-chiplist id="choice-container" :allowDragAndDrop=true>
				<e-chips>
					<e-chip text = 'Report' cssClass = 'e-info'></e-chip>
					<e-chip text = 'Meeting' cssClass = 'e-warning'></e-chip>
					<e-chip text = 'Review' cssClass = 'e-warning'></e-chip>
					<e-chip text = 'Budget' cssClass = 'e-danger'></e-chip>
					<e-chip text = 'Design' cssClass = 'e-primary'></e-chip>
					<e-chip text = 'Presentation' cssClass = 'e-success'></e-chip>
					<e-chip text = 'Email' cssClass = 'e-success'></e-chip>
					<e-chip text = 'Research' cssClass = 'e-success'></e-chip>
				</e-chips>
			</ejs-chiplist>
			<ejs-chiplist id="selection-container" :allowDragAndDrop=true></ejs-chiplist>
		</div>
	</div>
`,

});
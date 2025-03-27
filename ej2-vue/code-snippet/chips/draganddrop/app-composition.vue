<template>
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
</template>

<script setup>
import { ChipListComponent as EjsChiplist, ChipsDirective as EChips, ChipDirective as EChip } from '@syncfusion/ej2-vue-buttons';
</script>

<style>
	#chip-draganddrop-wrapper .sample-padding {
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.chips-headers {
		font-size: 12px;
		text-align: center;
		padding-top: 10px;
	}

	#choice-container {
		width: 400px;
		min-height: 100px;
		min-width: 150px;
		border: 2px solid #2C3E50;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin-right: 30px;
	}

	#selection-container {
		width: 400px;
		min-height: 100px;
		min-width: 150px;
		border: 2px solid #8E44AD;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
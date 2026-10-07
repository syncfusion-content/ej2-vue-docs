<template>
	<div class="col-lg-12 control-section">
		<div class="content-wrapper">
			<ejs-grid ref="grid" id="Grid" :dataSource="data" :enableVirtualization="true"
				:allowSorting="true" height="400" :allowAdvancedFiltering="true" :advancedFilterSettings="advancedFilterSettings"
				:toolbar="toolbar" :load="load" :rowHeight="45">
				<e-columns>
					<e-column field="TicketID" headerText="Ticket ID" textAlign="Right" width="120"
						:isPrimaryKey="true"></e-column>
					<e-column field="Title" headerText="Title" width="260"></e-column>
					<e-column field="TypeofRequest" headerText="Type" width="150"></e-column>
					<e-column field="Assignee" headerText="Assignee" width="150"></e-column>
					<e-column field="Priority" headerText="Priority" width="130"></e-column>
					<e-column field="Status" headerText="Status" width="130"></e-column>
					<e-column field="CreatedDate" headerText="Created Date" width="140" textAlign="Right" format='yMd'></e-column>
					<e-column field="DueDate" headerText="Due Date" width="140" textAlign="Right" format='yMd'></e-column>
				</e-columns>
			</ejs-grid>
		</div>

	</div>
</template>

<script>
import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Toolbar, VirtualScroll, AdvancedFilter } from '@syncfusion/ej2-vue-grids';
import { ticketdata } from './datasource.js';

const initialAdvancedFilterRule = {
	condition: 'and',
	rules: [{
            field: 'Status',
            label: 'Status',
            type: 'string',
            operator: 'notequal',
            value: 'Done'
        },
        {
            field: 'Priority',
            label: 'Priority',
            type: 'string',
            operator: 'equal',
            value: 'High'
        }
    ]
};

export default {
	components: {
		'ejs-grid': GridComponent,
		'e-column': ColumnDirective,
		'e-columns': ColumnsDirective
	},
	data: () => ({
		data: ticketdata,
		toolbar: [ 'AdvancedFilter' ],
		pageSettings: { pageSize: 50 },
		advancedFilterSettings: {
			queryBuilderSettings: {
				rule: initialAdvancedFilterRule
			}
		}
	}),
	methods: {
		load(args) {
			if (this.$refs.grid.ej2Instances.enableVirtualization) {
				args.enableSeamlessScrolling = true;
			}
		}
	},
	provide: {
		grid: [Sort, Toolbar, VirtualScroll, AdvancedFilter]
	}
};
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
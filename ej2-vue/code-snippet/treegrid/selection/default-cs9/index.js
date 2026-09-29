
import Vue from "vue";
import { TreeGridPlugin, Filter, Toolbar, Edit } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { showCheckBoxData } from "./datasource.js";

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
    el: '#app',
    template: `
<div class="control-section">
    <div class="content-wrapper">
        <div class="checkboxprop">
            <div class="checkboxmode">
                <span> Hierarchy Checkbox Mode </span>
                <div class="checkboxmode">
                    <ejs-dropdownlist id="hierarchyModes" width="180px" :dataSource="hierarchyModeData"
                        :fields="hierarchyModeFields" value="Self" :change="hierarchyModeChange"
                        :htmlAttributes="dropDownAttributes">
                    </ejs-dropdownlist>
                </div>
            </div>
        </div>
        <div id="app">
        <ejs-treegrid id="TreeGrid" aria-label="Tree Grid" :dataSource="data" childMapping="subTasks"
            :treeColumnIndex="1" :toolbar="toolbarOptions" :allowFiltering="true" :height="380"
            :hierarchyCheckboxMode="hierarchyCheckboxMode" :editSettings='editSettings'
            :queryCellInfo="queryCellInfo">
            <e-columns>
                <e-column field="taskID" :visible="false" :isPrimaryKey="true"> </e-column>
                <e-column field="taskName" headerText="Task Name" width="270" :showCheckbox="true">
                </e-column>
                <e-column field="assignee" headerText="Employee" width="180">
                </e-column>
                <e-column field="designation" headerText="Designation" width="220">
                </e-column>
                <e-column field="priority" headerText="Priority" width="140">
                </e-column>
                <e-column field="status" headerText="Status" width="120" textAlign="Center">
                </e-column>
                <e-column field="progress" headerText="Progress" width="120" textAlign="Right">
                </e-column>
            </e-columns>
        </ejs-treegrid>
        </div>
    </div>
</div>
`,

    data() {
        return {
            data: showCheckBoxData,
            editSettings: { allowDeleting: true },
            toolbarOptions: ['Search', 'Delete'],
            hierarchyCheckboxMode: 'self',
            hierarchyModeData: [
                { id: 'Self', name: 'Self' },
                { id: 'Hierarchy', name: 'Hierarchy' },
                { id: 'FilteredHierarchy', name: 'Filtered Hierarchy' }
            ],
            hierarchyModeFields: {
                text: 'name',
                value: 'id'
            },
            dropDownAttributes: {
                tabindex: '1'
            }
        };
    },
    methods: {
        hierarchyModeChange(args) {
            if (args.value === 'Hierarchy') {
                this.hierarchyCheckboxMode = 'hierarchy';
            } else if (args.value === 'FilteredHierarchy') {
                this.hierarchyCheckboxMode = 'filteredHierarchy';
            } else {
                this.hierarchyCheckboxMode = 'self';
            }
        },
        queryCellInfo(args) {
            if (
                args.column?.field !== 'status' ||
                !args.cell ||
                !args.data
            ) {
                return;
            }
            const task = args.data;
            const statusClass = task.status
                .toLowerCase()
                .replace(/\s+/g, '-');
            args.cell.innerHTML = `
                <span class="status-badge ${statusClass}">
                ${task.status}
                </span>
            `;
        }
    },
    provide: {
        treegrid: [Filter, Toolbar, Edit]
    }
});

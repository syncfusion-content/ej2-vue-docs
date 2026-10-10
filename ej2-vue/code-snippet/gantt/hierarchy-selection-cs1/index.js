import Vue from "vue";
import { GanttPlugin, Selection, Filter, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';
Vue.use(GanttPlugin);

new Vue({
    el: '#app',
    template: `
    <div>
        <div style="display: flex; align-items: center; gap: 12px; font-size: 15px; padding-bottom: 10px">
            <label style="font-weight: 600; white-space: nowrap">Hierarchy Checkbox Mode:</label>
            <select v-model="selectedMode" style="width: 150px" @change="changeMode">
                <option v-for="mode in selectionModes" :key="mode.id" :value="mode.id">{{ mode.type }}</option>
            </select>
        </div>
        <ejs-gantt ref="gantt" id="ganttDefault" :dataSource="data" height="370px" :taskFields="taskFields" :toolbar="toolbar" :filterSettings="filterSettings" :allowFiltering="true" :allowSelection="true" hierarchyCheckboxMode="hierarchy" :columns="columns"></ejs-gantt>
    </div>
    `,
    data: function () {
        return {
            data: data,
            selectedMode: 'hierarchy',
            selectionModes: [
                { id: 'self', type: 'self' },
                { id: 'hierarchy', type: 'hierarchy' },
                { id: 'filteredHierarchy', type: 'filteredHierarchy' }
            ],
            toolbar: ['Search'],
            filterSettings: { type: 'Menu' },
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentID'
            },
            columns: [
                { field: 'CheckBox', headerText: '', showCheckbox: true, width: '70', allowFiltering: false },
                { field: 'TaskID', width: '110', visible: false },
                { field: 'TaskName', width: '190' },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' }
            ]
        };
    },
    methods: {
        changeMode: function () {
            this.$refs.gantt.ej2Instances.hierarchyCheckboxMode = this.selectedMode;
            this.$refs.gantt.ej2Instances.refresh();
        }
    },
    provide: {
        gantt: [Selection, Filter, Toolbar]
    }
});

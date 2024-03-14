
import Vue from "vue";
import { GanttPlugin , Toolbar, PdfExport, Selection,PdfQueryCellInfoEventArgs} from "@syncfusion/ej2-vue-gantt";
import { editingData , editingResources } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" :height="height"
      :rowHeight="rowHeight" :taskbarHeight="taskbarHeight" :labelSettings="labelSettings"  :splitterSettings="splitterSettings" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"  :allowResizing='true' :resourceFields="resourceFields"
      :resources="resources">

      <template v-slot:leftLabelTemplate="{data}">
      <div>
        <template>{{data.TaskName}} [ {{ data.Progress }} % ]</template>
      </div>
    </template>

    <template v-slot:rightLabelTemplate="{data}">
      <div v-if="data.ganttProperties.resourceInfo">
        <span v-for="resource in data.ganttProperties.resourceInfo">
          <img :src="'https://ej2.syncfusion.com/vue/demos/src/gantt/images/' + resource.resourceName + '.png'"
          style="height: 40px;"/>
          <span style="margin-left:5px;margin-right:5px">{{ resource.resourceName }}</span>
        </span>
      </div>
    </template>
    
     

      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100'></e-column>
        <e-column field='TaskName' headerText='Task Name' width='150'></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
`,

  data: function() {
      return{
            data: editingData,
            taskFields: {
             id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            progress:'Progress'
            child: 'subtasks',
            },
            rowHeight: 45,
            taskbarHeight: 35,
        splitterSettings:{
            columnIndex:3
            },
            height:'450px',
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        labelSettings: {
          leftLabel: "leftLabelTemplate",
          rightLabel: "rightLabelTemplate",
          taskLabel: '${Progress}%'
      },
        toolbar: ['PdfExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    var exportProperties = {
                      fileName:"new.pdf"
                    };
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.pdfExport(exportProperties);
                }
            },
            pdfQueryTaskbarInfo: (args) => {
                args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName + '[' + args.data.ganttProperties.progress + ']';
                if (args.data.ganttProperties.resourceNames) {
                    args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
                    args.labelSettings.rightLabel.image = [{
                        base64: (args).data.taskData.resourcesImage, width: 20, height: 20
                    }]
            
                }
                args.labelSettings.taskLabel.value = args.data.ganttProperties.progress + '%' 
          },
        resources: editingResources,
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('04/30/2019'),
      }
  },
  provide: {
    gantt: [Toolbar, PdfExport]
}

});
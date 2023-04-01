


<template>
     <div>
        <ejs-button id="databind" cssClass="e-info" v-on:click.native="databind">Bind Data</ejs-button>
        <br>
        <br>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :projectStartDate="projectStartDate" :projectEndDate= "projectEndDate"></ejs-gantt>
    </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { Ajax } from '@syncfusion/ej2-base';
Vue.use(GanttPlugin);
export default {
  data: function() {
      return{
            height: '450px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                progress: 'Progress',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'SubTasks'
            },
            projectStartDate: new Date('02/24/2019'),
            projectEndDate: new Date('07/20/2019')  
        };
  },
  methods: {
      databind: function(e){
        let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/GanttData","GET");
        this.showSpinner();
        ajax.send();
        ajax.onSuccess = function (data) {
        this.hideSpinner();
        this.dataSource = (JSON.parse(data)).Items;
        this.refresh();
    };
      },
  }
};
</script>




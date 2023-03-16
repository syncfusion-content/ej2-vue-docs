
import Vue from 'vue';
import { closest, remove, addClass } from '@syncfusion/ej2-base';
import { SchedulePlugin, Month, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { eventData, waitingList } from './datasource.js';

Vue.use(SchedulePlugin);
import { TreeViewPlugin } from '@syncfusion/ej2-vue-navigations';
Vue.use(TreeViewPlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <div class='content-wrapper'>
        <div class='schedule-container'>
          <div class='title-container'>
            <h1 class='title-text'>Scheduler</h1>
          </div>
          <div>
            <ejs-schedule ref='ScheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views = 'views' :eventSettings='eventSettings' cssClass='schedule-drag-drop' :actionBegin='onActionBegin' :drag='onItemDrag'></ejs-schedule>
          </div>
        </div>
        <div class='treeview-container'>
          <div class='title-container'>
            <h1 class='title-text'>Waiting List</h1>
          </div>
          <div>
            <ejs-treeview id='Tree' cssClass='treeview-external-drag' :allowDragAndDrop=true :fields='treeViewFields' :nodeDragging='onItemDrag' :nodeDragStop='onTreeDragStop' ></ejs-treeview>
          </div>
        </div>
      </div>
    </div>
  </div>
`,

  data (){
    return {
      height: '510px',
      width: '100%',
      views: ['Month'],
      eventSettings: {
        dataSource: eventData
      },
      selectedDate: new Date(2018, 1, 15),
      treeViewFields: { dataSource: waitingList, id: 'Id', text: 'Name' },
      draggedItemId : null
    }
  },
  methods: {
    onActionBegin: function (event) {
      if (event.requestType === 'eventCreate' && this.draggedItemId) {
        let treeObj = document.getElementById('Tree').ej2_instances[0];
        let treeViewdata = treeObj.fields.dataSource;
        let filteredPeople = treeViewdata.filter(this.dataFilter);
        treeObj.fields.dataSource = filteredPeople;
        let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
        for (let i = 0; i < elements.length; i++) {
          remove(elements[i]);
        }
      }
    },
    onItemDrag: function(event) {
      let scheduleObj = this.$refs.ScheduleObj.ej2Instances;
      if (scheduleObj.isAdaptive) {
        let classElement = document.querySelector('.e-device-hover');
        if (classElement) {
          classElement.classList.remove('e-device-hover');
        }
        if (event.target.classList.contains('e-work-cells')) {
          addClass([event.target], 'e-device-hover');
        }
      }
      if (document.body.style.cursor === 'not-allowed') {
        document.body.style.cursor = '';
      }
      if (event.name == 'nodeDragging') {
        let dragElementIcon = document.querySelectorAll('.e-drag-item .e-icon-expandable');
        for (let i = 0; i < dragElementIcon.length; i++) {
          dragElementIcon[i].style.display = 'none';
        }
      }
    },
    dataFilter: function (item) {
      return item.Id !== parseInt(this.draggedItemId, 10);
    },
    onTreeDragStop: function(event) {
      let treeElement = closest(event.target, '.e-treeview');
      let classElement = document.querySelector('.e-device-hover');
      if (classElement) {
        classElement.classList.remove('e-device-hover');
      }
      if (!treeElement) {
        event.cancel = true;
        let scheduleElement = closest(event.target, '.e-content-wrap');
        if (scheduleElement) {
          let treeObj = document.getElementById('Tree').ej2_instances[0];
          let treeviewData = treeObj.fields.dataSource;
          if (event.target.classList.contains('e-work-cells')) {
            let filteredData = treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
            let scheduleObj = this.$refs.ScheduleObj.ej2Instances;
            let cellData = scheduleObj.getCellDetails(event.target);
            let eventData = {
              Subject: filteredData[0].Name,
              StartTime: cellData.startTime,
              EndTime: cellData.endTime,
              IsAllDay: cellData.isAllDay,
              Description: filteredData[0].Description
            };
            scheduleObj.addEvent(eventData);
            this.draggedItemId = event.draggedNodeData.id;
          }
        }
      }
    }
  },
  provide: {
    schedule: [Month, Resize, DragAndDrop]
  }

});
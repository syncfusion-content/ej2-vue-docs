<template>
  <div id='app'>
    <div id='container'>
      <div class='content-wrapper'>
        <div class='schedule-container'>
          <div class='title-container'>
            <h1 class='title-text'>Scheduler</h1>
          </div>
          <div>
            <ejs-schedule ref='ScheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
              :eventSettings='eventSettings' cssClass='schedule-drag-drop' :actionBegin='onActionBegin'
              :drag='onItemDrag'></ejs-schedule>
          </div>
        </div>
        <div class='treeview-container'>
          <div class='title-container'>
            <h1 class='title-text'>Waiting List</h1>
          </div>
          <div>
            <ejs-treeview id='Tree' cssClass='treeview-external-drag' :allowDragAndDrop=true :fields='treeViewFields'
              :nodeDragging='onItemDrag' :nodeDragStop='onTreeDragStop'></ejs-treeview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* csslint ignore:start */
.content-wrapper {
  display: -ms-flexbox;
  display: flex;
}

.e-device-hover {
  background-color: #e0e0e0 !important;
}

.schedule-container {
  padding-right: 10px
}

.title-container {
  padding-bottom: 10px;
}

.treeview-external-drag .e-list-text,
.e-bigger .treeview-external-drag .e-list-text {
  background: white;
  border: 0.5px solid #E1E7EC;
  height: 30px;
  line-height: 15px;
  padding: 5px;
  width: 220px;
}

.treeview-external-drag .e-list-parent,
.e-bigger .treeview-external-drag .e-list-parent {
  height: 100%;
  padding: 0 2px;
}

.treeview-external-drag .e-list-item,
.e-bigger .treeview-external-drag .e-list-item {
  height: 100%;
  padding: 0 0 5px 0;
}

.treeview-external-drag .e-fullrow,
.e-bigger .treeview-external-drag .e-fullrow {
  height: 55px;
}

.treeview-external-drag .e-list-item.e-hover>.e-fullrow,
.treeview-external-drag .e-list-item.e-active>.e-fullrow,
.treeview-external-drag .e-list-item.e-active.e-hover>.e-fullrow,
.e-bigger .treeview-external-drag .e-list-item.e-hover>.e-fullrow,
.e-bigger .treeview-external-drag .e-list-item.e-active>.e-fullrow,
.e-bigger .treeview-external-drag .e-list-item.e-active.e-hover>.e-fullrow {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none !important;
}

.treeview-external-drag .e-text-content,
.e-bigger .treeview-external-drag .e-text-content {
  padding: 0;
}

.e-drag-item.e-treeview.treeview-external-drag,
.e-bigger .e-drag-item.e-treeview.treeview-external-drag {
  padding: 0 !important;
}

.title-text {
  font-size: 18px;
  margin: 0px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 550px) {
  .content-wrapper {
    display: block;
  }

  .schedule-container {
    padding-bottom: 10px
  }

  .treeview-external-drag.e-treeview,
  .e-bigger .treeview-external-drag.e-treeview {
    width: 225px;
  }

  .e-bigger .treeview-external-drag.e-treeview.e-drag-item {
    position: relative !important;
  }
}

/* csslint ignore:end */
</style>

<script setup>
import { provide, ref } from "vue";
import { closest, remove, addClass } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, Month, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { eventData, waitingList } from './datasource.js';
import { TreeViewComponent as EjsTreeview } from '@syncfusion/ej2-vue-navigations';

const ScheduleObj = ref(null);
const height = '510px';
const width = '100%';
const views = ['Month'];
const eventSettings = {
  dataSource: eventData
}
const selectedDate = new Date(2018, 1, 15);
const treeViewFields = { dataSource: waitingList, id: 'Id', text: 'Name' };
const draggedItemId = null;

const onActionBegin = function (event) {
  if (event.requestType === 'eventCreate' && draggedItemId) {
    let treeObj = document.getElementById('Tree').ej2_instances[0];
    let treeViewdata = treeObj.fields.dataSource;
    let filteredPeople = treeViewdata.filter(dataFilter);
    treeObj.fields.dataSource = filteredPeople;
    let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
    for (let i = 0; i < elements.length; i++) {
      remove(elements[i]);
    }
  }
}
const onItemDrag = function (event) {
  let scheduleObj = ScheduleObj.value.ej2Instances;
  if (scheduleObj.isAdaptive) {
    let classElement = scheduleObj.element.querySelector('.e-device-hover');
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
}
const dataFilter = function (item) {
  return item.Id !== parseInt(draggedItemId, 10);
}
const onTreeDragStop = function (event) {
  let treeElement = closest(event.target, '.e-treeview');
  let classElement = scheduleObj.element.querySelector('.e-device-hover');
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
        let scheduleObj = ScheduleObj.value.ej2Instances;
        let cellData = scheduleObj.getCellDetails(event.target);
        let eventData = {
          Subject: filteredData[0].Name,
          StartTime: cellData.startTime,
          EndTime: cellData.endTime,
          IsAllDay: cellData.isAllDay,
          Description: filteredData[0].Description
        };
        draggedItemId = event.draggedNodeData.id;
        scheduleObj.addEvent(eventData);
      }
    }
  }
}

provide('schedule', [Month, Resize, DragAndDrop]);

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3';
</style>

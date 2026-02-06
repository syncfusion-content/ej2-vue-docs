<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule width='100%' height='550px' :headerIndentTemplate="'headerIndentTemplate'"
        :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='TimelineWeek'></e-view>
          <e-view option='TimelineMonth'></e-view>
        </e-views>
        <template v-slot:headerIndentTemplate="{ data }">
          <div class='e-resource-text'>
            <div class="text">Resources</div>
          </div>
        </template>
        <e-resources>
          <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
            :dataSource='ownerDataSource' textField='OwnerText' idField='Id' colorField='OwnerColor'>
          </e-resource>
        </e-resources>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, Day, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { resourceData } from './datasource.js';

const width = '100%';
const height = '550px';
const currentView = 'Week';
const selectedDate = new Date(2018, 3, 1);
const group = {
  resources: ['Owners']
};
const allowMultiple = true;
const ownerDataSource = [
  { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
  { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
  { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
];
const eventSettings = { dataSource: resourceData };

provide('schedule', [Day, Week, TimelineViews, TimelineMonth]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css";

.e-schedule .e-timeline-view .e-resource-left-td {
  vertical-align: bottom;
}

.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
.e-schedule .e-timeline-month-view .e-resource-left-td .e-resource-text {
  font-weight: 500;
  padding: 0;
}

.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  flex: 0 0 33.3%;
  font-weight: 500;
  height: 36px;
  line-height: 34px;
  padding-left: 50px;
}

.e-schedule .e-timeline-month-view .e-resource-left-td .e-resource-text>div {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex: 0 0 33.3%;
  font-weight: 500;
  height: 36px;
  line-height: 34px;
  padding-left: 50px;
}

/* csslint ignore:start */
.e-schedule .e-vertical-view .e-left-indent-wrap table tbody td.e-resource-cells {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}

.e-schedule .e-vertical-view .e-left-indent-wrap table tbody td.e-resource-cells .e-resource-text {
  font-weight: 500;
}

.e-schedule .e-vertical-view .e-left-indent-wrap table tbody td.e-header-cells .e-resource-text,
.e-schedule .e-vertical-view .e-left-indent-wrap table tbody td.e-all-day-cells .e-resource-text {
  display: none;
}

/* csslint ignore:end */
</style>

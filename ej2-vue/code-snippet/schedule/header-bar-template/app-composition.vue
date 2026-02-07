<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :views='views'>
        <e-resources>
          <e-resource field="OwnerId" title="Owners" :dataSource="resourceDataSource" :query='resourceQuery'
            :allowMultiple="allowMultiple" name="Owners" textField="OwnerText" idField="OwnerId" colorField='Color'>
          </e-resource>
        </e-resources>
        <e-toolbaritems>
          <e-toolbaritem name='Previous' align='Left'></e-toolbaritem>
          <e-toolbaritem name='Next' align='Left'></e-toolbaritem>
          <e-toolbaritem name='DateRangeText' align='Left'></e-toolbaritem>
          <e-toolbaritem :template="'Template'">
            <template v-slot:Template>
              <ejs-dropdownlist id='dropdownlist' :value="dropdownvalue" :change="onResourceChange" width="125px"
                :showClearButton=false :dataSource='resourceDataSource' :fields='fields'></ejs-dropdownlist>
            </template>
          </e-toolbaritem>
          <e-toolbaritem name='Today' align='Right'></e-toolbaritem>
        </e-toolbaritems>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, ResourcesDirective as EResources, ResourceDirective as EResource, ToolbarItemsDirective as EToolbaritems, ToolbarItemDirective as EToolbaritems, Month, ToolbarItemsDirective, ToolbarItemDirective, ResourceDirective, ResourcesDirective } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { Predicate, Query } from '@syncfusion/ej2-data';

const scheduleObj = ref(null);
const height = '550px';
const width = '100%';
const eventSettings = { dataSource: scheduleData, query: new Query().where('OwnerId', 'equal', 1) };
const selectedData = new Date(2023, 10, 15);
const views = ['Month'];
const currentView = 'Month';
const resourceDataSource = [
  { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
  { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
  { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
];
const fields = { text: 'OwnerText', value: 'OwnerId' };
const dropdownvalue = 1;
const resourceQuery = new Query().where('OwnerId', 'equal', 1);
const allowMultiple = true;

provide('schedule', [Month]);

const onResourceChange = function (args) {
  let scheduleObj = scheduleObj.value.ej2Instances;
  let resourcePredicate;
  let value = args.value;
  resourcePredicate = new Predicate('OwnerId', 'equal', value)
  scheduleObj.resources[0].query = resourcePredicate ? new Query().where(resourcePredicate) :
    new Query().where('OwnerId', 'equal', 1);
  scheduleObj.eventSettings.query = new Query().where('OwnerId', 'equal', value);
}

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
</style>

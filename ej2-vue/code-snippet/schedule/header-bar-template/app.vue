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
<script>
import { ScheduleComponent, Month, ToolbarItemsDirective, ToolbarItemDirective, ResourceDirective, ResourcesDirective } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Predicate, Query } from '@syncfusion/ej2-data';

export default {
  name: "App",
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-resource': ResourceDirective,
    'e-resources': ResourcesDirective,
    'e-toolbaritems': ToolbarItemsDirective,
    'e-toolbaritem': ToolbarItemDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      eventSettings: { dataSource: scheduleData, query: new Query().where('OwnerId', 'equal', 1) },
      selectedData: new Date(2023, 10, 15),
      views: ['Month'],
      currentView: 'Month',
      resourceDataSource: [
        { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
        { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
        { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
      ],
      fields: { text: 'OwnerText', value: 'OwnerId' },
      dropdownvalue: 1,
      resourceQuery: new Query().where('OwnerId', 'equal', 1),
      allowMultiple: true,
    }
  },
  provide: {
    schedule: [Month]
  },
  methods: {
    onResourceChange(args) {
      let scheduleObj = this.$refs.scheduleObj.ej2Instances;
      let resourcePredicate;
      let value = args.value;
      resourcePredicate = new Predicate('OwnerId', 'equal', value)
      scheduleObj.resources[0].query = resourcePredicate ? new Query().where(resourcePredicate) :
        new Query().where('OwnerId', 'equal', 1);
      scheduleObj.eventSettings.query = new Query().where('OwnerId', 'equal', value);
    },
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>

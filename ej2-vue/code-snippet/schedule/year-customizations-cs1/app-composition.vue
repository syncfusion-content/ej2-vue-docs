<template>
  <div>
    <div id="app">
      <div id="container">
        <ejs-schedule id="Schedule" height="650px" :eventSettings="eventSettings" :currentView="currentView"
          :firstMonthOfYear="firstMonthOfYear" :monthsCount="monthsCount" :group="group"
          :monthHeaderTemplate="'monthHeaderTemplate'" :resourceHeaderTemplate="'resourceHeaderTemplate'">
          <template v-slot:resourceHeaderTemplate="{ data }">
            <div class='template-wrap'>
              <div class="resource-details">
                <div class="resource-name">{{ data.resourceData.OwnerText }}</div>
              </div>
            </div>
          </template>
          <template v-slot:monthHeaderTemplate="{ data }">
            <div>{{ monthHeaderTemplate(data.date) }}</div>
          </template>
          <e-views>
            <e-view option="Year"></e-view>
            <e-view option="TimelineYear" displayName="Horizontal TimelineYear" isSelected="true"></e-view>
            <e-view option="TimelineYear" displayName="Vertical TimelineYear" orientation="Vertical"></e-view>
          </e-views>
          <e-resources>
            <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource" textField="OwnerText"
              idField="Id" colorField="OwnerColor"></e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { resourceData } from "./datasource.js";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Year, TimelineYear, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";

const width = "100%";
const height = "550px";
const currentView = "TimelineWeek";
const selectedDate = new Date(2021, 7, 4);
const firstMonthOfYear = 6;
const monthsCount = 6;
const group = {
  resources: ["Owners"]
};
const allowMultiple = true;
const ownerDataSource = [
  { OwnerText: "Nancy", Id: 1, OwnerColor: "#ffaa00" },
  { OwnerText: "Steven", Id: 2, OwnerColor: "#f8a398" },
  { OwnerText: "Robert", Id: 3, OwnerColor: "#7499e1" },
  { OwnerText: "Smith", Id: 4, OwnerColor: "#5978ee" },
  { OwnerText: "Micheal", Id: 5, OwnerColor: "#df5286" }
];
const eventSettings = { dataSource: resourceData }

provide('schedule', [Year, TimelineYear, Resize, DragAndDrop]);

const monthHeaderTemplate = function (date) {
  return (
    date.toLocaleString("en-us", { month: "long" }) +
    " " +
    date.getFullYear()
  );
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

.e-schedule .e-vertical-view .e-resource-cells {
  height: 62px;
}

.e-schedule .template-wrap {
  display: flex;
  text-align: left;
}

.e-schedule .template-wrap .resource-details {
  padding-left: 10px;
}

.e-schedule .template-wrap .resource-details .resource-name {
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
}

.e-schedule.e-device .template-wrap .resource-details .resource-name {
  font-size: inherit;
  font-weight: inherit;
}

.e-schedule.e-device .e-resource-tree-popup .e-fullrow {
  height: 50px;
}
</style>

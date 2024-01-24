
import Vue from "vue";
import { resourceData } from "./datasource.js";
import {
  SchedulePlugin,
  Year,
  TimelineYear,
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-vue-schedule";

Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div>
    <div id="app">
      <div id="container">
        <ejs-schedule
          id="Schedule"
          height="650px"
          :eventSettings="eventSettings"
          :currentView="currentView"
          :firstMonthOfYear="firstMonthOfYear"
          :monthsCount="monthsCount"
          :group="group"
          :monthHeaderTemplate="'monthHeaderTemplate'"
          :resourceHeaderTemplate="'resourceHeaderTemplate'"
        >
          <template v-slot:resourceHeaderTemplate="{data}">
            <div class='template-wrap'>
              <div class="resource-details">
                <div class="resource-name">{{data.resourceData.OwnerText}}</div>
              </div>
            </div>                            
          </template>
          <template v-slot:monthHeaderTemplate="{ data }">
            <div>{{monthHeaderTemplate(data.date)}}</div>
          </template>
          <e-views>
            <e-view option="Year"></e-view>
            <e-view
              option="TimelineYear"
              displayName="Horizontal TimelineYear"
              isSelected="true"
            ></e-view>
            <e-view
              option="TimelineYear"
              displayName="Vertical TimelineYear"
              orientation="Vertical"
            ></e-view>
          </e-views>
          <e-resources>
            <e-resource
              field="OwnerId"
              title="Owner"
              name="Owners"
              :dataSource="ownerDataSource"
              textField="OwnerText"
              idField="Id"
              colorField="OwnerColor"
            ></e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
`,

  data() {
    return {
      width: "100%",
      height: "550px",
      currentView: "TimelineWeek",
      selectedDate: new Date(2021, 7, 4),
      firstMonthOfYear: 6,
      monthsCount: 6,
      group: {
        resources: ["Owners"]
      },
      allowMultiple: true,
      ownerDataSource: [
        { OwnerText: "Nancy", Id: 1, OwnerColor: "#ffaa00" },
        { OwnerText: "Steven", Id: 2, OwnerColor: "#f8a398" },
        { OwnerText: "Robert", Id: 3, OwnerColor: "#7499e1" },
        { OwnerText: "Smith", Id: 4, OwnerColor: "#5978ee" },
        { OwnerText: "Micheal", Id: 5, OwnerColor: "#df5286" }
      ],
      eventSettings: { dataSource: resourceData }
    };
  },
  provide: {
    schedule: [Year, TimelineYear, Resize, DragAndDrop]
  },
  methods: {
    monthHeaderTemplate: function(date) {
      return (
        date.toLocaleString("en-us", { month: "long" }) +
        " " +
        date.getFullYear()
      );
    }
  }
});
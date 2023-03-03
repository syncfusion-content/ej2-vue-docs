
import Vue from "vue";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  SchedulePlugin,
} from "@syncfusion/ej2-vue-schedule";
var initialLoad = true;
let data = [
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "2",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 29, 0, 0),
    Subject: "Plumbing Checklist | Jaimungal | 3671 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "4",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 28, 0, 0),
    Subject: "Underground Plumbing | Jaimungal | 3671 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 12, 30),
    Id: "7",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 24, 0, 0),
    Subject: "Steel/ Checklist | VP Highland Model | 3719 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "9",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 29, 0, 0),
    Subject:
      "Tile Selections/ Pavers/ Finish | VP Highland Model | 3719 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "10",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 26, 0, 0),
    Subject: "Layout/ Form Rebar Shell | VP Highland Model | 3719 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "10",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 26, 0, 0),
    Subject: " VP Highland Model | 3719 :: Pool",
  },
];
Vue.use(SchedulePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id="container">
      <ejs-schedule ref='scheduleObj' :height="height" :selectedDate="selectedDate" :views="views"
        :eventSettings="eventSettings" :dataBound=this.dataBound></ejs-schedule>
    </div>
  </div>
`,


  data() {
    return {
      height: "550px",
      views: ["Day", "Week", "Month", "Agenda"],
      eventSettings: {
        dataSource: data,
        spannedEventPlacement: "TimeSlot",
      },
      selectedDate: new Date(2022, 3, 26),
    };
  },
  provide: {
    schedule: [Day, Week, Month, Agenda, DragAndDrop],
  },
  methods: {
    dataBound(args) {
      let scheduleObj = this.$refs.scheduleObj.ej2Instances;
      debugger;
      if (initialLoad) {
        setTimeout(() => {
          console.log(document.querySelector('.e-all-day-appointment-section'));
          document.querySelector('.e-all-day-appointment-section').click();
        }, 0)
        initialLoad = false;
      }
    }
  }

});
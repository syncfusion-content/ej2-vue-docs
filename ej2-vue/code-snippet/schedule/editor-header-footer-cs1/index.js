import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
Vue.use(SchedulePlugin);
const today = new Date();
var data = [
  {
    Id: 1,
    Subject: "Surgery - Andrew",
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    IsAllDay: false
  },
  {
    Id: 2,
    Subject: "Consulting - John",
    StartTime: new Date(today.getFullYear(), today.getMonth(),today.getDate(), 10, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    IsAllDay: false
  },
  {
    Id: 3,
    Subject: "Therapy - Robert",
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11,30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    IsAllDay: false
  },
  {
    Id: 4,
    Subject: "Observation - Steven",
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(),12, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
    IsAllDay: false
  },
];

var editorHeaderTemplateVue = Vue.component("editorHeaderTemplate", {
  props: ['eventData'],
  template: `<div class="event-header">{{getName(data)}}</div></div>`,
  data: () => ({}),
  methods: {
    getName: function(value) {
      return value.Subject ? value.Subject : 'Create New Event';
    }
  }
});

var editorFooterTemplateVue = Vue.component("editorFooterTemplate", {
  template: `<div id="event-footer"><div id="verify"><input type="checkbox" id="check-box" value="unchecked" />
  <label htmlFor="check-box" id="text">Verified</label></div><div id="right-button">
  <button id="Save" className="e-control e-btn e-primary" disabled data-ripple="true"> Save</button>
  <button id="Cancel" className="e-control e-btn e-primary" data-ripple="true"> Cancel </button></div></div>`,
  data() {
    return {
      data: {},
    };
  },
});

new Vue({
	el: '#app',
	template: `
  <template>
  <div id="app">
    <div id="container">
      <ejs-schedule
        :height="height"
        :width="width"
        ref='schedule_instance'
        :eventSettings="eventSettings"
        :editorHeaderTemplate="editorHeaderTemplate"
        :editorFooterTemplate="editorFooterTemplate"
        :popupOpen="onPopupOpen"
      >
      </ejs-schedule>
    </div>
  </div>
</template>`,

data() {
  return {
    height: "550px",
    width: "100%",
    eventSettings: {dataSource: data},
    editorHeaderTemplate: function () {
      return {
        template: editorHeaderTemplateVue,
      };
    },
    editorFooterTemplate: function () {
      return {
        template: editorFooterTemplateVue,
      };
    },
  };
},
methods: {
  onPopupOpen: function (args) {
    if (args.type === "Editor") {
      let scheduleObj = this.$refs.schedule_instance.ej2Instances
      const saveButton = args.element.querySelector("#Save");
      const cancelButton = args.element.querySelector("#Cancel");
      const checkBox = args.element.querySelector("#check-box");
      checkBox.onchange = () => {
        if (!checkBox.checked) {
          saveButton.setAttribute("disabled", "");
        } else {
          saveButton.removeAttribute("disabled");
        }
      };
      saveButton.onclick = () => {
        const data = {
          Id: args.data.Id,
          Subject: args.element.querySelector("#Subject").value,
          StartTime: args.element.querySelector("#StartTime").ej2_instances[0].value,
          EndTime: args.element.querySelector("#EndTime").ej2_instances[0].value,
          IsAllDay: args.element.querySelector("#IsAllDay").checked,
        };
        if (args.target?.classList.contains("e-appointment")) {
          scheduleObj.saveEvent(data, "Save");
        } else {
          data.Id = scheduleObj.getEventMaxID();
          scheduleObj.addEvent(data);
        }
        scheduleObj.closeEditor();
      };
      cancelButton.onclick = () => {
        scheduleObj.closeEditor();
      };
    }
  }
},
provide: {
  schedule: [Day, Week, WorkWeek, Month],
}
});
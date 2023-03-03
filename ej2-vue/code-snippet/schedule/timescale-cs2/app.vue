

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule id='Schedule' :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :timeScale='timeScale'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
        </e-views>
        </ejs-schedule>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, View, TimeScaleModel } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { Internationalization, extend } from '@syncfusion/ej2-base';
Vue.use(SchedulePlugin);
  let instance = new Internationalization();
  var majorTemplateVue = Vue.component('demo', {
        template: '<div>{{majorSlotTemplate(data.date)}}</div>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            majorSlotTemplate: function (date) {
                return instance.formatDate(date, { skeleton: 'hm' });
            }
        }
    });
   var minorTemplateVue = Vue.component('demo', {
        template: '<div style="text-align: right; margin-right: 15px">{{minorSlotTemplate(data.date)}}</div>',
        data() {
            return {
                data: {},
                minorSlotTemplate: function (date) {
                return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
            }
        };
      }
    });

export default {
  data (){
    return {
      height: '550px',
      eventSettings: { dataSource: extend([], scheduleData, null, true)  },
      selectedData: new Date(2018, 1, 15),
      majorSlotTemplate: function (e) {
          return { template: majorTemplateVue }
      },
      minorSlotTemplate: function (e) {
         return { template: minorTemplateVue }
      },
      timeScale: {
        enable: true,
        interval: 60,
        slotCount: 6
      },
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek]
  },
  mounted: function () {
    let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
    scheduleObj.timeScale.majorSlotTemplate = this.majorSlotTemplate;
    scheduleObj.timeScale.minorSlotTemplate = this.minorSlotTemplate;
    scheduleObj.dataBind();
  }
}

</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>




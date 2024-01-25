
import Vue from 'vue';
import { SchedulePlugin, TimelineMonth, getWeekNumber } from '@syncfusion/ej2-vue-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventData } from './datasource.js';

Vue.use(SchedulePlugin);

var instance = new Internationalization();

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings' :views='views'>
            <e-header-rows>
                <e-header-row option="Month" :template="'monthHeaderTemplate'"></e-header-row>
                    <template v-slot:monthHeaderTemplate="{data}">
                        <span class="month">{{getMonthDetails(data)}}</span>
                    </template>
                <e-header-row option="Week" :template="'weekHeaderTemplate'"></e-header-row>
                    <template v-slot:weekHeaderTemplate="{data}">
                        <span class="week">{{getWeekDetails(data)}}</span>
                    </template>
                <e-header-row option="Week" :template="'yearHeaderTemplate'"></e-header-row>
                    <template v-slot:yearHeaderTemplate="{data}">
                        <span class="year">{{getYearDetails(data)}}</span>
                    </template>
            </e-header-rows>
        </ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      width: '100%',
      height: '550px',
      selectedDate: new Date(2018, 0, 1),
      views: [{ option: 'TimelineMonth' }],
      eventSettings: { dataSource: eventData }
    }
  },
  provide: {
    schedule: [TimelineMonth]
  },
  methods: {
    getWeekDetails: function (value) {
        return 'Week: ' + getWeekNumber(value.date);
    },
    getMonthDetails: function (value) {
        return 'Month ' + instance.formatDate(value.date, { skeleton: 'M' });
    },
    getYearDetails: function (value) {
        return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
    }}
});
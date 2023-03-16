
import Vue from 'vue';
import { SchedulePlugin, TimelineMonth, getWeekNumber } from '@syncfusion/ej2-vue-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventData } from './datasource.js';

Vue.use(SchedulePlugin);

var instance = new Internationalization();

var yearHeaderVue = Vue.component('year-header', {
    template: '<span class="year">{{getYearDetails(data)}}</span>',
    data() {
        return {
            data: {}
        };
    },
    methods: {
        getYearDetails: function (value) {
            return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
        }
    }
});
var monthHeaderVue = Vue.component('month-header', {
    template: '<span class="month">{{getMonthDetails(data)}}</span>',
    data() {
        return {
            data: {}
        };
    },
    methods: {
        getMonthDetails: function (value) {
            return 'Month ' + instance.formatDate(value.date, { skeleton: 'M' });
        }
    }
});

var weekHeaderVue = Vue.component('week-header', {
    template: '<span class="week">{{getWeekDetails(data)}}</span>',
    data() {
        return {
            data: {}
        };
    },
    methods: {
        getWeekDetails: function (value) {
            return 'Week: ' + getWeekNumber(value.date);
        }
    }
});



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings' :views='views' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      width: '100%',
      height: '550px',
      selectedDate: new Date(2018, 0, 1),
      headerRows: [
        {
            option: 'Year',
            template: function (e) {
                return {
                    template: yearHeaderVue
                };
            }
        },
        {
            option: 'Month',
            template: function (e) {
                return {
                    template: monthHeaderVue
                };
            },
        },
        {
            option: 'Week',
            template: function (e) {
                return {
                    template: weekHeaderVue
                };
            }
        },
        { option: 'Date' }
      ],
      views: [{ option: 'TimelineMonth' }],
      eventSettings: { dataSource: eventData }
    }
  },
  provide: {
    schedule: [TimelineMonth]
  }

});
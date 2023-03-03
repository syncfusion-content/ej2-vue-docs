
    import Vue from 'vue';
    import { Internationalization } from '@syncfusion/ej2-base';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var dateHeaderTemplateVue = Vue.component('demo', {
        template: '<div class="date-text" v-html="getDateHeaderText(data.date)"></div>'+
        '<div v-html="getWeather(data.date)"></div>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getDateHeaderText: function (Date) {
                return instance.formatDate(Date, { skeleton: 'Ed' });
            },
            getWeather: function (Date) {
                switch (Date.getDay()) {
                    case 0:
                        return '<div class="weather-text">25°C</div>';
                    case 1:
                        return '<div class="weather-text">18°C</div>';
                    case 2:
                        return '<div class="weather-text">10°C</div>';
                    case 3:
                        return '<div class="weather-text">16°C</div>';
                    case 4:
                        return '<div class="weather-text">8°C</div>';
                    case 5:
                        return '<div class="weather-text">27°C</div>';
                    case 6:
                        return '<div class="weather-text">17°C</div>';
                    default:
                        return null;
                }
            }
        }
    });
    
new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings' :dateHeaderTemplate='dateHeaderTemplate' :cssClass='cssClass'>
            <e-views>
                <e-view option='Day'></e-view>
                <e-view option='Week'></e-view>
                <e-view option='Agenda'></e-view>
                <e-view option='TimelineWorkWeek'></e-view>
                <e-view option='TimelineMonth'></e-view>
            </e-views>
        </ejs-schedule>
    </div>
  </div>
`,

        data () {
            return {
                eventSettings: { dataSource: scheduleData },
                cssClass: 'schedule-date-header-template',
                selectedDate: new Date(2018, 1, 15),
                dateHeaderTemplate: function (e) {
                    return { template: dateHeaderTemplateVue }
                }
            }
        },
        provide: {
            schedule: [Day, Week, Agenda, TimelineViews, TimelineMonth]
        }
    
});
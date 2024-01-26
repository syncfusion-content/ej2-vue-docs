
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
import { SchedulePlugin, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
Vue.use(SchedulePlugin);

var instance = new Internationalization();

new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :dateRangeTemplate="'dateRangeTemplate'">
                <template v-slot:dateRangeTemplate="{ data }">
                    <div class="date-text">{{getDateRange(data.startDate)}}-{{getDateRange(data.endDate)}}</div>
                </template>
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

    data() {
        return {
            selectedDate: new Date(2018, 1, 15)
        }
    },
    provide: {
        schedule: [Day, Week, Agenda, TimelineViews, TimelineMonth]
    },
    methods: {
        getDateRange: function (value) {
            return instance.formatDate(value, { skeleton: 'Ed' });
        }
    }
});
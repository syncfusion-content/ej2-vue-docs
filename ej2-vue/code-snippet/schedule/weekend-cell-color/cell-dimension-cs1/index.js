
import Vue from 'vue';
import { employeeEventData } from './datasource.js';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
Vue.use(SchedulePlugin);


new Vue({
    el: '#app',
    template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' width='100%' cssClass='schedule-cell-customization' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :renderCell="onRenderCell">
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='WorkWeek'></e-view>
                    <e-view option='Month'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>`,
    data() {
        return {
            eventSettings: { dataSource: employeeEventData },
            selectedDate: new Date(2018, 1, 15)
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month]
    },
    methods: {
        onRenderCell: function (args) {
            if (args.elementType == "workCells") {
                // To change the color of weekend columns in week view
                if (args.date) {
                    if (args.date.getDay() === 6) {
                        (args.element).style.background = '#ffdea2';
                    }
                    if (args.date.getDay() === 0) {
                        (args.element).style.background = '#ffdea2';
                    }
                }
            }
        }
    }
});
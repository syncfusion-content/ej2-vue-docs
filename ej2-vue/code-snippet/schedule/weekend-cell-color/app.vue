<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' width='100%' cssClass='schedule-cell-customization' height='550px'
                :selectedDate='selectedDate' :eventSettings='eventSettings' :renderCell="onRenderCell">
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='WorkWeek'></e-view>
                    <e-view option='Month'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { employeeEventData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
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
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css';

.schedule-cell-customization.e-schedule .e-month-view .e-work-cells:not(.e-work-days) {
    background-color: #f08080;
}
</style>

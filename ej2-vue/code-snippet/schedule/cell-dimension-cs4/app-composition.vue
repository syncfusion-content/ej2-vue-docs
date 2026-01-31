<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :selectedDate='selectedDate'
                :currentView='currentView' :renderCell='onRenderCell'>
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='Month'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { createElement } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const selectedDate = new Date(2018, 1, 14);
const eventSettings = { dataSource: scheduleData };
const currentView = 'Month';

const onRenderCell = (args) => {
    if (args.elementType == 'workCells' || args.elementType == 'monthCells') {
        let weekEnds = [0, 6];
        if (weekEnds.indexOf((args.date).getDay()) >= 0) {
            let ele = createElement('div', {
                innerHTML: "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />",
                className: 'templatewrap'
            });
            (args.element).appendChild(ele);
        }
    }
}

provide('schedule', [Day, Week, Month]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";

.templatewrap {
    text-align: center;
    width: 100%;
}

.templatewrap img {
    width: 20px;
    height: 20px;
}
</style>

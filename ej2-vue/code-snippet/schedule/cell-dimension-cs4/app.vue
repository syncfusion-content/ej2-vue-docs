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
<script>
import { createElement } from '@syncfusion/ej2-base';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            selectedDate: new Date(2018, 1, 14),
            eventSettings: { dataSource: scheduleData },
            currentView: 'Month'
        }
    },
    methods: {
        onRenderCell: (args) => {
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
    },
    provide: {
        schedule: [Day, Week, Month]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

.templatewrap {
    text-align: center;
    width: 100%;
}

.templatewrap img {
    width: 20px;
    height: 20px;
}
</style>

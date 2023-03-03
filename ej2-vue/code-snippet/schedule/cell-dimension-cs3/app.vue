

<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :selectedDate='selectedDate' :cellTemplate='cellTemplate' cssClass='schedule-cell-template'>
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='Month'></e-view>
                    <e-view option='TimelineWeek'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { SchedulePlugin, Day, Week, TimelineViews, Month, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    var cellTemplateVue = Vue.component("cellTemplate", {
        template: `<div class="templatewrap"><div v-if="data.type==='workCells'"><div v-html=getWorkCellText(data.date)></div></div><div v-else-if="data.type==='monthCells'"><div v-html=getMonthCellText(data.date)></div></div></div>`,
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getWorkCellText: function(date) {
                let weekEnds = [0, 6];
                if (weekEnds.indexOf(date.getDay()) >= 0) {
                    return "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />";
                }
                return '';
            },
            getMonthCellText: function(date) {
                if (date.getMonth() === 10 && date.getDate() === 23) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg"/>';
                } else if (date.getMonth() === 11 && date.getDate() === 9) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/get-together.svg" />';
                } else if (date.getMonth() === 11 && date.getDate() === 13) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
                } else if (date.getMonth() === 11 && date.getDate() === 22) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/thanksgiving-day.svg" />';
                } else if (date.getMonth() === 11 && date.getDate() === 24) {
                    return '<img src="https://ej2.syncfusion.com/demos/src/schedule/images/christmas-eve.svg" />';
                } else if (date.getMonth() === 11 && date.getDate() === 25) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/christmas.svg" />';
                } else if (date.getMonth() === 0 && date.getDate() === 1) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg" />';
                } else if (date.getMonth() === 0 && date.getDate() === 14) {
                    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
                }
                return '';
            }
        }
    });

    export default {
        data () {
            return {
                selectedDate: new Date(2017, 11, 16),
                cellTemplate: function (e) {
                    return {
                        template: cellTemplateVue
                    };
                },
            }
        },
        provide: {
            schedule: [Day, Week, Month, TimelineViews]
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

.templatewrap {
  text-align: center;
  /* In MONTH view the cell template is a SIBLING of event templates. So which is necessary to set the parent position relative and the child position absolute with 100% width */
  position: absolute;
  width: 100%;
}

.schedule-cell-template.e-schedule .e-month-view .e-work-cells {
  position: relative;
}

.templatewrap img {
  width: 20px;
  height: 20px;
}
</style>




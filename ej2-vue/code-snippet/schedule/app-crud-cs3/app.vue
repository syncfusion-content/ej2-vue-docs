

<template>
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button cssClass='e-info' v-on:click.native='onRefreshLayout'>Refresh Layout</ejs-button>
                        </div>
                    </td>
                </tr><br>
                <ejs-schedule ref='scheduleObj' width='100%' height='485px' :eventSettings='eventSettings' :selectedDate='selectedDate'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    export default {
        data () {
            return {
                eventSettings: {
                    dataSource:  [{
                        Id: 1,
                        Subject: 'Testing',
                        StartTime: new Date(2021, 10, 16, 10, 0),
                        EndTime: new Date(2021, 10, 16, 12, 0),
                        IsAllDay: false
                    }, {
                        Id: 2,
                        Subject: 'Vacation',
                        StartTime: new Date(2021, 10, 18, 10, 0),
                        EndTime: new Date(2021, 10, 18, 12, 0),
                        IsAllDay: false
                    }]
                },
                selectedDate: new Date(2021, 10, 15)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        },
        methods: {
            onRefreshLayout: function () {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                scheduleObj.refreshLayout();
            }
        }
    }
</script>
<style>
  @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>




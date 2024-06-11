<template>
    <div id='app'>
        <div id='container'>
            <table id='property' title="Filter events">
                <tbody>
                    <tr>
                        <td>
                            <ejs-checkbox ref='confirmedObj' label='Confirmed' :checked='true'
                                :change='onChange'></ejs-checkbox>
                        </td>
                        <td>
                            <ejs-checkbox ref='requestedObj' label='Requested' :checked='true'
                                :change='onChange'></ejs-checkbox>
                        </td>
                        <td>
                            <ejs-checkbox ref='newObj' label='New' :checked='true' :change='onChange'></ejs-checkbox>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate'
                :eventSettings='eventSettings' :eventRendered='onEventRendered'></ejs-schedule>
        </div>
    </div>
</template>

<script>
import { Query, Predicate } from '@syncfusion/ej2-data';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { scheduleData } from './datasource.js';

export default {
    name: "App",
    components: {
        "ejs-checkbox": CheckBoxComponent,
        "ejs-schedule": ScheduleComponent
    },
    data() {
        return {
            height: '525px',
            width: '100%',
            eventSettings: {
                dataSource: scheduleData
            },
            selectedDate: new Date(2018, 1, 15),
        }
    },
    methods: {
        onEventRendered: function (args) {
            switch (args.data.EventType) {
                case 'Requested':
                    args.element.style.backgroundColor = '#F57F17';
                    break;
                case 'Confirmed':
                    args.element.style.backgroundColor = '#7fa900';
                    break;
                case 'New':
                    args.element.style.backgroundColor = '#8e24aa';
                    break;
            }
        },
        onChange: function (args) {
            let predicate;
            let checkBoxes = [this.$refs.confirmedObj.ej2Instances, this.$refs.requestedObj.ej2Instances, this.$refs.newObj.ej2Instances];
            checkBoxes.forEach((checkBoxObj) => {
                if (checkBoxObj.checked) {
                    if (predicate) {
                        predicate = predicate.or('EventType', 'equal', checkBoxObj.label);
                    } else {
                        predicate = new Predicate('EventType', 'equal', checkBoxObj.label);
                    }
                }
            });
            this.$refs.scheduleObj.ej2Instances.eventSettings.query = new Query().where(predicate);
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

#property td {
    padding: 0 5px;
}
</style>

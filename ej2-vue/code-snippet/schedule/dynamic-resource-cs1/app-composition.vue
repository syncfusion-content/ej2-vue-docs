<template>
    <div>
        <div id='app'>
            <div class='col-lg-3'>
                <table id='property' title='Show / Hide Resource' style='width: 100%;padding-right:25px'>
                    <tbody>
                        <tr style='height: 50px'>
                            <td style='width: 100%'>
                                <ejs-checkbox cssClass='personal' label='My Calender' value='1' :checked='true'
                                    :disabled='true' :change='onChange'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr style='height: 50px'>
                            <td style='width: 100%'>
                                <ejs-checkbox cssClass='company' label='Company' value='2' :checked='false'
                                    :change='onChange'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr style='height: 50px'>
                            <td style='width: 100%'>
                                <ejs-checkbox cssClass='birthday' label='Birthday' value='3' :checked='false'
                                    :change='onChange'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr style='height: 50px'>
                            <td style='width: 100%'>
                                <ejs-checkbox cssClass='holiday' label='Holiday' value='4' :checked='false'
                                    :change='onChange'></ejs-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='container'>
                <ejs-schedule ref='ScheduleObj' width='100%' height='550px' :group='group' :selectedDate='selectedDate'
                    :eventSettings='eventSettings'>
                    <e-resources>
                        <e-resource field='CalendarId' title='Calendars' :dataSource='resourceDataSource'
                            :allowMultiple='allowMultiple' name='Calendars' textField='CalendarText'
                            idField='CalendarId' colorField='CalendarColor'>
                        </e-resource>
                    </e-resources>
                    <e-views>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { holidayData, birthdayData, companyData, personalData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourceDirective as EResource, ResourcesDirective as EResources, Month, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';

const ScheduleObj = ref(null);
const calendarCollections = [
    { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
    { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
    { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
    { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
];

const selectedDate = new Date(2018, 3, 1);
const group = { resources: ['Calendars'] };
const resourceDataSource = [calendarCollections[0]];
const allowMultiple = true;
const eventSettings = { dataSource: generateCalendarData() };

provide('schedule', [Month, TimelineMonth]);
const generateCalendarData = function () {
    var collections = [];
    var dataCollections = [personalData, companyData, birthdayData, holidayData];
    for (var i = 0; i < dataCollections.length; i++) {
        collections = collections.concat(dataCollections[i]);
    }
    return collections;
}
const onChange = function (args) {
    let schedule = ScheduleObj.value;
    let value = parseInt((args.event.currentTarget).querySelector('input').getAttribute('value'), 10);
    let resourceData = calendarCollections.filter(function (calendar) { return calendar.CalendarId === value; });
    if (args.checked) {
        schedule.addResource(resourceData[0], 'Calendars', value - 1);
        schedule.dataBind();
    } else {
        schedule.removeResource(value, 'Calendars');
        schedule.dataBind();
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";

#app {
    display: flex;
}
</style>

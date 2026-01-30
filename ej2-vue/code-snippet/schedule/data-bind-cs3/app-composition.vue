<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :readOnly='readOnly'>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';

class CustomAdaptor extends ODataV4Adaptor {
    processResponse() {
        let i = 0;
        // calling base class processResponse function
        let original = super.processResponse.apply(this, arguments);
        // adding employee id
        original.forEach((item) => item['EventID'] = ++i);
        return original;
    }
}
let dataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new CustomAdaptor(),
    crossDomain: true
});

const selectedDate = new Date(1996, 6, 9);
const readOnly = true;
const eventSettings = {
    dataSource: dataManager,
    fields: {
        id: 'Id',
        subject: { name: 'ShipName' },
        location: { name: 'ShipCountry' },
        description: { name: 'ShipAddress' },
        startTime: { name: 'OrderDate' },
        endTime: { name: 'RequiredDate' },
        recurrenceRule: { name: 'ShipRegion' }
    }
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);
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
</style>

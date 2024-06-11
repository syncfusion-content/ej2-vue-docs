<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :readOnly='readOnly'></ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';

const dataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataV4Adaptor(),
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>

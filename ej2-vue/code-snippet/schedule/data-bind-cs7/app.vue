<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :readOnly='readOnly'></ejs-schedule>
        </div>
    </div>
</template>
<script>
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

let dataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataV4Adaptor(),
    crossDomain: true
});

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent
    },
    data() {
        return {
            selectedDate: new Date(1996, 6, 9),
            readOnly: true,
            eventSettings: {
                query: new Query(),
                includeFiltersInQuery: true,
                dataSource: dataManager, fields: {
                    id: 'Id',
                    subject: { name: 'ShipName' },
                    location: { name: 'ShipCountry' },
                    description: { name: 'ShipAddress' },
                    startTime: { name: 'OrderDate' },
                    endTime: { name: 'RequiredDate' },
                    recurrenceRule: { name: 'ShipRegion' }
                }
            }
        };
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
}
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

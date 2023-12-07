

<template>
    <div id='app'>
      <div id='container'>
        <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :readOnly='readOnly'></ejs-schedule>
      </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    let dataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
        adaptor: new ODataV4Adaptor(),
        crossDomain: true
    });
    let dataQuery = new Query().addParams('readOnly', 'true');
    export default {
        data() {
            return {
                selectedDate: new Date(1996, 6, 9),
                readOnly: true,
                eventSettings: { dataSource: dataManager, query: dataQuery,
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
            };
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    }
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>



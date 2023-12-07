
    import Vue from 'vue';
    import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    let dataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
        adaptor: new ODataV4Adaptor(),
        crossDomain: true
    });
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
      <div id='container'>
        <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :readOnly='readOnly'></ejs-schedule>
      </div>
    </div>
`,

        data() {
            return {
                selectedDate: new Date(1996, 6, 9),
                readOnly: true,
                eventSettings: { dataSource: dataManager,
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
    
});
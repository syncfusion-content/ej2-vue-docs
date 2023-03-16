
    import Vue from 'vue';
    import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    let dataManager = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
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
                selectedDate: new Date(2020, 9, 20),
                readOnly: true,
                eventSettings: { dataSource: dataManager }
            };
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    
});
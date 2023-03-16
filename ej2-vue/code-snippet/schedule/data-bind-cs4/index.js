
    import Vue from 'vue';
    import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    let dataManager = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new ODataV4Adaptor(),
        crossDomain: true
    });
    let dataQuery = new Query().from('Events').addParams('readOnly', 'true');
    
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
                selectedDate: new Date(2017, 5, 11),
                readOnly: true,
                eventSettings: { dataSource: dataManager, query: dataQuery }
            };
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    
});
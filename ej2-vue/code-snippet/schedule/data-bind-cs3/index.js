
    import Vue from 'vue';
    import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    class CustomAdaptor extends ODataV4Adaptor {
        processResponse() {
            let i = 0;
            // calling base class processResponse function
            let original = super.processResponse.apply(this, arguments);
            // adding employee id
            original.forEach((item) => item['EventID'] = ++i);
            return  original;
        }
    }
    let dataManager = new DataManager({
       url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
       adaptor: new CustomAdaptor(),
       crossDomain: true
    });
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
      <div id='container'>
        <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :readOnly='readOnly'></ejs-schedule>
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
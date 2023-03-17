
    import Vue from 'vue';
    import { DataManager } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    let dataManager = new DataManager({
        url: 'http://some.com/invalidUrl'
    });
    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
      <div id='container'>
        <ejs-schedule ref='scheduleObj' height='530px' :selectedDate='selectedDate' :eventSettings='eventSettings' :readOnly='readOnly' :actionFailure='onActionFailure'></ejs-schedule>
      </div>
    </div>
`,

        data() {
            return {
                selectedDate: new Date(2017, 5, 11),
                readOnly: true,
                eventSettings: { dataSource: dataManager }
            };
        },
        methods: {
            onActionFailure: function () {
                let span = document.createElement('span');
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                scheduleObj.element.parentNode.insertBefore(span, scheduleObj.element);
                span.style.color = '#FF0000'
                span.innerHTML = 'Server exception: 404 Not found';
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    
});
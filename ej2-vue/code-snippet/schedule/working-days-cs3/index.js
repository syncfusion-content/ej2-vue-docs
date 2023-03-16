
    import Vue from 'vue';
    import { roomData } from './datasource.js';
    import { SchedulePlugin, TimelineViews, TimelineMonth, Agenda
    } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings' :rowAutoHeight='rowAutoHeight' :group='group'>
                    <e-views>
                        <e-view option='TimelineDay'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineWorkWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='RoomId' title='Room Type' name='MeetingRoom' allowMultiple=true :dataSource='meetingRoomDataSource' textField='text' idField='id' colorField='color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 7, 1),
                currentView: 'TimelineWeek',
                rowAutoHeight: true,
                eventSettings: {
                    dataSource: roomData,
                    fields: {
                        id: 'Id',
                        subject: { name: 'Subject', title: 'Summary' },
                        location: { name: 'Location', title: 'Location' },
                        description: { name: 'Description', title: 'Comments' },
                        startTime: { name: 'StartTime', title: 'From' },
                        endTime: { name: 'EndTime', title: 'To' }
                    }
                },
                group: {
                    enableCompactView: false,
                    resources: ['MeetingRoom']
                },
                meetingRoomDataSource: [
                    { text: 'Room A', id: 1, color: '#98AFC7' },
                    { text: 'Room B', id: 2, color: '#99c68e' },
                    { text: 'Room C', id: 3, color: '#C2B280' },
                    { text: 'Room D', id: 4, color: '#3090C7' },
                    { text: 'Room E', id: 5, color: '#95b9' },
                    { text: 'Room F', id: 6, color: '#95b9c7' },
                    { text: 'Room G', id: 7, color: '#deb887' },
                    { text: 'Room H', id: 8, color: '#3090C7' },
                    { text: 'Room I', id: 9, color: '#98AFC7' },
                    { text: 'Room J', id: 10, color: '#778899' }
                ]
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth, Agenda]
        }
    
});
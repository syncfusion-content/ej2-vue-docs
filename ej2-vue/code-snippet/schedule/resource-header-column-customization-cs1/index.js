
import Vue from 'vue';
import { roomData} from './datasource.js';
import { SchedulePlugin, TimelineViews, TimelineMonth} from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);
   
new Vue({
	el: '#app',
	template: `
        <div id='app'>
            <div id='container'>
                <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate' :group='group' :resourceHeaderTemplate="'resourceHeaderTemplate'" :renderCell='onRenderCell'>
                    <e-views>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                    <template v-slot:resourceHeaderTemplate="{data}">
                        <div class='template-wrap'>
                            <div class="room-name">{{data.resourceData.text}}</div>
                            <div class="room-type">{{data.resourceData.type}}</div>
                            <div class="room-capacity">{{data.resourceData.capacity}}</div>
                        </div>
                    </template>
                    <e-resources>
                        <e-resource field='RoomId' title='RoomType' name='MeetingRoom'  :dataSource='ownerDataSource'
                        textField='text' idField='id' colorField='color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 7, 1),
                group: {
                    resources: ['MeetingRoom']
                },
                ownerDataSource: [
                    { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
                    { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
                    { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
                    { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
                    { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
                    { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
                    { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
                    { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
                    { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
                    { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }  
                ],
                eventSettings: { dataSource: roomData },
            }
        },
        methods: {
            onRenderCell: function(args){
                if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
                    let target = args.element.querySelector('.e-resource-text');
                    target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
                }
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth]
        }
    
});
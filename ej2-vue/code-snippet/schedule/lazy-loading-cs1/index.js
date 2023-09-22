import Vue from 'vue';
import { generateResourceData } from './datasource.js';
import { SchedulePlugin, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
Vue.use(SchedulePlugin);

let dataManager = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/VirtualEventData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' ref='ScheduleObj' width='100%' height='550px' :selectedDate='selectedDate' readonly='true' :eventSettings='eventSettings' :group='group'>
                <e-views>
                    <e-view option='TimelineMonth' :enableLazyLoading='enableLazyLoad' isSelected="true"></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='ResourceId' title='Resource' name='Resources' :dataSource='resourceData' textField='Text' idField='Id' colorField='Color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>`,

    data: function () {
        return {
            selectedDate: new Date(2023, 3, 1),
            enableLazyLoad: true,
            group: {
                resources: ['Resources']
            },
            resourceData: generateResourceData(1, 1000, 'Resource'),
            eventSettings: { dataSource: dataManager }
        }
    },
    provide: {
        schedule: [TimelineMonth]
    }
});
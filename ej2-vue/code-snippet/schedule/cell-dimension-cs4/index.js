
    import Vue from 'vue';
    import { createElement } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
    import { scheduleData } from './datasource.js';
    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :selectedDate='selectedDate' :currentView='currentView' :renderCell='onRenderCell'>
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='Month'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 14),
                eventSettings: { dataSource: scheduleData },
                currentView: 'Month'
            }
        },
        methods: {
            onRenderCell: (args) => {
                if (args.elementType == 'workCells' || args.elementType == 'monthCells') {
                    let weekEnds = [0, 6];
                    if (weekEnds.indexOf((args.date).getDay()) >= 0) {
                        let ele = createElement('div', {
                            innerHTML: "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />",
                            className: 'templatewrap'
                        });
                        (args.element).appendChild(ele);
                    }
                }
            }
        },
        provide: {
            schedule: [Day, Week, Month]
        }
    
});
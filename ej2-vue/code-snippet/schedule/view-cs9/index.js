
    import Vue from 'vue';
    import { Internationalization } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Agenda } from '@syncfusion/ej2-vue-schedule';
    import { eventData } from './datasource.js';

    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var agendaTemplateVue = Vue.component('agendaTemplate', {
        template: `<div class="template-wrap"><div class="subject">{{data.Subject}}</div><div class="time">{{getTimeString(data.StartTime)}} - {{getTimeString(data.EndTime)}}</div></div>`,
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getTimeString: function(value) {
                return instance.formatDate(value, { skeleton: "hm"});
            }
        }
    });

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' height='350px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='Agenda' :eventTemplate='eventTemplate' allowVirtualScrolling=true></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                eventTemplate: function(e){
                    return {
                        template: agendaTemplateVue
                    }
                },
                eventSettings: { dataSource: eventData}
            }
        },
        provide: {
            schedule: [Agenda]
        }
    
});
<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :currentView='currentView'
                :selectedDate='selectedDate' :group='group'>
                <e-views>
                    <e-view option='Week'></e-view>
                    <e-view option='Month'></e-view>
                    <e-view option='Agenda'></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='ProjectId' title='Choose Project' name='Projects'
                        :dataSource='projectResourceDataSource' textField='text' idField='id' colorField='color'>
                    </e-resource>
                    <e-resource field='CategoryId' title='Category' name='Categories'
                        :dataSource='categoryResourceDataSource' :allowMultiple='allowMultiple' textField='text'
                        idField='id' colorField='color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { resourceProjectData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Week, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective,
        "e-resources": ResourcesDirective,
        "e-resource": ResourceDirective
    },
    data() {
        return {
            currentView: 'Week',
            selectedDate: new Date(2018, 3, 4),
            group: {
                byGroupID: false,
                resources: ['Projects', 'Categories']
            },
            projectResourceDataSource: [
                { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
                { text: 'PROJECT 2', id: 2, color: '#56ca85' },
                { text: 'PROJECT 3', id: 3, color: '#df5286' }
            ],
            categoryResourceDataSource: [
                { text: 'Development', id: 1, color: '#df5286' },
                { text: 'Testing', id: 2, color: '#7fa900' }
            ],
            eventSettings: { dataSource: resourceProjectData },
            allowMultiple: true
        }
    },
    provide: {
        schedule: [Week, Month, Agenda]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css";
</style>

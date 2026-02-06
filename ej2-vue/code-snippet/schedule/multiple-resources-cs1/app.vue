<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate'
                    :currentView='currentView'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                        <e-view option='Agenda'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
                            :dataSource='resourceDataSource' textField='OwnerText' idField='Id' colorField='OwnerColor'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script>
import { resourceData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

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
            width: '100%',
            height: '550px',
            currentView: 'Week',
            views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
            selectedDate: new Date(2018, 3, 1),
            allowMultiple: true,
            resourceDataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
            ],
            eventSettings: { dataSource: resourceData }
        }
    },
    provide: {
        schedule: [Week, Month, Agenda, TimelineViews, TimelineMonth]
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

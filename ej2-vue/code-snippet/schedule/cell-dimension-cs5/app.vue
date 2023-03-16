

<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' width='100%' height='550px' :cellHeaderTemplate='cellHeaderTemplate' cssClass='schedule-cell-header-template'>
                <e-views>
                    <e-view option='Month'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Internationalization } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Month } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var cellHeaderTemplateVue = Vue.component("cellHeaderTemplate", {
        template: `<div v-html=getDateHeaderText(data.date)></div>`,
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getDateHeaderText: function(date) {
                return instance.formatDate(date, { skeleton: "Ed" });
            }
        }
    });

    export default {
        data () {
            return {
                cellHeaderTemplate: function (e) {
                    return {
                        template: cellHeaderTemplateVue
                    };
                },
            }
        },
        provide: {
            schedule: [Month]
        }
    }
</script>



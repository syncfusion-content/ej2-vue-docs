
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { extend, closest, isNullOrUndefined, Browser, remove, removeClass } from '@syncfusion/ej2-base';
    import { DataManager, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
    import { ContextMenuPlugin } from '@syncfusion/ej2-vue-navigations';
    Vue.use(SchedulePlugin);
    Vue.use(ContextMenuPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id='app'>
        <div id='container'>
            <div class='content-wrapper'>
                <ejs-schedule id='Schedule' ref='scheduleObj' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :allowClipboard=true :showQuickInfo= "false"></ejs-schedule>
            </div>
        <div>
        <div>
                <ejs-contextmenu id='contextmenu' ref='menuObj' cssClass='schedule-context-menu' target='.e-schedule' :items='menuItems' :beforeOpen='onContextMenuBeforeOpen' :select='onMenuItemSelect' ></ejs-contextmenu>
        </div>
    </div>
`,

        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2024, 1, 15),
                menuItems: [
                    { text: 'Cut Event', iconCss: 'e-icons e-cut', id: 'Cut' },
                    { text: 'Copy Event', iconCss: 'e-icons e-copy', id: 'Copy' },
                    { text: 'Paste', iconCss: 'e-icons e-paste', id: 'Paste' }
                  ],
                  selectedTarget: null,
                  targetElement: null,
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        },
        methods: {
            onContextMenuBeforeOpen: function(args) {
                let newEventElement = document.querySelector('.e-new-event');
                if (newEventElement) {
                  remove(newEventElement);
                }
                this.$refs.scheduleObj.closeQuickInfoPopup();
                this.targetElement = args.event.target;
                if (closest(this.targetElement, '.e-contextmenu')) {
                  return;
                }
                this.selectedTarget = closest(this.targetElement, '.e-appointment,.e-work-cells,' +
                  '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
                if (isNullOrUndefined(this.selectedTarget)) {
                  args.cancel = true;
                  return;
                }
                if (this.selectedTarget.classList.contains('e-appointment')) {
                  this.$refs.menuObj.showItems(['Cut', 'Copy'], true);
                  this.$refs.menuObj.hideItems(['Paste'], true);
                } else {
                  this.$refs.menuObj.showItems(['Paste'], true);
                  this.$refs.menuObj.hideItems(['Cut', 'Copy'], true);
                }
            },
            onMenuItemSelect: function(args) {
                let selectedMenuItem = args.item.id;
                switch (selectedMenuItem) {
                  case 'Cut':
                    this.$refs.scheduleObj.cut([this.selectedTarget]);
                    break;
                  case 'Copy':
                    this.$refs.scheduleObj.copy([this.selectedTarget]);
                    break;
                  case 'Paste':
                    this.$refs.scheduleObj.paste(this.targetElement);
                    break;
                }
            }
        }
    
});
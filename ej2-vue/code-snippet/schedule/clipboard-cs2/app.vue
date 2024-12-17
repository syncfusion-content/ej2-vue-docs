<template>
    <div id='app'>
        <div id='container'>
            <div class='content-wrapper'>
                <ejs-schedule id='Schedule' ref='scheduleObj' height='550px' :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :allowClipboard=true :showQuickInfo="false"></ejs-schedule>
            </div>
            <div>
                <ejs-contextmenu id="ScheduleContextMenu" ref="menuObj" :target="'.e-schedule'" :items="menuItems"
                    :beforeOpen="onContextMenuBeforeOpen" :select="onMenuItemSelect"
                    :cssClass="schedule-context-menu"></ejs-contextmenu>
            </div>
        </div>
    </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { extend, closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { ContextMenuComponent } from '@syncfusion/ej2-vue-navigations';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "ejs-contextmenu": ContextMenuComponent
    },
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
        onContextMenuBeforeOpen: function (args) {
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
        onMenuItemSelect: function (args) {
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
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

.schedule-context-menu .e-menu-item .new::before {
    content: '\e7f9';
}

.schedule-context-menu .e-menu-item .edit::before {
    content: '\ea9a';
}

.schedule-context-menu .e-menu-item .recurrence::before {
    content: '\e308';
    font-weight: bold;
}

.schedule-context-menu .e-menu-item .today::before {
    content: '\e322';
}

.schedule-context-menu .e-menu-item .delete::before {
    content: '\e94a';
}

.e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {
    font-size: 14px;
}

.schedule-context-menu ul .e-menu-item .e-menu-icon {
    font-size: 12px;
}

.schedule-context-menu .e-menu-parent.e-ul .e-menu-item {
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif", "-apple-system", "BlinkMacSystemFont";
}
</style>

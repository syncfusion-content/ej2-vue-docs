<template>
    <div id='app'>
        <div id='container'>
            <div class='content-wrapper'>
                <ejs-schedule id='Schedule' ref='scheduleObj' height='550px' :selectedDate='selectedDate'
                    :eventSettings='eventSettings'></ejs-schedule>
            </div>
            <div>
                <ejs-contextmenu id='contextmenu' ref='menuObj' cssClass='schedule-context-menu' target='.e-schedule'
                    :items='menuItems' :beforeOpen='onContextMenuBeforeOpen'
                    :select='onMenuItemSelect'></ejs-contextmenu>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { scheduleData } from './datasource.js';
import { extend, closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
import { ContextMenuComponent as EjsContextmenu } from '@syncfusion/ej2-vue-navigations';

const scheduleObj = ref(null);
const menuObj = ref(null);
const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const selectedDate = new Date(2018, 1, 15);
const menuItems = [
    {
        text: 'New Event',
        iconCss: 'e-icons new',
        id: 'Add'
    }, {
        text: 'New Recurring Event',
        iconCss: 'e-icons recurrence',
        id: 'AddRecurrence'
    }, {
        text: 'Today',
        iconCss: 'e-icons today',
        id: 'Today'
    }, {
        text: 'Edit Event',
        iconCss: 'e-icons edit',
        id: 'Save'
    }, {
        text: 'Edit Event',
        id: 'EditRecurrenceEvent',
        iconCss: 'e-icons edit',
        items: [{
            text: 'Edit Occurrence',
            id: 'EditOccurrence'
        }, {
            text: 'Edit Series',
            id: 'EditSeries'
        }]
    }, {
        text: 'Delete Event',
        iconCss: 'e-icons delete',
        id: 'Delete'
    }, {
        text: 'Delete Event',
        id: 'DeleteRecurrenceEvent',
        iconCss: 'e-icons delete',
        items: [{
            text: 'Delete Occurrence',
            id: 'DeleteOccurrence'
        }, {
            text: 'Delete Series',
            id: 'DeleteSeries'
        }]
    }
];
const selectedTarget = null;

const onContextMenuBeforeOpen = function (args) {
    let schedule = scheduleObj.value;
    let newEventElement = schedule.querySelector('.e-new-event');
    if (newEventElement) {
        remove(newEventElement);
        removeClass([schedule.querySelector('.e-selected-cell')], 'e-selected-cell');
    }
    schedule.closeQuickInfoPopup();
    let targetElement = args.event.target;
    if (closest(targetElement, '.e-contextmenu')) {
        return;
    }
    let menu = menuObj.value;
    selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,' +
        '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
    if (isNullOrUndefined(selectedTarget)) {
        args.cancel = true;
        return;
    }
    if (selectedTarget.classList.contains('e-appointment')) {
        let eventObj = schedule.getEventDetails(selectedTarget);
        if (eventObj.RecurrenceRule) {
            menu.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
            menu.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
        } else {
            menu.showItems(['Save', 'Delete'], true);
            menu.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
        }
        return;
    }
    menu.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
    menu.showItems(['Add', 'AddRecurrence', 'Today'], true);
}
const onMenuItemSelect = function (args) {
    let schedule = scheduleObj.value.ej2Instances.ej2Instances;
    let selectedMenuItem = args.item.id;
    let eventObj;
    if (selectedTarget.classList.contains('e-appointment')) {
        eventObj = schedule.getEventDetails(selectedTarget);
    }
    switch (selectedMenuItem) {
        case 'Today':
            schedule.selectedDate = new Date();
            break;
        case 'Add':
        case 'AddRecurrence':
            let selectedCells = schedule.getSelectedElements();
            let activeCellsData = schedule.getCellDetails(selectedCells.length > 0 ? selectedCells : selectedTarget);
            if (selectedMenuItem === 'Add') {
                schedule.openEditor(activeCellsData, 'Add');
            } else {
                schedule.openEditor(activeCellsData, 'Add', null, 1);
            }
            break;
        case 'Save':
        case 'EditOccurrence':
        case 'EditSeries':
            if (selectedMenuItem === 'EditSeries') {
                eventObj = new DataManager(schedule.eventsData).
                    executeLocal(new Query().where(schedule.eventFields.id, 'equal', eventObj[schedule.eventFields.recurrenceID]))[0];
            }
            schedule.openEditor(eventObj, selectedMenuItem);
            break;
        case 'Delete':
            schedule.deleteEvent(eventObj);
            break;
        case 'DeleteOccurrence':
        case 'DeleteSeries':
            schedule.deleteEvent(eventObj, selectedMenuItem);
            break;
    }
}
provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

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

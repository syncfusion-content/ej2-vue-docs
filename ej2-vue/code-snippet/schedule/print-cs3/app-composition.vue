<template>
    <div>
        <div id="app">
            <div id="container">
                <ejs-schedule
                    ref="ScheduleObj"
                    width="100%"
                    height="550px"
                    :selectedDate="selectedDate"
                    :eventSettings="eventSettings"
                    :views="views"
                    :actionBegin="onActionBegin"
                    :beforePrint="onBeforePrint"
                >
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
    ScheduleComponent as EjsSchedule,
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Print,
} from "@syncfusion/ej2-vue-schedule";
import { scheduleData } from './datasource.js';
import { ItemModel } from "@syncfusion/ej2-navigations";

provide("schedule", [Day, Week, WorkWeek, Month, Agenda, Print]);

const ScheduleObj = ref(null);
const selectedDate = ref(new Date());
const { department, userRole } = getCurrentUserInfo();

const eventSettings = {
    dataSource: scheduleData
};

const views = ["Day", "Week", "WorkWeek", "Month"];

const onActionBegin = (args) => {
    if (args.requestType === "toolbarItemRendering") {
        let printItem = {
            align: "Right",
            showTextOn: "Both",
            prefixIcon: "e-icon-schedule-print",
            text: "Print",
            cssClass: "e-schedule-print",
            click: onPrintIconClick,
        };
        args.items.push(printItem);
    }
};

const onBeforePrint = (args) => {
    const headerElement = document.createElement("div");
    headerElement.innerHTML = `
        <h1>${department} Department Schedule</h1>
        <p>Printed by: ${userRole}</p>
        <p>Date: ${new Date().toLocaleString()}</p>
    `;
    headerElement.style.backgroundColor = getDepartmentColor(department);
    headerElement.style.color = "white";
    headerElement.style.padding = "10px";
    args.printElement.insertBefore(headerElement, args.printElement.firstChild);

    // Highlight high-priority events
    const highPriorityEvents = args.printElement.querySelectorAll(
        ".e-appointment.high-priority"
    );
    highPriorityEvents.forEach((event) => {
        event.style.border = "2px solid red";
    });

    // Event Summary
    const events = ScheduleObj.value.getEvents();
    const summaryElement = document.createElement("div");
    summaryElement.innerHTML = `
        <p>Total Events: ${events.length}</p>
        <p>High Priority Events: ${
            events.filter((e) => e.priority === "high").length
        }</p>
    `;
    args.printElement.appendChild(summaryElement);

    // Manager Confidential Note
    if (userRole === "Manager") {
        const managerNote = document.createElement("div");
        managerNote.textContent = "Confidential - For managerial use only";
        managerNote.style.color = "red";
        args.printElement.appendChild(managerNote);
    }
};

const onPrintIconClick = () => {
    ScheduleObj.value.print();
};

function getDepartmentColor(dept) {
    const colors = {
        Sales: "#4CAF50",
        Marketing: "#2196F3",
        Engineering: "#FF9800",
        HR: "#9C27B0",
    };
    return colors[dept] || "#607D8B";
}

function getCurrentUserInfo() {
    return { department: "Sales", userRole: "Manager" };
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-schedule/styles/material.css";

.e-schedule .e-schedule-toolbar .e-icon-schedule-print::before {
    content: "\e813";
}
</style>

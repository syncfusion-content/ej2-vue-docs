---
layout: post
title: Time line in Vue Gantt component | Syncfusion
description: Learn here all about Time line in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Time line 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Time line in Vue Gantt component

In the Gantt component, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour – Minute
* Day – Hour
* Week – Day
* Month – Week
* Year – Month

Timescale mode in the Gantt component can be defined using the [`timelineViewMode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineViewMode/) property, and you can define a timescale mode for the top tier and bottom tier using the [`topTier.unit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#unit) and [`bottomTier.unit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs1" %}

### Month timeline mode

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs2" %}

### Year timeline mode

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs3" %}

### Day timeline mode

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs4" %}

### Hour timeline mode

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs5" %}

## Week start day customization

In the Gantt component, you can customize the week start day using the [`weekStartDay`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#weekstartday) is set to `0`, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs6" %}

## Customize automatic timescale update action

In the Gantt component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#updatetimescaleview) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/timeline-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs7" %}s

## Timeline cells tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#showtooltip) property. The default value of this property is `true`. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/tooltip-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs2" %}

## Timeline template

In the Gantt component, you can customize timeline cells using the [timelineTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt/#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

* `date`: Defines the date of the timeline cells.
* `value`: Defines the formatted date value that will be displayed in the timeline cells.
* `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :treeColumnIndex="1"
            :holidays="holidays" :labelSettings="labelSettings" :splitterSettings="splitterSettings" :height="height"
            :columns="columns" :timelineSettings="timelineSettings" :timelineTemplate="'timelineTemplates'">
            <template v-slot:timlelineTemplate="{ data }">
                <div v-if="data.tier == 'topTier'" class="e-header-cell-label e-gantt-top-cell-text"
                    style="width:100%;background-color: #FBF9F1 ;  font-weight: bold;height: 100%;display: flex; justify-content: center ; align-items: center;   "
                    title={{data.date}}>
                    <div> {{ value }}</div>
                    <div style="width:20px; height: 20px; line-height: normal; padding-left: 10px; ">
                        <img :style="{ width: '100%', height: '100%' }" :src="imagedate()">
                    </div>
                </div>
                <div v-else-if="data.tier === 'bottomTier'" class="e-header-cell-label e-gantt-top-cell-text" :style="{
                    width: '100%',backgroundColor: bgColor(data.value, data.date),textAlign: 'center',height: '100%',
                    display: 'flex',alignItems: 'center',fontWeight: 'bold',justifyContent: 'center'}" title={{data.date}}>
                    {{ holidayValue(data.value, data.date) }}
                </div>
            </template>
        </ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const timelineSettings = {
    topTier: {
        unit: 'Week',
        format: 'dd/MM/yyyy'
    },
    bottomTier: {
        unit: 'Day',
        count: 1
    },
    timelineUnitSize: 100
};
const splitterSettings = {
    columnIndex: 1
};
const holidays = [{
    from: "04/04/2019",
    to: "04/05/2019",
    label: " Public holidays",
    cssClass: "e-custom-holiday"

},
{
    from: "04/12/2019",
    to: "04/12/2019",
    label: " Public holiday",
    cssClass: "e-custom-holiday"

}];
const labelSettings = {
    leftLabel: 'TaskName',
    taskLabel: 'Progress'
};
const columns = [
    { field: 'TaskID', headerText: 'Task ID', visible: false },
    { field: 'TaskName', headerText: 'Task Name', width: 300 },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
];
const imagedate = () => {
    // Define the logic for image source
    const getImage = Math.floor(Math.random() * 5) + 1;
    return "./images/" + getImage + ".svg";
}
const bgColor = (value, date) => {
    // Define the logic to determine background color
    if (value === "S") {
        return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < this.$refs.gantt.ej2Instances.holidays.length; i++) {
        const holiday = this.$refs.gantt.ej2Instances.holidays[i];
        const fromDate = new Date(holiday.from);
        const toDate = new Date(holiday.to)
        if (parsedDate >= fromDate && parsedDate <= toDate) {
            return "#97E7E1";
        }
    }
    return "#E0FBE2"
}
const holidayValue = (value, date) => {
    // Define the logic to determine holiday value
    const parsedDate = new Date(date);
    for (let i = 0; i < this.$refs.gantt.ej2Instances.holidays.length; i++) {
        const holiday = this.$refs.gantt.ej2Instances.holidays[i];
        const fromDate = new Date(holiday.from);
        const toDate = new Date(holiday.to)
        if (parsedDate >= fromDate && parsedDate <= toDate) {
            const options = { weekday: 'short' };
            return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
        }
    }
    return value
}
</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
    <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :treeColumnIndex="1"
            :holidays="holidays" :labelSettings="labelSettings" :splitterSettings="splitterSettings" :height="height"
            :columns="columns" :timelineSettings="timelineSettings" :timelineTemplate="'timelineTemplates'">
            <template v-slot:timelineTemplates="{ data }">
                <div v-if="data.tier == 'topTier'" class="e-header-cell-label e-gantt-top-cell-text"
                    style="width:100%;background-color: #FBF9F1 ;  font-weight: bold;height: 100%;display: flex; justify-content: center ; align-items: center;   "
                    title={{data.date}}>
                    <div> {{data.value }}</div>
                    <div style="width:20px; height: 20px; line-height: normal; padding-left: 10px; ">
                        <img :style="{ width: '100%', height: '100%' }" :src="imagedate()">
                    </div>
                </div>
                <div v-else-if="data.tier === 'bottomTier'" class="e-header-cell-label e-gantt-top-cell-text" :style="{
                    width: '100%',backgroundColor: bgColor(data.value, data.date),textAlign: 'center',height: '100%',
                    display: 'flex',alignItems: 'center',fontWeight: 'bold',justifyContent: 'center'}" title={{data.date}}>
                    {{ holidayValue(data.value, data.date) }}
                </div>
            </template>
        </ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, DayMarkers, Selection } from "@syncfusion/ej2-vue-gantt"; 
import { editingData } from './data-source.js';
export default {
    name: "App",
    components: {
        "ejs-gantt": GanttComponent
    },
    data: function () {
        return {
            data: editingData,
            allowSorting: true,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            splitterSettings: {
                columnIndex: 1
            },
            treeColumnIndex: 1,
            allowSelection: true,
            gridLines: "Both",
            showColumnMenu: false,
            highlightWeekends: true,
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'dd/MM/yyyy'
                },
                bottomTier: {
                    unit: 'Day',
                    count: 1
                },
                timelineUnitSize: 100
            },
            holidays: [{
                from: "04/04/2019",
                to: "04/05/2019",
                label: " Public holidays",
                cssClass: "e-custom-holiday"

            },
            {
                from: "04/12/2019",
                to: "04/12/2019",
                label: " Public holiday",
                cssClass: "e-custom-holiday"

            }],
            columns: [
                { field: 'TaskID', headerText: 'Task ID', visible: false },
                { field: 'TaskName', headerText: 'Task Name', width: 300 },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'Progress', headerText: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                taskLabel: 'Progress'
            },
            height: '550px',
            allowUnscheduledTasks: true,
        };

    },
    provide: {
        gantt: [DayMarkers, Selection]
    },
    methods: {
        imagedate() {
            // Define the logic for image source
            const getImage = Math.floor(Math.random() * 5) + 1;
            return "./images/" + getImage + ".svg";
        },
        bgColor(value, date) {
            // Define the logic to determine background color
            if (value === "S") {
                return "#7BD3EA"
            }
            const parsedDate = new Date(date);
            for (let i = 0; i < this.$refs.gantt.ej2Instances.holidays.length; i++) {
                const holiday = this.$refs.gantt.ej2Instances.holidays[i];
                const fromDate = new Date(holiday.from);
                const toDate = new Date(holiday.to)
                if (parsedDate >= fromDate && parsedDate <= toDate) {
                    return "#97E7E1";
                }
            }
            return "#E0FBE2"
        },
        holidayValue(value, date) {
            // Define the logic to determine holiday value
            const parsedDate = new Date(date);
            for (let i = 0; i < this.$refs.gantt.ej2Instances.holidays.length; i++) {
                const holiday = this.$refs.gantt.ej2Instances.holidays[i];
                const fromDate = new Date(holiday.from);
                const toDate = new Date(holiday.to)
                if (parsedDate >= fromDate && parsedDate <= toDate) {
                    const options = { weekday: 'short' };
                    return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
                }
            }
            return value
        }
    }
};
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs8" %}
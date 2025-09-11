---
layout: post
title: Baseline in Vue Gantt component | Syncfusion
description: Learn here all about Baseline in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Baseline 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Baseline in Vue Gantt component

The baseline feature in the Gantt component enables comparison between original planned schedules and actual task execution timelines. This visualization provides clear insights into schedule deviations, helping assess project performance and identify areas requiring attention. Baseline functionality displays both the original planned timeline and current progress side-by-side for comprehensive project tracking.

Before implementing baseline functionality, ensure the data source includes baseline date fields and configure the [taskFields](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/) object with appropriate field mappings. The baseline feature requires proper field mapping to display planned versus actual timelines effectively.

**Baseline fields**:
- [baselineStartDate](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#baselinestartdate): Represents the originally planned start date of a task. This value is used to compare against the actual start date to identify schedule deviations.
- [baselineEndDate](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#baselineenddate): Represents the originally planned end date of a task. It is used to compare against the actual end date.
- [baselineDuration](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#baselineduration): Represents the total planned duration of the task. This value is critical for baseline visualization. To represent a baseline milestone, this property must be explicitly set to `0`. Setting `baselineStartDate` and `baselineEndDate` to the same value without setting `baselineDuration` to `0` will result in a one-day baseline task, not a milestone.

## Implement baseline

To enable baseline, configure the Gantt component by setting [renderBaseline](https://ej2.syncfusion.com/vue/documentation/api/gantt/#renderbaseline) to `true`, mapping `baselineStartDate`, `baselineEndDate`, and optionally `baselineDuration` in `taskFields`. To customize appearance set the [baselineColor](https://ej2.syncfusion.com/vue/documentation/api/gantt/#baselinecolor) property or the .`e-baseline-bar` CSS class for advanced styling.

```typescript
export let projectData = [
    {
        TaskID: 1,
        TaskName: 'Project Planning',
        StartDate: new Date('02/04/2019'),
        EndDate: new Date('02/08/2019'),
        baselineStartDate: new Date('02/02/2019'),
        baselineEndDate: new Date('02/06/2019'),
        baselineDuration: '5' // Regular baseline
    },
    {
        TaskID: 2,
        TaskName: 'Milestone Review',
        StartDate: new Date('02/10/2019'),
        EndDate: new Date('02/10/2019'),
        baselineStartDate: new Date('02/09/2019'),
        baselineEndDate: new Date('02/09/2019'),
        baselineDuration: '0' // Milestone baseline
    }
];

const baselineColor = 'rgba(255, 107, 107, 0.8)'; // Semi transparent baseline

```

```css
.e-gantt .e-gantt-chart .e-baseline-bar {
    height: 4px;
    border-radius: 2px;
    opacity: 0.9;
    background-color: #4CAF50; 
}
```

The following example demonstrates complete baseline configuration with proper field mapping:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/baseline-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/baseline-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/baseline-cs1" %}
---
layout: post
title: Getting started with Vue Gantt component | Syncfusion
description:  Checkout and learn about Getting started with Vue Gantt component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Gantt Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Gantt component

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Vue development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/vue/documentation/ai-coding-assistants/overview)

To get start quickly with Vue Gantt Chart, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=S1GbWmVcre0" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Following is the list of dependencies to use the Gantt with all features:

```javascript
|-- @syncfusion/ej2-gantt
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-richtexteditor
    |-- @syncfusion/ej2-treegrid
```

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue gantt component](https://www.syncfusion.com/vue-components/vue-gantt-chart) as an example. Install the `@syncfusion/ej2-vue-gantt` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-gantt --save
```
or

```bash
yarn add @syncfusion/ej2-vue-gantt
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Gantt component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

`Note:` Use above CSS styles in `<style> </style>` tag for rendering all code snippets.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Gantt component:

1\. First, import and register the Gantt component in the `script` section of the **src/App.vue** file. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
export default {
  components: {
    'ejs-gantt': GanttComponent
  }
}
</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";

export default {
name: "App",
components: {
"ejs-gantt':":Gantt':Component
}
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Gantt component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
    <ejs-gantt></ejs-gantt>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Module injection

The Gantt components was segregated into individual feature-wise modules. To use its feature, you need to inject its feature service in the AppModule.
Find the relevant feature modules and descriptions as follows:

* [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editmodule) : Inject this module to use the editing feature.
* [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#filtermodule) : Inject this module to use the filtering feature.
* [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortmodule) : Inject this module to use the sorting feature.
* [`Selection`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#selectionmodule) : Inject this module to use the selection feature.
* [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#toolbar) : Inject this module to use the toolbar items.
* [`DayMarkers`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#daymarkersmodule) : Inject this module to highlight the days.

Now, import the above-mentioned modules from the Gantt package and inject them using `provide`like following code:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt , Edit, Filter, Sort } from "@syncfusion/ej2-vue-gantt";
export default {
  provide('gantt',  [ Edit, Filter, Sort ]);
};
</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { GanttComponent , Edit, Filter, Sort } from "@syncfusion/ej2-vue-gantt";
export default {
  provide: {
    gantt: [ Edit, Filter, Sort ]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Binding Gantt with data

Bind data with the Gantt component by using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#datasource) property. It accepts an array of JavaScript object or the DataManager instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div>
       <ejs-gantt ref='gantt' :dataSource="data"></ejs-gantt>
   </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
const data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
        ]
    },
];
</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
export default {
name: "App",
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ],
        };
  },
};
</script>

{% endhighlight %}
{% endtabs %}

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt control using the [`taskFields`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskfields) property.

 {% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs1" %}

Note : While creating a Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components using [`Direct Scripts`](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts), `camelCased` property (dataSource) names need to specify in the `kebab-cased` (data-source) equivalents.

## Defining timeline

The Gantt has an option to define timeline using [`timelineSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/) property with various options. Using this property we can customize the Gantt timeline.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs2" %}

## Enabling toolbar

The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#toolbar) property is used to add the toolbar items like Add, Remove, Edit, Update, Delete, Expand All,Collapse All in Gantt.

To use toolbar, inject the `Toolbar` module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs3" %}

## Enabling editing

The editing feature enables you to edit the tasks in Gantt component. It can be enabled by using the [`editSettings.allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowtaskbarediting) properties.

To use Editing, inject the [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editmodule) module in the `provide` section.

The following editing options are available to update the tasks in Gantt:

* Cell
* Dialog
* Taskbar
* Connector line

### Cell editing

Modify the task details through cell editing by setting the edit [`mode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#mode) property as `Auto`. To enable edit support [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editmodule) module should be injected in Gantt. If [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editmodule) module is not injected, you cannot do any editing action in Gantt.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs4" %}

`Note:` When the edit mode is set to `Auto`, you can change the cells to editable mode by double-clicking anywhere at the TreeGrid and edit the task details in the edit dialog by double-clicking anywhere at the chart.

### Dialog editing

Modify the task details through dialog by setting edit [`mode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#mode) property as `Dialog`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs5" %}

`Note:` In dialog editing mode, the edit dialog will appear while performing double click action in both TreeGrid and chart sides.

### Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowtaskbarediting) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs6" %}

### Dependency editing

Modify the task dependencies using mouse interactions by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowtaskbarediting) property along with mapping the task dependency data source field to the [`dependency`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#dependency) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs7" %}

## Enabling predecessors or task relationships

Predecessor or task dependency in the Gantt component is used to depict the relationship between the tasks.

Start to Start (SS) : You cannot start a task until the dependent task starts.
Start to Finish (SF) : You cannot finish a task until the dependent task finishes.
Finish to Start (FS) : You cannot start a task until the dependent task completes.
Finish to Finish (FF) : You cannot finish a task until the dependent task completes.

You can show the relationship in tasks, by using the [`dependency`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#dependency) property as shown in the following code example:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs8" %}

## Assigning resources

You can display and assign the resource for each task in the Gantt control.Create a collection of JSON object, which contains id, name, unit and group of the resources and assign it to the [`resources`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#resources) property. Map these fields to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#resourceFields) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs9" %}

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. Gantt provides support for menu filtering support for each columns. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering) property to `true` along with injecting the `Filter` module module as shown in the following code example. Filtering feature can also be customized using the [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings/) property.

To use Filtering, inject the [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#filtermodule) module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs10" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowsorting) property to `true`. Provide the [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortmodule) module as follows. If [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortmodule) module is not provided, you cannot sort when a header is clicked. The sorting feature can be customized using the `sortSettings`(../api/gantt/sortSettings/) property.

To use Sorting, inject the [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortmodule) module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs11" %}

## Defining event markers

The [`eventMarkers`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#eventmarkers) property in Gantt component is used to highlight the important event in Gantt chart part. By using this feature, you can add the lines and label to highlight important days in your project.

To highlight the days, inject the `DayMarkers` module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs12" %}

## Run the application

Now run the `npm run serve` command in the console, it will build your application and open in the web browser.

The following example shows a basic Gantt:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs13" %}

## Error handling

Error handling is used to identify errors, display them and develop recovery strategies to handle errors from gantt. In Gantt, error handling is done by using the [actionFailure](https://ej2.syncfusion.com/vue/documentation/api/gantt/#actionfailure) event. Some of the scenarios that this event handles are:
* Invalid duration : The [duration](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#duration) field accepts only numerical values with an optional decimal point. Entering non-numerical values triggers the `actionFailure` event and displays issue information in the event argument.
* Invalid dependency: The [dependency](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#dependency) field accepts only a number followed by a predecessor type (FS, FF, SS, SF).  Entering invalid values, such as special characters or incorrect predecessor types, triggers the `actionFailure` event and displays issue information in the event argument.
* Invalid offset : The [offset](https://ej2.syncfusion.com/vue/documentation/api/gantt/iPredecessor/#offset) accepts only numerical values or their word equivalents followed by a unit. Entering invalid values, such as special characters triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map task fields : The data source fields necessary for rendering tasks should be mapped to the Gantt control using the [taskFields](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/) property. Failure to map `taskFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map resource fields : To assign resources to a task, resource fields should be mapped to the Gantt control using the [resourceFields](https://ej2.syncfusion.com/vue/documentation/api/gantt/resourceFields/). Failure to map `resourceFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map `isPrimaryKey` : [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#isprimarykey) field is crucial for CRUD operations. Failure to map [id](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#id) column in gantt column collection or [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#isprimarykey) field in one of the columns will trigger `actionFailure` event and display issue information in the event argument.
* Invalid date format : [format](https://ej2.syncfusion.com/vue/documentation/api/gantt/iTimelineFormatter/) property under `topTier` and `bottomTier` determines how the timelines are displayed in the top tier and bottom tier of the Gantt chart timeline. If the `format` does not contain a valid standard [date format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), it triggers the `actionFailure` event, displaying issue information in the event argument.
* Failure to map `hasChildMapping` : [hasChildMapping](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#haschildmapping) property should configured for [load-on-demand](https://ej2.syncfusion.com/vue/documentation/gantt/data-binding#load-child-on-demand). Ensure it properly configured in the [taskFields](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/). Failure to map `hasChildMapping` in the `load-on-demand` sample triggers `actionFailure` event and displays issue information in the event argument.
* Invalid day in event markers : [day](https://ej2.syncfusion.com/vue/documentation/api/gantt/eventMarker/#day) should configured in [eventMarkers](https://ej2.syncfusion.com/vue/documentation/api/gantt/eventMarker/) to render striplines in a particular day. Failure to configure the `day` in `eventMarkers` triggers `actionFailure` event and displays issue information in the event argument.

> Additionally, TreeGrid side error handling information is also displayed from the Gantt `actionFailure` event. For more details on TreeGrid side error handling, refer [here](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started#handling-errors).

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/vue/documentation/api/gantt/#actionfailure) event in the Gantt control to display an exception when `isPrimaryKey` is not configured properly in the Gantt Chart column.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/exception-handling-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/gantt/exception-handling-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/exception-handling-cs1" %}

The following screenshot represents the Gantt Exception handling in `actionFailure` event.

![Error Handling](images/error-handling.png)
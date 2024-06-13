---
layout: post
title: Getting started vue with Vue Gantt component | Syncfusion
description:  Checkout and learn about Getting started vue with Vue Gantt component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Gantt Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Gantt component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

This article uses the [Vue Gantt component](https://www.syncfusion.com/vue-components/vue-Gantt) as an example. To use the Vue Gantt component in the project, the `@syncfusion/ej2-vue-gantt` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-gantt --save
```

or

```bash
yarn add @syncfusion/ej2-vue-gantt
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Gantt component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Gantt component using `Composition API` or `Options API`:

    1.First, import and register the Gantt component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
   import { GanttComponent as EjsGantt, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-gantt';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
    import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-gantt';
//Component registration
export default {
  name: "App",
  components: {
    'ejs-gantt': GanttComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the Gantt component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/gantt#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-gantt :dataSource='data' :treeColumnIndex='1' child='subtasks' :taskFields= 'taskFields'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=200></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=80></e-column>
       </e-columns>
    </ejs-gantt>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    const data = [{
         TaskID: 1,
         TaskName: 'Planning',
         StartDate: new Date('02/03/2017'),
         EndDate: new Date('02/07/2017'),
         Progress: 100,
         Duration: 5,
         subtasks: [
             { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100,},
             { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, },
             { TaskID: 4, TaskName: 'Allocate resources', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, },
             { TaskID: 5, TaskName: 'Planning complete', StartDate: new Date('02/07/2017'), EndDate: new Date('02/07/2017'), Duration: 0, Progress: 0, }
         ]
     },
     {
         TaskID: 6,
         TaskName: 'Design',
         StartDate: new Date('02/10/2017'),
         EndDate: new Date('02/14/2017'),
         Duration: 3,
         Progress: 86,
         subtasks: [
             { TaskID: 7, TaskName: 'Software Specification', StartDate: new Date('02/10/2017'), EndDate: new Date('02/12/2017'), Duration: 3, Progress: 60, },
             { TaskID: 8, TaskName: 'Develop prototype', StartDate: new Date('02/10/2017'), EndDate: new Date('02/12/2017'), duration: 3, Progress: 100,},
             { TaskID: 9, TaskName: 'Get approval from customer', startDate: new Date('02/13/2017'), EndDate: new Date('02/14/2017'), Duration: 2, Progress: 100, },
             { TaskID: 10, TaskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, Progress: 100, },
             { TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/14/2017'), EndDate: new Date('02/14/2017'), Duration: 0, Progress: 0,  }
         ]
     }],
     taskFields: {
             id: 'TaskID',
             name: 'TaskName',
             startDate: 'StartDate',
             endDate: 'EndDate',
             duration: 'Duration',
             progress: 'Progress',
             child: 'subtasks',
         }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    data:  [{
         TaskID: 1,
         TaskName: 'Planning',
         StartDate: new Date('02/03/2017'),
         EndDate: new Date('02/07/2017'),
         Progress: 100,
         Duration: 5,
         subtasks: [
             { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100,},
             { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, },
             { TaskID: 4, TaskName: 'Allocate resources', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, },
             { TaskID: 5, TaskName: 'Planning complete', StartDate: new Date('02/07/2017'), EndDate: new Date('02/07/2017'), Duration: 0, Progress: 0, }
         ]
     },
     {
         TaskID: 6,
         TaskName: 'Design',
         StartDate: new Date('02/10/2017'),
         EndDate: new Date('02/14/2017'),
         Duration: 3,
         Progress: 86,
         subtasks: [
             { TaskID: 7, TaskName: 'Software Specification', StartDate: new Date('02/10/2017'), EndDate: new Date('02/12/2017'), Duration: 3, Progress: 60, },
             { TaskID: 8, TaskName: 'Develop prototype', StartDate: new Date('02/10/2017'), EndDate: new Date('02/12/2017'), duration: 3, Progress: 100,},
             { TaskID: 9, TaskName: 'Get approval from customer', startDate: new Date('02/13/2017'), EndDate: new Date('02/14/2017'), Duration: 2, Progress: 100, },
             { TaskID: 10, TaskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, Progress: 100, },
             { TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/14/2017'), EndDate: new Date('02/14/2017'), Duration: 0, Progress: 0,  }
         ]
     }],
     taskFields: {
             id: 'TaskID',
             name: 'TaskName',
             startDate: 'StartDate',
             endDate: 'EndDate',
             duration: 'Duration',
             progress: 'Progress',
             child: 'subtasks',
         }
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-gantt :dataSource='data' :treeColumnIndex='1' child='subtasks' :taskFields= 'taskFields'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=200></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=80></e-column>
       </e-columns>
    </ejs-gantt>
</template>

<script setup>
    const data = [{
         TaskID: 1,
         TaskName: 'Planning',
         StartDate: new Date('02/03/2017'),
         EndDate: new Date('02/07/2017'),
         Progress: 100,
         Duration: 5,
         subtasks: [
             { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100,},
             { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, },
             { TaskID: 4, TaskName: 'Allocate resources', StartDate: new Date('02/03/2017'), EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, },
             { TaskID: 5, TaskName: 'Planning complete', StartDate: new Date('02/07/2017'), EndDate: new Date('02/07/2017'), Duration: 0, Progress: 0, }
         ]
     },
     {
         TaskID: 6,
         TaskName: 'Design',
         StartDate: new Date('02/10/2017'),
         EndDate: new Date('02/14/2017'),
         Duration: 3,
         Progress: 86,
         subtasks: [
             { TaskID: 7, TaskName: 'Software Specification', StartDate: new Date('02/10/2017'), EndDate: new Date('02/12/2017'), Duration: 3, Progress: 60, },
             { TaskID: 8, TaskName: 'Develop prototype', StartDate: new Date('02/10/2017'), EndDate: new Date('02/12/2017'), duration: 3, Progress: 100,},
             { TaskID: 9, TaskName: 'Get approval from customer', startDate: new Date('02/13/2017'), EndDate: new Date('02/14/2017'), Duration: 2, Progress: 100, },
             { TaskID: 10, TaskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, Progress: 100, },
             { TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/14/2017'), EndDate: new Date('02/14/2017'), Duration: 0, Progress: 0,  }
         ]
     }],
     taskFields: {
             id: 'TaskID',
             name: 'TaskName',
             startDate: 'StartDate',
             endDate: 'EndDate',
             duration: 'Duration',
             progress: 'Progress',
             child: 'subtasks',
         }
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>


{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}


<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :toolbar="toolbar" :allowFiltering= "true" :timelineSettings="timelineSettings" :splitterSettings= "splitterSettings" :labelSettings= "labelSettings" :projectStartDate="projectStartDate" :projectEndDate= "projectEndDate"></ejs-gantt>
    </div>
</template>

<script>
import { GanttComponent, Filter, Toolbar } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'subtasks',
            },
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: '250' , clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'EndDate', headerText: 'End Date' },
                { field: 'Predecessor', headerText: 'Predecessor' }
            ],
            toolbar: ['Search'],
            timelineSettings: {
                timelineUnitSize: 60,
                topTier: {
                format: 'MMM dd, yyyy',
                unit: 'Week',
                },
                bottomTier: {
                unit: 'Day',
                },
            },
            splitterSettings: {
                columnIndex: 3
                },
            labelSettings: {
                rightLabel: 'TaskName',
            },
            projectStartDate: new Date('04/01/2019 01:00:00 AM'),
            projectEndDate: new Date('05/10/2019')  
      };
  },
  provide: {
      gantt: [ Filter, Toolbar ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>


{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vueimage](./images/vue-gantt-image.png)

### Using local style

Import the needed css styles for the Gantt component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

Note: Gantt component use other Syncfusion components too, the dependent component's CSS references need to be added for using all the Gantt functionalities.

### Using CDN link for style

Using CDN link, you can directly refer to the Gantt control's style in the `index.html`.

Refer to the Gantt's CDN links as follows.

**Syntax:**

> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Styles: [`https://cdn.syncfusion.com/ej2/ej2-gantt/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-gantt/styles/material.css)

```js
<!-- Material theme used for this sample -->
<link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-layouts/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
<link href="http://cdn.syncfusion.com/ej2/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>
<!-- Essential JS 2 material theme -->
<link href="http://cdn.syncfusion.com/ej2/ej2-gantt/styles/material.css" rel="stylesheet" type="text/css"/>
```

## Binding Gantt with data

Bind data with the Gantt component by using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#datasource) property. It accepts an array of JavaScript object or the DataManager instance.

```

<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" :taskFields= "taskFields"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';

export default {
    name: "App",
    components: {
     'ejs-gantt' : GanttComponent
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
        taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks',
            }
        };
  },
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt control using the [`taskFields`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskfields) property.

```

<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
        };
  },
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Defining timeline

The Gantt has an option to define timeline using [`timelineSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/) property with various options. Using this property we can customize the Gantt timeline.

```

<template>
     <div>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :timelineSettings="timelineSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
             timelineSettings: {
                topTier: {
                    format: 'MMM dd, yyyy',
                    unit: 'Week',
                },
                bottomTier: {
                    unit: 'Day',
                },
            },
      };
  },  
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Enable Toolbar

The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#toolbar) property is used to add the toolbar items like Add, Remove, Edit, Update, Delete, Expand All,Collapse All in Gantt.

To use toolbar, inject the `Toolbar` module in the `provide` section.

```
<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Edit, Selection, Toolbar } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
             editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
      };
  },
  provide: {
      gantt: [ Edit, Selection, Toolbar ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

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

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :columns = "columns" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Edit } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
            toolbar: ['Edit'],
            editSettings: {
                allowEditing: true,
                mode:"Auto"
            },
      };
  },
  provide: {
      gantt: [ Edit ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

`Note:` When the edit mode is set to `Auto`, you can change the cells to editable mode by double-clicking anywhere at the TreeGrid and edit the task details in the edit dialog by double-clicking anywhere at the chart.

### Dialog editing

Modify the task details through dialog by setting edit [`mode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#mode) property as `Dialog`.

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :columns = "columns" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Edit} from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
            toolbar: ['Edit'],
             editSettings: {
                 allowEditing: true,
                 mode:"Dialog"
            },
      };
  },
  provide: {
      gantt: [ Edit ]
  }
};
</script>

```

`Note:` In dialog editing mode, the edit dialog will appear while performing double click action in both TreeGrid and chart sides.

### Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowtaskbarediting) property.

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :columns = "columns" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Edit } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
            toolbar: ['Edit'],
             editSettings: {
                allowTaskbarEditing:true
            },
      };
  },
  provide: {
      gantt: [ Edit ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

### Dependency editing

Modify the task dependencies using mouse interactions by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowtaskbarediting) property along with mapping the task dependency data source field to the [`dependency`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#dependency) property.

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :columns = "columns" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Edit} from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
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
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
            ]
        },
    ],
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
            toolbar: ['Edit'],
             editSettings: {
                allowTaskbarEditing:true
            },
      };
  },
  provide: {
      gantt: [ Edit ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Enabling predecessors or task relationships

Predecessor or task dependency in the Gantt component is used to depict the relationship between the tasks.

Start to Start (SS) : You cannot start a task until the dependent task starts.
Start to Finish (SF) : You cannot finish a task until the dependent task finishes.
Finish to Start (FS) : You cannot start a task until the dependent task completes.
Finish to Finish (FF) : You cannot finish a task until the dependent task completes.

You can show the relationship in tasks, by using the [`dependency`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#dependency) property as shown in the following code example:

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" highlightWeekends='true'></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
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
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
            ]
        },
    ],
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
      };
  },  
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Assigning resources

You can display and assign the resource for each task in the Gantt control.
Create a collection of JSON object, which contains id, name, unit and group of the resources and assign it to the [`resources`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#resources) property. 

Map these fields to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#resourceFields) property.

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields= "taskFields" :height= "height" :treeColumnIndex= "1" :resourceFields= "resourceFields" :resources= "resources" :highlightWeekends= "true" :labelSettings= "labelSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
  },
  data: function() {
      return{
            data: [
                {
                    TaskID: 1,
                    TaskName: 'Project initiation',
                    StartDate: new Date('04/02/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50, resources: [1]},
                        {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',Progress: 50, resources: [2, 3, 5]},
                        {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 50 },
                    ]
                },
                {
                    TaskID: 5,
                    TaskName: 'Project estimation',
                    StartDate: new Date('04/02/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '4', Progress: 50, resources: [4]},
                        {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '6', resources: [4, 8],Progress: 50},
                        {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Predecessor: '7', resources: [12, 5]}
                    ]
                }
            ],
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                resourceInfo: 'resources'
            },
            height: '450px',

            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
            },

            resources: [
                { resourceId: 1, resourceName: 'Martin Tamer' },
                { resourceId: 2, resourceName: 'Rose Fuller' },
                { resourceId: 3, resourceName: 'Margaret Buchanan' },
                { resourceId: 4, resourceName: 'Fuller King' },
                { resourceId: 5, resourceName: 'Davolio Fuller' },
                { resourceId: 6, resourceName: 'Van Jack' },
                { resourceId: 7, resourceName: 'Fuller Buchanan' },
                { resourceId: 8, resourceName: 'Jack Davolio' },
                { resourceId: 9, resourceName: 'Tamer Vinet' },
                { resourceId: 10, resourceName: 'Vinet Fuller' },
                { resourceId: 11, resourceName: 'Bergs Anton' },
                { resourceId: 12, resourceName: 'Construction Supervisor' }
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: 'resources'
            },
      };
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. Gantt provides support for menu filtering support for each columns. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering) property to `true` along with injecting the `Filter` module as shown in the following code example. Filtering feature can also be customized using the [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings/) property.

To use Filtering, inject the [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#filtermodule) module in the `provide` section.

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :toolbar="toolbar" :allowFiltering= "true" :timelineSettings="timelineSettings" :splitterSettings= "splitterSettings" :labelSettings= "labelSettings" :projectStartDate="projectStartDate" :projectEndDate= "projectEndDate"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Filter, Toolbar } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'subtasks',
            },
            columns: [
                { field: 'TaskName', headerText: 'Task Name', width: '250' , clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'EndDate', headerText: 'End Date' },
                { field: 'Predecessor', headerText: 'Predecessor' }
            ],
            toolbar: ['Search'],
            timelineSettings: {
                timelineUnitSize: 60,
                topTier: {
                format: 'MMM dd, yyyy',
                unit: 'Week',
                },
                bottomTier: {
                unit: 'Day',
                },
            },
            splitterSettings: {
                columnIndex: 3
                },
            labelSettings: {
                rightLabel: 'TaskName',
            },
            projectStartDate: new Date('04/01/2019 01:00:00 AM'),
            projectEndDate: new Date('05/10/2019')  
      };
  },
  provide: {
      gantt: [ Filter, Toolbar ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Enable Sorting

The sorting feature enables the user to order the records. It can be enabled by setting [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowsorting) property to true. Also, need to inject the `Sort` module in the `provide` section as follow. If we didn't inject the `Sort` module, then user not able to sort when click on headers. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/sortSettings) property.

```
<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :splitterSettings= "splitterSettings" :allowSorting= 'true'></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Sort } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            allowSorting: true,
            splitterSettings: {
                columnIndex: 3
                },
           columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
      };
  },
  provide: {
      gantt: [ Sort ]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>
```

## Defining eventmarkers

The [`eventMarkers`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#eventmarkers) property in Gantt component is used to highlight the important event in Gantt chart part. By using this feature, you can add the lines and label to highlight important days in your project.

To highlight the days, inject the `DayMarkers` module in the `provide` section.

```

<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :eventMarkers="eventMarkers"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, DayMarkers } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
  },
  data: function() {
      return{
            data: projectNewData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
             eventMarkers: [
                {
                    day: new Date('04/09/2019'),
                    label: 'Research phase'
                }, {
                    day: new Date('04/30/2019'),
                    label: 'Design phase'
                }, {
                    day: new Date('05/23/2019'),
                    label: 'Production phase'
                }, {
                    day: new Date('06/20/2019'),
                    label: 'Sales and marketing phase'
                }
            ]
      };
  },
  provide: {
      gantt: [DayMarkers]
  }
};
</script>

<style>
<!-- Material theme used for this sample -->
 @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>

```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port `localhost:8080`.

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

```
<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :splitterSettings= "splitterSettings" :actionFailure='actionFailure'></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';

export default {
  name: "App",
  components: {
    'ejs-gantt' : GanttComponent
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
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            splitterSettings: {
                columnIndex: 3
                },
           columns: [
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
      };
  },
   methods: {
        actionFailure: function (args) {
            let span = document.createElement('span');
            let gantt = document.getElementsByClassName("e-gantt")[0].ej2_instances[0];
            gantt.element.parentNode.insertBefore(span, gantt.element);
            span.style.color = '#FF0000';
            span.innerHTML = args.error[0];
        }
    }
};
</script>

```

The following screenshot represents the Gantt Exception handling in `actionFailure` event.

![Error Handling](images/error-handling.png)
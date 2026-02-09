---
layout: post
title: Vue 3 getting started with the Maps component | Syncfusion
description:  Checkout and learn about Vue 3 getting started with the Vue Maps component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Maps Component in Vue 3

This guide provides a step-by-step walkthrough for setting up a [Vite](https://vitejs.dev/) project with JavaScript and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api). By the end, you'll have a working Maps component displaying geographic data with legends, tooltips, and data labels.

## Choosing Between Composition API and Options API

Vue 3 supports two patterns for organizing component logic:

- **Composition API** (`<script setup>`) - Modern, function-based approach for better code reusable and organization of related logic. Ideal for complex components and advanced use cases.
- **Options API** - Traditional, object-based approach with separate sections for data, methods, computed properties, and lifecycle hooks. Familiar for developers transitioning from Vue 2.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

[Vite](https://vitejs.dev/) provides a lightweight, fast development environment for Vue 3 projects. To create a new Vite project, run one of the following commands:

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Follow the interactive prompts to complete the setup:

1. **Project name** - Enter `my-project` (or your preferred name):

```bash
? Project name: » my-project
```

2. **Framework selection** - Select `Vue`:

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

3. **Variant selection** - Choose `JavaScript`:

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4. **Install dependencies** - Navigate to the project directory and install dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

After setup completes, add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the required npm package to use Syncfusion components.

This guide uses the [Vue Maps component](https://www.syncfusion.com/vue-components/vue-maps) as an example. Install the `@syncfusion/ej2-vue-maps` package using the following command:

```bash
npm install @syncfusion/ej2-vue-maps --save
```

or

```bash
yarn add @syncfusion/ej2-vue-maps
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

1. Import and register the Maps component and its child directives in the **src/App.vue** file. The import structure differs slightly between the two APIs:
   - **Composition API**: Add the `setup` attribute to the `<script>` tag and use `Maps.Inject()` for module injection
   - **Options API**: Use standard component registration with a `provide` option for module injection

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { MapsComponent as EjsMaps, LayersDirective as ELayers, LayerDirective as ELayer, MapAjax , Legend , DataLabel , MapsTooltip } from '@syncfusion/ej2-vue-maps';
  import { Maps } from '@syncfusion/ej2-maps';
  Maps.Inject(Legend, DataLabel, MapsTooltip);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MapsComponent, LayersDirective, LayerDirective, MapAjax, Legend, MapAjax, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps'
//Component registration
export default {
  name: "App",
  components: {
    'ejs-maps' : MapsComponent,
    'e-layers' : LayersDirective,
    'e-layer' : LayerDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2. Define the Maps component template with layer, title, legend, and other property bindings:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
   <ejs-maps :titleSettings='titleSettings' :legendSettings='legendSettings'>
        <e-layers>
            <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings' :tooltipSettings='tooltipSettings'></e-layer>
        </e-layers>
    </ejs-maps>
</template>

{% endhighlight %}
{% endtabs %}

3. Declare the property values referenced in the template:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    const titleSettings =  {
        text: 'UN security council countries'
    };
    const shapeData = new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json');
    const dataSource =  [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}];
    const shapePropertyPath = 'name';
    const shapeDataPath = 'Country';
    const shapeSettings = {
            colorValuePath: 'Membership',
            colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }
            ]
    };
    const dataLabelSettings = {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
    };
    const legendSettings = {
        visible: true
    };
    const tooltipSettings = {
        visible: true,
        valuePath: 'Country'
    };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    titleSettings: {
        text: 'UN security council countries'
    },
    shapeData: new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json'),
    dataSource: [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}],
    shapePropertyPath: 'name',
    shapeDataPath: 'Country',
    shapeSettings: {
            colorValuePath: 'Membership',
            colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }
            ]
    },
    dataLabelSettings: {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
    },
    legendSettings: {
        visible: true
    },
    tooltipSettings: {
        visible: true,
        valuePath: 'Country'
    }
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the complete code combining all steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-maps :titleSettings='titleSettings' :legendSettings='legendSettings'>
        <e-layers>
            <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings' :tooltipSettings='tooltipSettings'></e-layer>
        </e-layers>
    </ejs-maps>
</template>

<script setup>
import { MapsComponent as EjsMaps, LayersDirective as ELayers, LayerDirective as ELayer, MapAjax , Legend , DataLabel , MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { Maps } from '@syncfusion/ej2-maps';
Maps.Inject(Legend, DataLabel, MapsTooltip);
    const titleSettings =  {
        text: 'UN security council countries'
    };
    const shapeData = new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json');
    const dataSource =  [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}];
    const shapePropertyPath = 'name';
    const shapeDataPath = 'Country';
    const shapeSettings = {
            colorValuePath: 'Membership',
            colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }
            ]
    };
    const dataLabelSettings = {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
    };
    const legendSettings = {
        visible: true
    };
    const tooltipSettings = {
        visible: true,
        valuePath: 'Country'
    };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-maps :titleSettings='titleSettings' :legendSettings='legendSettings'>
        <e-layers>
            <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings' :tooltipSettings='tooltipSettings'></e-layer>
        </e-layers>
    </ejs-maps>
</template>

<script>
  import { MapsComponent, LayersDirective, LayerDirective, MapAjax, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
        'ejs-maps' : MapsComponent,
        'e-layers' : LayersDirective,
        'e-layer' : LayerDirective
    },
    // Bound properties declarations
    data() {
      return {
        titleSettings: {
           text: 'UN security council countries'
        },
        shapeData: new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json'),
        dataSource: [{  "Country": "China", "Membership": "Permanent"},
                {"Country": "France","Membership": "Permanent" },
                { "Country": "Russia","Membership": "Permanent"},
                {"Country": "Kazakhstan","Membership": "Non-Permanent"},
                { "Country": "Poland","Membership": "Non-Permanent"},
                {"Country": "Sweden","Membership": "Non-Permanent"}],
        shapePropertyPath: 'name',
        shapeDataPath: 'Country',
        shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                    {
                        value: 'Permanent', color: '#D84444'
                    },
                    {
                        value: 'Non-Permanent', color: '#316DB5'
                    }
                ]
        },
        dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
        },
        legendSettings: {
            visible: true
        },
        tooltipSettings: {
            visible: true,
            valuePath: 'Country'
        }
      };
    },
    provide: {
      maps:[Legend, DataLabel, MapsTooltip]
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

## Run the project

Execute the following command to start the development server:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The application will display a Maps component showing UN Security Council countries with color-coded memberships:

![vue-3-js-maps](./images/vue3-maps-demo.png)

> **Sample**: [vue3-maps-getting-started](https://github.com/SyncfusionExamples/vue3-maps-getting-started).

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options)

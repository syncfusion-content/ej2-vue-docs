---
layout: post
title: Vue 3 getting started with the Maps Component | Syncfusion
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

- **Composition API** (`<script setup>`) - A modern, function-based approach that helps organize related logic into reusable functions and improves code maintainability.
- **Options API** - Traditional, object-based approach with separate sections for data, methods, computed properties, and lifecycle hooks. Familiar for developers transitioning from Vue 2.

## Prerequisites

Ensure that the development environment meets the required criteria listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Set Up the Vite Project

[Vite](https://vitejs.dev/) provides a lightweight, fast development environment for Vue 3 projects. To create a new Vite project, run one of the following commands:

### Using npm
```bash
npm create vite@latest
```

### Using Yarn

```bash
yarn create vite
```

Follow the interactive prompts to complete the setup:

**Step 1:** **Project name** - Enter `my-project` (or your preferred name):

```bash
? Project name: » my-project
```

**Step 2:** **Framework selection** - Select `Vue`:

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

**Step 3:** **Variant selection** - Choose `JavaScript`:

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

**Step 4:** **Install dependencies** - Navigate to the project directory and install dependencies:

Move to the project directory:

```bash
cd my-project
```

Install the project dependencies using either npm or Yarn:

### Using npm

```bash
npm install
```

### Using Yarn

```bash
yarn install
```

After setup completes, add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the required npm package to use Syncfusion components.

This guide uses the [Vue Maps component](https://www.syncfusion.com/vue-components/vue-maps) as an example. Install the `@syncfusion/ej2-vue-maps` package using either npm or Yarn:

### Using npm

```bash
npm install @syncfusion/ej2-vue-maps --save
```

### Using Yarn

```bash
yarn add @syncfusion/ej2-vue-maps
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps Component

**Step 1:** Import and register the Maps component and its child directives in the **src/App.vue** file. The import structure differs slightly between the two APIs:
   - **Composition API**: Use the `<script setup>` syntax.
   - **Options API**: Register the component and directives using the `components` option.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { MapsComponent as EjsMaps, LayersDirective as ELayers, LayerDirective as ELayer, MapAjax } from '@syncfusion/ej2-vue-maps';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MapsComponent, LayersDirective, LayerDirective, MapAjax } from '@syncfusion/ej2-vue-maps'
// Component registration
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
   
**Step 2:** Declare the property values referenced in the template:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    const shapeData = new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json');
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    shapeData: new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json'),
  };
}
</script>

{% endhighlight %}
{% endtabs %}

**Step 3:** Define the Maps component template and bind the `shapeData` property to the layer:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
   <ejs-maps>
        <e-layers>
            <e-layer :shapeData='shapeData'></e-layer>
        </e-layers>
    </ejs-maps>
</template>

{% endhighlight %}
{% endtabs %}

Here is the complete code combining all steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-maps>
        <e-layers>
            <e-layer :shapeData='shapeData'></e-layer>
        </e-layers>
    </ejs-maps>
</template>

<script setup>
import { MapsComponent as EjsMaps, LayersDirective as ELayers, LayerDirective as ELayer, MapAjax } from '@syncfusion/ej2-vue-maps';
const shapeData = new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json');
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-maps>
        <e-layers>
            <e-layer :shapeData='shapeData'></e-layer>
        </e-layers>
    </ejs-maps>
</template>

<script>
  import { MapsComponent, LayersDirective, LayerDirective, MapAjax } from '@syncfusion/ej2-vue-maps';
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
        shapeData: new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json'),
      };
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

## Run the Project

To run the project, use either npm or Yarn:

### Using npm

```bash
npm run dev
```

### Using Yarn

```bash
yarn run dev
```

The application will display a basic Maps component using world map shape data:

![vue-3-js-maps](./images/vue3-maps-demo.png)

> **Sample**: You can explore the complete sample project in the [vue3-maps-getting-started](https://github.com/SyncfusionExamples/vue3-maps-getting-started) repository.

## See Also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options)

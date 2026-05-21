---
layout: post
title: Getting Started with Vue Maps Component | Syncfusion
description:  Check out and learn about Getting Started with Vue Maps component of Syncfusion Essential JS 2 and more details.
control: Getting Started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Maps Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps component. By the end of this guide, you'll have a working Maps component displaying geographic data with features like legends, tooltips, and data labels.

> **Note**: If you're using Vue 3, refer to the [Vue 3 Getting Started guide](./getting-started-vue-3.md).

You can explore the Maps component's capabilities using the following video:

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

Ensure that the development environment meets the required criteria listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

Below is the list of minimum dependencies required to use the Maps.

```
|-- @syncfusion/ej2-vue-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-maps
```

## Setting Up the Vue 2 Project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. You can install Vue CLI using either npm or Yarn:

**npm**

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

**yarn**

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Maps component](https://www.syncfusion.com/vue-components/vue-maps-library) as an example. Install the `@syncfusion/ej2-vue-maps` package by using either npm or Yarn:

**npm**

```bash
npm install @syncfusion/ej2-vue-maps
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-maps
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps Component

**Note**: Before adding the Maps component, make sure the map shape data is available in your project.  

- In this example, the shape data is imported from a local `world-map.js` file placed in the `src` folder.  
- You can either use local GeoJSON data or load shape data from an external source.

**Step 1:** Import and register the Maps component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { MapsComponent, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
    components: {
        'ejs-maps' : MapsComponent,
        'e-layers' : LayersDirective,
        'e-layer' : LayerDirective
    },
    data () {
        return {
            shapeData: world_map
        }
    }
}
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** In the `template` section, define the Maps component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class="wrapper">
        <ejs-maps id='maps'>
            <e-layers>
                <e-layer :shapeData='shapeData'></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs105/app.vue %}
{% endhighlight %}
{% endtabs %}
        
## Run the Project

To run the project, use either npm or Yarn:

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs105" %}

## Module Injection

The Vue Maps component uses a modular architecture where features are segregated into individual modules. To use advanced features, you must explicitly inject the corresponding modules using the Vue `provide` option. This approach optimizes performance by loading only the features you need.

The following modules are available:

* `Annotations` - Inject this provider to use annotations feature.
* `Bubble` - Inject this provider to use bubble feature.
* `DataLabel` - Inject this provider to use data label feature.
* `Highlight` - Inject this provider to use highlight feature.
* `Legend` - Inject this provider to use legend feature.
* `Marker` - Inject this provider to use marker feature.
* `MapsTooltip` - Inject this provider to use tooltip feature.
* `NavigationLine` - Inject this provider to use navigation lines feature.
* `Selection` - Inject this provider to use selection feature.
* `Zoom` - Inject this provider to use zooming and panning feature.
* `Polygon` - Inject this provider to use polygon feature.

In the following example, the basic Maps component is extended with `MapsTooltip`, `DataLabel`, and `Legend` modules to display tooltips, data labels, and a legend using sample geographic data.

```
<template>
   <div class="wrapper">
        <ejs-maps id='maps'></ejs-maps>
    </div>
</template>
<script>
import { MapsComponent, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';

export default {
    components: {
        'ejs-maps': MapsComponent
    },
    data:function(){
        return{ };
    },
    provide: {
       maps: [Legend, DataLabel, MapsTooltip]
    }
}
</script>
```

## Render Shapes from GeoJSON Data

This section explains how to bind GeoJSON data to the map.

```ts

let usMap: Object =
{
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -70.801756294617277, 41.248076234530558 ]] ] ] }
        }
    ]
};

```

Map shapes are rendered within layers. So add a layer collection to the Maps by using [`layers`](https://ej2.syncfusion.com/vue/documentation/api/maps#layers) property. Now bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedata) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs34" %}

>**Note**: Refer to the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-1580932177).


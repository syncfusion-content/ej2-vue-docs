---
layout: post
title: Getting Started with Vue Maps Component | Syncfusion
description: Learn how to set up a Vue 2 project from scratch and integrate the Syncfusion Vue Maps component to render geographic data.
control: Getting Started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Maps Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps component. By the end of this guide, you'll have a working Maps component rendering the world map from a local shape data file.

> **Note**: If you're using Vue 3, refer to the [Vue 3 Getting Started guide](./getting-started-vue-3).

You can explore the Maps component's capabilities using the following video:

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

Ensure that the development environment meets the required criteria listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The Vue Maps component is available in the `@syncfusion/ej2-vue-maps` package. The following dependencies are used by the package.

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

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Install Vue CLI globally using either npm or Yarn:

**npm**

```bash
npm install -g @vue/cli
vue create quickstart
```

**yarn**

```bash
yarn global add @vue/cli
vue create quickstart
```

When prompted, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, navigate to the project directory:

```bash
cd quickstart
```

Now, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> packages to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use the Maps component, install the `@syncfusion/ej2-vue-maps` package. Use the latest stable version compatible with Vue 2.

**npm**

```bash
npm install @syncfusion/ej2-vue-maps
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-maps
```

> Note: npm v5+ saves packages to `dependencies` by default; the `--save` flag is not required.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps Component

**Note**: Before adding the Maps component, make sure the map shape data is available in your project.  

- In this example, the shape data is imported from a local `world-map.js` file placed in the `src` folder.
- Download the [`world_map` sample data (ZIP archive)](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-1580932177), extract it, and place the resulting `world-map.js` file in the `src` folder of your project.
- You can also use any local GeoJSON data or load shape data from an external source.

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

Map shapes are rendered within layers. Add a layer collection to the Maps by using the [`layers`](https://ej2.syncfusion.com/vue/documentation/api/maps#layers) property, then bind the GeoJSON data to the layer's [`shapeData`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedata) property.

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

Here is the combined code for the above steps in the **src/App.vue** file:

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

Open the generated local URL (for example, `http://localhost:8080`) from terminal in the browser to see the basic Maps component rendering the world map.

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

## Troubleshooting

The following are common issues you may encounter when getting started with the Maps component:

* **Blank map is displayed** — Ensure that the shape data is correctly imported and that the file path in the import statement matches the file's location in your project.
* **`world_map is not defined` error** — Verify that `world-map.js` exists in the `src` folder.
* **Module features do not render (tooltips, legend, data labels)** — Confirm the corresponding module is added to the `provide.maps` array in the Vue component.



---
layout: post
title: Getting started with Vue Maps component | Syncfusion
description:  Checkout and learn about Getting started with Vue Maps component of Syncfusion Essential JS 2 and more details.
control: Getting started 
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

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the Maps.

```
|-- @syncfusion/ej2-vue-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
       |-- @syncfusion/ej2-splitbuttons
       |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-maps
```

## Setup the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Maps component](https://www.syncfusion.com/vue-components/vue-maps-library) as an example. Install the `@syncfusion/ej2-vue-maps` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-maps --save
```
or

```bash
yarn add @syncfusion/ej2-vue-maps
```
> The **--save** will instruct NPM to include the range navigator package inside of the `dependencies` section of the `package.json`.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps component

1\. Import and register the Maps component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { MapsComponent, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
  components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective
  },
  data() {
    return {
      shapeData: world_map
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Maps component.

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
        
## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs105" %}

## Module Injection

The Vue Maps component uses a modular architecture where features are segregated into individual modules. To use advanced features, you must explicitly inject the corresponding modules using the Vue `provide` option. This approach optimizes performance by loading only the features you need.

The following modules are available:

* Annotations - Inject this provider to use annotations feature.
* Bubble - Inject this provider to use bubble feature.
* DataLabel - Inject this provider to use data label feature.
* Highlight - Inject this provider to use highlight feature.
* Legend - Inject this provider to use legend feature.
* Marker - Inject this provider to use marker feature.
* MapsTooltip - Inject this provider to use tooltip feature.
* NavigationLine - Inject this provider to use navigation lines feature.
* Selection - Inject this provider to use selection feature.
* Zoom - Inject this provider to use zooming and panning feature.
* Polygon - Inject this provider to use polygon feature.

In the current application, we are going to modify the above basic Maps to visualize 2016 USA president election results.

For this application, we are going to use tooltip, data label, and legend features of the Maps. Now import the MapsTooltip, DataLabel, and Legend modules from the Maps package and inject them into the Maps component using the `provide` option.

```javascript
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
  data: function() {
    return { };
  },
  provide: {
    maps: [Legend, DataLabel, MapsTooltip]
  }
}
</script>
```

## Render shapes from GeoJSON data

This section explains how to bind GeoJSON data to the map. The Maps component accepts GeoJSON data in the [GeoJSON specification format](https://geojson.org/). You can use GeoJSON data for world maps, country maps, or custom regional maps.

Elements in the Maps will get rendered in the layers. Add a layer collection to the Maps using the [`layers`](https://ej2.syncfusion.com/vue/documentation/api/maps#layers) property and bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedata) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs34" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-1580932177) here.

## Bind data source to map

Use the following properties in layers to bind external data to map shapes:

* [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#datasource) - Accepts an array of data objects used for tooltips, data labels, bubbles, legends, and color mapping.
* [`shapeDataPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedatapath) - Specifies the property in the dataSource that contains the unique identifier for each data record.
* [`shapePropertyPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapepropertypath) - Specifies the property in the shapeData that contains the identifier to match against shapeDataPath.

The shape matching process works as follows: when a value in the [`shapeDataPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedatapath) property matches a value in the [`shapePropertyPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapepropertypath) property, the Maps component binds the corresponding data object to that shape. This enables you to associate custom data with specific geographic shapes.

The following example demonstrates binding UN Security Council membership data to world map shapes:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs35" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-1580932177) here.

## Apply Color Mapping

The Color Mapping feature customizes shape colors based on the data values associated with each shape. Use the [`colorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel) to specify which data field determines the color assignment.

Specify color and value mapping in the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel#colormapping) property. Here '#D84444' is specified for 'Permanent' and '#316DB5' is specified for 'Non-Permanent'.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs36" %}

## Add Title for Maps

Add a title to your map using the [`titleSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/titleSettingsModel) property to provide context about the data or geographic region displayed.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs37" %}

## Enable Legend

Display a legend to help users interpret shape colors and categories. Set the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel), and inject the `Legend` module using the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs38" %}

## Add Data Label

Display text labels directly on map shapes to show relevant information. Set the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#visible) property to `true` in the [`dataLabelSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel) object, and inject the `DataLabel` module using the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs39" %}

## Enable Tooltip

Tooltips provide an alternative way to display information on hover, which is particularly useful when space constraints prevent static data labels. Enable tooltips by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel#visible) property to `true` in the [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel) object, and inject the `MapsTooltip` module using the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs40" %}

## See also

* [Getting Started with Vue 3 using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue 3 using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)

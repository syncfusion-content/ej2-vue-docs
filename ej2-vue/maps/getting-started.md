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

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps component

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the Maps.

```javascript
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

## Setting up the Vue 2 project

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Maps component

Follow the below steps to add the Vue Maps component:

1\. First, import and register the Maps component in the `script` section of the **src/App.vue** file.

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

Maps component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature module using `provide` option.  Find the modules available in Maps and its description as follows.

* Annotations - Inject this provider to use annotations feature.
* Bubble - Inject this provider to use bubble feature.
* DataLabel - Inject this provider to use data label feature.
* Highlight - Inject this provider to use highlight feature.
* Legend - Inject this provider to use legend feature.
* Marker - Inject this provider to use marker feature.
* MapsTooltip - Inject this provider to use tooltip series.
* NavigationLine - Inject this provider to use navigation lines feature.
* Selection - Inject this provider to use selection feature.
* Zoom - Inject this provider to use zooming and panning feature.
* Polygon - Inject this provider to use polygon feature.

In the current application, we are going to modify the above basic Maps to visualize 2016 USA president election results.

For this application we are going to use tooltip, data label and legend features of the Maps. Now import the MapsTooltip, DataLabel and Legend modules from Maps package and inject it into the Maps component using `provide` option.

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
}
data:function(){
    return{ };
},
provide: {
    maps: [Legend, DataLabel, MapsTooltip]
}
}
</script>
```

## Render shapes from GeoJSON data

This section explains how to bind GeoJSON data to the map.

```javascript

let usMap: Object =
{
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -70.801756294617277, 41.248076234530558 ]] ] ] }
        }
    ]
    //https://ej2.syncfusion.com/vue/documentation
};

```

Elements in the Maps will get rendered in the layers. So add a layer collection to the Maps by using [`layers`](https://ej2.syncfusion.com/vue/documentation/api/maps#layers) property. Now bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedata) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs34" %}

>Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-1580932177) here.

## Bind data source to map

The following properties in layers are used for binding data source to map.

* [`dataSource`]
* [`shapeDataPath`]
* [`shapePropertyPath`]

The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "permanent and non-permanent countries in the UN security council" is used as data source below.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs35" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-710289613) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`] property in [`shapeSettings`].

Specify color and value in [`colorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel#colorvaluepath) property. Here '#D84444' is specified for 'Permanent' and '#316DB5' is specified for 'Non-Permanent'.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs36" %}

## Add Title for Maps

You can add a title using [`titleSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/titleSettingsModel) property to the map to provide quick
information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs37" %}

## Enable Legend

You can show legend for the Maps by setting true to the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) object and by injecting the `Legend`
module using `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs38" %}

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by setting [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel) object and by injecting `DataLabel` module using `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs39" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel#visible) property as true
in [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel) object and by injecting `MapsTooltip` module using
`provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/maps/getting-started-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs40" %}

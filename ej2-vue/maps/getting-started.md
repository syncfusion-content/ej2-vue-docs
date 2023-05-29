---
layout: post
title: Getting started with Vue Maps component | Syncfusion
description:  Checkout and learn about Getting started with Vue Maps component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a map and demonstrate the basic usage of the maps component.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue applications.
To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

You can choose the component that you want to install. For this application, we are going to use Maps component.

To install Maps component, use the following command

```bash
npm install @syncfusion/ej2-vue-maps –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';

Vue.use(MapsPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { MapsComponent, MapsPlugin } from '@syncfusion/ej2-vue-maps';

Vue.component(MapsPlugin.name, MapsComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Add Map to the Project

Add the EJ2 Vue Maps using `<ejs-maps>` to the `<template>` section of the `App.vue` file in src directory,
the content attribute of the Maps component is provided as name in data option in the `<script>` section.

```
<template>
    <div class="wrapper">
        <ejs-maps id='maps'></ejs-maps>
    </div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin } from "@syncfusion/ej2-vue-maps";
Vue.use(MapsPlugin);

export default Vue.extend({
  data: function() {
    return {

    };
  }
});

</script>
```

Now use the `npm run dev` command to run the application in the browser.

```
npm run dev
```

## Module Injection

Maps component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature module using `provide` option.  Find the modules available in maps and its description as follows.

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

In the current application, we are going to modify the above basic maps to visualize 2016 USA president election results.

For this application we are going to use tooltip, data label and legend features of the maps. Now import the MapsTooltip, DataLabel and Legend modules from maps package and inject it into the Maps component using `provide` option.

```
<template>
   <div class="wrapper">
        <ejs-maps id='maps'></ejs-maps>
    </div>
</template>
<script>
import { MapsPlugin, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{ };
},
provide: {
    maps: [Legend, DataLabel, MapsTooltip]
}
});
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

Elements in the maps will get rendered in the layers. So add a layer collection to the maps by using [`layers`](https://ej2.syncfusion.com/vue/documentation/api/maps/#layers) property. Now bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#shapedata) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs34" %}

>Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-710289613) here.

## Bind data source to map

The following properties in layers are used for binding data source to map.

* [`dataSource`]
* [`shapeDataPath`]
* [`shapePropertyPath`]

The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "permanent and non-permanent countries in the UN security council" is used as data source below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs35" %}

> Note: Refer the data values for [`world_map`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map-710289613) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data. Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`] property in [`shapeSettings`].

Specify color and value in [`colorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property. Here '#D84444' is specified for 'Permanent' and '#316DB5' is specified for 'Non-Permanent'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs36" %}

## Add Title for Maps

You can add a title using [`titleSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/titleSettingsModel/) property to the map to provide quick
information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs37" %}

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel/#visible) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel/) object and by injecting the `Legend`
module using `provide` option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs38" %}

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by setting [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/) object and by injecting `DataLabel` module using `provide` option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs39" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#visible) property as true
in [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/) object and by injecting `MapsTooltip` module using
`provide` option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs40" %}

---
layout: post
title: Azure maps in Vue Maps component | Syncfusion
description: Learn here all about Azure maps in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Azure maps 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Azure maps integration in Vue Maps component

Azure Maps is an online map service provider from Microsoft. Similar to OSM and Bing Maps, it provides map tile images based on requests and combines them to display the map area. Azure Maps offers various map styles including satellite imagery, road maps, and terrain views with global coverage.

## Prerequisites

Before using Azure Maps with the Maps component, the following prerequisites must be met:

* **Azure account** - An active Microsoft Azure account is required
* **Azure Maps subscription** - Create an Azure Maps account in the Azure portal
* **Subscription key** - Generate a subscription key (primary or secondary) for authentication

To obtain an Azure Maps subscription key, follow the steps outlined in the [Azure Maps authentication documentation](https://docs.microsoft.com/en-us/azure/azure-maps/how-to-manage-authentication). The subscription key must be included in all API requests to authenticate and access Azure Maps services.

>Refer to [Azure Maps Licensing](https://azure.microsoft.com/en-in/support/legal) for terms of use and pricing information.

## Adding Azure Maps

Azure Maps can be rendered using the [urlTemplate](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#urltemplate) property with the tile server URL provided by Azure Maps. The URL template must include the subscription key for authentication. Replace `Your-Key` in the URL template below with the actual subscription key obtained from the Azure portal.

The URL template contains several parameters that are automatically replaced by the Maps component:

* **subscription-key** - The Azure Maps authentication key (replace with actual key)
* **api-version** - The Azure Maps API version (e.g., 1.0, 2.0)
* **style** - The map style type (satellite, road, night, etc.)
* **zoom** - The zoom level (automatically populated as `level`)
* **x** - The tile X coordinate (automatically populated as `tileX`)
* **y** - The tile Y coordinate (automatically populated as `tileY`)

```ts
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :urlTemplate= 'urlTemplate'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsComponent } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default {
data () {
    return{
       urlTemplate: 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY'
    }
},
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

## Enabling zooming and panning

The Azure Maps layer supports zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel) property with toolbar controls for user interaction.

```ts
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings= 'zoomSettings'>
                <e-layers>
                    <e-layer :urlTemplate= 'urlTemplate'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsComponent, Zoom } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default {
data () {
    return{
       zoomSettings: {
           enable: true,
           toolbarSettings:{
               buttonSettings: {
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
               }
            }
       },
       urlTemplate: 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY'
    }
},
provide: {
    maps: [ Zoom ]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

## Adding markers and navigation line

Markers can be added to Azure Maps layers to highlight specific locations by setting the latitude and longitude coordinates using [markerSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#markersettings). Navigation lines can be drawn on top of the Azure Maps layer to visualize routes or connections between locations by configuring the [navigationLineSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#navigationlinesettings) with corresponding latitude and longitude coordinates.

```ts
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings= 'zoomSettings' :centerPosition= 'centerPosition'>
                <e-layers>
                    <e-layer :urlTemplate= 'urlTemplate'>
                        <e-markerSettings>
                            <e-markerSetting visible= true height=25 width=15 :dataSource ="dataSource" ></e-markerSetting>
                            <e-markerSetting visible= true height=25 width=15 :dataSource ="dataSource1"></e-markerSetting>
                        </e-markerSettings>
                        <e-navigationLineSettings>
                            <e-navigationLineSetting visible = true :latitude ='latitude' :longitude ='longitude' :color ='color' :angle ='angle' :width="width">
                            </e-navigationLineSetting>
                        </e-navigationLineSettings>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsComponent, NavigationLine, Marker, Zoom } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default {
data () {
    return{
       zoomSettings: {
           zoomFactor: 4
       },
       centerPosition: {
           latitude: 29.394708,
           longitude: -94.954653
       },
       urlTemplate: 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY',
       dataSource: [
            {
                latitude: 34.060620,
                longitude: -118.330491,
                name: "California"
        }],
        dataSource1: [
            {
                latitude: 40.724546,
                longitude: -73.850344,
                name: "New York"
        }],
        color: "blue",
        width: 5,
        angle: 0.1,
        latitude: [34.060620, 40.724546],
        longitude: [-118.330491,-73.850344]
    }
},
provide: {
    maps: [ NavigationLine, Marker, Zoom ]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the Azure Maps base layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#type) property to **SubLayer**. The sublayer overlays the Azure Maps tiles while maintaining interactivity with the base map.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :urlTemplate= 'urlTemplate'></e-layer>
                    <e-layer :shapeData='shapeData1' :type = 'type' :shapeSettings='shapeSettings1' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsComponent } from '@syncfusion/ej2-vue-maps';
import { africa } from './africa.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
       urlTemplate: 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY',
       shapeData1: africa,
       type: 'SubLayer',
       shapeSettings1: {
           fill: 'blue'
       }
    }
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

## Enabling legend

A legend can be displayed with Azure Maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.

```
<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps id='container' :legendSettings='legendSettings'>
            <e-layers>
                <e-layer :urlTemplate='urlTemplate' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
            </e-layers>
        </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Marker, Legend } from '@syncfusion/ej2-vue-maps';
import { markerDataSource } from './marker-data.js';
Vue.use(MapsPlugin);
export default {
data () {
    return {
        urlTemplate: 'https://atlas.microsoft.com/map/imagery/png?subscription-key=Your-Key &api-version=1.0&style=satellite&zoom=level&x=tileX&y=tileY',
        legendSettings: {
            visible: true,
            type: 'Markers',
            useMarkerShape:true,
            toggleLegendSettings: {
                enable: true,
                applyShapeSettings: false,
                border: {
                    color: 'green',
                    width: 2
                }
            }
        },
        shapeSettings: {
            fill: '#E5E5E5'
        },
        markerSettings: [
            {
                colorValuePath: 'color',
                shapeValuePath:'shape',
                legendText: 'country',
                visible: true,
                dataSource: markerDataSource
            }
        ]
    }
},
provide: {
    maps: [Legend, Marker]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

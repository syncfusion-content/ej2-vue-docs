---
layout: post
title: Other maps in Vue Maps component | Syncfusion
description: Learn here all about Other maps in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Other maps 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Other maps in Vue Maps component

In addition to OpenStreetMap, Bing Maps, and Azure Maps, the Maps component supports integration with other third-party online map service providers. Custom map providers can be rendered by specifying their tile server URL in the [urlTemplate](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#urltemplate) property. The Maps component supports any tile-based map provider that uses standard URL template formats for tile requests.

## URL template format

The Maps component uses a standardized URL template format for requesting map tiles. Any map service provider using the following tile URL structure is compatible with the component:

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* **{z}** - Represents the zoom level (automatically replaced by the control)
* **{x}** - Represents the tile X coordinate (automatically replaced by the control)
* **{y}** - Represents the tile Y coordinate (automatically replaced by the control)

The Maps component automatically substitutes these placeholders with the appropriate values based on the current map view, zoom level, and visible tile range. Authentication keys or API tokens required by the map provider can be appended to the URL as query parameters.

## Prerequisites

Before integrating a third-party map provider, the following prerequisites should be met:

* **Provider account** - An active account with the chosen map service provider
* **API key or token** - Valid authentication credentials for accessing the tile service
* **Service terms** - Understanding of the provider's usage terms, rate limits, and attribution requirements

## Adding TomTom Maps

The following example demonstrates how to integrate TomTom Maps. To obtain a TomTom API key, visit the [TomTom Developer Portal](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction), create an account, and generate an API key. Replace `subscription_key` in the URL template with the actual API key.

```
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
       urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
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

![TomTom Maps](../images/MapProviders/tomtom-maps.PNG)

## Enabling zooming and panning

Tile-based map layers support zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel) property with toolbar controls for user interaction.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings= 'zoomSettings'>
                <e-layers>
                    <e-layer :urlTemplate= "urlTemplate">
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
       urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key"
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

![TomTom Maps with Zooming and Panning](../images/MapProviders/tomtom-maps-zooming.PNG)

## Adding markers and navigation line

Markers can be added to tile-based map layers to highlight specific locations by setting the latitude and longitude coordinates using [markerSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#markersettings) property. Navigation lines can be drawn on top of the tile layer to visualize routes or connections between locations by configuring the [navigationLineSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#navigationlinesettings) with corresponding latitude and longitude coordinates.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings= 'zoomSettings' :centerPosition="centerPosition">
                <e-layers>
                    <e-layer :urlTemplate= "urlTemplate">
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
       urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key",
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
    maps: [ Zoom, NavigationLine, Marker ]
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

![TomTom Maps with Markers and Navigation Line](../images/MapProviders/tomtom-maps-marker-and-line.PNG)

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the tile-based map layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#type) property to **SubLayer**. The sublayer overlays the base map tiles while maintaining interactivity with the underlying map.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :urlTemplate="urlTemplate"></e-layer>
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
       urlTemplate: "http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key",
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

![TomTom Maps with Sublayer](../images/MapProviders/tomtom-map-sublayer.PNG)

## Enabling legend

A legend can be displayed with tile-based maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.

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
        urlTemplate: 'http://api.tomtom.com/map/1/tile/basic/main/level/tileX/tileY.png?key=subscription_key',
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

![TomTom Maps with Legend](../images/MapProviders/tomtom-map-legend.PNG)

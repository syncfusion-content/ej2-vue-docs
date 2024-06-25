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

Apart from OpenStreetMap and Bing Maps, you can also render Maps from other online map service providers by specifying the URL provided by those providers in the [urlTemplate](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#urltemplate) property. The URL template concept has been implemented in such a way that any online map service providers using the following template can benefit from previewing their Map in the Syncfusion Vue Maps component.

<!-- markdownlint-disable MD034 -->

Sample Template: https://< domain_name >/maps/basic/{z}/{x}/{y}.png

* "${z}" - It represents zoom factor (level).
* "${x}" - It indicates tile image x-position (tileX).
* "${y}" - It indicates tile image y-position (tileY).

In this case, the key generated for those online map service providers can also be appended to the URL. This allows to create personalized Maps with your own content and imagery.

Following is an example of how to add a TomTom map. You can generate an API key by following the steps in this [link](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction) and then adding the key to the URL.

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

Tile Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

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

Markers can be added to the layers of tile Maps by setting the corresponding location's coordinates of latitude and longitude using [e-markerSetting](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#markersettings) tag. Navigation lines can be added on top of an tile Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [e-navigationLineSetting](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#navigationlinesettings) tag.

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

Any GeoJSON shape can be rendered as a sublayer on top of the tile Maps layer for highlighting a particular continent or country in tile Maps by adding another layer and specifying the [type](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

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

The legend can be added to the tile Maps by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel/#visible) property of [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true**.

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

---
layout: post
title: Azure maps in Vue Maps component | Syncfusion
description: Learn here all about Azure maps in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Azure maps 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Azure maps in Vue Maps component

Azure Maps is yet another online Maps provider, owned by Microsoft. As like OSM and Bing Maps, it provides Maps tile images based on our requests and combines those images into a single one to display Maps area.

## Adding Azure Maps

The Azure Maps can be rendered using the [urlTemplate](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#urltemplate) property with the tile server URL provided by online map providers. In the meantime, a subscription key is required for Azure Maps. Follow the steps in this [link](https://docs.microsoft.com/en-us/azure/search/search-security-api-keys) to generate an API key, and then added the key to the URL.

>Refer to [Azure Maps Licensing](https://azure.microsoft.com/en-in/support/legal/).

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

The Azure Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a map for in-depth analysis. Panning helps to move a map around to focus the targeted area.

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
                   toolBarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
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

Markers can be added to the layers of Azure Maps by setting the corresponding location's coordinates of latitude and longitude using [e-markerSetting](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#markersettings) tag. Navigation lines can be added on top of the Azure Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [e-navigationLineSetting](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#navigationlinesettings) tag.

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

Any GeoJSON shape can be rendered as a sublayer on top of the Azure Maps layer for highlighting a particular continent or country in Azure Maps by adding another layer and specifying the [type](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#type) property of Maps layer to **SubLayer**.

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

The legend can be added to the Azure Maps by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel/#visible) property of [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true**.

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

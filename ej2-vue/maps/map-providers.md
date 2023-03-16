---
layout: post
title: Map providers in Vue Maps component | Syncfusion
description: Learn here all about Map providers in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Map providers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Map providers in Vue Maps component

Maps component support map providers such as OpenStreetMap that can be added to any layers in maps.

## Open Street Map

OpenStreetMap(OSM) is a online map provider. The OpenStreetMap allows you to view, edit and use geographical data in a collaborative way from any place on the Earth. One of the most important features in Maps component is the built-in online map provider support. By using this feature, you can render OpenStreetMap in the maps component. This provides the ability to visualize street map tiles without using any external shape files.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :urlTemplate='urlTemplate' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        urlTemplate: 'http://a.tile.openstreetmap.org/level/tileX/tileY.png'
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

## Bing Maps

Bing Maps is a online map provider for accessing the external geospatial imagery services for deep-zoom satellite view which is supported in the Maps component. This provides the ability to visualize satellite, aerial, and street maps without using any external shape files.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps id='container' :load='load'>
                <e-layers>
                    <e-layer></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default {
data () {
    return{
    }
},
methods:{
    load: function (args) {
        let map=document.getElementById('container');
        map.ej2_instances[0].getBingUrlTemplate("https://dev.virtualearth.net/REST/V1/Imagery/Metadata/AerialWithLabel?output=json&uriScheme=https&key=?").then(function(url) {
            map.ej2_instances[0].layers[0].urlTemplate= url;
        });
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
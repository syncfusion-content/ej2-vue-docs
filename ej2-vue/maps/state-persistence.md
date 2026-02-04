---
layout: post
title: State persistence in Vue Maps component | Syncfusion
description: Learn here all about State persistence in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Vue Maps component

## State Persistence

State persistence enables the Maps component to retain the current state in browser storage for state maintenance across page refreshes. This feature is controlled through the  [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/maps#enablepersistence) property which is set to **false** by default. When this property is set to **true**, specific Maps component model values are preserved even after the page is refreshed.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' enablePersistence='enablePersistence' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        enablePersistence: true,
        zoomSettings: {
            enable: true,
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
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
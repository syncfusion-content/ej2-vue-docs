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

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, NavigationLine, Marker, Zoom, LayersDirective as ELayers, LayerDirective as ELayer,
    MarkerSettingsDirective as EMarkerSettings, MarkerSettingDirective as EMarkerSetting, NavigationLineSettingsDirective as ENavigationLineSettings, NavigationLineSettingDirective as ENavigationLineSetting
 } from '@syncfusion/ej2-vue-maps';

const zoomSettings = {
    zoomFactor: 4
};

const centerPosition = {
    latitude: 29.394708,
    longitude: -94.954653
};

const urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';

const dataSource = [
    {
        latitude: 34.060620,
        longitude: -118.330491,
        name: "California"
}];

const dataSource1 = [
    {
        latitude: 40.724546,
        longitude: -73.850344,
        name: "New York"
}];

const color = "blue";

const width = 5;

const angle = 0.1;

const latitude = [34.060620, 40.724546];

const longitude = [-118.330491,-73.850344];

provide('maps',  [ NavigationLine, Marker, Zoom ]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
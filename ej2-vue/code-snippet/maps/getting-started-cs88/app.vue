<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :layers='layers' :legendSettings='legendSettings'>
            </ejs-maps>
        </div>
    </div>
</template>

<script>

import { MapsComponent, Selection, Legend } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
name: "App",
components: {
"ejs-maps":MapsComponent
},
data () {
    return {
         layers: [{
            shapeData: world_map,
            dataSource: [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}],
            shapePropertyPath: 'name',
            shapeDataPath: 'Country',
            selectionSettings: {
               enable: true,
               fill: 'blue',
               border: { color: 'white', width: 2}
            },
            shapeSettings: {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
            }
        }],
    legendSettings: {
        visible: true
    }
    }
},
provide: {
    maps: [Selection, Legend]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
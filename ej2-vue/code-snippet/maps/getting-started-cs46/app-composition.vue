<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :layers='layers'>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>

import { MapsComponent as EjsMaps } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { texas } from './texas.js';
import { california } from './california.js';

const layers = [{
        shapeData: usMap,
        shapeSettings: {
            fill: '#E5E5E5',
            border: {
                color: 'black',
                width: 0.1
            }
        }
    },
    {
        shapeData: texas,
        type: 'SubLayer',
        shapeSettings: {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        }
    },
    {
        shapeData: california,
        type: 'SubLayer',
        shapeSettings: {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        }
    }
]

</script>
<style>
    .wrapper {
        max-width: 400px;
        margin: 0 auto;
    }
</style>
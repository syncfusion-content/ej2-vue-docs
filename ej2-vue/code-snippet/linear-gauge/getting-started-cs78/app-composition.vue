<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-lineargauge
        minimum="0"
        maximum="100"
        style="display: block"
        align="center"
        id="defaultContainer5"
        :orientation="orientation"
      >
        <e-axes>
          <e-axis
            :majorTicks="majorTicks5"
            :minorTicks="minorTicks5"
            :line="line"
            :ranges="range"
            :labelStyle="labelStyle"
          >
            <e-pointers>
              <e-pointer
                :value="pointerValueOne"
                markerType="Text"
                text="Low"
                color="black"
                :textStyle="textStyle"
                offset="-30"
              ></e-pointer>
              <e-pointer
                :value="pointerValueTwo"
                markerType="Text"
                text="Moderate"
                color="black"
                :textStyle="textStyle"
                offset="-30"
              ></e-pointer>
              <e-pointer
                :value="pointerValueThree"
                markerType="Text"
                text="High"
                color="black"
                :textStyle="textStyle"
                offset="-30"
              ></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
        </div>
    </div>
</template>

<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis,
PointerDirective as EPointer, PointersDirective as EPointers } from '@syncfusion/ej2-vue-lineargauge';

const pointerValueOne = 13;
const pointerValueTwo = 48;
const pointerValueThree = 83;
const orientation = 'Horizontal';
const textStyle = {
size: '18px',
fontWeight: 'bold',
};
const majorTicks5 = {
interval: 20,
height: 7,
width: 1,
position: 'Outside',
};
const minorTicks5 = {
interval: 10,
height: 3,
position: 'Outside',
};
const labelStyle = { font: { fontFamily: 'inherit' }, position: 'Outside' };
const line = { width: 0 };
const range = [
{
start: 0,
end: 30,
color: '#FB7D55',
startWidth: 50,
endWidth: 50,
},
{
start: 30,
end: 65,
color: '#ECC85B',
startWidth: 50,
endWidth: 50,
},
{
start: 65,
end: 100,
color: '#6FC78A',
startWidth: 50,
endWidth: 50,
},
];

</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>
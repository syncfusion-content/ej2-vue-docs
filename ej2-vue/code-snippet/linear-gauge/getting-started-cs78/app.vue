

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

<script>
import Vue from 'vue';
import { LinearGaugePlugin } from '@syncfusion/ej2-vue-lineargauge';
Vue.use(LinearGaugePlugin);



export default {
    data() {
        return {
            pointerValueOne: 13,
      pointerValueTwo: 48,
      pointerValueThree: 83,
      orientation: 'Horizontal',
      textStyle: {
        size: '18px',
        fontWeight: 'bold',
      },
      majorTicks5: {
        interval: 20,
        height: 7,
        width: 1,
        position: 'Outside',
      },
      minorTicks5: {
        interval: 10,
        height: 3,
        position: 'Outside',
      },
      labelStyle: { font: { fontFamily: 'inherit' }, position: 'Outside' },
      line: { width: 0 },
      range: [
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
      ],
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



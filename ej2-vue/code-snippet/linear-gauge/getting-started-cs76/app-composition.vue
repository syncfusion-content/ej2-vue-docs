<template>
    <div id="app">
        <div class='wrapper'>
             <ejs-lineargauge animationDuration='3000'  style='display:block' align='center' id='defaultContainer' :orientation='orientation'>
                <e-annotations>
                    <e-annotation :axisIndex='axisIndex' :axisValue='axisValue' :x='positionX' zIndex='1' :y='positionY' :zIndex='zIndex' :content="content">
                    </e-annotation>
                </e-annotations>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle' >
                        <e-pointers>
                            <e-pointer :value='value' :height='height' :placement='placement' :width='width' :offset='offset' :markerType='markerType' ></e-pointer>
                        </e-pointers>
                        <e-ranges>
                        <e-range start=0 end="50" startWidth="10" endWidth="10" color="#F45656" offset="35"></e-range>
                        </e-ranges>
                    </e-axis>
                </e-axes>
             </ejs-lineargauge>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { LinearGaugeComponent as EjsLineargauge, Annotations, AxisDirective as EAxis, AxesDirective as EAxes, AnnotationDirective as EAnnotation, AnnotationsDirective as EAnnotations,
    PointerDirective as EPointer, PointersDirective as EPointers, RangeDirective as ERange, RangesDirective as ERanges } from '@syncfusion/ej2-vue-lineargauge';

const content = '<div id="pointer" style="width: 70px;margin-left:-25%;margin-top: 42%;font-size: 16px;">10 MPH</div>';
const orientation = "Horizontal";
const value = 10;
const height = 15;
const width = 15;
const offset = -40;
const markerType = 'Triangle';
const placement = 'Near';
const majorTicks = { 
    interval: 10,
    height: 20,
    color: '#9E9E9E'
};
const minorTicks = {
    interval: 2,
    height: 10,
    color: '#9E9E9E'
};
const labelStyle = {
    offset: 48,
    font: {
        fontFamily: 'inherit'
    }
};
const axisIndex = 0;
const axisValue = 10;
const positionX = 10;
const positionY = -70;
const zIndex = '1';

provide('lineargauge', [Annotations])

</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>
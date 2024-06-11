<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge style='display:block' align='center' :title='title' :titleStyle='titleStyle'
                :centerY='centerY'>
                <e-axes>
                    <e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0 maximum=14 :endAngle='endAngle'
                        :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks'
                        :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
                        <e-pointers>
                            <e-pointer :type='type1' :value='value1' :radius='pointerRadius1'
                                :markerShape='markerShape1' :imageUrl='imageUrl1' :markerWidth='markerWidth1'
                                :markerHeight='markerHeight1' :animation='animation1'></e-pointer>
                            <e-pointer :type='type2' :value='value2' :radius='pointerRadius2'
                                :markerShape='markerShape2' :imageUrl='imageUrl2' :markerWidth='markerWidth2'
                                :markerHeight='markerHeight2' :animation='animation2'></e-pointer>
                            <e-pointer :type='type3' :value='value3' :radius='pointerRadius3'
                                :markerShape='markerShape3' :imageUrl='imageUrl3' :markerWidth='markerWidth3'
                                :markerHeight='markerHeight3' :animation='animation3'></e-pointer>
                            <e-pointer :type='type4' :value='value4' :radius='pointerRadius4'
                                :markerShape='markerShape4' :imageUrl='imageUrl4' :markerWidth='markerWidth4'
                                :markerHeight='markerHeight4' :animation='animation4'></e-pointer>
                            <e-pointer :type='type5' :value='value5' :radius='pointerRadius5'
                                :markerShape='markerShape5' :imageUrl='imageUrl5' :markerWidth='markerWidth5'
                                :markerHeight='markerHeight5' :animation='animation5'></e-pointer>
                            <e-pointer :type='type6' :value='value6' :radius='pointerRadius6'
                                :markerShape='markerShape6' :imageUrl='imageUrl6' :markerWidth='markerWidth6'
                                :markerHeight='markerHeight6' :animation='animation6'></e-pointer>
                            <e-pointer :type='type7' :value='value7' :radius='pointerRadius7'
                                :markerShape='markerShape7' :imageUrl='imageUrl7' :markerWidth='markerWidth7'
                                :markerHeight='markerHeight7' :animation='animation7'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, Gradient, Annotations } from "@syncfusion/ej2-vue-circulargauge";

let rangeRadialGradient = {
    radius: '50%', innerPosition: { x: '50%', y: '50%' },
    outerPosition: { x: '50%', y: '50%' },
    colorStop: [
        { color: '#9E40DC', offset: '90%', opacity: 0.9 },
        { color: '#E63B86', offset: '160%', opacity: 0.9 }]
}
const title = 'Short Put Distance';
const titleStyle = {
    size: '18px'
};
const centerY = '57%';
const annotations = [{
    content: '12 M', radius: '108%', angle: 98, zIndex: '1'
}, {
    content: '11 M', radius: '80%', angle: 81, zIndex: '1'
}, {
    content: '10 M', radius: '50%', angle: 69, zIndex: '1'
}, {
    content: 'Doe', radius: '108%', angle: 190, zIndex: '1'
}, {
    content: 'Almaida', radius: '80%', angle: 185, zIndex: '1'
}, {
    content: 'John', radius: '50%', angle: 180, zIndex: '1'
}];
const lineStyle = {
    width: 0
};
const gaugeRadius = '90%';
const labelStyle = {
    font: {
        size: '0px'
    }
};
const majorTicks = {
    width: 0
};
const minorTicks = {
    width: 0
};
const startAngle = 200;
const endAngle = 130;
const ranges = [{
    start: 0, end: 12, radius: '115%',
    startWidth: 25, endWidth: 25,
    radialGradient: rangeRadialGradient
}, {
    start: 0, end: 11, radius: '85%',
    startWidth: 25, endWidth: 25,
    radialGradient: rangeRadialGradient
}, {
    start: 0, end: 10, radius: '55%',
    startWidth: 25, endWidth: 25,
    radialGradient: rangeRadialGradient
}]
const type1 = 'Marker';
const value1 = 12;
const markerShape1 = 'Image';
const imageUrl1 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/foot-ball.png';
const pointerRadius1 = '108%';
const markerWidth1 = 28;
const markerHeight1 = 28;
const animation1 = { duration: 1500 }
const type2 = 'Marker';
const value2 = 11;
const markerShape2 = 'Image';
const imageUrl2 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/basket-ball.png';
const pointerRadius2 = '78%';
const markerWidth2 = 28;
const markerHeight2 = 28;
const animation2 = { duration: 1200 }
const type3 = 'Marker';
const value3 = 10;
const markerShape3 = 'Image';
const imageUrl3 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/golf-ball.png';
const pointerRadius3 = '48%';
const markerWidth3 = 28;
const markerHeight3 = 28;
const animation3 = { duration: 900 };
const type4 = 'Marker';
const value4 = 12;
const markerShape4 = 'Image';
const imageUrl4 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/athletics.png';
const pointerRadius4 = '0%';
const markerWidth4 = 90;
const markerHeight4 = 90;
const animation4 = { duration: 0 };
const type5 = 'Marker';
const value5 = 0.1;
const markerShape5 = 'Image';
const imageUrl5 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/girl.png';
const pointerRadius5 = '108%';
const markerWidth5 = 28;
const markerHeight5 = 28;
const animation5 = { duration: 1500 }
const type6 = 'Marker';
const value6 = 0.1;
const markerShape6 = 'Image';
const imageUrl6 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/man-one.png';
const pointerRadius6 = '78%';
const markerWidth6 = 28;
const markerHeight6 = 28;
const animation6 = { duration: 1500 };
const type7 = 'Marker';
const value7 = 0.1;
const markerShape7 = 'Image';
const imageUrl7 = 'https://ej2.syncfusion.com/vue/demos/src/circular-gauge/images/man-two.png';
const pointerRadius7 = '48%';
const markerWidth7 = 28;
const markerHeight7 = 28;
const animation7 = { duration: 1500 }

provide('circulargauge', [Gradient, Annotations]);

</script>
<style>
.wrapper {
    max-width: 500px;
    margin: 0 auto;
}
</style>
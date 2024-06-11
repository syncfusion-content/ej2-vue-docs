<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis>
                        <e-pointers>
                            <e-pointer value=90 color='#007DD1' pointerWidth=25 radius='50%' :needleTail='needleTail'
                                :cap='cap'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer } from "@syncfusion/ej2-vue-circulargauge";

const cap = {
    radius: 15,
    color: 'white',
    border: {
        color: '#007DD1',
        width: 5
    }
}
const needleTail = {
    length: '22%',
    color: '#007DD1'
}

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>

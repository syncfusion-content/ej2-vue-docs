<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis>
                        <e-pointers>
                            <e-pointer value=90 :border='border' type='Marker' markerWidth=15 markerHeight=15
                                markerShape='Triangle' radius='100%' color='white'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective,
        "e-pointers": PointersDirective,
        "e-pointer": PointerDirective
    },
    data: function () {
        return {
            border: {
                color: '#007DD1',
                width: 2
            }
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>

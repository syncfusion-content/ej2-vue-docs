<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes='axes'>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>

import { CircularGaugeComponent, Annotations } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent
    },
    data: function () {
        return {
            axes: [{
                minimum: 0,
                maximum: 12,
                startAngle: 0,
                endAngle: 360,
                lineStyle: { width: 0 },
                ranges: [{
                    start: 0, end: 3,
                    color: 'rgba(29,29,29,0.7)'
                }, {
                    start: 3, end: 12,
                    color: 'rgba(168,145,102,0.1)'
                }],
                annotations: [{
                    angle: 270,
                    radius: '40%',
                    content: '<div id="subGauge" style="width:90px;height:90px;"></div>'
                }, {
                    angle: 90,
                    radius: '40%',
                    content: '<div id="time"><span>6:30 PM</span></div>',
                    zIndex: '1'
                }],
                labelStyle: {
                    hiddenLabel: 'First'
                },
                pointers: [{
                    pointerWidth: 5,
                    radius: '40%',
                    value: 6.5,
                    color: 'rgb(29,29,29)',
                    border: { width: 1, color: 'rgb(29,29,29)' },
                    cap: {
                        color: 'rgb(29,29,29)',
                        radius: 0,
                        border: {
                            width: 0.2,
                            color: 'red'
                        }
                    },
                    needleTail: {
                        length: '0%'
                    },
                    animation: {
                        enable: false
                    }
                },
                {
                    radius: '60%',
                    pointerWidth: 5,
                    color: 'rgb(29,29,29)',
                    border: {
                        width: 1,
                        color: 'rgb(29,29,29)'
                    },
                    value: 6,
                    cap: {
                        color: 'rgb(29,29,29)',
                        radius: 0,
                        border: {
                            width: 0.2,
                            color: 'red'
                        }
                    },
                    needleTail: {
                        length: '0%'
                    },
                    animation: {
                        enable: false
                    }
                },
                {
                    radius: '70%',
                    pointerWidth: 4,
                    value: 9.8,
                    color: 'rgba(168,145,102,1)',
                    cap: {
                        color: 'rgba(168,145,102,1)',
                        radius: 4,
                        border: {
                            width: 0.2,
                            color: 'rgba(168,145,102,1)'
                        }
                    },
                    needleTail: {
                        color: 'rgba(168,145,102,1)',
                        length: '20%'
                    },
                    animation: {
                        enable: false,
                        duration: 500
                    }
                }]
            }]
        }
    },
    provide: {
        circulargauge: [Annotations]
    }
};

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>

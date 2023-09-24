


<template>
    <div id="app">
        <ejs-heatmap id="heatmap" :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource'
            :cellSettings='cellSettings'></ejs-heatmap>
    </div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from '@syncfusion/ej2-vue-heatmap';
Vue.use(HeatMapPlugin);

export default {
    data: function () {
        return {
            dataSource: [
                [[4, 39], [3, 8], [1, 3], [1, 10], [4, 4], [2, 15]],
                [[4, 28], [5, 92], [5, 73], [3, 1], [3, 4], [4, 126]],
                [[4, 45], [5, 152], [0, 44], [4, 54], [5, 243], [2, 45]]
            ],
            titleSettings: {
                text: 'Commercial Aviation Accidents and Fatalities by year 2015 - 2017',
                textStyle: {
                    size: '15px',
                    fontWeight: '500',
                    fontStyle: 'Normal',
                    fontFamily: 'inherit'
                }
            },
            xAxis: {
                labels: ['2015', '2016', '2017']
            },
            yAxis: {
                labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
            },
            cellSettings: {
                labelTemplate:
                    '<div style="width:25px;height:20px;text-align:center;padding-top:2px;background-color:#5BBB9C; border: 1px solid #000000; border-radius:50%;font-weight:bold;">${value}</div>'
            }
        }
    },
    provide: {
        heatmap: [Tooltip, Legend]
    }
}
</script>



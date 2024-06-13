<template>
    <div id="app">
        <ejs-heatmap id="heatmap" :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource'
            :dataSourceSettings='dataSourceSettings' :paletteSettings='paletteSettings' :cellSettings='cellSettings'
            :legendSettings='legendSettings' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
  </template>
  <script setup>
  
  import { provide } from 'vue';
  import { HeatMapComponent as EjsHeatmap, Legend, Adaptor, Tooltip } from '@syncfusion/ej2-vue-heatmap';
  
  
  const dataSource = [
    [0, 0, [4, 39]], [0, 1, [3, 8]], [0, 2, [1, 3]], [0, 3, [1, 10]], [0, 4, [4, 4]], [0, 5, [2, 15]],
    [1, 0, [4, 28]], [1, 1, [5, 92]], [1, 2, [5, 73]], [1, 3, [3, 1]], [1, 4, [3, 4]], [1, 5, [4, 126]],
    [2, 0, [4, 45]], [2, 1, [5, 152]], [2, 2, [0, 44]], [2, 3, [4, 54]], [2, 4, [5, 243]], [2, 5, [2, 45]]
  ];
  const dataSourceSettings = {
    isJsonData: false,
    adaptorType: 'Cell'
  };
  const titleSettings= {
    text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
    textStyle: {
        size: '15px',
        fontWeight: '500',
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    }
  };
  const xAxis = {
    labels: ['2017', '2016', '2015']
  };
  const yAxis = {
    labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
  };
  const paletteSettings = {
    palette: [
        { color: '#C06C84' },
        { color: '#6C5B7B' },
        { color: '#355C7D' }
    ],
    type: "Gradient"
  };
  const legendSettings = {
    visible: true,
  };
  const cellSettings = {
    border: {
        width: 1
    },
    tileType: 'Bubble',
    bubbleType: 'SizeAndColor'
  };
  
  const tooltipRender = (args) => {
    args.content = ['Year ' + ' : ' + args.xLabel + '<br/>' + 'Months ' + ' : ' + args.yLabel + '<br/>'
        + 'Accidents ' + ' : ' + args.value[0].bubbleData + '<br/>' + 'Fatalities ' + ' : '
        + args.value[1].bubbleData];
  };
  
  provide('heatmap', [Tooltip, Legend, Adaptor]);
  
  </script>
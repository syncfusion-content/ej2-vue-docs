<template>
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings' :tooltip='tooltip' 
            :highlightColor='highlightColor' :highlightMode='highlightMode'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartHighlight3D } from "@syncfusion/ej2-vue-charts";


     const seriesData= [
          { x: 'Jan', y: 13 }, 
          { x: 'Feb', y: 13 },
          { x: 'Mar', y: 17 }, 
          { x: 'Apr', y: 13.5 }
      ];
     const tilt= -45;
     const legendSettings= {
        visible: false
      };
     const highlightColor= 'red';
     const highlightMode= 'Point';
     const tooltip= { 
        enable: true,
        format: '${series.name} ${point.x} : ${point.y}',
        fill: '#7bb4eb',
        border: {
            width: 2,
            color: 'grey'
        }
      };

  provide('circularchart3d',  [PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartHighlight3D]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>
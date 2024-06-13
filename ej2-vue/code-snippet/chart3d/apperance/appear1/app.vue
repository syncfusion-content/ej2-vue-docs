<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :palettes="pallets" :primaryYAxis="primaryYAxis">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="gold" name="Sales">
        </e-chart3d-series>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="silver" name="Sales">
        </e-chart3d-series>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="bronze" name="Sales">
        </e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script>
import {
  Chart3DComponent,
  Chart3DSeriesCollectionDirective,
  Chart3DSeriesDirective,
  ColumnSeries3D,
  Category3D
} from '@syncfusion/ej2-vue-charts';

export default {
  name: "App",
  components: {
    "ejs-chart3d": Chart3DComponent,
    "e-chart3d-series-collection": Chart3DSeriesCollectionDirective,
    "e-chart3d-series": Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { country: 'USA', gold: 50, silver: 70, bronze: 45 },
        { country: 'China', gold: 40, silver: 60, bronze: 55 },
        { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
        { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
        { country: 'France', gold: 50, silver: 45, bronze: 35 },
        { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
        { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
        { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        maximum: 80
      },
      pallets: ['#E94649', '#F6B53F', '#6FAAB0', '#C4C24A']
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>
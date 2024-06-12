<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :subTitle='subTitle' :subTitleStyle='subTitleStyle' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartComponent, ColumnSeries, Category, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";

export default {
name: "App",
components: {
"ejs-chart":ChartComponent,
"e-series-collection":SeriesCollectionDirective,
"e-series":SeriesDirective,

},

  data() {
    return {
      seriesData: [
             { country: "USA", gold: 50 },
             { country: "China", gold: 40 },
             { country: "Japan", gold: 70 },
             { country: "Australia", gold: 60 },
             { country: "France", gold: 50 },
             { country: "Germany", gold: 40 },
             { country: "Italy", gold: 40 },
             { country: "Sweden", gold: 30 }
              ],
        primaryXAxis: {
           valueType: 'Category',
           title: 'Countries'
        },
      title: "Olympic Medals",
      subTitle:'In the year of 2014',
      subTitleStyle:{
            fontFamily: "Arial",
            fontStyle: 'italic',
            fontWeight: 'regular',
            color: "#E27F2D"
        }
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  },
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>
<template>
    <div id="app">
    <ejs-chart style='display:block' align='center' id='chartcontainer' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
           :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y'> </e-series>
            </e-series-collection>
        </ejs-chart>

        <ejs-button id='togglebtn' @click='print' cssClass="e-flat" :iconCss='iconCss'
                  isPrimary="true">Print</ejs-button>
    </div>
</template>
<script>

import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Legend, Tooltip,DateTime, Category, Highlight } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-chart":ChartComponent,
"e-series-collection":SeriesCollectionDirective,
"e-series":SeriesDirective,
"ejs-button":ButtonComponent,

},

  data: function() {
    return {
      seriesData: [
      { x: 'DEU', y: 35.5 }, { x: 'CHN', y: 18.3 }, { x: 'ITA', y: 17.6 }, { x: 'JPN', y: 13.6 },
      { x: 'US', y: 12 }, { x: 'ESP', y: 5.6 }, { x: 'FRA', y: 4.6 }, { x: 'AUS', y: 3.3 },
      { x: 'BEL', y: 3 }, { x: 'UK', y: 2.9 }
        
    ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 40,
        interval: 10,
        lineStyle: {width : 0},
        minorTickLines: {width: 0},
        majorTickLines: {width : 0},
      },
      chartArea: {
        border: {
          width: 0
        }
      },
    };
  },
  provide: {
     chart: [ColumnSeries, Legend, Tooltip, Category,DateTime, Highlight]
  },
   methods: {
        print: function () {
      var svg = document.querySelector("#chartcontainer_svg");
        var svgData = new XMLSerializer().serializeToString(svg);
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        var svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        var ctx = canvas.getContext("2d");
        var img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
        img.onload = function() {
          ctx.drawImage(img, 0, 0);
          var imagedata = canvas.toDataURL("image/png");
          console.log(imagedata); // printed base64 in console
          canvas.remove();
        };
    },
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
  .e-export-icon::before {
   content: '\e728';
 }
</style>
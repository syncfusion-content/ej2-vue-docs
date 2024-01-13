
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

Vue.use(Chart3DPlugin);

let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/vue/production/api/orders',
  adaptor: new ODataAdaptor()
});
let query = new Query();

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :wallColor='wallColor' :enableRotation='enableRotation' 
            :rotation='rotation' :tilt='tilt' :depth='depth'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight' :query='queries'></e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: dataManager,
      queries: query,
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
      },
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
});
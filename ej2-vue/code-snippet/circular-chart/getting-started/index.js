
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :title='title' :tilt='tilt'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='fruit' yName='share'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { fruit: 'Apple', share: 25 },
        { fruit: 'Mango', share: 20 },
        { fruit: 'Orange', share: 18 },
        { fruit: 'Banana', share: 17 },
        { fruit: 'Grapes', share: 20 }
      ],
      title: "Browser Market Shares in November 2023",
      tilt: -45
    };
  },
  provide: {
    circularchart3d: [PieSeries3D]
  }
});
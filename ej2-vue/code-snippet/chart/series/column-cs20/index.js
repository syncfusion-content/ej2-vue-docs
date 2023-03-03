
import Vue from "vue";
import { ChartPlugin,LineSeries,Zoom, Legend,DateTime,ScrollBar} from "@syncfusion/ej2-vue-charts";
import { Browser, Internationalization } from "@syncfusion/ej2-base";
Vue.use(ChartPlugin);
let intl = new Internationalization();
export let GetDateTimeData = (start, end) => {
  let series = [];
  let point1;
  let date;
  let value = 80;
  let option = {
    skeleton: "full",
    type: "dateTime"
  };
  let dateParser = intl.getDateParser(option);
  let dateFormatter = intl.getDateFormat(option);
  for (let i = 1; start <= end; i++) {
    date = Date.parse(dateParser(dateFormatter(start)));
    if (Math.random() > 0.5) {
      value += Math.random() * 10 - 5;
    } else {
      value -= Math.random() * 10 - 5;
    }
    if (value < 0) {
      value = getRandomInt(20, 40);
    }
    let point1 = { x: new Date(date), y: Math.round(value) };
    new Date(start.setDate(start.getDate() + 1));
    series.push(point1);
  }
  return series;
};

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart ref='chart' :theme='theme' :chartArea='chartArea' width='80%' height='450' id='chartid' :scrollEnd='scrollEnd'
            :primaryXAxis='primaryXAxis' :legendSettings='legend' :title='title' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='series' xName= 'x' yName= 'y' type='Line' :animation='animation'>
                </e-series>
            </e-series-collection>
         </ejs-chart>
    </div>
`,

  data() {
    return {
      primaryXAxis: {
        title: "Day",
        valueType: "DateTime",
        skeleton: "yMMM",
        skeletonType: "Date",
        edgeLabelPlacement: "Shift",
        scrollbarSettings: {
          range: {
            minimum: new Date(2009, 0, 1),
            maximum: new Date(2014, 0, 1)
          },
          enable: true,
          pointsLength: 1000
        }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Server Load",
        labelFormat: "{value}MB"
      },
      legend: {
        visible: true
      },
      series: seriesData,
      animation: { enable: false },
      chartArea: {
        border: {
          width: 0
        }
      },
      title: "Network Load"
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }
  methods: {
    scrollEnd: function(args) {
      if (lazymodeid.value === "Range") {
        this.$refs.chart.ej2Instances.series[0].dataSource = GetDateTimeData(
          args.currentRange.minimum,
          args.currentRange.maximum
        );
      }
      this.$refs.chart.dataBind();
    },

});
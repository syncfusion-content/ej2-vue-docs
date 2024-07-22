
import Vue from "vue";
import { GridPlugin ,InfiniteScroll} from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin} from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

let names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
let data = (count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      TaskID: i + 1,
      Engineer: names[Math.round(Math.random() * names.length)] || names[0],
      Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
      Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
      Status: status[Math.round(Math.random() * status.length)] || status[0]
    });
  }
  return result;
};


new Vue({
  el: '#app',
  template: `
  <div id="app">
  <div style="padding: 20px 0px 20px 0px;display:flex">
    <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Cache mode</label>
    <ejs-switch ref="switch" id="switch" :change="toggleCacheMode"></ejs-switch>
  </div>
  <div style="padding: 30px 17px 0 0">
    <ejs-grid ref="grid" :dataSource='data' height=300 :enableInfiniteScrolling='true' :pageSettings='options'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
            <e-column field='Engineer' width=100></e-column>
            <e-column field='Designation' width=100></e-column>
            <e-column field='Estimation' textAlign='Right' width=100></e-column>
            <e-column field='Status' width=100></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</div>
`,

data() {
  return {
    data: data(1000),
    options: { pageSize: 50 },
  };
},
 methods: {
 toggleCacheMode(args){
    this.$refs.grid.ej2Instances.infiniteScrollSettings.enableCache = args.checked;
    this.$refs.grid.ej2Instances.refresh();   
  }
 },
provide: {
    grid: [InfiniteScroll]
}

});

import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
import { sparkdata, getSparkData, textData } from "./datasource.js";
import { RowDataBoundEventArgs, getObject } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { Sparkline, ISparklineLoadEventArgs, SparklineTheme } from '@syncfusion/ej2-charts';

Vue.use(TreeGridPlugin);
Vue.use(SparklinePlugin);

let winloss: Sparkline;


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex='0' :height='260' :rowHeight='83' childMapping='Children'>
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width=95></e-column>
                <e-column field='Name' headerText='Name' width=110></e-column>
                <e-column field='DOB' headerText=' Start Date' textAlign='Right' format='yMd' width=90></e-column>
                <e-column field='Year GR' textAlign='Center' :template='template1'  width=120></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

 data() {
    return {
      data: textData,
       template1: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<ejs-sparkline :id='elemid' height='50px' width='150px' type='WinLoss' valueType='Numeric' fill='#3C78EF' negativePointColor='#f7a816' tiePointColor='darkgray'  :dataSource='sparkData(data.EmployeeID)'></ejs-sparkline> `,
                data: function() {
                    return {
                        data: {},
                    }
                },
                methods:{
                    sparkData: function(id: number){
                        return getSparkData('column', id);
                    }
                },
                computed: {
                    elemid: function() {
                        return 'spkwl' + this.data.EmployeeID;
                     },
          })}
    };
    };
  }

});
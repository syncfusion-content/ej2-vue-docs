
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";

let contentVue = Vue.component("contentTemplate", {
  template: '<div style="color:#757575; font-family:Roboto; font-size:14px;padding-top: 26px">Customized Needle</div>',
  data() {
    return {
      data: {}
    };
  }
});
let contentTemplate = function() {
  return { template: contentVue };
};

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div class='wrapper'>
    <div id="app">
        <ejs-circulargauge>
            <e-axes>
                <e-axis  :radius='gauge3Radius' :startAngle='startAngle' :endAngle='endAngle' :lineStyle= 'lineStyle' :labelStyle ='labelStyle'
                :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' minimum=0 maximum=100
                :annotations='annotations'>
                    <e-pointers>
                        <e-pointer value=70  radius= '80%' color='green' :pointerWidth='pointerWidth' :needleStartWidth='needleStartWidth'
                        :needleEndWidth='needleEndWidth' :cap= 'cap' :needleTail= 'needleTail' :animation= 'animation'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
  </div>
  </div>
`,

    data: function () {
        return {
            annotations:[{
                content:contentTemplate,
                zIndex: '1'
            }],
            gauge3Radius: '90%',
            startAngle:270,
            endAngle:90,
            lineStyle: {
                width: 3,
               color: '#1E7145'
            },
            labelStyle: {
                position:'Outside',
                font: {
                    color: '#1E7145',
                    size: '0px'
                }
            },
            majorTicks: {
                interval: 100,
                height: 0,
                width: 1
            },
            minorTicks: {
                height: 0,
                width: 0
            },
            cap: {
               radius: 8,
               color: 'green'
            },
            needleTail: {
                length:'0%'
            },
            animation:{
                enable:'true',
               duration:1000
            },
            pointerWidth: 2,
            needleStartWidth: 4,
            needleEndWidth: 4
        }
},
provide: {
    circulargauge: [Annotations]
},

});

import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height= "height" :beforeServiceInvoke="beforeServiceInvoke"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        catalog: 'Adventure Works DW 2008 SE',
                cube: 'Adventure Works',
                providerType: 'SSAS',
                url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
                localeIdentifier: 1033,
                rows: [
                    { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
                ],
                columns: [
                    { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                    { name: '[Measures]', caption: 'Measures' },
                ],
                values: [
                    { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                    { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
                ]
      },
      height: 350
    }
  },
  methods: {
        beforeServiceInvoke: function (args) {
            args.internalProperties.headers['accept-language'] = 'es-ES';
            console.log(args.internalProperties.headers);
        }
    }

});
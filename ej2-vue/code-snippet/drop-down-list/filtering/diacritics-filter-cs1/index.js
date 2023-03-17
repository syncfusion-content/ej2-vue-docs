
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { DataManager,Query,ODataV4Adaptor,Predicate } from "@syncfusion/ej2-data";


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:20px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select a value' filterBarPlaceholder='e.g: aero' :ignoreAccent='ignoreAccent' :allowFiltering='allowFiltering' :dataSource='dataSource'></ejs-dropdownlist>
    </div>
  </div>
`,

  data () {
    return {
        dataSource : [
            'Aeróbics',
            'Aeróbics en Agua',
            'Aerografía',
            'Aeromodelaje',
            'Águilas',
            'Ajedrez',
            'Ala Delta',
            'Álbumes de Música',
            'Alusivos',
            'Análisis de Escritura a Mano'
        ],
        allowFiltering : true,
        ignoreAccent : true
    }
  }

});
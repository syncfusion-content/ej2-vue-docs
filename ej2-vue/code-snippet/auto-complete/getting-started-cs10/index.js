
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
     <div class='autocomplete'>
        <ejs-autocomplete :dataSource='data' :ignoreAccent='ignoreAccent'
        :placeholder="waterMark" ></ejs-autocomplete>
      </div>
  </div>
`,

  name: 'app',
   data () {
    return {
      data: [
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
            ignoreAccent: true,
            waterMark: 'e.g: aero'

    }
  }

});
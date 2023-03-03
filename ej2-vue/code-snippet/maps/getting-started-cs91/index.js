
import Vue from 'vue';
import { MapsPlugin, Selection } from '@syncfusion/ej2-vue-maps';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps ref='maps'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :selectionSettings='selectionSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
        <ejs-button id='selection' @click.native='select'>selection</ejs-button>
        <ejs-button id='unselection' @click.native='unselect'>unselection</ejs-button>
    </div>
`,

data () {
    return{
        shapeData: world_map,
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        }
    }
},
provide: {
    maps: [Selection]
},
methods:{
    select:function(){
        this.$refs.maps.shapeSelection(0, "continent", "Asia", true);
    },
    unselect:function(){
        this.$refs.maps.shapeSelection(0, "continent", "Asia", false);
    }
}


});
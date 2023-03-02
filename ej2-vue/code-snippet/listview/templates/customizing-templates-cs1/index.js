
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

Vue.use(ListViewPlugin);
Vue.use(ButtonPlugin);

var demoVue = Vue.component("demo", {
  template: `<div class="headerContainer"><span class="fruitHeader">Fruits</span><ejs-button id="search" iconCss='e-icons e-search-icon' cssClass='e-small e-round' isPrimary='true'></ejs-button><ejs-button id="add" iconCss='e-icons e-add-icon' cssClass='e-small e-round' isPrimary='true'></ejs-button><ejs-button id="sort" iconCss='e-icons e-sort-icon' cssClass='e-small e-round' isPrimary='true'></ejs-button></div>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div id = 'flat-list'>
    <!-- ListView element -->
    <ejs-listview id='element' :dataSource='data' :headerTemplate='template' showHeader='true'></ejs-listview>
    </div>
  </div>
`,

  data: function() {
    return {
      data: [
    { text: 'Date', id: '1', imgUrl: './dates.jpg' },
    { text: 'Fig', id: '2', imgUrl: './fig.jpg' },
    { text: 'Apple', id: '3', imgUrl: './apple.png' },
    { text: 'Apricot', id: '4', imgUrl: './apricot.jpg' },
    { text: 'Grape', id: '5', imgUrl: './grape.jpg' },
    { text: 'Strawberry', id: '6', imgUrl: './strawberry.jpg' },
    { text: 'Pineapple', id: '7', imgUrl: './pineapple.jpg' },
    { text: 'Melon', id: '8', imgUrl: './melon.jpg' },
    { text: 'Lemon', id: '9', imgUrl: './lemon.jpg' },
    { text: 'Cherry', id: '10', imgUrl: './cherry.jpg' },
    ],
    template: function () {
                return { template : demoVue}
            }
    };
  }

});
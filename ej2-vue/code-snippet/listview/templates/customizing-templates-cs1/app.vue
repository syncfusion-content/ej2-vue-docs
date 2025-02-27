<template>
  <div class="control-section">
    <div id='flat-list'>
      <ejs-listview id='element' :dataSource='data' headerTemplate='headtemplate' showHeader='true'>
        <template v-slot:headtemplate>
          <div class="headerContainer">
            <span class="fruitHeader">Fruits</span>
            <ejs-button id="search" iconCss='e-icons e-search-icon' cssClass='e-small e-round' isPrimary='true'></ejs-button>
            <ejs-button id="add" iconCss='e-icons e-add-icon' cssClass='e-small e-round' isPrimary='true'></ejs-button>
            <ejs-button id="sort" iconCss='e-icons e-sort-icon' cssClass='e-small e-round' isPrimary='true'></ejs-button>
          </div>
        </template>
      </ejs-listview>
      </div>
  </div>
</template>
<script>
import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
import { createApp } from "vue";

enableRipple(true);

const app=createApp();

export default {
  name: "App",
  components: {
    "ejs-listview": ListViewComponent,
    "ejs-button":ButtonComponent
  },

  data: function () {
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
    };
  }
}
</script>
<style>
#element {
  display: block;
  max-width: 353px;
  margin: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
}

#element .e-list-header {
  padding: 0;
}

#element .headerContainer {
  width: 350px;
  height: 48px;
  line-height: 48px;
  background: rgb(2, 120, 215);
  color: white;
  margin-bottom: 3px;
}

.headerContainer .fruitHeader {
  margin-left: 20px;
  font-weight: 500;
  font-size: 22px;
}

.headerContainer #add,
.headerContainer #sort,
.headerContainer #search {
  float: right;
  margin-right: 15px;
  margin-top: 7px;
  background: white;
  color: black
}

.headerContainer .e-search-icon::before {
  content: '\e993';
}


.headerContainer .e-add-icon::before {
  content: '\e823';
}

.headerContainer .e-sort-icon::before {
  content: '\e840';
}
</style>
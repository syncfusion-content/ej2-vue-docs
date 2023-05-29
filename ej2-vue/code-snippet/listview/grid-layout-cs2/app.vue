

<template>
    <div id="sample">
        <div class="headerContainer">
            <div class="e-input-group">
                <input id="search" ref='searchEle' class="e-input" type="text" placeholder="Search fruits" @keyup='onKeyUp'/>
                <span class="e-input-group-icon e-input-search"></span>
            </div>
            <ejs-button id="sort" class="e-control e-btn e-small e-round e-primary e-icon-btn" v-on:click='sortItems' title="Sort fruits" data-ripple="true">
                <span class="e-btn-icon e-icons e-sort-icon-ascending"></span>
            </ejs-button>
            <ejs-button id="add" class="e-control e-btn e-small e-round e-primary e-icon-btn" v-on:click='addItem' title="Add fruit" data-ripple="true">
                <span class="e-btn-icon e-icons e-add-icon"></span>
            </ejs-button>
            <ejs-dialog id="dialog" ref='dialogObj' width='300px' :content='content' :visible='visible' header='Add Fruit' showCloseIcon='true' :buttons='addButtons' ></ejs-dialog>
        </div>
            <ejs-listview id='element' ref='listViewInstance' :dataSource='fruitsdata' :template='listTemplate' sortOrder='Ascending' :actionComplete='wireEvents'>
            </ejs-listview>
    </div>
</template>
<style>
#listImage {
    width: 55px;
    height: 55px;
    margin-left: 25px;
}

#sample {
    max-width: 440px;
    margin: auto;
    box-shadow: 0 3px 6px lightgray;
}

.headerContainer {
    height: 48px;
    line-height: 48px;
    background: rgb(2, 120, 215);
    color: white;
    margin-bottom: 3px;
}

.headerContainer .e-input-group {
    margin-left: 20px;
    width: 200px;
    background: white;
    height: 31px;
}

.headerContainer #search {
    height: 21px;
    margin-left: 10px;
}

#listDialog .input_name {
    margin-bottom: 20px;
}

.headerContainer #add,
.headerContainer #sort {
    float: right;
    margin-right: 15px;
    margin-top: 7px;
    background: white;
    color: black
}

.headerContainer .e-input-search::before {
    font-family: 'e-icons';
    content: '\e961';
    margin-top: 3px;
}

.headerContainer .e-input-group .e-input-group-icon.e-input-search {
    padding: 0 10px 0 10px;
}

#element .e-list-item {
    height: 110px;
    width: 110px;
    float: left;
    padding: 0;
    position: relative;
    user-select: none;
}

#element .e-delete-btn {
    float: right;
    visibility: hidden;
    margin-top: -10px;
}

#element .e-delete-btn.e-btn.e-small.e-round {
    width: 2em;
    height: 2em;
}

#element .e-btn.e-small.e-round .e-btn-icon.delete-icon {
    font-size: 9px;
}

#element .e-list-item:hover .e-delete-btn {
    visibility: visible;
    background: red;
    border-radius: 50%;
}

#element .fruits {
    height: inherit;
    width: inherit;
    padding: 10px 0 10px 0;
}

#element .fruitName {
    text-align: center;
}

.headerContainer .e-add-icon::before {
    content: '\e823';
}

#element .delete-icon::before {
    content: '\e7fc';
    color: white;
}

.headerContainer .e-sort-icon-ascending::before {
    content: '\e840';
}

.headerContainer .e-sort-icon-descending::before {
    content: '\e83f';
}
.e-dialog.e-control.e-popup.e-popup-open {
  max-height:361px !important;
}
</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { closest, enableRipple } from '@syncfusion/ej2-base';
import { DataManager, Query } from "@syncfusion/ej2-data";
enableRipple(true);

Vue.use(ListViewPlugin);
Vue.use(DialogPlugin);

var listVue = Vue.component("demo", {
  template: `<div class="fruits"><div class="first"><img id="listImage" :src="data.imgUrl" alt="fruit" /><ejs-button class="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn" data-ripple="true"><span class="e-btn-icon e-icons delete-icon"></span></ejs-button></div><div class="fruitName">{{data.text}}</div></div>`,
  data() {
    return {
      data: {}
    };
  }
});

var dialogVue = Vue.component("demo", {
  template: `<div id="listDialog"><div class="input_name"><label for="name">Fruit Name: </label><input id="name" class="e-input" type="text" placeholder="Enter fruit name"/></div><div><label for="imgurl">Fruit Image: </label><input id="imgurl" class="e-input" type="text" placeholder="Enter image url"/></div></div>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  data: function() {
        return {
    fruitsdata: [
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
    listTemplate: function () {
      return { template : listVue};
    },
    visible: false,
     content: function () {
      return { template : dialogVue};
    },
    addButtons: [{
        click: this.dlgButtonClick, buttonModel: { content: 'Add', isPrimary: true }
    }]
  };
},
methods: {
  wireEvents: function() {
    Array.prototype.forEach.call(document.getElementsByClassName('e-delete-btn'), (ele) => {
        ele.addEventListener('click', this.onDeleteBtnClick);
    });
    },
addItem: function() {
    (document.getElementById("name")).value = "";
    (document.getElementById("imgurl")).value = "";
    this.$refs.dialogObj.show();
},
sortItems: function() {
    let ele = document.getElementById("sort").firstElementChild;
    let des = ele.classList.contains('e-sort-icon-descending') ? true : false;
    if (des) {
        ele.classList.remove('e-sort-icon-descending');
        ele.classList.add('e-sort-icon-ascending');
        this.$refs.listViewInstance.sortOrder = 'Ascending';
    } else {
        ele.classList.remove('e-sort-icon-ascending');
        ele.classList.add('e-sort-icon-descending');
        this.$refs.listViewInstance.sortOrder = 'Descending'
    }
    this.$refs.listViewInstance.dataBind();
    this.wireEvents();
},
onKeyUp: function(e) {
    let value = this.$refs.searchEle.value;
    let data = new DataManager(this.fruitsdata).executeLocal(
        new Query().where("text", "startswith", value, true)
    );
    if (!value) {
        this.$refs.listViewInstance.dataSource = this.fruitsdata.slice();
    } else {
        this.$refs.listViewInstance.dataSource = data;
        this.$refs.listViewInstance.dataBind();
    }
},
onDeleteBtnClick: function(e) {
    e.stopPropagation();
    let li = closest(e.currentTarget, '.e-list-item');
    let data = this.$refs.listViewInstance.findItem(li);
    this.$refs.listViewInstance.removeItem(data);
    new DataManager(this.fruitsdata).remove('id', { id: data.id });
},
 dlgButtonClick: function() {
    let name = (document.getElementById("name")).value;
    let url = (document.getElementById("imgurl")).value;
    let id = Math.random() * 10000;
    this.$refs.listViewInstance.addItem([{ text: name, id: id, imgUrl: url }]);
    this.fruitsdata.push({ text: name, id: id, imgUrl: url });
    this.$refs.listViewInstance.$el.ej2_instances[0].element.querySelector('[data-uid="'+ id + '"]').getElementsByClassName('e-delete-btn')[0].addEventListener('click', this.onDeleteBtnClick);
    this.$refs.dialogObj.hide();
}
}
}
</script>



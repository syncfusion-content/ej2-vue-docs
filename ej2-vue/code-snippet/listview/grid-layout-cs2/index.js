
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


new Vue({
	el: '#app',
	template: `
    <div id="sample">
        <div class="headerContainer">
            <div class="e-input-group">
                <input id="search" ref='searchEle' class="e-input" type="text" placeholder="Search fruits" @keyup='onKeyUp'/>
                <span class="e-input-group-icon e-icons e-input-search"></span>
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
`,

  data: function() {
        return {
    fruitsdata: [
      { text: "Date", id: "1", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/dates.jpg" },
      { text: "Fig", id: "2", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/fig.jpg" },
      { text: "Apple", id: "3", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apple.png" },
      { text: "Apricot", id: "4", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apricot.jpg" },
      { text: "Grape", id: "5", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/grape.jpg" },
      { text: "Strawberry", id: "6", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/strawberry.jpg" },
      { text: "Pineapple", id: "7", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/pineapple.jpg" },
      { text: "Melon", id: "8", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/melon.jpg" },
      { text: "Lemon", id: "9", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/lemon.jpg" },
      { text: "Cherry", id: "10", imgUrl: "https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/cherry.jpg" }
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

});
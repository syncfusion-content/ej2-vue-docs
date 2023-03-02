
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";

Vue.use(ListViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(DialogPlugin);

var listVue = Vue.component("demo", {
  template: ` <div><span class="templatetext">{{data.Name}} </span> <span class="designationstyle"><ejs-button :id='data.Id' class="e-but" iconCss='e-icons e-add-icon' cssClass='e-small e-round'></ejs-button></span></div>`,
  data() {
    return {
      data: {}
    };
  }
});

var dialogVue = Vue.component("demo", {
  template: `<ejs-listview id="list" showHeader=true headerTitle='Favorite' width='200px'></ejs-listview>`,
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
    <ejs-listview ref='listviewInstance' id='templatelist' :dataSource='data' :fields='fields' width='350' :template='listTemplate'>
    </ejs-listview>
     <ejs-dialog id='dialog' ref='dialogInstance' width='200px' :content='dialogcontent' :animationSettings='animation' :visible='visible' showCloseIcon='true' :position='position' :created='createList'>
      </ejs-dialog>
  </div>
`,

  data: function() {
         return {
    data: [{ "Id": "Brooke", "Name": "Brooke" },
{ "Id": "Claire", "Name": "Claire" },
{ "Id": "Erik", "Name": "Erik" },
{ "Id": "Grace", "Name": "Grace" },
{ "Id": "Jacob", "Name": "Jacob" }],
    fields: { text:'Name' },
    listTemplate: function () {
      return { template : listVue}
    },
    brookeTag : [{ "id": "list11", "Name": "Discover Music" },
{ "id": "list12", "Name": "Sales and Events" },
{ "id": "list13", "Name": "Categories" },
{ "id": "list14", "Name": "MP3 Albums" },
{ "id": "list15", "Name": "More in Music" },
],
    claireTag : [{ "id": "list21", "Name": "Songs" },
{ "id": "list22", "Name": "Bestselling Albums" },
{ "id": "list23", "Name": "New Releases" },
{ "id": "list24", "Name": "Bestselling Songs" },
],
    erikTag : [{ "id": "list31", "Name": "Artwork" },
{ "id": "list32", "Name": "Abstract" },
{ "id": "list33", "Name": "Acrylic Mediums" },
{ "id": "list34", "Name": "Creative Acrylic" },
{ "id": "list35", "Name": "Canvas Art" }
],
    graceTag : [{ "id": "list41", "Name": "Rock" },
{ "id": "list42", "Name": "Gospel" },
{ "id": "list43", "Name": "Latin Music" },
{ "id": "list44", "Name": "Jazz" },
],
    jacobTag: [{ "id": "list51", "Name": "100 Albums - $5 Each" },
{ "id": "list52", "Name": "Hip-Hop and R&B Sale" },
{ "id": "list53", "Name": "CD Deals" }
],
    visible: false,
    datasource: { },
    animation: {effect: 'None'},
    dialogcontent: function () {
      return { template : dialogVue}
    },
    position: {},
    };
  },
  created(){
    this.datasource = { "Brooke": this.brookeTag, "Claire": this.claireTag, "Erik": this.erikTag, "Grace": this.graceTag, "Jacob": this.jacobTag };
  },
  mounted(){
      for (let i = 0; i < this.data.length; i++) {
        document.getElementById(this.data[i].Id).addEventListener("click", (e) =>{
        this.renderDialog(e.currentTarget.id);
    });
}
  },
  methods: {
    createList: function(e) {
    let listElem = document.getElementById('dialog').querySelector("#list");
    let listObj = document.getElementById('dialog').querySelector("#list").ej2_instances[0];
    listObj.dataSource = this.datasource.Brooke;
    listObj.fields = this.fields;
    listObj.addEventListener('select', ()=> { this.addTag(event);});
    listObj.appendTo(listElem);
    },
    renderDialog: function(id){
     if (document.getElementsByClassName('e-popup-open').length !== 0) {
        this.$refs.dialogInstance.hide();
    }
    else {
        this.listObj = document.getElementById('dialog').querySelector("#list").ej2_instances[0];
        this.listObj.dataSource = this.datasource[id];
        this.listObj.dataBind();
        this.$refs.dialogInstance.position = { X: document.querySelector('.e-add-icon').getBoundingClientRect().left + 50, Y: document.querySelector('.e-add-icon').getBoundingClientRect().top - 5 };
        this.$refs.dialogInstance.show();
    }
   },
   addTag: function(e) {
    let listTag = document.createElement('span');
    listTag.className = 'advanced-option';
    let labelElem = document.createElement('span');
    labelElem.className = 'label';
    let deleteElem = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = this.removeTag;
    labelElem.innerHTML = e.target.textContent;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    this.$refs.listviewInstance.$el.ej2_instances[0].element.querySelector('.e-active').appendChild(tag);
},
removeTag: function() {
   this.$refs.listviewInstance.$el.ej2_instances[0].selectedLI.children[1].remove();
}
}

});
<template>
  <div id="sample">
    <ejs-listview ref='listviewInstance' id='templatelist' :dataSource='data' :fields='fields' width='350'
      template='listTemplate'>
      <template v-slot:listTemplate="{ data }">
        <div><span class="templatetext">{{ data.Name }} </span> <span class="designationstyle"><ejs-button :id='data.Id'
              class="e-but" iconCss='e-icons e-add-icon' cssClass='e-small e-round'></ejs-button></span></div>
      </template>
    </ejs-listview>
    <ejs-dialog id='dialog' ref='dialogInstance' width='200px' content='dialogcontent' :animationSettings='animation'
      :visible='visible' showCloseIcon='true' :position='position'>
      <template v-slot:dialogcontent>
        <ejs-listview id="list" :dataSource="datasource.Brooke" :select="addTag" :fields="fields" showHeader=true
          headerTitle='Favorite' width='200px'></ejs-listview>
      </template>
    </ejs-dialog>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { DialogComponent as EjsDialog } from "@syncfusion/ej2-vue-popups";
import { onMounted, onBeforeMount, ref } from "vue";

const listviewInstance = ref(null);
const dialogInstance = ref(null);

const data = [{ "Id": "Brooke", "Name": "Brooke" },
{ "Id": "Claire", "Name": "Claire" },
{ "Id": "Erik", "Name": "Erik" },
{ "Id": "Grace", "Name": "Grace" },
{ "Id": "Jacob", "Name": "Jacob" }];
const fields = { text: 'Name' };
const brookeTag = [{ "id": "list11", "Name": "Discover Music" },
{ "id": "list12", "Name": "Sales and Events" },
{ "id": "list13", "Name": "Categories" },
{ "id": "list14", "Name": "MP3 Albums" },
{ "id": "list15", "Name": "More in Music" },
];
const claireTag = [{ "id": "list21", "Name": "Songs" },
{ "id": "list22", "Name": "Bestselling Albums" },
{ "id": "list23", "Name": "New Releases" },
{ "id": "list24", "Name": "Bestselling Songs" },
];
const erikTag = [{ "id": "list31", "Name": "Artwork" },
{ "id": "list32", "Name": "Abstract" },
{ "id": "list33", "Name": "Acrylic Mediums" },
{ "id": "list34", "Name": "Creative Acrylic" },
{ "id": "list35", "Name": "Canvas Art" }
];
const graceTag = [{ "id": "list41", "Name": "Rock" },
{ "id": "list42", "Name": "Gospel" },
{ "id": "list43", "Name": "Latin Music" },
{ "id": "list44", "Name": "Jazz" },
];
const jacobTag = [{ "id": "list51", "Name": "100 Albums - $5 Each" },
{ "id": "list52", "Name": "Hip-Hop and R&B Sale" },
{ "id": "list53", "Name": "CD Deals" }
];
const visible = false;
let datasource = {};
const animation = { effect: 'None' };
let position = {};

onBeforeMount(() => {
  datasource = { "Brooke": brookeTag, "Claire": claireTag, "Erik": erikTag, "Grace": graceTag, "Jacob": jacobTag };
});
onMounted(() => {
  for (let i = 0; i < data.length; i++) {
    document.getElementById(data[i].Id).addEventListener("click", (e) => {
      renderDialog(e.currentTarget.id);
    });
  }
});

const renderDialog = (id) => {
  if (document.getElementsByClassName('e-popup-open').length !== 0) {
    dialogInstance.value.hide();
  }
  else {
    let listObj = document.getElementById('dialog').querySelector("#list").ej2_instances[0];
    listObj.dataSource = datasource[id];
    listObj.dataBind();
    dialogInstance.value.ej2Instances.position = { X: document.querySelector('.e-add-icon').getBoundingClientRect().left + 50, Y: document.querySelector('.e-add-icon').getBoundingClientRect().top - 5 };
    dialogInstance.value.show();
  }
};
const addTag = (e) => {
  let listTag = document.createElement('span');
  listTag.className = 'advanced-option';
  let labelElem = document.createElement('span');
  labelElem.className = 'label';
  let deleteElem = document.createElement('span');
  deleteElem.className = 'delete';
  deleteElem.onclick = removeTag;
  labelElem.innerHTML = e.text;
  listTag.appendChild(labelElem);
  listTag.appendChild(deleteElem);
  let tag = document.createElement('span');
  tag.className = 'advanced-option-list';
  tag.appendChild(listTag);
  listviewInstance.value.$el.ej2_instances[0].element.querySelector('.e-active').appendChild(tag);
};
const removeTag = () => {
  listviewInstance.value.$el.ej2_instances[0].selectedLI.children[1].remove();
};

</script>

<style>
#sample {
  padding: 40px;
}

.advanced-option-list {
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 4px;
  overflow: auto;
}

.advanced-option {
  border: 1px solid #0078d7;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  padding: 0 20px 0 5px;
  margin: 0 3px 1px 0;
  float: left;
  position: relative;
  background: white;
  line-height: 21px;
}

.advanced-option .label {
  color: #0078d7;
  font-size: 10px;
}

.advanced-option .delete {
  background: url(https://research.isg-one.com/Assets/img/Content/icn/tiny-del.png) right center no-repeat;
  padding-left: 10px;
  padding-top: 2px;
  right: 0;
  position: absolute;
  top: 1px;
  cursor: pointer;
  height: 16px;
  width: 30px;
}

.designationstyle {
  float: right;
  position: relative;
  right: 10px;
}

.cont-bg {
  font-size: 17px;
  height: 46px;
  padding-top: 10px;
  width: 100%;
}

.designationstyle .e-add-icon::before {
  content: '\e823';
}

#sample .e-list-item {
  height: auto;
}

.e-dialog .e-dlg-header-content+.e-dlg-content {
  margin-top: -18px;
}
</style>
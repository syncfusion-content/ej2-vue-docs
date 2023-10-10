

<template>
  <div class="control-section">     
    <ejs-listview id='ui-list' ref="list" :dataSource='listData' :showHeader='header' :fields='fields' :headerTitle='title'
        :height='height' :cssClass='cssClass' :enableVirtualization='enableUi' :actionComplete='onActionComplete'
        :actionBegin='onActionBegin' :template="'gTemplate'">
            <template v-slot:gTemplate="{ data }">
                <div class="e-list-wrapper e-list-avatar" >
                    <span :class="['e-avatar e-avatar-circle ' + data.icon + ' showUI']" v-if="data.imgUrl == undefined">{{ data.icon }}</span>
                    <span :class="['e-avatar e-avatar-circle ' + data.icon + ' hideUI']" v-if="data.imgUrl !== undefined">{{ data.icon }}</span> 
                    <img :class="['e-avatar e-avatar-circle showUI']" :src="data.imgUrl" v-if="data.imgUrl !== undefined" />
                    <img :class="['e-avatar e-avatar-circle hideUI']" :src="data.imgUrl" v-if="data.imgUrl == undefined" />
                    <span class="e-list-content">{{ data.name }}</span>
                </div>
            </template>
        </ejs-listview>
  </div>
</template>
<style>
#app {
    color: #008cff;
    height: 40px;
    left: 30%;
    position: absolute;
}

#ui-list {
    display: block;
    max-width: 400px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
    cursor: pointer;
}

button {
    float: right
}

#icon {
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 500;
    float: left;
    margin-top: 17px;
    margin-right: 35px;
}

img {
    border-radius: 50%;
    border: #ddd;
    border: 1px solid rgba(40, 40, 40, 0.12);
}

.R {
    background: purple;
}

.M {
    background: pink;
}

.A {
    background: green;
}

.S {
    background: lightskyblue;
}

.J {
    background: orange;
}

.N {
    background: blue;
}

#ui-list .e-list-item {
    height: 80px;
    border: #ddd;
    border: 1px solid rgba(184, 184, 184, 0.12);
}

.list-container {
    width: inherit;
    height: 100%;

}

.showUI {
    display: inline;
}

.hideUI {
    display: none;
}

.content {
    height: 100%;
    float: left;
}

.name {
    height: 100%;
    font-size: 20px;
    font-weight: 600;
    line-height: 78px;
}

</style>
<script>
import Vue from "vue";
import { ListViewPlugin, Virtualization } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
let listData = [];

export default {
    beforeCreate: function() {
listData = [
    { name: 'Nancy', icon: 'N', id: '0', },
    { name: 'Andrew', icon: 'A', id: '1' },
    { name: 'Janet', icon: 'J', id: '2' },
    { name: 'Margaret', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/margaret.png', id: '3' },
    { name: 'Steven', icon: 'S', id: '4' },
    { name: 'Laura', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/laura.png', id: '5' },
    { name: 'Robert', icon: 'R', id: '6' },
    { name: 'Michael', icon: 'M', id: '7' },
    { name: 'Albert', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/albert.png', id: '8' },
    { name: 'Nolan', icon: 'N', id: '9' }
];

for (let i = 10; i <= 1000; i++) {
    let index = parseInt((Math.random() * 10).toString());
    listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
}
},
  data: function() {
    return {
      listData: listData,     
      header: true,
      title: "Contacts",
      fields: { text: "name" },
      height: 500,
      enableUi: true,
    };
  },
  provide: {
    listview: [Virtualization]
  }
}
</script>



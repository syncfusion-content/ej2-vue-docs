<template>
    <div>
      <div id="text1">
        <input ref='textboxEle' class="e-input" type="text" id="firstInput" placeholder="Filter" title="Type in a name"
          @keyup="onFirstKeyUp" />
      </div>
      <ejs-listview ref='firstListObj' id='list-1' :dataSource='firstListData' :fields='fields' sortOrder='Ascending'
        :select="onFirstListSelect"></ejs-listview>
      <div id="btn">
        <ejs-button ref='firstBtnObj' id="firstBtn" @click="firstbtnclick"> &gt;&gt; </ejs-button>
        <ejs-button ref='secondBtnObj' id="secondBtn" :disabled='disabled' @click="secondbtnclick"> &gt; </ejs-button>
        <ejs-button ref='thirdBtnObj' id="thirdBtn" :disabled='disabled' @click="thirdbtnclick"> &lt; </ejs-button>
        <ejs-button ref='fourthBtnObj' id="fourthBtn" @click="fourthbtnclick"> &lt;&lt; </ejs-button>
      </div>
  
      <div id="text2">
        <input ref='textEle' class="e-input" type="text" id="secondInput" placeholder="Filter" title="Type in a name"
          @keyup="onSecondKeyUp" />
      </div>
      <ejs-listview ref='secondListObj' id='list-2' :dataSource='secondListData' :fields='fields' sortOrder='Ascending'
        :select="onSecondListSelect"></ejs-listview>
    </div>
  </template>
  
  <script setup>
  
  import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
  import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
  import { enableRipple } from '@syncfusion/ej2-base';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  import { onMounted, ref } from 'vue';
  
  enableRipple(true);
  
  
  const textboxEle = ref(null);
  const textEle = ref(null);
  const firstListObj = ref(null);
  const secondListObj = ref(null);
  const firstBtnObj = ref(null);
  const secondBtnObj = ref(null);
  const thirdBtnObj = ref(null);
  const fourthBtnObj = ref(null);
  
  let firstListData = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" }
  ];
  let secondListData = [
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];
  const fields = { text: "text", id: "id" };
  const disabled = true;
  
  onMounted(() => {
    firstListData = firstListObj.value.ej2Instances.dataSource.slice();
    secondListData = secondListObj.value.ej2Instances.dataSource.slice();
  });
  
  const firstbtnclick = () => {
    secondListObj.value.ej2Instances.dataSource = Array.prototype.concat.call(firstListObj.value.ej2Instances.dataSource, secondListObj.value.ej2Instances.dataSource);
    secondListObj.value.ej2Instances.dataBind();
    updateFirstListData();
    firstListObj.value.ej2Instances.removeMultipleItems(firstListObj.value.$el.ej2_instances[0].liCollection);
    firstListData = firstListData.concat(firstListObj.value.ej2Instances.dataSource);
    secondListData = secondListObj.value.ej2Instances.dataSource.slice();
    firstBtnObj.value.$el.disabled = true;
    onFirstKeyUp();
    setButtonState();
  };
  
  const secondbtnclick = () => {   //Here, the selected list items are moved to the second list on clicking move button
    let e = firstListObj.value.ej2Instances.getSelectedItems();
    secondListObj.value.ej2Instances.dataSource = Array.prototype.concat.call(secondListObj.value.ej2Instances.dataSource, e.data);
    firstListObj.value.ej2Instances.removeItem(e.item);
    firstListData = firstListObj.value.ej2Instances.dataSource;
    secondListData = secondListObj.value.ej2Instances.dataSource.slice();
    onFirstKeyUp();
    secondBtnObj.value.$el.disabled = true;
    setButtonState();
  }
  
  const thirdbtnclick = () => {  //Here, the selected list items are moved to the first list on clicking move button
    let e = secondListObj.value.ej2Instances.getSelectedItems();
    firstListObj.value.ej2Instances.dataSource = Array.prototype.concat.call(firstListObj.value.ej2Instances.dataSource, e.data);
    secondListObj.value.ej2Instances.removeItem(e.item);
    secondListData = secondListObj.value.ej2Instances.dataSource;
    firstListData = firstListObj.value.ej2Instances.dataSource.slice();
    onSecondKeyUp();
    thirdBtnObj.value.$el.disabled = true;
    setButtonState();
  };
  
  const fourthbtnclick = () => {   //Here, all list items are moved to the first list on clicking move all button
    firstListObj.value.ej2Instances.dataSource = Array.prototype.concat.call(firstListObj.value.ej2Instances.dataSource, secondListObj.value.ej2Instances.dataSource);
    updateSecondListData();
    secondListObj.value.ej2Instances.removeMultipleItems(secondListObj.value.$el.ej2_instances[0].liCollection);
    secondListData = secondListData.concat(secondListObj.value.ej2Instances.dataSource);
    firstListData = firstListObj.value.ej2Instances.dataSource.slice();
    onSecondKeyUp();
    setButtonState();
  
  };
  
  const updateFirstListData = () => {  //Here, the ListView data source is updated to the first list
    Array.prototype.forEach.call(firstListObj.value.$el.ej2_instances[0].liCollection, (list) => {
      firstListData.forEach((data, index) => {
        if (list.innerText.trim() === data.text) {
          firstListData.splice(index, 1)
        }
      });
    });
    textboxEle.value = '';
    let ds = [];
    firstListData.forEach((data) => {
      ds.push(data);
    });
    firstListData = ds;
  
  };
  
  //Here, the ListView dataSource is updated for the second list
  const updateSecondListData = () => {
    Array.prototype.forEach.call(secondListObj.value.$el.ej2_instances[0].liCollection, (list) => {
      secondListData.forEach((data, index) => {
        if (list.innerText.trim() === data.text) {
          secondListData.splice(index, 1);
        }
      });
    });
    textEle.value = '';
    let ds = [];
    secondListData.forEach((data) => {
      ds.push(data);
    });
    secondListData = ds;
  };
  const onFirstListSelect = () => {
    secondBtnObj.value.$el.disabled = false;
  };
  const onSecondListSelect = () => {
    thirdBtnObj.value.$el.disabled = false;
  };
  //Here, filtering is handled using the dataManager for the first list
  const onFirstKeyUp = () => {
    let value = textboxEle.value.value;
    let data = new DataManager(firstListData).executeLocal(new Query().where('text', 'startswith', value, true));
    if (!value) {
      firstListObj.value.ej2Instances.dataSource = firstListData.slice();
    } else {
      firstListObj.value.ej2Instances.dataSource = data;
    }
  }
  //Here, filtering is handled using the dataManager for the second list
  const onSecondKeyUp = () => {
    let value = textEle.value.value;
    let data = new DataManager(secondListData).executeLocal(new Query().where('text', 'startswith', value, true));
    if (!value) {
      secondListObj.value.ej2Instances.dataSource = secondListData.slice();
    } else {
      secondListObj.value.ej2Instances.dataSource = data;
    }
  };
  //Here, the state of the button is changed
  const setButtonState = () => {
    if (firstListObj.value.ej2Instances.dataSource.length) {
      firstBtnObj.value.$el.disabled = false;
    } else {
      firstBtnObj.value.$el.disabled = true;
      secondBtnObj.value.$el.disabled = true;
    }
  
    if (secondListObj.value.ej2Instances.dataSource.length) {
      fourthBtnObj.value.$el.disabled = false;
    } else {
      fourthBtnObj.value.$el.disabled = true;
      thirdBtnObj.value.$el.disabled = true;
    }
  
  };
  
  
  </script>
  
  <style>
  #list-1,
  #list-2 {
    width: 40%;
    height: 430px;
    box-shadow: 0 1px 4px #ddd;
    border-bottom: 1px solid #ddd;
  }
  
  #firstList,
  #secondList {
    margin-top: 13px;
  }
  
  .e-btn {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
  
  #btn {
    float: left;
    width: 5%;
    padding-left: 30px;
    margin-top: 67px;
  }
  
  #list-1 {
    float: left;
  }
  
  #list-2 {
    float: right;
  }
  
  #firstInput {
    width: 40%;
  }
  
  #secondInput {
    margin-left: 102px;
    width: 51.4%;
  }
  
  #text2 {
    margin-top: -23px;
    margin-left: 194px;
  }
  </style>
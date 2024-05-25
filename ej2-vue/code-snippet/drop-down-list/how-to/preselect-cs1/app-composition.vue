<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='countries' :dataSource='countryData' :index='countryindex' :fields='countryfields'
        :change='onCountryChange' placeholder='Select a country'></ejs-dropdownlist>
      <div class="padding-top">
        <ejs-dropdownlist id='states' :dataSource='stateData' :index='stateindex' :fields='statefields'
          :stateenabled='stateenabled' :change='onStateChange' placeholder='Select a state'></ejs-dropdownlist>
      </div>
      <div class="padding-top">
        <ejs-dropdownlist id='cities' :dataSource='cityData' :index='cityindex' :enabled='cityenabled'
          :fields='cityfields' placeholder='Select a city'></ejs-dropdownlist>
      </div>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';

const countryData = [
  { CountryName: 'United States', CountryId: '1' },
  { CountryName: 'Australia', CountryId: '2' }
];
const stateData = [
  { StateName: 'New York', CountryId: '1', StateId: '101' },
  { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
  { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
];
const cityData = [
  { CityName: 'Albany', StateId: '101', CityId: 201 },
  { CityName: 'Beacon ', StateId: '101', CityId: 202 },
  { CityName: 'Emporia', StateId: '102', CityId: 206 },
  { CityName: 'Hampton ', StateId: '102', CityId: 205 },
  { CityName: 'Hobart', StateId: '105', CityId: 213 },
  { CityName: 'Launceston ', StateId: '105', CityId: 214 }
]
const countryfields = { value: 'CountryId', text: 'CountryName' }
const statefields = { value: 'StateId', text: 'StateName' };
const cityfields = { text: 'CityName', value: 'CityId' };
const countryindex = 1;
const stateindex = 0;
const cityindex = 0;
const cityenabled = false;
const stateenabled = false;

const onCountryChange = function (e) {
  var countryObj = document.getElementById('countries').ej2_instances[0];
  var stateObj = document.getElementById('states').ej2_instances[0];
  var cityObj = document.getElementById('cities').ej2_instances[0];
  //Query the data source based on country DropDownList selected value
  stateObj.query = new Query().where('CountryId', 'equal', countryObj.value);
  // enable the state DropDownList
  stateObj.enabled = true;
  //clear the existing selection.
  stateObj.text = null;
  // bind the property changes to state DropDownList
  stateObj.dataBind();
  //clear the existing selection in city DropDownList
  cityObj.text = null;
  //disabe the city DropDownList
  cityObj.enabled = false;
  //bind the property cahnges to City DropDownList
  cityObj.dataBind();
}
const onStateChange = function (e) {
  var stateObj = document.getElementById('states').ej2_instances[0];
  var cityObj = document.getElementById('cities').ej2_instances[0];
  // Query the data source based on state DropDownList selected value
  cityObj.query = new Query().where('StateId', 'equal', stateObj.value);
  // enable the city DropDownList
  cityObj.enabled = true;
  //clear the existing selection
  cityObj.text = null;
  // bind the property change to city DropDownList
  cityObj.dataBind();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#container .padding-top {
  padding-top: 35px;
}
</style>

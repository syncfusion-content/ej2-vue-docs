<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='countries' ref='countries' :query='Query1' :dataSource='countryData' :index='countryindex'
        :fields='countryfields' :change='onCountryChange' placeholder='Select a country'></ejs-dropdownlist>
      <div class="padding-top">
        <ejs-dropdownlist id='states' ref='states' :query='Query2' :dataSource='stateData' :index='stateindex'
          :fields='statefields' :enabled='stateenabled' :change='onStateChange'
          placeholder='Select a state'></ejs-dropdownlist>
      </div>
      <div class="padding-top">
        <ejs-dropdownlist id='cities' ref='cities' :query='Query3' :dataSource='cityData' :index='cityindex'
          :enabled='cityenabled' :fields='cityfields' placeholder='Select a city'></ejs-dropdownlist>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';

const countries = ref(null);
const states = ref(null);
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
];
const countryfields = { value: 'CountryId', text: 'CountryName' };
const statefields = { value: 'StateId', text: 'StateName' };
const cityfields = { text: 'CityName', value: 'CityId' };
let countryindex = 1;
let stateindex = 0;
let cityindex = 0;
let cityenabled = false;
let stateenabled = false;
let Query1 = null;
let Query2 = null;
let Query3 = null;

const onCountryChange = function () {
  Query2 = new Query().where('CountryId', 'equal', countries.value.ej2Instances.value);
  stateenabled = true;
}
const onStateChange = function () {
  Query3 = new Query().where('StateId', 'equal', states.value.ej2Instances.value);
  cityenabled = true;
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

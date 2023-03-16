

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
          <ejs-dropdownlist id='countries' ref='countries' :query='Query1' :dataSource='countryData' :index='countryindex' :fields='countryfields' :change='onCountryChange' placeholder='Select a country'></ejs-dropdownlist>
        <div class="padding-top">
          <ejs-dropdownlist id='states' ref='states' :query='Query2' :dataSource='stateData' :index='stateindex' :fields='statefields' :enabled='stateenabled' :change='onStateChange' placeholder='Select a state'></ejs-dropdownlist>
        </div>
        <div class="padding-top">
          <ejs-dropdownlist id='cities' ref='cities' :query='Query3' :dataSource='cityData' :index='cityindex' :enabled='cityenabled' :fields='cityfields' placeholder='Select a city'></ejs-dropdownlist>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { Query } from '@syncfusion/ej2-data';

export default {
  data () {
    return {
      countryData: [
        { CountryName: 'United States', CountryId: '1' },
        { CountryName: 'Australia', CountryId: '2' }
      ],
      stateData: [
        { StateName: 'New York', CountryId: '1', StateId: '101' },
        { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
        { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
      ],
      cityData : [
        { CityName: 'Albany', StateId: '101', CityId: 201 },
        { CityName: 'Beacon ', StateId: '101', CityId: 202 },
        { CityName: 'Emporia', StateId: '102', CityId: 206 },
        { CityName: 'Hampton ', StateId: '102', CityId: 205 },
        { CityName: 'Hobart', StateId: '105', CityId: 213 },
        { CityName: 'Launceston ', StateId: '105', CityId: 214 }
      ],
      countryfields : { value: 'CountryId', text: 'CountryName' },
      statefields : { value: 'StateId', text: 'StateName' },
      cityfields : { text: 'CityName', value: 'CityId' },
      countryindex : 1,
      stateindex : 0,
      cityindex : 0,
      cityenabled : false,
      stateenabled : false,
      Query1: null,
      Query2: null,
      Query3: null
    }
  },
  methods: {
        onCountryChange: function(e) {
            this.Query2 = new Query().where('CountryId', 'equal', this.$refs.countries.ej2Instances.value);
            this.stateenabled = true;
        },
        onStateChange: function(e) {
            this.Query3 = new Query().where('StateId', 'equal', this.$refs.states.ej2Instances.value);
            this.cityenabled = true;
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  #container .padding-top {
    padding-top: 35px;
}
</style>



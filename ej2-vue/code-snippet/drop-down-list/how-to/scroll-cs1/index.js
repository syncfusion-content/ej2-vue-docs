
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style ='padding: 50px'>
        <h4> You can close the opened popup by scroll the page.</h4>
    </div>
    <div id='container' style="margin:0 auto; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' popupHeight="220px" :dataSource='sportsData' placeholder='Select a game'></ejs-dropdownlist>
    </div>
  </div>
`,

  data (){
    return {
      sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis']
    }
  }
}

document.onscroll = () =>  {
            var dropObj = document.getElementById("dropdownlist"); //to get dropdown list object
            dropObj.ej2_instances[0].hidePopup(); // hide the popup using hidePopup method

});

    import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registeration
    
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='sportsData' popupHeight="200px" popupWidth="250px" placeholder="select a game"></ejs-combobox>
    </div>
  </div>
`,

        name: 'App',
        components: {
            "ejs-combobox": ComboBoxComponent
        },
        data (){
            return {
                sportsData:['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis']
            }
        }
    
});
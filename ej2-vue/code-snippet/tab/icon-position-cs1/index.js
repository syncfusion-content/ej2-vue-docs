
import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
Vue.use(TabPlugin);

new Vue({
	el: '#app',
	template: `
<div id="wrapper" style='margin-top: 20px'>
   <div id='content' style="margin: 0px auto">
          <div id="default" style="padding-top:20px;width:250px">
            <div class='row'>
                <div>
                    <label> Icon Position </label>
                </div><br/>
                <div>
                    <ejs-dropdownlist ref='iconPosition' :dataSource='iconData' :change='onChange' :value='value' :fields='fields' :popupHeight='height'></ejs-dropdownlist>
                </div>
            </div>
        </div>
        <br/>
     <div>
    <div id="app">
    <ejs-tab id='element' ref="element">
        <e-tabitems>
                   <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                    <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
                    <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</div>
</div>
</div>
`,

  name: 'app',
   data: function(){
        return {
          iconData : [
        { Id: '1', position: 'left', text: 'Left' },
        { Id: '2', position: 'right', text: 'Right'},
        { Id: '3', position: 'top',text: 'Top' },
        { Id: '4', position: 'bottom', text: 'Bottom' }
        ],
      fields: { text: 'text', value: 'position' },
      height :'220px',
      value : 'left',

          headerText0: { 'text': 'Twitter', 'iconCss': 'e-twitter' },
          headerText1: { 'text': 'Facebook', 'iconCss': 'e-facebook' },
          headerText2: { 'text': 'WhatsApp', 'iconCss': 'e-whatsapp' },

        content0: 'Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets".' +
        'Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter' +
        'through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and has more than 25' +
        'offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass' +
        'and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million users posting' +
        '340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.',

         content1: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February' +
        '4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum,' +
        'Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s membership to Harvard students,' +
        'but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support' +
        'for students at various other universities and later to high-school students.',

         content2: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription' +
         'business model. It uses the Internet to send text messages, images, video, user location and audio media messages to' +
         'other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10]' +
         'making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired' +
         'by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.',

        }
   },
   methods:{
      onChange: function(e) {
        var tabObj =  this.$refs.element.ej2Instances;
        var listObj =  this.$refs.iconPosition.ej2Instances;
        console.log(tabObj);
        for(let i: number = 0; i < tabObj.items.length; i++) {
            tabObj.items[i].header.iconPosition = listObj.value;
        }
    }
}

});
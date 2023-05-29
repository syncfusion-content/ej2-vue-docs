
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
                    <label> Header Style </label>
                </div><br/>
                <div>
                    <ejs-dropdownlist ref='headerStyles' :dataSource='headerData' :change='onChange' :value='value' :fields='fields' :popupHeight='height'></ejs-dropdownlist>
                </div>
            </div>
        </div>
        <br/>
     <div>
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
`,

  name: 'app',
     data: function(){
        return {
         headerData : [
        { Id: 'header1', headerStyle: 'default', text: 'Default' },
        { Id: 'header2', headerStyle: 'fill', text: 'Fill'},
        { Id: 'header3', headerStyle: 'background',text: 'Background' },
        { Id: 'header4', headerStyle: 'accent', text: 'Accent' }
        ],
      fields: { text: 'text', value: 'headerStyle' },
      height :'220px',
      value : 'default',

          headerText0: { text: 'ASP.NET' },
          headerText1: { text: 'ASP.NET MVC' },
          headerText2: { text: 'JavaScript' },

         content0: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
        'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
        'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
        'to Microsoft\'\s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
        'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
        'ASP.NET components to process SOAP messages.',

         content1: 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
        'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
        'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
        'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.',

         content2: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
        'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
        'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
        'both game development and the creation of desktop applications.',

        }
        },
        methods:{

      onChange: function(e){
       var tabObj =  this.$refs.element.ej2Instances;
        var listObj =  this.$refs.headerStyles.ej2Instances;
        this.removeStyleClass();
        if (listObj.value === 'fill') {
            tabObj.element.classList.add('e-fill');
        } else if (listObj.value === 'background') {
            tabObj.element.classList.add('e-background');
        } else if (listObj.value === 'accent') {
            tabObj.element.classList.add('e-background');
            tabObj.element.classList.add('e-accent');
        }
    }

      removeStyleClass: function(e) {
        var tabObj =  this.$refs.element.ej2Instances;
        tabObj.element.classList.remove('e-fill');
        tabObj.element.classList.remove('e-background');
        tabObj.element.classList.remove('e-accent');
    }

        }

});
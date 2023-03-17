
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <div id="breadcrumb-control">
        <div class="header"><b>Enable Navigation- false</b></div><br />
        <ejs-breadcrumb :enableNavigation='false'>
            <e-breadcrumb-items>
                <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
                <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
                <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
                <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
            </e-breadcrumb-items>
        </ejs-breadcrumb>
        <br />
        <br/>
        <div class="header"><b>Enable Navigation- true</b></div><br />
        <ejs-breadcrumb :enableNavigation='true'>
            <e-breadcrumb-items>
                <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
                <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
                <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
                <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
            </e-breadcrumb-items>
        </ejs-breadcrumb>
    </div>

</div>
`,

  data: function() {
        return {};
  }

});

import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";
import { ChipListPlugin  } from "@syncfusion/ej2-vue-buttons";
Vue.use(BreadcrumbPlugin);
Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-breadcrumb cssClass="e-breadcrumb-chips" :itemTemplate="chipTemplate">
  <e-breadcrumb-items>
    <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
    <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
    <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
    <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
`,

  data: function() {
    return {
      chipTemplate:() => {
        return {
          template : Vue.component('itemTemplate', {
            template:
            `<ejs-chiplist id="chip-default">
              <e-chips>
                <e-chip :text="data.text"></e-chip>
               </e-chips>
            </ejs-chiplist>`
            }
          )
        }
      },
    };
  }

});
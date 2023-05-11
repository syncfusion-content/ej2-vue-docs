---
layout: post
title: Template in Vue Common control | Syncfusion
description: Learn here all about Template in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Syncfusion Vue Components

Syncfusion Vue components are rendered with a pre-defined layout or structure that is used to define how the component should be rendered on the user interface. The user wants to customise the appearance of the component and add functionality that is specific to the needs of the application. Syncfusion Vue components have the option to achieve this using template support.

## Types of templates

Syncfusion Vue components have three types of templates, such as:

* [Slot template](#Slot-template)
* [Inline template](#Inline-template)
* [External template](#External-template)

## Slot template

The Syncfusion Vue components do support [slots](https://vuejs.org/guide/components/slots.html), which can help reduce the number of properties that need to be defined and increase the readability of the component. This is because using slots allows defining the content or behaviour of the component in the parent component rather than in the component's own code. This can make it easier to understand the purpose and functionality of the component at a glance and make the component more modular and flexible.

In the Vue component, the `v-slot` directive is used to define a slot template in the component's template where users can insert custom content. Refer to the following code sample.

```
<ejs-grid ref="grid" :dataSource="ds">
  <e-columns>
    <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
    <e-column field="CustomerName" headerText="Customer Name" width=150 />
    <e-column field="ShipCountry" headerText="Ship Country" width=150 :template="'cTemplate'">
      <template v-slot:cTemplate>
        <ejs-button :content="ShipCountry"></ejs-button>
      </template>
    </e-column>
  </e-columns>
</ejs-grid>
```

### Render scope

In a single-page application, there may be a need to access the parent component scope in the template. The slot content has access to the data scope of the parent component. To access the component's data source value inside the template, pass the props ({data}) to the `v-slot` directive. Expressions within the slot can access the component's data source.

```
<template v-slot:templateName="{data}">
  <ejs-button :content="data.ShipCountry"></ejs-button>
</template>
```

### Named slot

The Syncfusion Vue components support multiple templates. Each template is differentiated by its name. To render the slot content to the corresponding slot outlet, the name of each slot must map to the name of the corresponding property. 

```
<template v-slot:templateName></template>
```

> When passing a slot to a component, ensure that the component's property value is of the "string" type.

An example of a Grid component sample with a named slot (cTemplate) template is shown below.

```
<ejs-grid ref="grid" :dataSource="ds">
  <e-columns>
    <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
    <e-column field="CustomerName" headerText="Customer Name" width=150 />
    <e-column field="ShipCountry" headerText="Ship Country" width=150 :template="'cTemplate'"/>
  </e-columns>
  <template v-slot:cTemplate="{data}">
    <ejs-button :content="data.ShipCountry"></ejs-button>
  </template>
</ejs-grid>
```

The slot template can also be used to insert content into `nested tags` within a component. In the below code example, `cTemplate` is rendered in the nested tag `<e-column>`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/common/slot-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/slot-cs1" %}

## Inline template

The user can use the `Vue.component` method to add custom content to the template that can be used in the Syncfusion Vue components. The template elements can be added to `template` attribute of the `Vue.component` method. Refer to the below code snippet to create the template element using `Vue.component` method.

```js
var inlineTemplate = Vue.component("inlineTemplate", {
  template: '<ejs-button :content="`${data.ShipCountry}`"></ejs-button>',
  data() { return { data: {} }; }
});
```

Create a template function that returns an object `{ key: 'template', value: 'importedTemplate' }` to map this template to the Grid component.

```js
cTemplate: function() {
   return { template: inlineTemplate };
}
```

Now, the template function is assigned to the `template` property of the Grid component. Refer to the below example for the inline template.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/common/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/template-cs1" %}

## External template

The template elements can be defined in an external file (single-file component) and used in Syncfusion Vue components. Refer to the below code snippet to define template elements in `template.vue` file.

```
// template.vue

<template>
  <div class="button">
    <ejs-button :content="`${data.ShipCountry}`"> </ejs-button>
  </div>
</template>

<script>
  import Vue from "vue";
  import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
  Vue.use(ButtonPlugin);
  export default {
    data () { return { data: {} } }
  }
</script>
```

Import the `template.vue` file into the corresponding `app.vue` file as specified in the following code snippet.

```js
import externalTemplate from './template.vue'
```

Create a template function that returns an object `{ key: 'template', value: 'importedTemplate' }` to map this template to the Grid component.

```js
cTemplate: function() {
   return { template: externalTemplate };
}
```

Now, the template function is assigned to the `template` property of the Grid component. Refer to the below code snippet from `App.vue` file for the external template.

```
// App.vue

<template>
  <div id="app">
      <ejs-grid ref="grid" :dataSource="ds">
        <e-columns>
            <e-column headerText='Ship Country' width='150' textAlign='Center' :template='cTemplate' />
            <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
            <e-column field="CustomerName" headerText="Customer Name" width=150 />
        </e-columns>
      </ejs-grid>
  </div>
</template>
<script>
  import Vue from "vue";
  import { GridPlugin } from "@syncfusion/ej2-vue-grids";
  import externalTemplate from "./template.vue";
  Vue.use(GridPlugin);

  var empData = [
    { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
    { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
    { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
    { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
  ];

  export default {
    name: 'App',
    data() {
      return {
        ds: empData,
        cTemplate: function() {
          return { template: externalTemplate };
        }
      };
    }
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## External modules in templates

Syncfusion provides the option to use external modules in template content. To use the external modules in the template, add those modules to the `plugins` property of the Vue component. For example, the "i18n" module is added to the `plugins` property of the Grid component. Refer to the below code snippet.

```
<template>
  <h3>Grid component</h3>
  <ejs-grid height='210px' :plugins="modules"></ejs-grid>
</template>

<script>
  import { GridPlugin } from "@syncfusion/ej2-vue-grids";

  export default {
    components: {
      "ejs-grid": GridComponent,
    },
    data() {
      return { modules: [i18n] };
    }
  };
</script>
```

Below is the example code to define `i18n` external module in the Vue 3 application.

```
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";
const messages = {
  en: {
    message: {
      customer: "Customer Name",
    },
  },
  ja: {
    message: {
      customer: "顧客名",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "ja",
  fallbackLocale: "en",
  messages,
});
createApp(App).use(i18n).mount('#app')
```

Below is the example code to use `i18n` external module in the Grid component template using `plugins` property.

```
// App.vue
<template>
  <ejs-grid ref="grid" :dataSource="ds" :plugins="modules">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
      <e-column headerText='Customer Name' width=150 :template="'cTemplate'">
        <template v-slot:cTemplate={data}>
          <div>{{ $t("message.customer") }} - {{data.CustomerName}}</div>
        </template>
      </e-column>
    </e-columns>
  </ejs-grid>
</template>
<script>
  import { i18n } from "./main";
  import { GridComponent, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-vue-grids";
  var empData = [
    { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
    { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
    { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
    { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
  ];
  export default {
    name: "App",
    components: {
      "ejs-grid": GridComponent,
      "e-columns": ColumnsDirective,
      "e-column": ColumnDirective,
    },
    data() {
      return {
        modules: [i18n],
        ds: empData,
      };
    },
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Provide/Inject in templates

In Vue, `provide` and `inject` options are used to share data between components that are not directly related through a parent-child relationship.

Syncfusion components can use these `provide` and `inject` options in templates. It allows to pass data from a parent component to its template components without having to pass props down the component tree. Instead, the parent component provides the data, and the child components inject it.

To provide data from a parent component to its template, use the `provide` option. The provide option is an object that contains the data to provide. The keys in the object are the names of the properties, and the values are the data to provide.

In this below example, the parent component provides the content property with the value of `Update` in **App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="grid">
    <ejs-grid ref="grid" :dataSource="ds">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
        <e-column field="CustomerName" headerText="Customer Name" width=150 />
        <e-column field="ShipCountry" headerText="Ship Country" width=150 :template="'cTemplate'">
          <template v-slot:cTemplate={data}>
            <div>{{data.ShipCountry}} <MyTemplate /></div>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { GridPlugin } from "@syncfusion/ej2-vue-grids";
  import MyTemplate from "./MyTemplate.vue";
  Vue.use(GridPlugin);

  var empData = [
    { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
    { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
    { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
    { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
  ];

  export default {
    components: {
      MyTemplate
    },
    data () { 
      return { 
        ds: empData 
      } 
    },
    provide: { content: 'Update' }
  }
</script>

{% endhighlight %}
{% endtabs %}

To inject data provided by a parent component, use the `inject` option. The `inject` option is an array or an object that contains the names of the properties to inject.

In this below example, the child template component injects content property using the `inject` option, and displays its value using an interpolation directive ({{ content }}) in **MyTemplate.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/MyTemplate.vue" %}

<template>
  <ejs-button>{{ content }}</ejs-button>
</template>
<script>
  import Vue from 'vue';
  import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
  Vue.use(ButtonPlugin);

  export default {
    name: 'MyTemplate',
    data () { 
      return {} 
    },
    inject: ['content']
  }
</script>

{% endhighlight %}
{% endtabs %}
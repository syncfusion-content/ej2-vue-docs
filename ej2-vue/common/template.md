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

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}

### Render scope

In a single-page application, there may be a need to access the parent component scope in the template. The slot content has access to the data scope of the parent component. To access the component's data source value inside the template, pass the props ({data}) to the `v-slot` directive. Expressions within the slot can access the component's data source.

```html
<template v-slot:templateName="{data}">
  <ejs-button :content="data.ShipCountry"></ejs-button>
</template>
```

### Named slot

The Syncfusion Vue components support multiple templates. Each template is differentiated by its name. To render the slot content to the corresponding slot outlet, the name of each slot must map to the name of the corresponding property. 

```html
<template v-slot:templateName></template>
```

> When passing a slot to a component, ensure that the component's property value is of the "string" type.

An example of a Grid component sample with a named slot (cTemplate) template is shown below.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}

The slot template can also be used to insert content into `nested tags` within a component. In the below code example, `cTemplate` is rendered in the nested tag `<e-column>`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/common/slot-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/common/slot-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/slot-cs1" %}

## Inline template

The user can use the `app.component` method to add custom content to the template that can be used in the Syncfusion Vue components. The template elements can be added to `template` attribute of the `app.component` method. Refer to the below code snippet to create the template element using `app.component` method.

```js
import { createApp  } from "vue/dist/vue.esm-bundler.js";
const app = createApp();
const inlineTemplate = app.component('inlineTemplate', {
  components: {
    'ejs-button': ButtonComponent
  },
  data: () => ({}),
  template: '<ejs-button :content="`${data.ShipCountry}`"></ejs-button>'
});
```

Create a template function that returns an object `{ key: 'template', value: 'importedTemplate' }` to map this template to the Grid component.

```js
const cTemplate = () => {
  return { template: inlineTemplate };
}
```

Now, the template function is assigned to the `template` property of the Grid component. Refer to the below example for the inline template.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/common/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/common/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/template-cs1" %}

## External template

The template elements can be defined in an external file (single-file component) and used in Syncfusion Vue components. Refer to the below code snippet to define template elements in `template.vue` file.

{% tabs %}
{% highlight html tabtitle="~/src/template.vue" %}

<template>
  <div class="button">
    <ejs-button :content="`${data.ShipCountry}`"> </ejs-button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const data = defineProps(['ShipCountry']);
</script>

{% endhighlight %}
{% endtabs %}

Import the `template.vue` file into the corresponding `App.vue` file as specified in the following code snippet.

```js
import template from './template.vue';
```

Create a template function that returns an object `{ key: 'template', value: 'importedTemplate' }` to map this template to the Grid component.

```js
const app = createApp();
const externalTemplate = app.component('externalTemplate', template);
const cTemplate = () => {
  return { template: externalTemplate };
}
```

Now, the template function is assigned to the `template` property of the Grid component. Refer to the below code snippet from `App.vue` file for the external template.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="ds">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
        <e-column field="CustomerName" headerText="Customer Name" width=150 />
        <e-column field="ShipCountry" headerText="Ship Country" width=150 :template='cTemplate'/>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { createApp } from "vue";
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import template from "./template.vue";

const app = createApp();

const externalTemplate = app.component('externalTemplate', template);

const cTemplate = () => {
  return { template: externalTemplate };
}

const ds = [
  { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
  { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
  { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
  { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
];

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

{% endhighlight %}
{% endtabs %}

## External modules in templates

Syncfusion provides the option to use external modules in template content. To use the external modules in the template, add those modules to the `plugins` property of the Vue component. For example, the "i18n" module is added to the `plugins` property of the Grid component. Refer to the below code snippet.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <h3>Grid component</h3>
  <ejs-grid height='210px' :plugins="modules"></ejs-grid>
</template>

<script setup>
import { i18n } from "./main";
import { GridComponent as EjsGrid } from '@syncfusion/ej2-vue-grids';

const  modules= [i18n]
</script>

{% endhighlight %}
{% endtabs %}

Below is the example code to define `i18n` external module in the Vue 3 application.

{% tabs %}
{% highlight html tabtitle="~/main.js" %}

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

{% endhighlight %}
{% endtabs %}

Below is the example code to use `i18n` external module in the Grid component template using `plugins` property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% raw %}

<template>
  <ejs-grid :dataSource="empData" :plugins="modules">
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

<script setup>
import { i18n } from "./main";
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';

const empData = [
  { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
  { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
  { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
  { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
];
const  modules= [i18n];
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

{% endraw %}
{% endhighlight %}
{% endtabs %}

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
<script setup>
import { provide } from 'vue';
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
import MyTemplate from "./MyTemplate.vue";

var empData = [
  { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
  { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
  { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
  { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
];

provide('content', 'Update');
</script>

{% endhighlight %}
{% endtabs %}

To inject data provided by a parent component, use the `inject` option. The `inject` option is an array or an object that contains the names of the properties to inject.

In this below example, the child template component injects content property using the `inject` option, and displays its value using an interpolation directive ({% raw %}{{ content }}{% endraw %}) in **MyTemplate.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/MyTemplate.vue" %}
{% raw %}

<template>
  <ejs-button>{{ content }}</ejs-button>
</template>
<script>
import { inject } from 'vue';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const content = inject('content');
</script>

{% endraw %}
{% endhighlight %}
{% endtabs %}
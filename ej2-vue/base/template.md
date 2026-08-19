---
layout: post
title: Template in Vue Base component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Base component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Base component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for Vue Components support native Vue Templates, using Single File Components and Vue.component().

The Template support can be configured by these two ways given below.

* Single File Components (.vue file)
* Vue.component()

## Single File Components

* Define the template in a template.vue file, and create an empty object `data` in the **data option** of the template.vue file.

* For passing arguments, pass as property of data object.

Refer below code snippet of template.vue file

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div class="button">
    <ejs-button :content="`${data.ShipCountry}`"></ejs-button>
  </div>
</template>

<script setup>
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div class="button">
    <ejs-button :content="`${data.ShipCountry}`"></ejs-button>
  </div>
</template>

<script>
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ej2-button': ButtonComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}


* Import the template.vue file in your corresponding app.vue file as specified in the following code snippet.

```js
import { createApp } from "vue";
import buttonTemplate from './template.vue'
```

* Create a template function which returns an object {  key: 'template',  value: 'importedTemplate' }.

```js
cTemplate: function(e) {
   return {
       template: createApp().component('template', buttonTemplate);
   };
}
```

* Template function is assigned to the template property of the Essential<sup style="font-size:70%">&reg;</sup> JS2 Vue Component.

Refer the below code snippet of App.vue file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

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
<script setup>
import { createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumns, ColumnsDirective as EColumn } from "@syncfusion/ej2-vue-grids";
import { empData } from "./data";
import buttonTemplate from "./template.vue";

const ds = empData;
const cTemplate = function (e) {
  return {
    template: createApp().component('template', buttonTemplate)
  };
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

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
import { createApp } from "vue";
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { empData } from "./data";
import buttonTemplate from "./template.vue";

export default {
  components: {
    'ej2-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      ds: empData,
      cTemplate: function (e) {
        return {
          template: createApp().component('template', buttonTemplate)
        };
      }
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Inline template

* The Template is initialized with `createApp().component()` where template is provided in the template option. Create an empty object `data` in the data option for passing arguments.

* For passing arguments, pass as property of data object.

```js
let demoTemplate = createApp().component("demo", {
  template: "<ejs-button :content="`${data.ShipCountry}`"></ejs-button>",
  data() {
    return {
      data: {}
    };
  }
});
```

* Create a template function which returns an object {  key: 'template',  value: 'importedTemplate' }.

```js
cTemplate: function(e) {
   return {
       template: demoTemplate
   };
}
```

* Template function is assigned to the template property of the Essential<sup style="font-size:70%">&reg;</sup> JS2 Vue Component.

* Refer the below code snippet of App.vue file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

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
<script setup>
import { createApp } from "vue";
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-grids";
import { empData } from "./data";

let demoTemplate = createApp().component("demo", {
  template: "<ejs-button>{{data.ShipCountry}}</ejs-button>",
  data() {
    return {
      data: {}
    };
  }
});

const ds = empData;
const cTemplate = function (e) {
  return {
    template: demoTemplate
  };
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

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
import { createApp } from "vue";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { empData } from "./data";

let demoTemplate = createApp().component("demo", {
  template: "<ejs-button>{{data.ShipCountry}}</ejs-button>",
  data() {
    return {
      data: {}
    };
  }
});

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      ds: empData,
      cTemplate: function (e) {
        return {
          template: demoTemplate
        };
      }
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Template Sample

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/base/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/base/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/base/template-cs1" %}

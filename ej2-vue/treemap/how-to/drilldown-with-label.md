---
layout: post
title: Drilldown with label in Vue Treemap component | Syncfusion
description: Learn here all about Drilldown with label in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Drilldown with label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown with label in Vue Treemap component

## Add label template with drill down

Yon can add a label template as <div> element to the treemap control when using the label template. To add a label template to the treemap control, you have to hide another labels by setting the `showLabels` property to **false** in `leafItemSettings` to show only the label template.

To add label template to treemap drilldown, follow the given steps:

**Step 1**:

Create a treemap control and enable the drill-down option.

```
<template>
      <div class='control_wrapper'>
         <ejs-treemap id='container' :dataSource="dataSource" weightValuePath="Sales" enableDrillDown="true" :palette="palette"
         :leafItemSettings='leafItemSettings' :levels='levels' >
         </ejs-treemap>
      </div>
</template>

<script setup>

import { TreeMapComponent as EjsTreemap} from '@syncfusion/ej2-vue-treemap';

const dataSource =  [
            { Continent: "China", Company: "Volkswagen", Sales: 3005994 },
            { Continent: "China", Company: "General Motors", Sales: 1230044 },
            { Continent: "China", Company: "Honda", Sales: 1197023 },
            { Continent: "United States", Company: "General Motors", Sales: 3042775 },
            { Continent: "United States", Company: "Ford", Sales: 2599193 },
            { Continent: "United States", Company: "Toyota", Sales: 2449587 },
            { Continent: "Japan", Company: "Toyota", Sales: 1527977 },
            { Continent: "Japan", Company: "Honda", Sales: 706982 },
            { Continent: "Japan", Company: "Suzuki", Sales: 623041 },
            { Continent: "Germany", Company: "Volkswagen", Sales: 655977 },
            { Continent: "Germany", Company: "Mercedes", Sales: 310845 },
            { Continent: "Germany", Company: "BMW", Sales: 261931 },
            { Continent: "United Kingdom", Company: "Ford ", Sales: 319442 },
            { Continent: "United Kingdom", Company: "Vauxhall", Sales: 251146 },
            { Continent: "United Kingdom", Company: "Volkswagen", Sales: 206994 }
        ];

const palette = ['white'];

const levels = [
   {
      groupPath: 'Continent', border: { color: 'black', width: 0.5 },
   },
   {
      groupPath: 'Company', border: { color: 'black', width: 0.5 },
   }
];

const leafItemSettings = {
   showLabels: false,
   labelTemplate: '<div style="background-color: red">${Company}</div>',
   templatePosition: 'Center'
};

</script>
```

**Step 2**:

Add the label template in the `leafItemSettings` options, and then set the `showLabels` property to **false** to hide another labels and show only label template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs18" %}
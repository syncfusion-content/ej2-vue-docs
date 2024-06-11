---
layout: post
title: Drilldown in Vue Treemap component | Syncfusion
description: Learn here all about Drilldown in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Drilldown 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in Vue Treemap component

<!-- markdownlint-disable MD033 -->

## Customize the header for treemap drilldown

Yon can add a header element as <div> and customize it to show the population of a particular country or continent on treemap drill-down.

To customize the header for treemap drill-down, follow the given steps:

**Step 1**:

<!-- markdownlint-disable MD031 -->
Initialize the treemap and enable the drill-down option.

```
 <template>
<div>
    <div id="header" style="background-color: #179bd7"></div>
      <div class='control_wrapper'>
         <ejs-treemap id='container' :dataSource="dataSource" weightValuePath="Population" format="n"
                     useGroupingSeparator="true" enableDrillDown="true" :palette="palette"
         :leafItemSettings='leafItemSettings' :levels='levels'>
         </ejs-treemap>
      </div>
  </div>
</template>

<script setup>

import { TreeMapComponent as EjsTreemap} from '@syncfusion/ej2-vue-treemap';
import { data } from './datasource.js';

const dataSource = data;
const palette = ["#9999ff", "#CCFF99", "#FFFF99", "#FF9999", "#FF99FF", "#FFCC66"];

const levels: [
  {
    groupPath: 'Continent', border: { color: 'black', width: 0.5 },
  },
  {
    groupPath: 'States', border: { color: 'black', width: 0.5 },
  },
  {
    groupPath: 'Region', border: { color: 'black', width: 0.5 },
  }
];

const leafItemSettings = {
  labelPath:'Name',
  showLabels: false
};

</script>
```

**Step 2**:

Show the population of a particular continent in the treemap `loaded` event. In this event, you can get the header element.

```javascript
    loaded:function(args) {
      let header = document.getElementById('header');
        var population = 0;
        for (let i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
            population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population
    }
```

**Step 3**:

Customize the population for drilled countries or states in the header element when drill-down the treemap. The `drillEnd` event will be triggered when treemap is drilled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs19" %}
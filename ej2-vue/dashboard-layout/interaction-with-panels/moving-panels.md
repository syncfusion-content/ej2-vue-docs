---
layout: post
title: Moving panels in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Moving panels in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Moving panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Moving panels in Vue Dashboard Layout component

Other than drag and drop, it is possible to move the panels in Dashboard Layout programmatically. This can be achieved using [movePanel](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#movepanel) method. The method is invoked as follows,

```js
movePanel(id, row, col)

```

where,
* [`id`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel/#id) - ID of the panel which needs to be moved.
* [`row`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel/#row) - New row position for moving the panel.
* [`col`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel/#col) - New column position for moving the panel.

Each time a panel's position is changed(programmatically or through UI interaction), the Dashboard Layout's [change](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#change) event will be triggered.

The following sample demonstrates moving a panel programmatically to a new position in the Dashboard Layout's [created](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#created) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/moving-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/moving-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/moving-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.
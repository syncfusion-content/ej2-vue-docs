---
layout: post
title: Moving panels in Vue Dashboard layout component | Syncfusion
description: Learn here all about Moving panels in Syncfusion Vue Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Moving panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Moving panels in Vue Dashboard layout component

Other than drag and drop, it is possible to move the panels in Dashboard Layout programatically. This can be achieved using [movePanel](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#movepanel) method. The method is invoked as follows,

```js
movePanel(id, row, col)

```

Where,
* id - ID of the panel which needs to be moved.
* row - New row position for moving the panel.
* col - New column position for moving the panel.

Each time a panel's position is changed(Programatically or through UI interaction), the Dashboard Layout's [change](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#change) event will be triggered.

The following sample demonstrates moving a panel programatically to a new position in the Dashboard Layout's [created](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#created) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dashboard-layout/moving-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/moving-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.
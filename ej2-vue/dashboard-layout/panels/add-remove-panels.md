---
layout: post
title: Add remove panels in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Add remove panels in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Add remove panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Add remove panels in Vue Dashboard Layout component

In real-time scenarios, dashboard content often needs to be updated dynamically by adding or removing panels. This can be achieved using the [`addPanel`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#addpanel) and [`removePanel`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#removepanel) public methods.

## Add or remove panels dynamically

Panels can be added dynamically using the [`addPanel`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#addpanel) public method by passing the [`panel`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout#panels) property as parameter. Panels can be removed dynamically using the [`removePanel`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#removepanel) public method by passing the [`panel id`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#id) value as a parameter.

It is also possible to remove all the panels in a Dashboard Layout by calling [removeAll](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#removeall) method.

```js
dashboard.removeAll();

```

The following sample demonstrates how to add and remove panels dynamically in the Dashboard Layout. Panels can be added at any desired position and size by selecting values in the numeric inputs and clicking the add button; panels can be removed by selecting the panel **ID**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/add-remove-panel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/add-remove-panel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/add-remove-panel-cs1" %}

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to learn how to present and manipulate data.
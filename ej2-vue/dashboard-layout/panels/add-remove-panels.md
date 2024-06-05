---
layout: post
title: Add remove panels in Vue Dashboard layout component | Syncfusion
description: Learn here all about Add remove panels in Syncfusion Vue Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Add remove panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Add remove panels in Vue Dashboard layout component

In real-time cases, the data being presented within the dashboard should be updated frequently which includes adding or removing the data dynamically within the dashboard. This can be easily achieved by using the [`addPanel`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#addpanel) and [`removePanel`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#removepanel) public methods of the component.

## Add or remove panels dynamically

Panels can be added dynamically by using the `addPanel` public method by passing the `panel` property as parameter. Also, they can be removed dynamically by using the `removePanel` public method by passing the `panel id` value as a parameter.

It is also possible to remove all the panels in a Dashboard Layout by calling [removeAll](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#removeall) method.

```js
dashboard.removeAll();

```

The following sample demonstrates how to add and remove the panels dynamically in the dashboard layout component. Here, panels can be added in any desired position of required size by selecting them in the numeric boxes and clicking add button and remove them by selecting the ID of the panel.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/add-remove-panel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/add-remove-panel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/add-remove-panel-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.
---
layout: post
title: State persistence in Vue Pivotview component | Syncfusion
description: Learn here all about State persistence in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Vue Pivotview component

State persistence allows user to maintain the current state of the component along with its report bounded in the browser local storage (cookie). Even if the browser is refreshed or if you move to the next page within the browser, components state will be persisted. State persistence stores the Pivot Table object in the local storage when [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/pivotview#enablepersistence) property in pivot table is set to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs234/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs234" %}

# Save and Load Pivot Layout

You can save the current layout of the pivot table by using [`getPersistData`](https://ej2.syncfusion.com/vue/documentation/api/pivotview#getpersistdata) in string format. The saved layout can be loaded to pivot table any time by passing the saved data as a parameter to [`loadPersistData`](https://ej2.syncfusion.com/vue/documentation/api/pivotview#loadpersistdata) method in the pivot table.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs235/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs235" %}
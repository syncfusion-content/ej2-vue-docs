---
layout: post
title: How to maintain state persistence in Vue Query Builder UI | Syncfusion
description: Persist the Vue Query Builder UI rule object in the browser's localStorage across refreshes and page navigations by enabling enablePersistence.
control: State persistence 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain state persistence in Vue Query Builder UI

State persistence allows you to maintain the current state in the browser’s `localStorage` even if the browser is refreshed or if you move to the next page within the browser. State persistence stores the Query Builder’s [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#rule) object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/state-persistence) is defined to true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs17" %}
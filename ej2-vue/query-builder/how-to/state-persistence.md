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

State persistence allows you to maintain the current state in the browser’s `localStorage` even if the browser is refreshed or if you move to the next page within the browser. State persistence persists the Query Builder’s filter state (including the current [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#rule)) when [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#enablepersistence) is set to true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/default-cs17" %}
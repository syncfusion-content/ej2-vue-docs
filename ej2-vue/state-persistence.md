---
layout: post
title: State persistence in Vue State persistence md component | Syncfusion
description: Learn here all about State persistence in Syncfusion Vue State persistence md component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components have support for persisting its state across page refreshes or navigation. To enable this feature, set `enablePersistence` property as true to the required component. This will store the component’s state in browser’s `localStorage` object on page `unload` event. For example, we have enabled persistence to grid component in the following code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs6" %}
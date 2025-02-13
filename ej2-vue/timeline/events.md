---
layout: post
title: Events in Vue Timeline component | Syncfusion
description: Learn here all about Events in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Timeline component

This section describes the Timeline events that will be triggered when appropriate actions are performed. The following events are available in the Timeline component.

## created

The Timeline component triggers the [created](https://ej2.syncfusion.com/vue/documentation/api/timeline#created) event when the component rendering completes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/created/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/created/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/created" %}

## beforeItemRender

The Timeline component triggers the [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/timeline#beforeitemrender) event before renders each item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/beforeItemRender/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/beforeItemRender/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/beforeItemRender" %}
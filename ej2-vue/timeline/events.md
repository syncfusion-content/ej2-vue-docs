---
layout: post
title: Events in Vue Timeline | Syncfusion
description: Handle Vue Timeline component interaction events triggered during user actions to respond to changes in the Timeline state.
control: Events
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Timeline

This section describes Timeline events that are triggered during component interactions. The following events are available in the Timeline component.

## created

The Timeline component triggers the [created](https://ej2.syncfusion.com/vue/documentation/api/timeline#created) event after the component finishes rendering.

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
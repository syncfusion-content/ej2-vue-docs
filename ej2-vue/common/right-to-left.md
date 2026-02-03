---
layout: post
title: Right to left in Vue Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left support in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Components

Right-to-left (RTL) support enables applications to properly display content for languages that are written from right to left, such as Arabic and Hebrew.

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components support RTL by setting the `enableRtl` property to `true`. This adds the `e-rtl` class to the component element and renders Syncfusion Vue components in right-to-left direction.

## Enable RTL for all components

To enable RTL for all components, set the `enableRtl` property globally in your application. Example using the Grid component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs1" %}

## Enable RTL for an individual component

To enable RTL for a single component, set the `enableRtl` property in that component's options. Example using the Grid component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs2" %}
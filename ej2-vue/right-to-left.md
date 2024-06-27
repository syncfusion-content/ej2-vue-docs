---
layout: post
title: Right to left in Vue Right to left md component | Syncfusion
description: Learn here all about Right to left in Syncfusion Vue Right to left md component of Syncfusion Essential JS 2 and more.
control: Right to left 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left

Right To Left (RTL) can be enabled for Syncfusion Vue UI components by calling `enableRtl` with `true`. This will render all the Syncfusion Vue components in the right to left direction. Find the code snippet for this below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs4" %}

## Enable RTL to individual component

To enable the RTL to an individual component, set the `enableRtl` property directly in its model options. For illustration, the `enableRtl` is added to the Grid component in following code snippet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/right-to-left-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs5" %}
---
layout: post
title: How to enable ripple in Vue Button Group | Syncfusion
description: Learn how to enable the ripple effect in a Syncfusion Vue Button Group by importing the rippleEffect method from ej2-base.
control: Enable ripple 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to enable ripple in Vue Button Group

Ripple can be enabled by importing `rippleEffect` method from `ej2-base` and initialize rippleEffect with `.e-btn-group` element and selector as `e-btn`.

The following example illustrates how to enable ripple for ButtonGroup,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs7" %}
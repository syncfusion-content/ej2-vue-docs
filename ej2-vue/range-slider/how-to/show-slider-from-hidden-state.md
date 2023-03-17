---
layout: post
title: Show slider from hidden state in Vue Range slider component | Syncfusion
description: Learn here all about Show slider from hidden state in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Show slider from hidden state 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show slider from hidden state in Vue Range slider component

This section demonstrates how-to render the Slider component in hidden state and make it visible in button click. We can initialize Slider in hidden state by setting the display as none.

In the sample, by clicking on the button, we can make the Slider visible from hidden state, and we must also call the [`refresh`](https://ej2.syncfusion.com/javascript/documentation/api/base/component/#refresh) method of the Slider to render it properly based on its original dimensions.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/hidden-slider-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/hidden-slider-cs1" %}

---
layout: post
title: How to show tooltip on disabled elements in Vue Tooltip | Syncfusion
description: Show Vue Tooltip on disabled elements by wrapping the element in an inline-block div, setting pointer-events to none, and initializing the tooltip on the wrapper.
control: Show tooltip on disabled elements and disable tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show tooltip on disabled elements in Vue Tooltip

By default, tooltips are not displayed on disabled elements. However, you can enable this behavior by following these steps:
1. Add a disabled element (such as a `button` element) into a div with its display style set to `inline-block`.
2. Set the pointer event as `none` for the disabled element (button) through CSS.
3. Initialize the tooltip for the outer div element that contains the disabled button element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/how-to-cs1" %}
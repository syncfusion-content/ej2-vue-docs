---
layout: post
title: Tooltip on disabled elements in Vue Tooltip component | Syncfusion
description: Learn here all about Show tooltip on disabled elements and disable tooltip in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Show tooltip on disabled elements and disable tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip on disabled elements and disable tooltip in Vue Tooltip component

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
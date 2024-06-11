---
layout: post
title: Show tooltip on disabled elements and disable tooltip in Vue Tooltip component | Syncfusion
description: Learn here all about Show tooltip on disabled elements and disable tooltip in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Show tooltip on disabled elements and disable tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip on disabled elements and disable tooltip in Vue Tooltip component

By default, tooltips will not be displayed on disabled elements. However, you can enable this behavior by using the following steps:
1. Add a disabled element like the `button` element into a div whose display style is set to `inline-block`.
2. Set the pointer event as `none` for the disabled element (button) through CSS.
3. Initialize the tooltip for outer div element that holds the disabled button element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/how-to-cs1" %}
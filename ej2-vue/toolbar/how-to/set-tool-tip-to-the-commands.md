---
layout: post
title: How to set tooltip to the commands in Vue Toolbar | Syncfusion
description: Show tooltips on Vue Toolbar command buttons using the Tooltip component to display help text when the user hovers over each toolbar item.
control: Set tool tip to the commands 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set tooltip to the commands in Vue Toolbar

The `tooltipText` property of the Toolbar item is used to set the HTML Tooltip to the commands that can be viewed as hint texts on mouse hover.

To change the `tooltipText` to ej2-tooltip component:

* Import the `Tooltip` module from `ej2-popups`,and initialize the Tooltip with the Toolbar target. Refer to the following code example:

    {% tabs %}
    {% highlight html tabtitle="Composition API (~/src/App.vue)" %}
    {% include code-snippet/toolbar/how-to/Tooltip-cs1/app-composition.vue %}
    {% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
    {% include code-snippet/toolbar/how-to/Tooltip-cs1/app.vue %}
    {% endhighlight %}
    {% endtabs %}
            
    {% previewsample "page.domainurl/code-snippet/toolbar/how-to/Tooltip-cs1" %}
---
layout: post
title: Smithchart tooltip in Vue Smithchart component | Syncfusion
description: Learn here all about Smithchart tooltip in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart tooltip in Vue Smithchart component

Smithchart will display details about the points through tooltip, when the mouse is moved over the point. By default, tooltip is disabled. To enable the tooltip for smithchart, you need to import and inject TooltipRender module from chart. And also set the property visible as true, in tooltip settings. You can customize the tooltip's visibility and appearance differently each series in the smithchart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs26" %}

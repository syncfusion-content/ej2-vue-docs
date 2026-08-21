---
layout: post
title: Template in Vue Speed Dial | Syncfusion
description: Learn how to customize the Syncfusion Vue Speed Dial using the itemTemplate property for action items and the popupTemplate property for the popup content.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Speed Dial

This section explains available templates in SpeedDial component and its usage.

## Item template

You can use the [`itemTemplate`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#itemtemplate) property to set a template content for the SpeedDial items. The template content is defined as a child content of `itemTemplate` tag directive.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/template-cs1" %}

## Popup template

You can use the [`popupTemplate`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#popuptemplate) property to set a template content for popup of  SpeedDial component. The template content is defined as a child content of `popupTemplate` tag directive.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/template-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/template-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/template-cs2" %}
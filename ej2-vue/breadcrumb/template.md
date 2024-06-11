---
layout: post
title: Template in Vue Breadcrumb component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Breadcrumb component

The Breadcrumb component provides a way to customize the items using [`itemTemplate`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#itemtemplate) and the separators using [`separatorTemplate`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#separatortemplate) properties.

## Item Template

In the following example, Shopping Cart details are used as breadcrumb Items and the items are customized by the chips component using [`itemTemplate`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#itemtemplate).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs24" %}

## Separator Template

In the  following example, the separators are customized with icons using [`separatorTemplate`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#separatortemplate).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs25/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs25" %}

## Customize Specific Item Template

The specific breadcrumb item can be customizable using itemTemplate with conditional rendering. In the following example, added the span element only for the `breadcrumb` text in breadcrumb item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs26" %}
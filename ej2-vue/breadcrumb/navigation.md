---
layout: post
title: Navigation in Vue Breadcrumb component | Syncfusion
description: Learn here all about Navigation in Syncfusion Vue Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Navigation in Vue Breadcrumb component

The breadcrumb item navigates to the path while clicking the item. To enable navigation, [`url`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#url) property was bound to the items.

## URL

In the Breadcrumb component, the item represents the url. The breadcrumb items can be provided with either relative or absolute URL.

### Relative URL

The breadcrumb items with relative URL contain only the path but do not locate the path or server. The following example represents the breadcrumb items with relative url.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs14" %}

### Absolute URL

The breadcrumb items with Absolute URL contain the path and locate to the resource if the absolute url is bound to the breadcrumb item. The following example represents the breadcrumb items with absolute url.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs15" %}

## Enable navigation for last Breadcrumb item

The feature enables the last item of the Breadcrumb component by setting the [`enableActiveItemNavigation`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#enableactiveitemnavigation) property to true. In the following example, the last item of the `Breadcrumb` was enabled.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs16" %}

## Open URL in new page or tab

To open the breadcrumb item in a new page or tab, set the target property of the required item url to blank in the Breadcrumb component. In the following example, the target property of items url was set to blank by using the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#beforeitemrender) event which locates to the path in the new tab.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs17" %}
---
layout: post
title: Popup items in Vue Drop down button component | Syncfusion
description: Learn here all about Popup items in Syncfusion Vue Drop down button component of Syncfusion Essential JS 2 and more.
control: Popup items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in Vue Drop down button component

## Icons

The popup action item have an icon or image to provide visual representation of the action. To place the icon on a popup item, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the popup action item.

In the following sample, the icons for edit, delete, mark as read  and like message menu items are added using the iconCss property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs17" %}

## Navigations

Actions in DropDownButton can be used to navigate to the other web page when action item is clicked. This can be achieved by providing link to the action item using `url` property.

In the following sample, navigation URL for Flipkart, Amazon, and Snapdeal action items are added using the `url` property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs18" %}

## Template

### Item templating

Popup items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#beforeitemrender) event. The item render event triggers while rendering each popup action item. The event argument will be used to identify the action item and customize based on the requirement.

The following popup template is customized using `beforeItemRender` event by appending `span` and `div` element on each `li` rendering:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs19" %}

### Popup templating

The whole popup can be customized as per the requirement and it can be customized by handling it in [`target`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#target) property.

In the following sample, the whole popup item is customized as table template by giving `div` as target and it can be achieved using `target` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs20" %}

## Separator

The Separators are the horizontal lines that are used to separate the popup items. You `cannot` select the separators. You can enable separators to group the popup items using the `separator` property.

In the following sample, cut, copy, and paste popup items are grouped using the separator property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs21" %}

## See Also

* [Integration with ListView component](./how-to/group-popup-items-with-listview-component)
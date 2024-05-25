---
layout: post
title: Icons in Vue Breadcrumb component | Syncfusion
description: Learn here all about Icons in Syncfusion Vue Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons in Vue Breadcrumb component

## Loading Icons in Breadcrumb Item

To load the icon on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

### Breadcrumb with font icons

To place the font icon on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs8" %}

### Breadcrumb with Image

In the Breadcrumb component, images can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, an image was added to the breadcrumb item by using the iconCss class `e-image-home` and specifying height and width.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs9" %}

### Breadcrumb with SVG Image

In the Breadcrumb component, SVG image can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, SVG image was added to the breadcrumb item by using the iconCss class `e-svg-home` and specifying height and width.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs10" %}

## Icon Position

By default, the icon is positioned to the left side of the item in the Breadcrumb component. If you need to add the icon right to the breadcrumb item, add the `e-icon-right` class to the required item. In the following example, the `e-icon-right` class was added to the breadcrumb items using the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#beforeitemrender) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs11" %}

## Icon only

To display only icons for the items, add icons using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, breadcrumb items were demonstrated with only icons by providing the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs12" %}

## Show icon only for first item

To show icon only for the first item in the Breadcrumb component, add icons to the first item using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, the icon was provided only for the first item by setting the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/breadcrumb/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs13" %}
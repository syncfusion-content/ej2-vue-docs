---
layout: post
title: Ribbon Backstage in Vue Ribbon Component | Syncfusion
description: Check out and learn about Ribbon Backstage in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Backstage

The Ribbon supports backstage view which is an addition to the traditional file menu. It displays information like application settings, user details, etc. The backstage view can be enabled by setting the [backStageMenu](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backStageMenu/) property.

The backstage view options are displayed on the left, while the content of each option is shown on the right.

## Adding backstage items

The menu items can be added to the backstage view by using the [items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageItem/) property. You can show the backstage view by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`. By default, the backstage view is hidden.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backStageItem/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backStageItem" %}

## Adding footer items

You can use the [isFooter](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageItemModel/#isfooter) property in the `items` collection to add the backstage view footer items. By default, the value is false.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backstageFooter-item/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backstageFooter-item" %}

## Adding separator

The separators are horizontal lines used to separate the backstage view items. You can use the [separator](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageItemModel/#separator) property to split the menu items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backstageSeparator/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backstageSeparator" %}

## Back button

You can use the [backButton](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageBackButton/) property to customize the text and icon of the close button using the [text]((https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageBackButton/#text)) and [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageBackButton/#iconcss) property. You can show the back button by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backstageBackButton/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backstageBackButton" %}

## Backstage target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backStageMenuModel/#target) property specifies the element selector in which backstage will be displayed. The target element should have the position as relative, else the backstage will be positioned nearest to the relative element. By default, the backstage is positioned to ribbon element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backstageTarget/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backstageTarget" %}

## Template

You can use the [template](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backStageMenuModel/#template) property to modify the backstage view menu items and their contents.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backStageTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backStageTemplate" %}

## Setting width and height

You can customize the height and width of the backstage view using the [height](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backStageMenuModel/#height) and [width](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backStageMenuModel/#width) property. By default, dimensions are set based on the content added.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/backstageCustomization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/backstageCustomization" %}

> [Adding Backstage events](./events#backStageItemClick)
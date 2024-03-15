---
layout: post
title: Items in Vue Timeline component | Syncfusion
description: Learn here all about Items in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Items in Vue Timeline component

The Timeline items can be added by using the `items` property. Each item can be configured with options such as `content`, `oppositeContent`, `dotCss`, `disabled` and `cssClass`.

## Adding content

You can define the item content using the `content` property.

### String content

You can define string content for the Timeline items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/string-content/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/string-content" %}

## Adding opposite content

You can add additional information to each Timeline item, by using the `oppositeContent` property which is positioned opposite to the item content. Similar to the `content` property you can define `string` or `function` as contents to the oppositeContent.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/opposite-content/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/opposite-content" %}

## Dot item

You can define CSS class to set icons, background colors, or images to personalize the appearance of dots associated with each Timeline item by using the `dotCss` property.

### Adding icons

You can define the CSS class to show the icon for each item using the `dotCss` property.

### Adding images

You can include images for the Timeline items using the `dotCss` property, by setting the CSS `background-image` property.

### Adding text

You can display text for the Timeline items using the `dotCss` property, by adding text to the CSS `content` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/dot-item/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-item" %}

## Disabling items

You can use the `disabled` property to disable an item when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/disabled" %}

## CSS class

The `cssClass` property allows you to define a custom class to modify the appearance of the Timeline item.
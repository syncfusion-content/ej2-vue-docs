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

Timeline items are added using the `<e-item>` tag directive. Each item can be configured with properties such as `content`, `oppositeContent`, `dotCss`, `disabled` and `cssClass`.

## Adding content

You can define the Timeline item content using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem#content) property.

### String content

Provide plain string content for Timeline items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/string-content/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/string-content/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/string-content" %}

### Templated content

Specify template content for items by referencing an element selector in the HTML.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/templated-content/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/templated-content" %}

## Adding opposite content

Add supplementary information for each item using the [`oppositeContent`](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem#oppositecontent) property which is positioned opposite to the item content. Similar to the `content` property, you can define `string` or `function` as the `oppositeContent`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/opposite-content/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/opposite-content/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/opposite-content" %}

## Dot item

Use the [`dotCss`](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem#dotcss) property to assign a custom CSS class that sets icons, background colors, or images to personalize the appearance of dots associated with each Timeline item.

### Adding icons

Set a CSS class to show the icon for each item using the [`dotCss`](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem#dotcss) property.

### Adding images

Include images for the Timeline items using the `dotCss` property, by setting the CSS `background-image` property.

### Adding text

Display text for the Timeline items using the `dotCss` property, by adding text to the CSS `content` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-item/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-item/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-item" %}

## Disabling items

Set the [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem#disabled) property to disable an item when set to `true`. The default, the value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/disabled/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/disabled" %}

## CSS class

The [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem#cssclass) property allows assigning a custom class to modify the appearance of a Timeline item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/css-class/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/css-class/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/css-class" %}

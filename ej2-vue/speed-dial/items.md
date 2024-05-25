---
layout: post
title: Items in Vue Speed dial component | Syncfusion
description: Learn here all about Items in Syncfusion Vue Speed dial component of Syncfusion Essential JS 2 and more.
control: Items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Items in Vue Speed dial component

The Vue Speed Dial action items can be added by using [`items`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#items) property.

| Fields | Type | Description |
|------|------|-------------|
| [`text`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#text) | `string` | Defines the text content of SpeedDialItem. |
| [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#iconcss) | `string` | Defines one or more CSS classes to include an icon or image in Speed Dial item. |
| [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#disabled) | `boolean` | Defines whether to enable or disable the SpeedDialItem. |
| [`id`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#id) | `string` | Defines a unique value for the SpeedDialItem which can be used to identify the item in event args. |
| [`title`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#title) | `string` | Defines the title of SpeedDialItem to display tooltip. |

## Icons in Speed Dial items

You can customize the icon and text of Speed Dial action items using [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#text) properties.

### Icon only

You can show icon only in SpeedDial items by setting [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting [`title`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#title) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/items-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/speed-dial/items-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs1" %}

### Text only

You can show only text in Speed Dial items by setting [`text`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#text) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/items-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/speed-dial/items-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs2" %}

### Icon with text

You can show icon along with text in Speed Dial items by setting [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#text) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/items-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/speed-dial/items-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs3" %}

### Disabled

You can disable Speed Dial items by setting [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemModel/#disabled) property as `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/items-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/speed-dial/items-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs4" %}

## Animation

The Speed Dial items can be animated during the opening and closing of the popup action items. You can customize the animation's `effect`, `delay`, and `duration` by setting [`animation`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#animation) property. By default, Speed Dial animates with a `fade` effect and supports all [`speeddialanimation`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialAnimationEffect/) effects.

Below example demonstrates the Speed Dial items with applied Zoom effect.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/speed-dial/items-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/speed-dial/items-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs5" %}

## Template

The Speed Dial supports to customize the action items and entire pop-up container by setting [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#itemtemplate) and [popupTemplate](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/#popuptemplate) properties. For more details about templates, check out the link [here](https://ej2.syncfusion.com/vue/documentation/speed-dial/template/).
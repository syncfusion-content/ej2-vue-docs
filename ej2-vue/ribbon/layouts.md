---
layout: post
title: Layouts in Vue Ribbon Component | Syncfusion
description: Check out and learn about Layouts in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in Ribbon component

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In classic layout, the Ribbon component organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon component renders in `Classic` layout.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/classic/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/classic" %}

### Defining items size

The [allowedSizes](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#allowedsizes) property can be used to set the allowed size for an item. The Ribbon items can be appeared in three different sizes: Large(large icon with text), Medium(small icon with text) and Small(small icon only). On resizing, the items size can be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/itemsSize/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/itemsSize" %}

### Defining items orientation

The Ribbon group [orientation](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#orientation) property allows to manage how the items are aligned. By default, the orientation is set to `column`, in which the items are arranged vertically.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/orientation/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/orientation" %}

>  When the orientation is set to `row` a group may have a maximum of three collections each of which may contain any number of items. When the orientation is set to `column` a group may have any number of collections, each of which may contain one large-sized item or three medium/small-sized items. If two large-sized items are specified, it automatically converts into two medium/small-sized items.

### Defining group header

The [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#header) property is used to set the name for each group header.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/groupHeader/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupHeader" %}

### Defining group icon

The [groupIconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#groupiconcss) property is used to customize the icons in the group overflow button. When the ribbon's size is adjusted, the group popup will appear.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/groupIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupIcon" %}

### Enabling group launcher icon

The [showLauncherIcon](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property can be used to enable or disable the launcher icon for each group. By default, the property is set to `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/launcherIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/launcherIcon" %}

#### Customize launcher icon

The [launcherIconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon#launchericoncss) property is used to customize the launcher icon by applying the custom styles.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/customLauncherIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/customLauncherIcon" %}

### Defining group collapsible state

The [isCollapsible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#iscollapsible) property can determine whether a group can be collapsed or not during resize. By default, the property is set to `true`. To prevent the group from being collapsed, set the property to `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/collapsibleState/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/collapsibleState" %}

#### Defining priority order for group collapse or expand

The [priority](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#priority) property define's the priority order for each group which should be collapsed or expanded on resizing. When collapsing, higher priority values are fetched first. When expanding, lower priority values are fetched first.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/priority/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/priority" %}

## Simplified layout

In simplified layout, the Ribbon component organize the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/simplified/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/simplified" %}

### Enabling group overflow popup

The [enableGroupOverflow](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property defines whether to add a separate popup for the overflow items in the group while resizing. The overflow items will appear in the standard overflow popup located at the right end of the tab content if it is set to `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/groupOverflow/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupOverflow" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon component expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon component to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#isminimized) property to `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/isMinimized/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/isMinimized" %}

---
layout: post
title: Layouts in Vue Ribbon Component | Syncfusion
description: Check out and learn about Layouts in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in Vue Ribbon component

The Ribbon layout can be customized using the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In the Classic layout, the Ribbon component organizes items and groups in a traditional multi-row format. This is the default layout and can be explicitly set by assigning [classic](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonLayout/) to the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/classic/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/classic/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/classic" %}

### Defining items size

The [allowedSizes](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#allowedsizes) property sets the permitted sizes for a ribbon item. Ribbon items can be displayed in three sizes: Large (large icon with text), Medium (small icon with text), and Small (small icon only). During resizing, item sizes automatically adjust based on the available tab content width, transitioning from Large to Medium and then to Small.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/itemsSize/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/itemsSize/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/itemsSize" %}

### Defining items orientation

The group's [orientation](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#orientation) property manages how items are aligned, either in a `Row` or `Column`. By default, the orientation is `Column`, which arranges items vertically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/orientation/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/orientation/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/orientation" %}

>  When the orientation is set to `Row` a group may have a maximum of three collections each of which may contain any number of items. When the orientation is set to `Column` a group may have any number of collections, each of which may contain one large-sized item or three medium/small-sized items. If two large-sized items are specified, it automatically converts into two medium/small-sized items.

### Defining group header

The [header](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#header) property sets the title for each group.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupHeader/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupHeader/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupHeader" %}

### Defining group icon

The [groupIconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#groupiconcss) property customizes the icon for the group's overflow button. When the ribbon's width is reduced, groups collapse into this button, which reveals a popup menu with the group's items when clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupIcon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupIcon" %}

### Enabling group launcher icon

The [showLauncherIcon](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property enables or disables the launcher icon for a group. This property is `false` by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/launcherIcon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/launcherIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/launcherIcon" %}

#### Customize launcher icon

The [launcherIconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon#launchericoncss) property customizes the group's launcher icon with a custom CSS class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/customLauncherIcon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/customLauncherIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/customLauncherIcon" %}

### Defining group collapsible state

The [isCollapsible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#iscollapsible) property determines whether a group collapses during resizing. By default, this property is `true`. Set it to `false` to prevent the group from collapsing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/collapsibleState/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/collapsibleState/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/collapsibleState" %}

#### Defining priority order for group collapse or expand

The [priority](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#priority) property sets the order in which groups collapse or expand on resize. When collapsing, groups with higher priority values are processed first. When expanding, groups with lower priority values are processed first.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/priority/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/priority/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/priority" %}

## Simplified layout

In the Simplified layout, the Ribbon organizes items and groups into a single row, creating a more compact interface. This layout is enabled by setting the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonLayout/).
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/simplified/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/simplified/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/simplified" %}

### Enabling group overflow popup

The [enableGroupOverflow](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property creates a dedicated popup menu for a group's overflow items during resizing. If this is `false`, overflow items are moved to a common overflow popup at the right end of the tab content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupOverflow/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupOverflow/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupOverflow" %}

## Minimized State

The Ribbon can be minimized to hide its contents and display only the tab headers. To toggle this state, double-click a tab header or click the collapse/expand icon. When minimized, clicking a tab header temporarily expands the content.

The [isMinimized](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#isminimized) property programmatically sets the Ribbon's minimized state. The `minimized` event is triggered when this state changes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/isMinimized/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/isMinimized/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/isMinimized" %}

## Show or hide the layout switcher

The [hideLayoutSwitcher](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#hidelayoutswitcher) property shows or hides the layout switcher button. By default, this property is `false`, and the button is visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/hideLayoutSwitcher/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/hideLayoutSwitcher/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/hideLayoutSwitcher" %}
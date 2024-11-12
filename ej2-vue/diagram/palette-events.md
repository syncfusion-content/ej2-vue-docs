---
layout: post
title: Symbol Palette Events in EJ2 Vue Diagram component | Syncfusion
description: Learn here all about Symbol palette in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette Events in EJ2 Vue Diagram component

There are some events which will get triggered while interacting with the symbol palette. They are explained below.

## DragEnter event

[`DragEnter`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragEnterEventArgs) event triggers when the shape enters the diagram surface while dragging it from symbol palette. You can customize the style of the dragged shape using this event. This allows for dynamic styling changes based on the diagram's context.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drag-enter/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drag-enter/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-enter"%}

## DragLeave event

[`DragLeave`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragLeaveEventArgs) event occurs when a shape leaves the diagram surface after being dragged inside but not dropped. This can be useful for resetting styles or handling any clean-up tasks when a shape is not intended to be placed on the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drag-leave/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drag-leave/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-leave"%}

## DragOver event

[`DragOver`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragOverEventArgs) event triggered when a shape is dragged over diagram while being moved from the symbol palette. This event can be used to provide visual feedback or to determine if the current drop target is valid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drag-over/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drag-over/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drag-over"%}

## Drop event

[`Drop`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDropEventArgs/) event triggered when a shape is dropped onto the diagram surface. This event is useful for customizing the shape's appearance and properties after it is dropped.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drop/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/drop/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/drop"%}

## PaletteExpanding event

[`PaletteExpanding`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPaletteExpandArgs/) event triggered when the palette expanded / collapsed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/palette-expand/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/palette-expand/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-expand"%}

## PaletteSelectionChange event

[`PaletteSelectionChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPaletteSelectionChangeArgs/) event triggered after the selection changes in the symbol palette. This event can be used to enable/disable functionality based on the selected symbol.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/events/palette-selection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/events/palette-selection"%}


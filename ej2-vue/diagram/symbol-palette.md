---
layout: post
title: Symbol palette in Vue Diagram component | Syncfusion
description: Learn here all about Symbol palette in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Symbol palette 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Symbol palette in Vue Diagram component

The **SymbolPalette** displays a collection of palettes. The Palette shows a set of nodes and connectors. It allows to drag and drop the nodes and connectors into the Diagram.

## Create symbol palette

To create Symbol Palette easily and to add nodes and connectors in it, you can check the video below.

{% youtube "youtube:https://www.youtube.com/embed/htUHPgJ31XE" %}

* The [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#width-number) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#height-number) property of the symbol palette allows to define the size of the symbol palette.

{% highlight js %}
export default {
    name: 'app'
    data() {
        return {
            //Defines how many palettes can be at expanded mode at a time
            expandMode: "Multiple",
            //Defines the palette collection
            palettes: [{
                    //Sets the id of the palette
                    id: 'flow',
                    //Sets whether the palette expands/collapse its children
                    expanded: true,
                    //Adds the palette items to palette
                    symbols: flowshapes,
                    //Sets the header text of the palette
                    title: 'Flow Shapes',
                    iconCss: 'e-ddb-icons e-flow'
                },
                {
                    id: 'basic',
                    expanded: true,
                    symbols: basicShapes,
                    title: 'Basic Shapes',
                    iconCss: 'e-ddb-icons e-basic'
                },
                {
                    id: 'connectors',
                    expanded: true,
                    symbols: connectorSymbols,
                    title: 'Connectors',
                    iconCss: 'e-ddb-icons e-connector'
                }
            ],
            palettewidth: "100%",
            paletteheight: "700px",
            symbolHeight: 60,
            symbolWidth: 60,
            }
        }
    }
{% endhighlight %}

<!-- markdownlint-disable MD010 -->

## Add palettes to SymbolPalette

A palette allows to display a group of related symbols and it textually annotates the group with its header.
Palettes[`palettes`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#palettes-PaletteModel[]) can be added as a collection of symbol groups.

The collection of predefined symbols can be added in palettes using [`symbols`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#symbols-[]) property.

To initialize a palette, define a JSON object with the property [`id`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#id-string) that is unique id is set to the palettes.

The following code example illustrates how to define a palette and how its added to symbol palette.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs1" %}

## Customize the Palette Header

Palettes can be annotated with its header texts.

The [`title`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#title-string) displayed as the header text of palette.

The [`expanded`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#expanded-boolean) property of palette allows to expand/collapse its palette items.

The [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#height-number) property of palette sets the height of the symbol group.

The [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#iconCss-string) property sets the content of the symbol group.

The [`description`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolDescription#description) defines the text to be displayed and how that is to be handled in getSymbolInfo.

Also, we can embed any HTML element into a palette header by defining the getSymbolInfo property.
Following code example illustrates how to customize palette headers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs2" %}

## Restrict expansion of the palette panel

The symbol palette panel can be restricted from getting expanded. The [`cancel`] argument of the [`paletteExpanding`] property defines whether the palette's panel should be expanded or collapsed. By default, the panel is expanded. This restriction can be done for each of the palettes in the symbol palette as desired.

In the following code example, the basic shapes palette is restricted from getting collapsed whereas the swimlane shapes palette can be expanded or collapsed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs3" %}

## Stretch the symbols into the palette

The [`fit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolInfo#fit-boolean) property defines whether the symbol has to be fit inside the size, that is defined by the symbol palette. For example, When we resize the rectangle in the symbol, ratio of the rectangle size has to be maintained rather changing into square shape. The following code example illustrates how to customize the symbol size.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs4" %}

## Add/Remove symbols to palette at runtime

* Symbols can be added to palette at runtime by using public method, [`addPaletteItem`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#addPaletteItem-number).

* Symbols can be removed from palette at runtime by using public method, [`removePaletteItem`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#removePaletteItem-number).

## Customize the size of symbols

You can customize the size of the individual symbol. The [`symbolWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#symbolwidth) and  [`symbolHeight`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#symbolheight) property of node enables you to define the size of the symbols. The following code example illustrates how to change the size of a symbol.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs5" %}

The [`symbolMargin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#symbolmargin) property is used to create the space around elements, outside of any defined borders.

## Symbol Preview

The Symbol Preview size of the palette items can be customized using [`symbolPreview`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPreview).
The [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPreview#width-number) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPreview#height-number) property of SymbolPalette enables you to define the preview size to all the symbol palette items.
[`offset`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPreview#offset-PointModel) of the dragging helper relative to the mouse cursor.

The following code example illustrates how to change the preview size of a palette item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs6" %}

## Default Settings

While adding more number of symbols such as nodes and connectors to the palette, you can define the default settings for those objects through [getNodeDefaults](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#getnodedefaults) property of defaultSettings allows to define the default settings for nodes and [getConnectorDefaults](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#getconnectordefaults) property of defaultSettings allows to define the default settings for connectors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs7" %}

## Adding symbol description for symbols in the palette

The diagram provides support to add symbol description below each symbol of a palette. This descriptive representation of each symbol will enhance the details of the symbol visually. The height and width of the symbol description can also be set individually.
* The property `getSymbolInfo`, can be used to add the symbol description at runtime.
 The following code is an example to set a symbol description for symbols in the palette.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs8" %}

## Appearance of symbol description

The appearance of a symbol description in the palette can be customized by changing its `color,` `fontSize,` `fontFamily,` `bold,` `italic,` `textDecoration,`  and `margin.`

The following code is an example to change the color of a symbol description for symbols in the palette.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs9" %}

## Tooltip for symbols in symbol palette

The Symbol palette supports displaying tooltips when mouse hovers over the symbols. You can customize the tooltip for each symbol in the symbol palette.

### Default tooltip for symbols

When hovering over symbols in the symbol palette, the default tooltip displays the symbol's ID.
Refer to the image below for an illustration of the tooltip behavior in the symbol palette.


![SymmbolPaletteTooltip](../diagram/images/SymbolPalatteTooltip.gif)

### Custom tooltip for symbols

To customize the tooltips for symbols in the symbol palette, assign a custom tooltip to the 'Tooltip' content property of each symbol. Once you define the custom tooltip, enable the Tooltip constraints for each symbol, ensuring that the tooltips are displayed when users hover over them.

Here, the code provided below demonstrates how to define tooltip content to symbols within a symbol palette.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs9" %}

### How to provide different tooltip for Symbol palette and diagram elements.

Differentiate the tooltips between symbols in the symbol palette and dropped nodes by utilizing the dragEnter event. When a custom tooltip is defined for a symbol, it will be displayed for both the symbol and the dropped node in the diagram canvas. However, to provide distinct tooltips for symbols in the palette and dropped nodes, capture the dragEnter event and assign specific tooltips dynamically. 

When a symbol is dragged from the symbol palette and enters the diagram canvas, the [`DragEnter`] [`IDragEnterEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragEnterEventArgs) event is triggered. Within this event, you can define a new tooltip for the dropped node. By assigning custom tooltip content to the Tooltip property of the node, you can provide a distinct tooltip that is specific to the dropped node.

The following image illustrates the differentiation of tooltips displayed in the Symbol Palette and the Diagram.


![SymmbolPaletteCustomTooltip](../diagram/images/SymbolCustomTooltip.gif)

The following code snippet will demonstrate how to define two different tooltip for symbol in the symbol palette and dropped node in the diagram canvas.

```ts
 let diagram: Diagram = new Diagram({
            width: '100%', height: '500px',
            connectors: connectors, nodes: nodes,
            //event to change tooltip content while dragging symbols into Diagram
            dragEnter: dragEnter,
        });
 diagram.appendTo('#diagram');

function dragEnter(args:IDragEnterEventArgs)
    {
        //enable tooltip connstraints for the dragged symbol
        args.dragItem.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;

        //change the tooltip content of the dragged symbol
        args.dragItem.tooltip.content='This is Diagram Tooltip';
    }
```

## Palette Interaction

Palette interaction notifies the element enter, leave, and dragging of the symbols into the diagram.

## DragEnter

[`DragEnter`] [`IDragEnterEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragEnterEventArgs) notifies when the element enter into the diagram from symbol palette.

## DragLeave

[`DragLeave`] [`IDragLeaveEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragLeaveEventArgs) notifies when the element leaves from  the diagram.

## DragOver

[`DragOver`] [`IDragOverEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDragOverEventArgs) notifies when an element drag over another diagram element.

>Note: The diagram provides support to cancel the drag and drop operation from the symbol palette to the diagram when the ESC key is pressed.

## See Also

* [How to add the symbol to the diagram](./nodes)
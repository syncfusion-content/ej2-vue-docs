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

* The [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#width-number) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#height-number) property of the symbolpalette allows to define the size of the symbolpalette.

```javascript
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
```

<!-- markdownlint-disable MD010 -->

## Add palettes to SymbolPalette

A palette allows to display a group of related symbols and it textually annotates the group with its header.
Palettes[`palettes`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#palettes-PaletteModel[]) can be added as a collection of symbol groups.

The collection of predefined symbols can be added in palettes using [`symbols`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#symbols-[]) property.

To initialize a palette, define a JSON object with the property [`id`](https://ej2.syncfusion.com/vue/documentation/api/diagram/palette#id-string) that is unique id is set to the palettes.

The following code example illustrates how to define a palette and how its added to symbol palette.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
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
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs2" %}

## Restrict expansion of the palette panel

The symbol palette panel can be restricted from getting expanded. The [`cancel`] argument of the [`paletteExpanding`] property defines whether the palette's panel should be expanded or collapsed. By default, the panel is expanded. This restriction can be done for each of the palettes in the symbol palette as desired.

In the following code example, the basic shapes palette is restricted from getting collapsed whereas the swimlane shapes palette can be expanded or collapsed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs3" %}

## Stretch the symbols into the palette

The [`fit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolInfo#fit-boolean) property defines whether the symbol has to be fit inside the size, that is defined by the symbol palette. For example, When we resize the rectangle in the symbol, ratio of the rectangle size has to be maintained rather changing into square shape. The following code example illustrates how to customize the symbol size.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
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
{% highlight html tabtitle="app.vue" %}
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
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs6" %}

## Default Settings

While adding more number of symbols such as nodes and connectors to the palette, you can define the default settings for those objects through [getNodeDefaults](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#getnodedefaults) property of defaultSettings allows to define the default settings for nodes and [getConnectorDefaults](https://ej2.syncfusion.com/vue/documentation/api/diagram/symbolPaletteModel/#getconnectordefaults) property of defaultSettings allows to define the default settings for connectors.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs7" %}

## Adding symbol description for symbols in the palette

The diagram provides support to add symbol description below each symbol of a palette. This descriptive representation of each symbol will enhance the details of the symbol visually. The height and width of the symbol description can also be set individually.
* The property `getSymbolInfo`, can be used to add the symbol description at runtime.
 The following code is an example to set a symbol description for symbols in the palette.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs8" %}

## Appearance of symbol description

The appearance of a symbol description in the palette can be customized by changing its `color,` `fontSize,` `fontFamily,` `bold,` `italic,` `textDecoration,`  and `margin.`

The following code is an example to change the color of a symbol description for symbols in the palette.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/symbol-palette/palettes-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette/palettes-cs9" %}

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
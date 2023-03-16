---
layout: post
title: Commands in Vue Diagram component | Syncfusion
description: Learn here all about Commands in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Commands 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Commands in Vue Diagram component

<!-- markdownlint-disable MD010 -->

There are several commands available in the diagram as follows.

* Alignment commands
* Spacing commands
* Sizing commands
* Clipboard commands
* Grouping commands
* Z-order commands
* Zoom commands
* Nudge commands
* FitToPage commands
* Undo/Redo commands

## Align

Alignment commands enable you to align the selected or defined objects such as nodes and connectors with respect to the selection boundary. Refer to [`align`](https://ej2.syncfusion.com/vue/documentation/api/diagram#align) commands which shows how to use align methods in the diagram.

<!-- markdownlint-disable MD033 -->

| Parameters | Description |
|:------------| :------: |
|[`Alignment Options`](https://ej2.syncfusion.com/vue/documentation/api/diagram/alignmentOptions#AlignmentOptions) | <p align="left">Defines the specific direction, with respect to which the objects to be aligned. <br> The accepted values of the argument "alignment options" are as follows.</p> <table><tr><td> Left </td><td align="left"> Aligns all the selected objects at the left of the selection boundary. </td></tr><tr><td> Right </td><td align="left"> Aligns all the selected objects at the right of the selection boundary. </td></tr><tr><td> Center </td><td align="left"> Aligns all the selected objects at the center of the selection boundary. </td></tr><tr><td>Top </td><td align="left"> Aligns all the selected objects at the top of the selection boundary. </td></tr><tr><td> Bottom </td><td align="left"> Aligns all the selected objects at the bottom of the selection boundary. </td></tr><tr><td> Middle </td><td align="left"> Aligns all the selected objects at the middle of the selection boundary. </td></tr></table>|
| Objects | <p align="left">Defines the objects to be aligned. This is an optional parameter. By default, all the nodes and connectors in the selected region of the diagram gets aligned.</p> |
[`Alignment Mode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/alignmentMode#AlignmentMode)  | <p align="left">Defines the specific mode, with respect to which the objects to be aligned. This is an optional parameter. The default alignment mode is `Object`.<br> The accepted values of the argument "alignment mode" are as follows.</p> <table><tr><td> Object </td><td align="left"> Aligns the objects based on the first object in the selected list. </td></tr><tr><td> Selector </td><td align="left"> Aligns the objects based on the selection boundary. </td></tr></table>|

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/align-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/align-cs1" %}

![Align Sample](images/Commands_img1.png)

## Distribute

The [`Distribute`](https://ej2.syncfusion.com/vue/documentation/api/diagram#distribute) commands enable to place the selected objects on the page at equal intervals from each other. The selected objects are equally spaced within the selection boundary.

The factor to distribute the shapes [`DistributeOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/distributeOptions#DistributeOptions) are listed as follows:

* RightToLeft: Distributes the objects based on the distance between the right and left sides of the adjacent objects.
* Left: Distributes the objects based on the distance between the left sides of the adjacent objects.
* Right: Distributes the objects based on the distance between the right sides of the adjacent objects.
* Center: Distributes the objects based on the distance between the center of the adjacent objects.
* BottomToTop: Distributes the objects based on the distance between the bottom and top sides of the adjacent objects.
* Top: Distributes the objects based on the distance between the top sides of the adjacent objects.
* Bottom: Distributes the objects based on the distance between the bottom sides of the adjacent objects.
* Middle: Distributes the objects based on the distance between the vertical center of the adjacent objects.

The following code example illustrates how to execute the space commands.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/distribute-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/distribute-cs1" %}

![DistributeImage](images/Commands_img2.png)

## Sizing

Sizing [`sameSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#sameSize) commands enable to equally size the selected nodes with respect to the first selected object.

[`SizingOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/sizingOptions) are as follows:

* Width: Scales the width of the selected objects.
* Height: Scales the height of the selected objects.
* Size: Scales the selected objects both vertically and horizontally.

The following code example illustrates how to execute the size commands.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/sizing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/sizing-cs1" %}

![Sizing Sample](images/Commands_img3.png)

## Clipboard

Clipboard commands are used to cut, copy, or paste the selected elements. Refer to the following link which shows how to use clipboard methods in the diagram.

* Cuts the selected elements from the diagram to the diagram’s clipboard, [`cut`](https://ej2.syncfusion.com/vue/documentation/api/diagram#cut).

* Copies the selected elements from the diagram to the diagram’s clipboard, [`copy`](https://ej2.syncfusion.com/vue/documentation/api/diagram#copy).

* Pastes the diagram’s clipboard data (nodes/connectors) into the diagram, [`paste`](https://ej2.syncfusion.com/vue/documentation/api/diagram#paste).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/clipboard-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/clipboard-cs1" %}

## Grouping

**Grouping commands** are used to group/ungroup the selected elements on the diagram. Refer to the following link which shows how to use grouping commands in the diagram.

[`Group`](https://ej2.syncfusion.com/vue/documentation/api/diagram#group) the selected nodes and connectors in the diagram.

[`Ungroup`](https://ej2.syncfusion.com/vue/documentation/api/diagram#ungroup) the selected nodes and connectors in the diagram.

The following code illustrates how to execute the grouping commands.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/grouping-cs1" %}

## Z-Order command

**Z-Order commands** enable you to visually arrange the selected objects such as nodes and connectors on the page.

### bringToFront command

The [`bringToFront`](https://ej2.syncfusion.com/vue/documentation/api/diagram#bringToFront) command visually brings the selected element to front over all the other overlapped elements. The following code illustrates how to execute the `bringToFront` command.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/bringfront-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/bringfront-cs1" %}

### sendToBack command

The [`sendToBack`](https://ej2.syncfusion.com/vue/documentation/api/diagram#sendToBack) command visually moves the selected element behind all the other overlapped elements. The following code illustrates how to execute the `sendToBack` command.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/sendback-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/sendback-cs1" %}

### moveForward command

The [`moveForward`](https://ej2.syncfusion.com/vue/documentation/api/diagram#moveForward) command visually moves the selected element over the nearest overlapping element. The following code illustrates how to execute the `moveForward` command.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/moveforward-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/moveforward-cs1" %}

### sendBackward command

The [`sendBackward`](https://ej2.syncfusion.com/vue/documentation/api/diagram#sendBackward) command visually moves the selected element behind the underlying element. The following code illustrates how to execute the `sendBackward` command.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/commands/sendbackward-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/commands/sendbackward-cs1" %}

## Zoom

The [`zoom`](https://ej2.syncfusion.com/vue/documentation/api/diagram#zoom) command is used to zoom-in and zoom-out the diagram view.

The following code illustrates how to zoom-in/zoom out the diagram.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'  ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,NodeModel,ConnectorModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.zoom(1.2, {
                x: 100,
                y: 100
            });
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## Nudge command

The [`nudge`](https://ej2.syncfusion.com/vue/documentation/api/diagram#nudge) commands move the selected elements towards up, down, left, or right by 1 pixel.

[`NudgeDirection`](https://ej2.syncfusion.com/vue/documentation/api/diagram/nudgeDirection) nudge command moves the selected elements towards the specified direction by 1 pixel, by default.

The accepted values of the argument "direction" are as follows:

* Up: Moves the selected elements towards up by the specified delta value.
* Down: Moves the selected elements towards down by the specified delta value.
* Left: Moves the selected elements towards left by the specified delta value.
* Right: Moves the selected elements towards right by the specified delta value.

The following code illustrates how to execute nudge command.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'  ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,NodeModel,ConnectorModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.nudge('Right');
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## Nudge by using arrow keys

The corresponding arrow keys are used to move the selected elements towards up, down, left, or right direction by 1 pixel.

![Nudge Command](images/Commands_img4.png)

Nudge commands are particularly useful for accurate placement of elements.

## BringIntoView

The [`bringIntoView`](https://ej2.syncfusion.com/vue/documentation/api/diagram#bringIntoView) command brings the specified rectangular region into the viewport of the diagram.

The following code illustrates how to execute the `bringIntoView` command.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'  ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,NodeModel,ConnectorModel,Rect} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            //Brings the specified rectangular region of the Diagram content to the viewport of the page.
            let bound: Rect = new Rect(200, 400, 500, 400);
            diagramInstance.bringIntoView(bound);
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## BringToCenter

The [`bringToCenter`](https://ej2.syncfusion.com/vue/documentation/api/diagram#bringToCenter) command brings the specified rectangular region of the diagram content to the center of the viewport.

The following code illustrates how to execute the `bringToCenter` command.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'  ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,NodeModel,ConnectorModel,Rect} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            //Brings the specified rectangular region of the Diagram content to the center of the viewport.
            let bound: Rect = new Rect(200, 400, 500, 400);
            diagramInstance.bringToCenter(bound);
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## FitToPage command

The [`fitToPage`](https://ej2.syncfusion.com/vue/documentation/api/diagram#fitToPage) command helps to fit the diagram content into the view with respect to either width, height, or at the whole.

The [`mode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/fitModes#modes) parameter defines whether the diagram has to be horizontally/vertically fit into the viewport with respect to width, height, or entire bounds of the diagram.

The [`region`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramRegions#region) parameter defines the region that has to be drawn as an image.

The [`margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iFitOptions#margin) parameter defines the region/bounds of the diagram content that is to be fit into the view.

The [`canZoomIn`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iFitOptions#canZoomIn) parameter enables/disables zooming to fit the smaller content into a larger viewport.

The [`customBounds`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iFitOptions#customBounds) parameter the custom region that has to be fit into the viewport.

The following code illustrates how to execute `FitToPage` command.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'  ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,NodeModel,ConnectorModel,Rect} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            //fit the diagram to the page with respect to mode and region
            diagramInstance.fitToPage({
                mode: 'Page',
                region: 'Content',
                margin: {
                    bottom: 50
                },
                canZoomIn: false
            });
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## Command manager

Diagram provides support to map/bind command execution with desired combination of key gestures. Diagram provides some built-in commands.
[`CommandManager`](https://ej2.syncfusion.com/vue/documentation/api/diagram/commandManager#commandManager) provides support to define custom commands. The custom commands are executed, when the specified key gesture is recognized.

## Custom command

To define a custom command, specify the following properties:
* [`execute`](https://ej2.syncfusion.com/vue/documentation/api/diagram/command#execute): A method to be executed.
* [`canExecute`](https://ej2.syncfusion.com/vue/documentation/api/diagram/command#canexecute): A method to define whether the command can be executed at the moment.
* [`gesture`](https://ej2.syncfusion.com/vue/documentation/api/diagram/keyGestureModel#gesture): A combination of [`keys`](https://ej2.syncfusion.com/vue/documentation/api/diagram/keys#key) and [`KeyModifiers`](https://ej2.syncfusion.com/vue/documentation/api/diagram/keyModifiers#keymodifiers).
* [`parameter`](https://ej2.syncfusion.com/vue/documentation/api/diagram/command#parameter): Defines any additional parameters that are required at runtime.
* [`name`](https://ej2.syncfusion.com/vue/documentation/api/diagram/command#name): Defines the name of the command.

To explore the properties of custom commands, refer to [`Commands`](https://ej2.syncfusion.com/vue/documentation/api/diagram/command#commands).

The following code example illustrates how to define a custom command.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :commandManager='commandManager' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,Keys,KeyModifiers} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                commandManager: {
                    commands: [{
                        name: 'customCopy',
                        parameter: 'node',
                        //Method to define whether the command can be executed at the current moment
                        canExecute: function() {
                            //Defines that the clone command can be executed, if and only if the selection list is not empty.
                            if (diagramInstance.selectedItems.nodes.length > 0 || diagramInstance.selectedItems.connectors.length > 0) {
                                return true;
                            }
                            return false;
                        },
                        //Command handler
                        execute: function() {
                            //Logic to clone the selected element
                            diagramInstance.copy();
                            diagramInstance.paste();
                            diagramInstance.dataBind();
                        },
                        //Defines that the clone command has to be executed on the recognition of key press.
                        gesture: {
                            key: Keys.G,
                            keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt
                        }
                    }]
                },
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let obj: any = document.getElementById("diagram");
            diagramInstance = obj.ej2_instances[0];
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## Modify the existing command

When any one of the default commands is not desired, they can be disabled. To change the functionality of a specific command, the command can be completely modified.

The following code example illustrates how to disable a command and how to modify the built-in commands.

```
<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :commandManager='commandManager' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {
        DiagramPlugin,
        Keys,
        KeyModifiers
    } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                commandManager: {
                commands: [
                    {
                        name: 'nudgeUp',
                        canExecute: function () {
                            return false;
                        },
                        gesture: {
                            key:Keys.Up,  
                        }
                    },
                    {
                        name: 'nudgeDown',
                        canExecute: function () {
                            return false;
                        },
                        gesture: {
                            key: Keys.Down,
                        }
                    },
                    {
                    name: 'nudgeRight',
                        canExecute: function () {
                            return false;
                        },
                        gesture: {
                            key: Keys.Right,
                        }
                    }
                ]
                },
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let obj: any = document.getElementById("diagram");
            diagramInstance = obj.ej2_instances[0];
        }

    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
```

## See Also

* [How to create the custom context menu items](./context-menu)
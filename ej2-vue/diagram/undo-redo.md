---
layout: post
title: Undo redo in Vue Diagram component | Syncfusion
description: Learn here all about Undo redo in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Undo redo 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Vue Diagram component

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

>Note: If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is Ctrl+z and shortcut key for redo is Ctrl+y.

## Undo/redo through public APIs

The client-side methods [`undo`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#undo) and [`redo`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#redo) help you to revert/restore the changes. The following code example illustrates how to undo/redo the changes through script.

```javascript
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
        // Reverts the last action performed
        diagramInstance.undo();

        // Restores the last undone action
        diagramInstance.redo();
    }
}

```

When a change in the diagram is reverted or restored (undo/redo), the historyChange event gets triggered.

### Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The client-side method [`startGroupAction`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#startgroupaction) is used to notify the diagram to start grouping the changes. The client-side method [`endGroupAction`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#endgroupaction) is used to notify to stop grouping the changes. The following code illustrates how to undo/redo fillColor change of multiple elements at a time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs1" %}


## canLog

canLog in the history list, which takes a history entry as argument and returns whether the specific entry can be added or not.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs2" %}

### Track undo/redo actions

The historyList undoStack property is used to get the collection of undo actions which should be performed in the diagram.
The undoStack/redoStack is the read-only property.

```javascript
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
        //get the collection of undoStack objects
        let undoStack = diagramInstance.historyList.undoStack;
        //get the collection of redoStack objects
        let redoStack = diagramInstance.historyList.redoStack;
    }
}

```

## History change event

The [`historyChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#historychange) event triggers, whenever the interaction of the node and connector is take place.

```javascript
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
        diagramInstance.historyChange = (arg: IHistoryChangeArgs) => {
            //causes of history change
            let cause: string = arg.cause;
        }
    }
}

```

## Stack limit

The [`stackLimit`](https://ej2.syncfusion.com/vue/documentation/api/diagram) property of history manager is used to limits the number of actions to be stored on the history manager.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs3" %}

## Retain selection

You can retain a selection at undo/redo operation by using the client-side API Method called `updateSelection`.  Using this method, we can select a diagram objects.

```ts
let diagramInstance: DiagramComponent;
ReactDOM.render( < DiagramComponent id = "diagram" ref={diagram => diagramInstance = diagram}
        width = {
            '100%'
        }
        height = {
            '600px'
        }
        nodes = {
            nodes
        }
        />,   document.getElementById("diagram") );
        // history change event
        diagramInstance.updateSelection: (object: NodeModel, diagram: Diagram) => {
                    let selArr = [];
                    selArr.push(object)
                    diagram.select(selArr);
                },

```
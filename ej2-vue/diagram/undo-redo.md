---
layout: post
title: Undo redo in Vue Diagram component | Syncfusion®
description: Learn here all about Undo redo in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Undo redo 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Vue Diagram component

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

N> If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is **`Ctrl+z`** and shortcut key for redo is **`Ctrl+y`**.

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

Undo/Redo for diagram can be enabled/disabled with the [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramConstraints/) property of diagram.

When a change in the diagram is reverted or restored (undo/redo), the [`historyChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#historychange) event gets triggered.

## Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The diagram method [`startGroupAction`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#startgroupaction) allows you to log multiple actions at a time in the history manager stack. It is easier to undo or revert the changes made in the diagram in a single undo/redo process instead of reverting every actions one by one.The diagram method [`endGroupAction`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#endgroupaction) allows you to end the group actions that are stored in the stack history. The following code illustrates how to undo/redo multiple fillColor change of a node at a time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs1" %}

## Stack Limit

The [`stackLimit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#stacklimit) property of history manager is used to limits the number of actions to be stored on the history manager.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs3" %}

## Restrict Undo/Redo

Undo, Redo process can be avoided for particular element by using [`canLog`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#canlog) property in the history manager. The following example illustrates how to prevent history entry using `canLog` function.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs2" %}

## undo/redo stack

The [`undoStack`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#undostack) property is used to get the collection of undo actions which should be performed in the diagram. The [`redoStack`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#redostack) property is used to get the collection of redo actions which should be performed in the diagram. The undoStack/redoStack is the read-only property.

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

## canUndo and canRedo 

The [`canUndo`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#canundo) property returns true if there are actions in the undo history stack; otherwise, it returns false. This property helps identify whether any actions are present in the undo stack.The [`canRedo`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#canredo) property returns true if there are actions in the redo history stack; otherwise, it returns false. This property helps identify whether any actions are present in the redo stack.

The following code demonstrates how to use these properties:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs4" %}

## Current entry

While performing interactions with a node or connector, the current history entry is added to the [`currentEntry`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#currententry) property of the [`historyManager`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#historymanager).

The following code shows how to get the current entry from the diagram history:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs4" %}

## Clear history

The [`clearHistory`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#clearhistory) method of diagram is used to remove all the recorded actions from the undo and redo history.

```javascript
//Clears all the histories
diagramInstance.clearHistory();

```

## Get history stack

The [`getHistoryStack`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#gethistorystack) method of the diagram retrieves the [`undoStack`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#undostack) or [`redoStack`](https://ej2.syncfusion.com/vue/documentation/api/diagram/history/#redostack) from the historyManager. This method takes a single parameter, isUndoStack. Pass true to get the undoStack or false to get the redoStack.

```javascript
// Fetch undoStack from history manager
diagramInstance.getHistoryStack(true)

// Fetch redoStack from history manager
diagramInstance.getHistoryStack(false)

```

## History change event

The [`historyChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iHistoryChangeArgs/) event triggers, whenever the interaction of the node and connector is take place. When interacting, the entries get added to the history manager to trigger this event. The following example shows how to get this event in diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/undo-redo/undo-redo-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undo-redo/undo-redo-cs5" %}

While interacting with diagram, this event can be used to do the customization.

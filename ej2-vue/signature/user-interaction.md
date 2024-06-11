---
layout: post
title: User interaction in Vue Signature component | Syncfusion
description: Learn here all about User interaction in Syncfusion Vue Signature component of Syncfusion Essential JS 2 and more.
control: User interaction 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in Vue Signature component

The below interactions were available in Signature, and we can walk through one by one.

* Undo and Redo
* Clear
* Disabled
* ReadOnly

## Undo and Redo

In the Signature, every action can be maintained as a snap for undo and redo operations. And maintained SnapIndex for indexing the snap collection.

The [`undo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#undo) method reverts the last action of signature by decreasing SnapIndex value to  index previous snap. Here, [`canUndo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#canundo) method is used to ensure whether undo can be performed or not.

The [`redo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#redo) method reverts the last undo action of the signature by increasing the SnapIndex to  get the next snap. Here, [`canRedo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#canredo) method is used to ensure whether redo can be performed or not.

## Clear

The [`clear`](https://ej2.syncfusion.com/vue/documentation/api/signature/#clear) method is used to clears the signature and makes the canvas empty. This is also considered in Undo/ Redo. Here, [`isEmpty`](https://ej2.syncfusion.com/vue/documentation/api/signature/#isempty) method is used to ensure whether the signature is empty or not.

## Disabled

The [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/signature/#disabled) property is used to enables/disables the signature component. In the disabled state, the user is not allowed to draw signature. And it can’t be focused until the user enabled the signature.

## ReadOnly

The [`isReadOnly`](https://ej2.syncfusion.com/vue/documentation/api/signature/#isreadonly) property is used to enables/disables the ReadOnly Signature. It can be focused but it prevents drawing in Signature.

The following sample explains about user interactions available in signature.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs13" %}
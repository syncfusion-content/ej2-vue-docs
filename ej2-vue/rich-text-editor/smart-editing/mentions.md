---
layout: post
title: Mentions in Vue Rich text editor component | Syncfusion
description: Learn here all about Mentions in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Mentions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in the Vue Rich Text Editor Component

By integrating the [Mention](https://ej2.syncfusion.com/vue/documentation/mention/getting-started/) component with a Rich Text Editor, users can effortlessly mention or tag other users or objects from a suggested list. This eliminates the need to manually type out names or identifying information, improving efficiency and accuracy.

Use the [target](https://ej2.syncfusion.com/vue/documentation/api/mention/#target) property of the Mention component to specify the `ID` of the content editable div element within the Rich Text Editor. When setting the target, make sure to append the suffix `_rte-edit-view` to the ID. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

When the user types the `@` symbol followed by a character, the Rich Text Editor displays a list of suggestions. Users can then select an item from the list by:

* Clicking on it
* Typing the name of the item they want to tag

In the following sample, we configured the following properties with popup dimensions.

* [allowSpaces](https://ej2.syncfusion.com/vue/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/vue/documentation/api/mention/#suggestioncount) - The maximum number of items that will be displayed in the suggestion list.
* [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#itemtemplate) - Used to display the customized appearance in suggestion list.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs1" %}

> [View Sample](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/rich-text-editor/mention-integration.html)

## See Also

* [Mention](https://ej2.syncfusion.com/vue/documentation/mention/getting-started/)
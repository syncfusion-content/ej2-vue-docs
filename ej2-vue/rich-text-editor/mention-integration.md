---
layout: post
title: Mention integration in Vue Rich text editor component | Syncfusion
description: Learn here all about Mention integration in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Mention integration 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Mention integration in Vue Rich text editor component

By integrating the [Mention](https://ej2.syncfusion.com/vue/documentation/mention/getting-started/) component with a Rich Text Editor, users can easily mention or tag other users or objects from the suggested list without having to manually type out their names or other identifying information.

The [target](https://ej2.syncfusion.com/vue/documentation/api/mention/#target) property of the Mention component allows you to specify the `ID` of the content editable div element within the Rich Text Editor that you want to bind the Mention component to. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

When the user types the `@` symbol followed by a character, the Rich Text Editor will display a list of suggestions for items that the user can select from. The user can then select an item from the list by clicking on it, or by typing the name of the item they want to tag.

In the following sample, configured the following properties with popup dimensions.

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
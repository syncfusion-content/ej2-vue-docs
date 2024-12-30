---
layout: post
title: Find and replace in Vue Document editor component | Syncfusion
description: Learn here all about Find and replace in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Find and replace 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Find and replace in Vue Document editor component

The Document Editor component searches a portion of text in the document through a built-in interface called `OptionsPane` or rich APIs. When used in combination with selection performs various operations on the search results like replacing it with some other text, highlighting it, making it bolder, and more.

## Options pane

This provides the options to search for a portion of text in the document. After search operation is completed, the search results will be displayed in a list and options to navigate between them. The current occurrence of matched text or all occurrences with another text can be replaced by switching to `Replace` tab. This pane is opened using the keyboard shortcut `CTRL+F`. You can also open it programmatically using the following sample code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" height="350px">
    <div>
      <button v-on:click='showOptionsPane'>Save</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableEditor='true' :enableSearch='true' :enableOptionsPane='true'
      :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, Search, OptionsPane } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, Search, OptionsPane]);

const showOptionsPane = function () {
  //Open options pane.
  documenteditor.value.showOptionsPane();
}

onMounted(function () {
  let sfdt = `{
              "sections": [
                  {
                      "blocks": [
                          {
                              "inlines": [
                                  {
                                      "characterFormat": {
                                          "bold": true,
                                          "italic": true
                                      },
                                      "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }`;
  documenteditor.value.open(sfdt);
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" height="350px">
    <div>
      <button v-on:click='showOptionsPane'>Save</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableEditor='true' :enableSearch='true' :enableOptionsPane='true'
      :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, Search, OptionsPane } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditor: [Selection, Editor, Search, OptionsPane]
  },
  methods: {
    showOptionsPane: function () {
      //Open options pane.
      this.$refs.documenteditor.showOptionsPane();
    }
  },
  mounted() {
    let sfdt = `{
              "sections": [
                  {
                      "blocks": [
                          {
                              "inlines": [
                                  {
                                      "characterFormat": {
                                          "bold": true,
                                          "italic": true
                                      },
                                      "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }`;
    this.$refs.documenteditor.open(sfdt);
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

You can close the options pane by pressing `Esc` key.

## Search

The [`Search`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/search/) module of Document Editor exposes the following APIs:

|API Name|Type |Description|
|---|---|---|
|[`findAll()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/search/#findall)| Method |Searches for specified text in the whole document and highlights it with yellow.|
|[`searchResults`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/search/#searchresults) |Property |This is an instance of [`SearchResults`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/).|
|[`find()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/search/#find) | Method |Find immediate occurrence of specified text from cursor position in the document and highlights it with yellow.|

### Find the immediate occurrence in the document

Using [`find()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/search/#find) method, you can find the immediate occurrence of specified text from current cursor position in the document.

The following example code illustrates how to use find in Document editor.

```ts
this.$refs.documenteditor.ej2instances.search.find('Some text', 'None');
```

>Note: Second parameter is optional parameter and it denotes find Options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

### Find all the occurrences in the document

Using [`findAll()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/search/#findall) method, you can find all the occurrences of specified text in the whole document and highlight it with yellow.

The following example code illustrates how to find All the text in the document.

```ts
this.$refs.documenteditor.ej2instances.search.findAll('Some text', 'None');
```

>Note: Second parameter is optional parameter and it denotes find Options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

## Search results

The [`SearchResults`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/) class provides information about the search results after a search operation is completed that can be identified using the [`searchResultsChange`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#searchresultschange) event. This will expose the following APIs:

|API Name|Type |Description|
|---|---|---|
|[`length`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/#length)|Property|Returns the total number of results found on the search.|
|[`index`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/#index)|Property|Returns the index of selected search result. You can change the value for this property to move the selection.|
|[`replaceAll()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/#replaceall)|Method|Replaces all the occurrences with specified text.|
|[`clear()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/#clear)|Method|Clears the search result.|

### Replace all the occurrences

Using [`replaceAll`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/searchResults/#replaceall), you can replace all the occurrences with specified text.

The following example code illustrates how to use replace All in Document editor.

```ts
this.$refs.documentEditor.ej2Instances.search.findAll ('Some text');
// Replace all the searched text with word 'Mike'
this.$refs.documentEditor.ej2Instances.search.searchResults.replaceAll("Mike");  
```

### Replace

Using [`insertText`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#inserttext), you can replace the current searched text with specified text and it replace single occurrence.

>Note: This [`insertText`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#inserttext) API accepts following control characters
>* New line characters ("\r", "\r\n", "\n") - Inserts a new paragraph and appends the remaining text to the new paragraph.
>* Line break character ("\v") - Moves the remaining text to start in new line.
>* Tab character ("\t") - Allocates a tab space and continue the next character.

The following example code illustrates how to find a text in the document and replace each occurrence of the text one by one programmatically.

```ts
this.$refs.container.ej2instances.documentEditor.search.findAll('works');

let searchLength: number = container.documentEditor.search.searchResults.length;

for (let i = searchLength - 1; i >= 0; i--) {
  // It will move selection to specific searched index,move to each occurrence one by one
  this.$refs.container.ej2instances.documentEditor.search.searchResults.index = i;
  // Replace it with some text
  this.$refs.container.ej2instances.documentEditor.editor.insertText('Hello');
}

this.$refs.container.ej2Instances.documentEditor.search.searchResults.clear();
```

## SearchResultsChange event

[`DocumentEditor`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/) exposes the [`searchResultsChange`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#searchresultschange)event that will be triggered whenever search results are changed. Consider the following scenarios:

* A search operation is completed with some results.
* The results are replaced with some other text, since it will be cleared automatically.
* The results are cleared explicitly.

Refer to the following code example.

```ts
documenteditor.searchResultsChange = function() {

};
```

## Customize find and replace

Using the exposed APIs, you can customize the find and replace functionality in your application. Refer to the following sample code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/replace-all-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/replace-all-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/replace-all-cs1" %}
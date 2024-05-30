---
layout: post
title: List format in Vue Document editor component | Syncfusion
description: Learn here all about List format in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: List format 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# List format in Vue Document editor component

Document Editor supports both the single-level and multilevel lists. Lists are used to organize data as step-by-step instructions in documents for easy understanding of key points. You can apply list to the paragraph either using supported APIs.

## Create bullet list

Bullets are usually used for unordered lists. To apply bulleted list for selected paragraphs, use the following method of ‘Editor’ instance.

> applyBullet(bullet, fontFamily);

| Parameter  | Type   | Description         |
| ---------- | ------ | ------------------- |
| Bullet     | string | Bullet character.   |
| fontFamily | string | Bullet font family. |

Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.applyBullet('\uf0b7', 'Symbol');
```

## Create numbered list

Numbered lists are usually used for ordered lists. To apply numbered list for selected paragraphs, use the following method of ‘Editor’ instance.

> applyNumbering(numberFormat,listLevelPattern)

| Parameter                  | Type   | Description                                                                                                                        |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| numberFormat               | string | “%n” representations in ‘numberFormat’ parameter will be replaced by respective list level’s value.“%1)” will be displayed as “1)” |
| listLevelPattern(optional) | string | Default value is 'Arabic'.                                                                                                         |

Refer to the following example.

```ts
this.$refs.documenteditor.ej2Instances.editor.applyNumbering('%1)', 'UpRoman');
```

## Clear list

You can also clear the list formatting applied for selected paragraphs. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.clearList();
```

## Working with lists

The following sample demonstrates how to create bullet and numbering lists in Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div style="width:100%;height:330px">
    <div>
      <ejs-toolbar v-bind:clicked='toolbarButtonClick'>
        <e-items>
          <e-item prefixIcon="e-de-ctnr-bullets e-icons" tooltipText="Bullets" id="Bullets"></e-item>
          <e-item prefixIcon="e-de-ctnr-numbering e-icons" tooltipText="Numbering" id="Numbering"></e-item>
          <e-item text="Clear" id="clearlist" tooltipText="Clear List"></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableEditorHistory='true' :enableSfdtExport='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, EditorHistory } from '@syncfusion/ej2-vue-documenteditor';
import { ToolbarComponent as EjsToolbar } from "@syncfusion/ej2-vue-navigations";
import { provide } from 'vue';

provide('DocumentEditor', [SfdtExport, EditorHistory, Selection, Editor])

const toolbarButtonClick = function (args) {
  switch (args.item.id) {
    case 'Bullets':
      //To create bullet list
      this.$refs.documenteditor.ej2Instances.editor.applyBullet('\uf0b7', 'Symbol');
      break;
    case 'Numbering':
      //To create numbering list
      this.$refs.documenteditor.ej2Instances.editor.applyNumbering('%1)', 'UpRoman');
      break;
    case 'clearlist':
      //To clear list
      this.$refs.documenteditor.ej2Instances.editor.clearList();
      break;
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div style="width:100%;height:330px">
    <div>
      <ejs-toolbar v-bind:clicked='toolbarButtonClick'>
        <e-items>
          <e-item prefixIcon="e-de-ctnr-bullets e-icons" tooltipText="Bullets" id="Bullets"></e-item>
          <e-item prefixIcon="e-de-ctnr-numbering e-icons" tooltipText="Numbering" id="Numbering"></e-item>
          <e-item text="Clear" id="clearlist" tooltipText="Clear List"></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableEditorHistory='true' :enableSfdtExport='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport, EditorHistory } from '@syncfusion/ej2-vue-documenteditor';
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent,
    'ejs-toolbar': ToolbarComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    DocumentEditor: [SfdtExport, EditorHistory, Selection, Editor]
  },
  methods: {
    toolbarButtonClick: function (args) {
      switch (args.item.id) {
        case 'Bullets':
          //To create bullet list
          this.$refs.documenteditor.ej2Instances.editor.applyBullet('\uf0b7', 'Symbol');
          break;
        case 'Numbering':
          //To create numbering list
          this.$refs.documenteditor.ej2Instances.editor.applyNumbering('%1)', 'UpRoman');
          break;
        case 'clearlist':
          //To clear list
          this.$refs.documenteditor.ej2Instances.editor.clearList();
          break;
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Editing numbered list

Document Editor restarts the numbering or continue numbering for a numbered list. These options are found in the built-in context menu, if the list value is selected. Refer to the following screenshot.

![Image](images/list.png)

## See Also

* [List dialog](../document-editor/dialog#list-dialog)
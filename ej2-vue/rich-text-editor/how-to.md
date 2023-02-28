---
layout: post
title: How to in Vue Rich text editor component | Syncfusion
description: Learn here all about How to in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to in Vue Rich text editor component

## Add Google fonts

To use web fonts in RTE, it is not needed for the web fonts to be present in local machine. To add the web fonts to RTE, we need to refer the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api-richTextEditor.html#fontfamily) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs1" %}

The below font style links are referred in the page.

```ts

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that we have added two Google web fonts (`Roboto` and `Great vibes`) to `RTE`.

## Change default font-family

By using [`default`](https://ej2.syncfusion.com/vue/documentation/api-richTextEditor.html#fontfamily) property, you can change the default font-family of the RTE. To change the font-family of the RTE content while loading, we need to give the font-family in the style section with the help of [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api-richTextEditor.html#cssclass) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs2" %}

## Customize shortcut keys

It can be achieved by using [`formatter`](./api-richTextEditor.html#formatter) property. We need to create `customformatterModel` to configure the `keyConfig` using `IHtmlFormatterModel` class and assign the same to the formatter property. Here, `ctrl+q` is configured to open the `Insert Hyperlink` dialog.

{% tab template='rich-text-editor/toolbar', isDefaultActive=true %}

```
<template>
  <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" :formatter="formatter" >
    <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
      </li>
      <li>
        <p>Capable of handling markdown editing.</p>
      </li>
      <li>
        <p>Contains a modular library to load the necessary functionality on demand.</p>
      </li>
      <li>
        <p>Provides a fully customizable toolbar.</p>
      </li>
    </ul>
  </ejs-richtexteditor>
</template>

<script>
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, IHtmlFormatterModel, HTMLFormatter } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  export default {
    data() {
    var customHTMLModel = {
  keyConfig: {
'insert-link': 'ctrl+q', // confite the desired key
}
}
      return {
        placeholder: "Type Something",
        formatter: new HTMLFormatter(customHTMLModel), // to configure custom key
    }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
    @import 'https://ej2.syncfusion.com/vue/documentation./node_modules/@syncfusion/ej2/material.css';
</style>

```

{% endtab %}

> We need to import `IHtmlFormatterModel` and `HTMLFormatter` to configure the shortcut key.

## Capture ctrl+s to update the value

To achieve this, we need to bind the `keydown` event to the RTE content and capture the `ctrl + s` key press using its keyCode. In the `keydown` event handler, the `updateValue` method is called to update the [`value`](./api-richTextEditor.html#value) property and then we can save the content in the required database using the same.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs3" %}

## How to customize the placeholder style

By using `rte-placeholder` class, you can customize the placeholder style.

{% tab template='rich-text-editor/getting-started', isDefaultActive=true %}

```
<template>
  <div>
    <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" >
    </ejs-richtexteditor>
  </div>
  <style>
        .e-richtexteditor .rte-placeholder {
            font-family: monospace;
            color: deeppink;
        }
    </style>
</template>

<script>
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  export default {
    data() {
      return {
          placeholder: "Type Something",
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2/material.css';
</style>
```

{% endtab %}

## Set the cursor at the specific range

This can be achieved by using `setRange` method in the RTE using `NodeSelection` instance. In this below sample, we have passed the text node (specific location in RTE content) in `setStart` method and passed the range in `setRange` method of RTE.

{% tab template='rich-text-editor/toolbar', isDefaultActive=true %}

```
<template>
<div>
  <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" >
    <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p id="key"><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
      </li>
      <li>
        <p>Capable of handling markdown editing.</p>
      </li>
      <li>
        <p>Contains a modular library to load the necessary functionality on demand.</p>
      </li>
      <li>
        <p>Provides a fully customizable toolbar.</p>
      </li>
    </ul>
  </ejs-richtexteditor>
  <button v-on:click="onClick" class="e-btn">Set Cursor Position</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { RichTextEditorPlugin, NodeSelection, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  export default {
    data() {
      return {
        placeholder: "Type Something",
    }
    },
   methods: {
     onClick: function(event){
       var instance = this.$refs.defaultRTE.$el.ej2_instances[0];
      let element = instance.contentModule.getDocument().getElementById("key");
      let selectioncursor = new NodeSelection();
      let range = document.createRange();
      range.setStart(element, 1); // to set the range
      selectioncursor.setRange(document, range); // to set the cursor
     }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2/material.css';
</style>

```

{% endtab %}

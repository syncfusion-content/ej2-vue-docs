---
layout: post
title: Editor value in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Editor value in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Editor value
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Editor value in Vue Rich Text Editor Component

## Get and Set Value

**Setting Values**

You can set the initial content of the Rich Text Editor using the `value` property. There are two methods to accomplish this:

* Using the [value](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#value) property directly.

* Using the [valueTemplate](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#valuetemplate) property allows you to customize the content of the Rich Text Editor.

**Retrieving Values**

To retrieve the editor contents, use the value property of Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/editor-value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/editor-value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs1" %}

## Two-Way Binding Value

Two-way binding allows you to synchronize data between the Syncfusion RichTextEditor component and the Vue instance. This ensures that any changes made in the editor are automatically reflected in your component's data, and vice versa.

In Vue, you can achieve two-way data binding using the `v-model` directive. This binds the editor’s value to a Vue data property, keeping both in sync.

The example below demonstrates how two-way binding works in a Vue application using Syncfusion's Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/editor-value-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/editor-value-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs2" %}

## Auto Save

The auto-save option in the Rich Text Editor allows the content to be automatically saved during idle periods after you have typed. Once this option is enabled, the editor will save the content based on the [saveInterval](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#saveinterval) property's value, which is specified in milliseconds.

The change event will be triggered if the content has been modified since the last saved state, ensuring consistent tracking of changes without manual intervention. 

In the following example, the `saveInterval=500` property ensures content is saved every 500 milliseconds (0.5 seconds):

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/editor-value-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/editor-value-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs3" %}

## Programmatic Content Access 

You can use the [getHtml](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#gethtml) public method to retrieve the Rich Text Editor content.

```
  let editorValue = this.$refs.editorRef.getHtml();

```

To fetch the Rich Text Editor's text content, use [getText](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#gettext) method.

```
  let editorValue = this.$refs.editorRef.getText();

```

## Encoded Editor Value

The [enableHtmlEncode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#enablehtmlencode) property in the Rich Text Editor specifies whether the source code is displayed in an encoded format. Additionally, the [value](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#value) property also returns the content in an encoded format. This feature is particularly useful when you want to ensure that HTML content is displayed safely without being interpreted by the browser.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/encoded-editor-value/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/encoded-editor-value/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/encoded-editor-value" %}

## Styling Editor Content

By default, the content styles of the Rich Text Editor are not included when retrieving the HTML value from the editor. This can result in the styles not being applied when using the HTML content outside of the editor. To ensure that the styles are correctly applied, you can copy and use the following styles directly in your application: These styles are used in the UI elements of the Rich Text Editor.

> Make sure to add a CSS class ‘e-rte-content’ to the content container.

```css

.e-rte-content p {
  margin: 0 0 10px;
  margin-bottom: 10px;
}

.e-rte-content li {
  margin-bottom: 10px;
}

.e-rte-content h1 {
  font-size: 2.17em;
  font-weight: 400;
  line-height: 1;
  margin: 10px 0;
}

.e-rte-content h2 {
  font-size: 1.74em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h3 {
  font-size: 1.31em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h4 {
  font-size: 1em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h5 {
  font-size: 00.8em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h6 {
  font-size: 00.65em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content blockquote {
  margin: 10px 0;
  margin-left: 0;
  padding-left: 5px;
}

.e-rte-content pre {
  background-color: inherit;
  border: 0;
  border-radius: 0;
  color: #333;
  font-size: inherit;
  line-height: inherit;
  margin: 0 0 10px;
  overflow: visible;
  padding: 0;
  white-space: pre-wrap;
  word-break: inherit;
  word-wrap: break-word;
}

.e-rte-content strong, .e-rte-content b {
  font-weight: 700;
}

.e-rte-content a {
  text-decoration: none;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

.e-rte-content a:hover {
  text-decoration: underline;
}

.e-rte-content h3 + h4,
.e-rte-content h4 + h5,
.e-rte-content h5 + h6 {
  margin-top: 00.6em;
}

.e-rte-content .e-rte-image.e-imgbreak {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imginline {
  display: inline-block;
  float: none;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  vertical-align: bottom;
}

.e-rte-content .e-rte-image.e-imgcenter {
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imgleft {
  float: left;
  margin: 0 5px 0 0;
  text-align: left;
}

.e-rte-content .e-rte-image.e-imgright {
  float: right;
  margin: 0 0 0 5px;
  text-align: right;
}

.e-rte-content .e-rte-img-caption {
  display: inline-block;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-img-caption.e-caption-inline {
  display: inline-block;
  margin: 5px auto;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  position: relative;
  text-align: center;
  vertical-align: bottom;
}

.e-rte-content .e-rte-img-caption.e-imgcenter {
  display: block;
}

.e-rte-content .e-rte-img-caption .e-rte-image.e-imgright,
.e-rte-content .e-rte-img-caption .e-rte-image.e-imgleft {
  float: none;
  margin: 0;
}

.e-rte-content .e-rte-table {
  border-collapse: collapse;
  empty-cells: show;
}

.e-rte-content .e-rte-table td,
.e-rte-content .e-rte-table th {
  border: 1px solid #bdbdbd;
  height: 20px;
  min-width: 20px;
  padding: 2px 5px;
  vertical-align: middle;
}

.e-rte-content .e-rte-table.e-dashed-border td,
.e-rte-content .e-rte-table.e-dashed-border th {
  border-style: dashed;
}

.e-rte-content .e-rte-img-caption .e-img-inner {
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  font-weight: initial;
  margin: auto;
  opacity: .9;
  position: relative;
  text-align: center;
  width: 100%;
}

.e-rte-content .e-rte-img-caption .e-img-wrap {
  display: inline-block;
  margin: auto;
  padding: 0;
  width: 100%;
}

.e-rte-content blockquote {
  border-left: solid 2px #333;
}

.e-rte-content a {
  color: #2e2ef1;
}

.e-rte-content .e-rte-table th {
  background-color: #e0e0e0;
}

```

## See Also

* [Implementing Prevention of cross-site scripting (XSS)](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/prevent-cross-site-scripting)

---
layout: post
title: Paste Clean-up in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Paste Clean-up with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Paste Clean-up in Vue Block Editor component

The Block Editor component provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains consistency with the editor's styling and structure. This helps in removing unwanted formatting, scripts, or elements often copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteCleanupSettings](../api/blockeditor#pastecleanupsettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](../api/blockeditor/pasteCleanupSettingsModel#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, following styles are allowed:

['font-weight', 'font-style', 'text-decoration', 'text-transform'].

In the below example, only `font-weight` and `font-style` styles will be retained from the pasted content. All other inline styles will be removed.

## Setting denied tags

The [deniedTags](../api/blockeditor/pasteCleanupSettingsModel#deniedtags) property specifies a list of HTML tags to be removed from pasted content. This is useful for stripping potentially problematic elements like `<script>` or `<iframe>` tags. By default, this property is an empty array, so no tags are removed.

In the below example, any `<script>` or `<iframe>` tags found in the pasted content will be removed, preventing unwanted behavior or styling issues.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/allowedstyle" %}

## Disable Keep format

By default, the editor retains the formatting of pasted content (e.g., bold, italics, links). You can disable this by setting the [keepFormat](../api/blockeditor/pasteCleanupSettingsModel#keepformat) property to `false`. When disabled, the editor primarily pastes content as plain text, regardless of the `allowedStyles` configuration.

## Allowing plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](../api/blockeditor/pasteCleanupSettingsModel#plaintext) property to `true` in [pasteCleanupSettings](../api/blockeditor#pastesettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/plaintext" %}

### Events

The following events are available when pasting content into the editor.

|Name|Args|Description|
|---|---|---|
|[beforePasteCleanup](../api/blockeditor#beforepastecleanup)|BeforePasteCleanupEventArgs|Triggers before the content is pasted into the editor.|
|[afterPasteCleanup](../api/blockeditor#afterpastecleanup)|AfterPasteCleanupEventArgs|Triggers after the content is pasted into the editor.|

Below snippet demonstrates how to configure above events in the editor.

```typescript
<ejs-blockeditor (beforePasteCleanup)="onBeforePasteCleanup()" />
```
```typescript
<ejs-blockeditor (afterPasteCleanup)="onAfterPasteCleanup()" />
```
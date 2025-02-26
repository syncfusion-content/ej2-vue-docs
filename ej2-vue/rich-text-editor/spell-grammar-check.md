---
layout: post
title: Spell & Grammar Check in Vue Rich Text Editor | Syncfusion
description: Learn here all about Spell and Grammar Check in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Spell and Grammar Check 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate WProofreader into the Vue Rich Text Editor Component

WProofreader is a powerful tool that enhances content quality by detecting and correcting spelling and grammar errors in real-time as users type. This functionality significantly improves the professionalism of your content and ensures error-free text.

**Key Features of WProofreader:**

* Real-time Spell Checking: Instantly detects spelling mistakes as users type, providing immediate corrections and suggestions.

* Multilingual Support: Supports multiple languages, allowing users to check and correct text in different language contexts.

* Customization Options: Users can customize dictionary settings, add specific terms, and adjust spell-checking rules to match their writing style and requirements.

* Integration Capabilities: Seamlessly integrates with various content management systems (CMS) and applications, enhancing editing workflows without requiring users to leave their editing environment.

## Set up the WProofreader

For integrating the `WProofreader` refer the following link : https://webspellchecker.com, you need to install the[@webspellchecker/wproofreader-sdk-js](https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js) package using NPM or Yarn:

```bash
npm install @webspellchecker/wproofreader-sdk-js

Or

yarn add @webspellchecker/wproofreader-sdk-js

```

## Configure WProofreader for Rich Text Editor

After installing the package, you can integrate WProofreader with the Vue Rich Text Editor by following these steps:

1. Import the WProofreader module into your Vue component.
2. Configure the `container` property of WProofreader as the editable element of the Rich Text Editor's content.
3. Use the `ref` attribute to access the Vue Rich Text Editor instance.
4. Set the `lang` property to specify the language of the text to be checked.
5. Configure the activation key in the `serviceId` property.

Below is an example code snippet to integrate WProofreader with the Syncfusion Vue Rich Text Editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/wproofreader-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/wproofreader-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/wproofreader-cs1" %}

Below is a GIF demonstrating how to integrate WProofreader with the Syncfusion Vue Rich Text Editor

![WebSpellChecker](images/spell-grammar-check.gif)
---
layout: post
title: Customization in Vue Smart TextArea | Syncfusion
description: Control how AI suggestions appear in the Vue Smart TextArea by toggling the ShowSuggestionOnPopup property to display them in a popup or inline.
control: Customization
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Smart TextArea

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/vue/documentation/api/smart-textarea/index-default#showsuggestiononpopup) property in the Syncfusion<sup style="font-size:70%">®</sup> Vue Smart TextArea allows you to control how AI-generated text suggestions are presented to users. Depending on your application requirements, suggestions can be displayed in a popup window or directly within the text area as inline suggestions.

This customization helps you provide the most suitable suggestion experience for different scenarios. For example, popup suggestions can help users review generated content separately, while inline suggestions offer a more seamless writing experience.

The following values are supported:

| Value | Description |
|---------|-------------|
| `Enable` | Displays AI suggestions in a popup window. |
| `Disable` | Displays AI suggestions inline within the text area. |
| `None` | Uses the default suggestion behavior. |

By default, the `showSuggestionOnPopup` property is set to `None`.

## Display suggestions in a popup

Set the `showSuggestionOnPopup` property to `Enable` to display AI suggestions in a popup window. This mode allows users to review and accept suggestions without interrupting the content currently being edited.

```js
<template>
    <ejs-smarttextarea
      id="smart-textarea"
      placeholder="Enter your queries here"
      :rows="3"
      :cols="35"
      userRole="Employee communicating with internal team"
      :aiSuggestionHandler="serverAIRequest"
      showSuggestionOnPopup="Enable"
    ></ejs-smarttextarea>
</template>
```

![Suggestion on popup](./images/smart-textarea-popup.gif)

* If `ShowSuggestionOnPopup` is `Disable`, AI-generated suggestions are displayed directly within the text area, allowing users to review suggestions in context and continue typing without interacting with a separate popup window.

```js
<template>
    <ejs-smarttextarea
      id="smart-textarea"
      placeholder="Enter your queries here"
      :rows="3"
      :cols="35"
      userRole="Employee communicating with internal team"
      :aiSuggestionHandler="serverAIRequest"
      showSuggestionOnPopup="Disable"
    ></ejs-smarttextarea>
</template>
```

![Suggestion inline](./images/smart-textarea-inline.gif)

By default `showSuggestionOnPopup` is `None`.

## See also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Smart TextArea](./vue-3-getting-started)
---
layout: post
title: Typing Indicator in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Typing Indicator with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Typing Indicator in Vue Chat UI component

## Show or hide typing indicator

You can use the [typingUsers](../api/chat-ui#typingusers) property to display the current user’s who are typing to indicate the active participants typing response within the chat conversations. If the property is empty the typing indicators will be removed.

The typing users are the `UserModel[]` collection, where you can update the user’s dynamically to display the current typing user.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/typingUsers/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/typingUsers/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/typingUsers" %}

## Typing indicator template

> Refer to the [Templates](./templates#typing-users-template) section for more details about the Typing indicator template.

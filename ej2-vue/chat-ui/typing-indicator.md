---
layout: post
title: Typing Indicator in Vue Chat UI | Syncfusion®
description: Show real-time typing indicators in the Vue Chat UI by populating the typingUsers array with UserModel objects representing active typers.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Typing Indicator in Vue Chat UI

The typing indicator provides real-time visual feedback to show when other users are composing a message. This feature enhances the user experience by making conversations feel more interactive and responsive, indicating that a reply is in progress.

## Show or Hide Typing Indicator

The visibility of the typing indicator is controlled by the [typingUsers](../api/chat-ui#typingusers) property. This property accepts an array of `UserModel` objects, with each object representing a user who is currently typing. The indicator is automatically displayed when this collection is populated and hidden when it is empty.

The `UserModel` is a collection that requires a defined structure to display user information correctly. The following example illustrates how to dynamically update the `typingUsers` property to show and hide the indicator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/typingUsers/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/typingUsers/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/typingUsers" %}

## Typing Indicator Template

The appearance of the typing indicator can be customized to fit the application's design. To learn more about modifying its look and feel, refer to the [Templates](./templates#typing-users-template) section.

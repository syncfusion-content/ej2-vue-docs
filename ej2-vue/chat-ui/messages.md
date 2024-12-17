---
layout: post
title: Messages in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Messages with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Messages in Vue Chat UI component

The Chat UI allows to add messages using the `e-message` tag directive. The message collection stores all the messages being sent and received.

## Configuring Messages

You can use the [text](../api/chat-ui/messageModel/#text) property to add message content for the user.  Each message can be configured with options such as id, text, author, timestamp, and more.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/defaultMessage/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/defaultMessage/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/defaultMessage" %}

### Defining current user

You can use the [author](../api/chat-ui/messageModel/#author) property to identify the current user of the chat. Each user can be configured with options such as id, user, avatarUrl, and more.

> You can use the [user](../api/chat-ui/userModel/#user) property to display the user name and [id](../api/chat-ui/userModel/#id) property is necessary to differentiate between the multiple users.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/defaultMessage/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/defaultMessage/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/defaultMessage" %}

#### Setting avatar URL

You can use the [avatarUrl](../api/chat-ui/userModel/#avatarurl) property to define the image URL’s for the user avatar. If no URL is provided, fallback initials of the first and last name from the user’s name will be used.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/avatarUrl/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/avatarUrl/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/avatarUrl" %}

#### Setting avatar background color

You can use the [avatarBgColor](../api/chat-ui/userModel/#avatarbgcolor) property to set a specific background color for user avatars using hexadecimal values. If no color is set, a custom background color is set based on specified theme.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/avatar-bgColor/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/avatar-bgColor/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/avatar-bgColor" %}

#### Setting CSS class

You can use the [cssClass](../api/chat-ui/userModel/#cssclass) property to customize the appearance of the chat user.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/cssClass" %}

## Define timestamp

You can use the [timeStamp](../api/chat-ui/messageModel/#timestamp) property to indicate the date and time of each message being sent. By default it is set to the current date and time when the message is sent.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/showTimestamp/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/showTimestamp/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/showTimestamp" %}

### Setting timestamp format

You can use the [timeStampFormat](../api/chat-ui/messageModel/#timestampformat) to display specific time format for the timestamp. The default format is `dd/MM/yyyy hh:mm a`, but this can be customized to meet different localization and display needs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/timestampFormat/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/timestampFormat/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/timestampFormat" %}

## Define message status

You can use the [status](../api/chat-ui/messageModel/#status) property to update the status for the message(e.g., sent, received, read). It helps in managing message delivery and read receipts within the chat interface.

### Setting icon CSS

You can use the [iconCss](../api/chat-ui/messageStatusModel/#iconcss) property to update the styling of status icons associated with messages, aiding visual differentiation between statuses.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/iconCss/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/iconCss/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/iconCss" %}

### Setting text

You can use the [text](../api/chat-ui/messageStatusModel/#text) property to provide information about the messages through descriptive text, providing users with the context of the message.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/text/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/text" %}

### Setting tooltip

You can use the [tooltip](../api/chat-ui/messageStatusModel/#tooltip) property to provide information about the messages by tooltips while hovering the status icon, providing users with additional data upon hovering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/tooltip" %}

## Setting autoscroll

You can use the [autoScrollToBottom](../api/chat-ui/chatUIModel/#autoscrolltobottom) property to automatically scroll the chats when a new message is received in a conversation. By default, the value is false, requires manual scrolling or the FAB button to quick access to the bottom of the view.

- By default, it scrolls to bottom for each message being sent or when the scroll is maintained at the bottom in the chat, in order to prevent the automatic scroll for different user messages you can use the `autoScrollToBottom` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/autoScroll/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/autoScroll/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/autoScroll" %}

## Setting suggestions

You can use the [suggestions](../api/chat-ui/chatUIModel/#suggestions) property, to add the suggestions in both initial and on-demand which help users to quick-reply options above the input field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/suggestions/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/messages/suggestions/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/suggestions" %}

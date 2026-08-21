---
layout: post
title: Global Local in Vue Query Builder UI | Syncfusion
description: Localize default text in the Vue Query Builder UI by mapping locale keys to translated strings for cultures such as Arabic, German, and French.
control: Global local 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Global Local in Vue Query Builder UI

The `Localization` library allows you to localize default text content of the Query Builder. The Query Builder component has static text that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the locale value and translation object.

The following list of properties and its values are used in the Query Builder.

| Locale key words | Text |
| ------------ | ----------------------- |
| AddGroup  | Add Group |
| AddCondition  | Add Condition |
| AddButton | Add Group/Condition |
| DeleteRule | Remove this condition |
| DeleteGroup | Delete group |
| Edit | EDIT |
| SelectField | Select a field |
| SelectOperator | Select operator |
| StartsWith | Starts With|
| EndsWith | Ends With |
| DoesNotStartWith | Does Not Start With |
| DoesNotEndWith | Does Not End With |
| Contains | Contains |
| DoesNotContain | Does Not Contain |
| Equal | Equal |
| NotEqual | Not Equal |
| LessThan | Less Than |
| LessThanOrEqual | Less Than Or Equal |
| GreaterThan | Greater Than |
| GreaterThanOrEqual | Greater Than Or Equal |
| Between | Between |
| NotBetween | Not Between|
| In | In |
| NotIn | Not In |
| Remove | REMOVE |
| ValidationMessage | This field is required |
| SummaryViewTitle | Summary View |
| OtherFields | Other Fields |
| AND | AND |
| OR | OR |
| SelectValue | Enter Value |
| IsEmpty | Is Empty |
| IsNotEmpty | Is Not Empty |
| IsNull | Is Null |
| IsNotNull | Is Not Null |
| True | True |
| False | False |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs12" %}

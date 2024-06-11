---
layout: post
title: Refresh the data source in Vue Treegrid component | Syncfusion
description: Learn here all about Refresh the data source in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Refresh the data source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Refresh the data source in Vue Treegrid component

## How to refresh the datasource

You can add/delete the datasource records through an external button. To reflect the datasource changes in Tree Grid, you need to assign the modified data to dataSource property.

Please follow the below steps to refresh the Tree Grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```ts

    let customData = {
        TaskID: 99,
        TaskName: "New Data",
        StartDate: new Date("02/03/2017"),
        EndDate: new Date("02/03/2017"),
        Duration: 10
      };

    // Added New Record.
    this.data.unshift(customData);

    // Delete record.
    this.data.splice(selectedRow, 1);

```

**Step 2**:

Refresh the Tree Grid after the datasource change by assign the modified data to dataSource property.

```ts
      this.data = [...this.data];  // Refresh the TreeGrid.

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs18" %}
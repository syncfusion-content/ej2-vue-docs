---
layout: post
title: Data binding in Vue Treegrid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Treegrid component

The TreeGrid uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#dataSource) property can be assigned either with the instance of `DataManager` or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

To learn about tree grid data binding quickly, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=EuDWGuP9d5E" %}

## Binding with ajax

You can use TreeGrid [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#datasource) property to bind the data source to TreeGrid from external Fetch request. In the below code we have fetched the data source from the server with the help of Fetch request and provided that to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#datasource) property by using `onSuccess` event of the Fetch.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/data-binding/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/data-binding/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding/default-cs1" %}

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Handling expandStateMapping

To denotes the expand status of parent row, define the [`expandStateMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#expandstatemapping) property of tree grid. The `expandStateMapping` property maps the field name in data source, that denotes whether parent record is in expanded or collapsed state and this is useful to renders parent row in expanded or collapsed state based on this mapping property value in data source.

```
<template>
<div id="app">
        <ejs-treegrid :dataSource='data' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' :treeColumnIndex='1' expandStateMapping='IsExpanded' height='400px'>
        <e-columns>
        <e-column field='TaskID'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='TaskName' headerText='Task Name' width=180></e-column>
        <e-column field='Duration' headerText='Duration' width=80></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';




export default {
  data() {
    return {
      data: new DataManager({
        url: "Home/DataSource",
        adaptor: new UrlAdaptor
      })
    };
  },
}

</script>

```

The following code example defines `expandStateMapping` property at server end.

```ts

public ActionResult ExpandStateMapping()
{
  return View();
}
public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }
    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }
    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = false, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = false, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 500; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), isParent = false, IsExpanded = false, ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}
```

## Custom binding


It is possible to handle data processing externally and bind the result to the TreeGrid. This helps you to provide your own custom data logic. TreeGrid expects an object as the result of the custom logic and the emitted value should be an object with properties result and count.

>In this context, we are going to use DataManager with WebApi Adaptor for handling remote interaction, you can choose any HTTP client as per your choice.

<template>
  <div class="App">
    <ejs-treegrid
      ref="treegrid"
      :dataSource="dataSource"
      :dataBound="getDatasource"
      :hasChildMapping="'isParent'"
      :dataStateChange="dataStateChange"
      id="TreeGrid"
      idMapping="TaskId"
      parentIdMapping="ParentId"
      :allowPaging="true"
      :treeColumnIndex="1"
      :pageSettings="pageSettings"
      :editSettings="editSettings"
    >
      <e-columns>
        <e-column field="TaskId" headerText="ID" width="70" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="Task Name" headerText="Name" width="160"></e-column>
        <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
        <e-column field="Progress" headerText="Progress" width="90" textAlign="Right"></e-column>
      </e-columns>
      <e-aggregates>
        <!-- If needed, aggregates can be added here -->
      </e-aggregates>
    </ejs-treegrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeGridComponent, Page, Edit, Sort } from '@syncfusion/ej2-vue-treegrid';
import { Fetch, getValue } from '@syncfusion/ej2-base';
import type { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';

export default defineComponent({
  name: 'TreeGrid',
  components: {
    'ejs-treegrid': TreeGridComponent,
  },
  data() {
    return {
      dataSource: [] as any[],
      pageSettings: { pageSize: 4, pageSizeMode: 'Root' },
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' },
      fetch: new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET',
      }),
      BASE_URL: 'http://localhost:51473/api/Tasks',
    };
  },
  methods: {
    async execute(state: DataStateChangeEventArgs): Promise<DataResult> {
      if (state.requestType === 'expand') {
        return this.getChildData(state);
      } else {
        return this.getData(state);
      }
    },
    async getData(state: DataStateChangeEventArgs): Promise<DataResult> {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
      const treegridQuery = "$filter='ParentId eq null'";
      this.fetch.url = `${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return {
        count: parseInt(getValue('d.__count', data), 10),
        result: getValue('d.results', data),
      };
    },
    async getChildData(state: DataStateChangeEventArgs): Promise<DataResult> {
      let expandQuery = '';
      if (state.requestType === 'expand') {
        expandQuery = `$filter=${'ParentId eq ' + getValue('TaskId', state.data)}`;
      }
      this.fetch.url = `${this.BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return data;
    },
    getDatasource() {
      const treegrid = this.$refs.treegrid as any;
      if (treegrid && Array.isArray(this.dataSource) && !this.dataSource.length) {
        const state = { skip: 0, take: 4 };
        this.dataStateChange(state);
      }
    },
    async dataStateChange(state: any) {
      if (state.requestType === 'expand') {
        const childData = await this.execute(state);
        state.childData = childData;
        state.childDataBind();
      } else {
        const treedata = await this.execute(state);
        this.dataSource = treedata as any[];
      }
    },
  },
  mounted() {
    this.getDatasource();
  },
  provide: {
    treegrid: [Page, Edit, Sort],
  },
});

</script>


> We have a limitation for Custom Binding feature of TreeGrid. This feature works only for Self Referential data binding with `pageSizeMode` as `Root`.


### Handling child data

Using the custom binding feature you can bind the child data for a parent record as per your custom logic. When a parent record is expanded, [`dataStateChange`](../../api/treegrid/#datastatechange) event is triggered in which you can assign your custom data to the `childData` property of the [`dataStateChange`](../../api/treegrid/#datastatechange) event arguments.
After assigning the child data, `childDataBind` method should be called from the
[`dataStateChange`](../../api/treegrid/#datastatechange) event arguments to indicate that the data is bound.

> In this context, initially we have assigned only the parent records to the treegrid dataSource and fetched the required child records in the [`dataStateChange`](../../api/treegrid/#datastatechange) event.

<template>
  <div class="App">
    <ejs-treegrid
      ref="treegrid"
      :dataSource="dataSource"
      :dataBound="getDatasource"
      :hasChildMapping="'isParent'"
      :dataStateChange="dataStateChange"
      id="TreeGrid"
      idMapping="TaskId"
      parentIdMapping="ParentId"
      :allowPaging="true"
      :treeColumnIndex="1"
      :pageSettings="pageSettings"
      :editSettings="editSettings"
    >
      <e-columns>
        <e-column field="TaskId" headerText="ID" width="70" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="Task Name" headerText="Name" width="160"></e-column>
        <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
        <e-column field="Progress" headerText="Progress" width="90" textAlign="Right"></e-column>
      </e-columns>
      <e-aggregates>
        <!-- If needed, aggregates can be added here -->
      </e-aggregates>
    </ejs-treegrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeGridComponent, Page, Edit, Sort } from '@syncfusion/ej2-vue-treegrid';
import { Fetch, getValue } from '@syncfusion/ej2-base';
import type { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';

export default defineComponent({
  name: 'TreeGrid',
  components: {
    'ejs-treegrid': TreeGridComponent,
  },
  data() {
    return {
      dataSource: [] as any[],
      pageSettings: { pageSize: 4, pageSizeMode: 'Root' },
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' },
      fetch: new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET',
      }),
      BASE_URL: 'http://localhost:51473/api/Tasks',
    };
  },
  methods: {
    async execute(state: DataStateChangeEventArgs): Promise<DataResult> {
      if (state.requestType === 'expand') {
        return this.getChildData(state);
      } else {
        return this.getData(state);
      }
    },
    async getData(state: DataStateChangeEventArgs): Promise<DataResult> {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
      const treegridQuery = "$filter='ParentId eq null'";
      this.fetch.url = `${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return {
        count: parseInt(getValue('d.__count', data), 10),
        result: getValue('d.results', data),
      };
    },
    async getChildData(state: DataStateChangeEventArgs): Promise<DataResult> {
      let expandQuery = '';
      if (state.requestType === 'expand') {
        expandQuery = `$filter=${'ParentId eq ' + getValue('TaskId', state.data)}`;
      }
      this.fetch.url = `${this.BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return data;
    },
    getDatasource() {
      const treegrid = this.$refs.treegrid as any;
      if (treegrid && Array.isArray(this.dataSource) && !this.dataSource.length) {
        const state = { skip: 0, take: 4 };
        this.dataStateChange(state);
      }
    },
    async dataStateChange(state: any) {
      if (state.requestType === 'expand') {
        const childData = await this.execute(state);
        state.childData = childData;
        state.childDataBind();
      } else {
        const treedata = await this.execute(state);
        this.dataSource = treedata as any[];
      }
    },
  },
  mounted() {
    this.getDatasource();
  },
  provide: {
    treegrid: [Page, Edit, Sort],
  },
});
</script>

<style>
.App {
  padding: 20px;
}
</style>


### Handling Tree Grid actions

For TreeGrid actions such as paging, sorting, etc dataStateChange event will be invoked. You have to query and resolve data using Fetch in this event based on the state arguments.

<template>
  <div class="App">
    <ejs-treegrid
      ref="treegrid"
      :dataSource="dataSource"
      :dataBound="getDataSource"
      :hasChildMapping="'isParent'"
      :dataStateChange="dataStateChange"
      id="TreeGrid"
      idMapping="TaskId"
      parentIdMapping="ParentId"
      :allowPaging="true"
      :treeColumnIndex="1"
      :pageSettings="pageSettings"
      :editSettings="editSettings"
    >
      <e-columns>
        <e-column field="TaskId" headerText="ID" width="70" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="Task Name" headerText="Name" width="160"></e-column>
        <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
        <e-column field="Progress" headerText="Progress" width="90" textAlign="Right"></e-column>
      </e-columns>
      <e-aggregates>
        <!-- If needed, aggregates can be added here -->
      </e-aggregates>
    </ejs-treegrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeGridComponent, Page, Edit, Sort } from '@syncfusion/ej2-vue-treegrid';
import { Fetch, getValue } from '@syncfusion/ej2-base';
import type { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';

interface Sort {
  name: string;
  direction: string;
}

export default defineComponent({
  name: 'TreeGrid',
  components: {
    'ejs-treegrid': TreeGridComponent,
  },
  data() {
    return {
      dataSource: [] as any[],
      pageSettings: { pageSize: 2, pageSizeMode: 'Root' },
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' },
      fetch: new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET',
      }),
      BASE_URL: 'http://localhost:51473/api/Tasks',
    };
  },
  methods: {
    async execute(state: DataStateChangeEventArgs): Promise<DataResult> {
      return this.getData(state);
    },
    async getData(state: DataStateChangeEventArgs): Promise<DataResult> {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
      const treegridQuery = "$filter='ParentId eq null'";
      let sortQuery = '';
      
      if (state && (state.sorted || []).length) {
        sortQuery = `&$orderby=` + (state.sorted as Sort[]).map((obj: Sort) => {
          return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
        }).reverse().join(',');
      }

      this.fetch.url = `${this.BASE_URL}?${pageQuery}&${treegridQuery}${sortQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return {
        count: parseInt(getValue('d.__count', data), 10),
        result: getValue('d.results', data),
      };
    },
    getDataSource() {
      const treegrid = this.$refs.treegrid as any;
      if (treegrid && Array.isArray(this.dataSource) && !this.dataSource.length) {
        const state = { skip: 0, take: 2 };
        this.dataStateChange(state);
      }
    },
    async dataStateChange(state: any) {
      const treedata = await this.execute(state);
      this.dataSource = treedata as any[];
    },
  },
  mounted() {
    this.getDataSource();
  },
  provide: {
    treegrid: [Page, Edit, Sort],
  },
});
</script>

### Performing CRUD actions

The [`dataSourceChanged`](../../api/treegrid/#datasourcechanged) event will be triggered for updating the treegrid data. You can perform the save operation based on the event arguments and call the endEdit method to indicate the completion of save operation.

<template>
  <div class="App">
    <ejs-treegrid
      ref="treegrid"
      :dataSource="dataSource"
      :dataBound="getDataSource"
      :dataStateChange="dataStateChange"
      :dataSourceChanged="dataSourceChanged"
      :hasChildMapping="'isParent'"
      id="TreeGrid"
      idMapping="TaskId"
      parentIdMapping="ParentId"
      :allowPaging="true"
      :treeColumnIndex="1"
      :pageSettings="pageSettings"
      :editSettings="editSettings"
    >
      <e-columns>
        <e-column field="TaskId" headerText="ID" width="70" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="Task Name" headerText="Name" width="160"></e-column>
        <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
        <e-column field="Progress" headerText="Progress" width="90" textAlign="Right"></e-column>
      </e-columns>
      <e-aggregates>
        <!-- If needed, aggregates can be added here -->
      </e-aggregates>
    </ejs-treegrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeGridComponent, Page, Edit, Sort } from '@syncfusion/ej2-vue-treegrid';
import { Fetch, getValue } from '@syncfusion/ej2-base';
import type { DataStateChangeEventArgs, DataResult, DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

export default defineComponent({
  name: 'TreeGrid',
  components: {
    'ejs-treegrid': TreeGridComponent,
  },
  data() {
    return {
      dataSource: [] as any[],
      pageSettings: { pageSize: 4, pageSizeMode: 'Root' },
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' },
      fetch: new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET',
      }),
      BASE_URL: 'http://localhost:51473/api/Tasks',
    };
  },
  methods: {
    async execute(state: DataStateChangeEventArgs): Promise<DataResult> {
      if (state.requestType === 'expand') {
        return this.getChildData(state);
      } else {
        return this.getData(state);
      }
    },
    async getData(state: DataStateChangeEventArgs): Promise<DataResult> {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
      const treegridQuery = "$filter='ParentId eq null'";
      this.fetch.url = `${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return {
        count: parseInt(getValue('d.__count', data), 10),
        result: getValue('d.results', data),
      };
    },
    async getChildData(state: DataStateChangeEventArgs): Promise<DataResult> {
      let expandQuery = '';
      if (state.requestType === 'expand') {
        expandQuery = `$filter=${'ParentId eq ' + getValue('TaskId', state.data)}`;
      }
      this.fetch.url = `${this.BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return data;
    },
    async addRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
      const add = new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'POST',
      });
      const response = await add.send(JSON.stringify(state.data));
      const data = await response.json();
      return data;
    },
    async updateRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
      const update = new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'PUT',
      });
      const response = await update.send(JSON.stringify(state.data));
      const data = await response.json();
      return data;
    },
    async deleteRecord(state: any): Promise<DataResult> {
      const remove = new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'DELETE',
      });
      const response = await remove.send(JSON.stringify(state.data && state.data[0]));
      const data = await response.json();
      return data;
    },
    getDataSource() {
      const treegrid = this.$refs.treegrid as any;
      if (treegrid && Array.isArray(this.dataSource) && !this.dataSource.length) {
        const state = { skip: 0, take: 4 };
        this.dataStateChange(state);
      }
    },
    async dataStateChange(state: any) {
      if (state.requestType === 'expand') {
        const childData = await this.execute(state);
        state.childData = childData;
        state.childDataBind();
      } else {
        const treedata = await this.execute(state);
        this.dataSource = treedata as any[];
      }
    },
    async dataSourceChanged(state: any) {
      if (state.action === 'add') {
        await this.addRecord(state);
        state.endEdit();
      } else if (state.action === 'edit') {
        await this.updateRecord(state);
        state.endEdit();
      } else if (state.requestType === 'delete') {
        await this.deleteRecord(state);
        state.endEdit();
      }
    },
  },
  mounted() {
    this.getDataSource();
  },
  provide: {
    treegrid: [Page, Edit, Sort],
  },
});
</script>

### Calculate aggregates

The footer aggregate values  should be calculated and sent along with the **dataSource** property as follows. The aggregate property of the data source should contain the aggregate value assigned to the property named in the **field – type** format. For example, the **Sum** aggregate value for the **Duration** field should be assigned to the property named as **Duration - sum**.

{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}


### Provide excel filter data source

The [`dataStateChange`](../../api/treegrid/#datastatechange) event will be triggered with appropriate arguments when the excel filter requests the filter choice data source. You need to resolve the excel filter data source using the **dataSource** resolver function from the state argument as follows.

<template>
  <div class="App">
    <ejs-treegrid
      ref="treegrid"
      :dataSource="dataSource"
      :dataBound="getDataSource"
      :dataStateChange="dataStateChange"
      :hasChildMapping="'isParent'"
      id="TreeGrid"
      idMapping="TaskId"
      parentIdMapping="ParentId"
      :allowPaging="true"
      :treeColumnIndex="1"
      :pageSettings="pageSettings"
      :editSettings="editSettings"
      :filterSettings="filterSettings"
    >
      <e-columns>
        <e-column field="TaskId" headerText="ID" width="70" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="Task Name" headerText="Name" width="160"></e-column>
        <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
        <e-column field="Progress" headerText="Progress" width="90" textAlign="Right"></e-column>
      </e-columns>
      <e-aggregates>
        <!-- If needed, aggregates can be added here -->
      </e-aggregates>
    </ejs-treegrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeGridComponent, Page, Edit, Sort } from '@syncfusion/ej2-vue-treegrid';
import { Fetch, getValue } from '@syncfusion/ej2-base';
import type { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';

export default defineComponent({
  name: 'TreeGrid',
  components: {
    'ejs-treegrid': TreeGridComponent,
  },
  data() {
    return {
      dataSource: [] as any[],
      pageSettings: { pageSize: 2, pageSizeMode: 'Root' },
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' },
      filterSettings: { type: 'Excel' },
      fetch: new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET',
      }),
      BASE_URL: 'http://localhost:51473/api/Tasks',
    };
  },
  methods: {
    async execute(state: DataStateChangeEventArgs): Promise<DataResult> {
      return this.getData(state);
    },
    async getData(state: DataStateChangeEventArgs): Promise<DataResult> {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
      const treegridQuery = "$filter='ParentId eq null'";
      this.fetch.url = `${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      const response = await this.fetch.send();
      const data = await response.json();
      return {
        count: parseInt(getValue('d.__count', data), 10),
        result: getValue('d.results', data),
      };
    },
    getDataSource() {
      const treegrid = this.$refs.treegrid as any;
      if (treegrid && Array.isArray(this.dataSource) && !this.dataSource.length) {
        const state = { skip: 0, take: 2 };
        this.dataStateChange(state);
      }
    },
    async dataStateChange(state: any) {
      if (state.action && (state.action.requestType === 'filterchoicerequest' || state.action.requestType === 'filtersearchbegin')) {
        const data = await this.execute(state);
        if (state.dataSource) {
          state.dataSource(data.result);
        }
      } else {
        const treedata = await this.execute(state);
        this.dataSource = treedata as any[];
      }
    },
  },
  mounted() {
    this.getDataSource();
  },
  provide: {
    treegrid: [Page, Edit, Sort],
  },
});
</script>
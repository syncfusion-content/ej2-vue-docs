---
layout: post
title: Manipulation in Vue DataManager | Syncfusion
description: Learn here all about Manipulation in Syncfusion Vue DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Manipulation 
documentation: ug
domainurl: ##DomainURL##
---

# Manipulation in Vue DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue DataManager provides comprehensive support for manipulating data, including creating, updating, and deleting records. Whether working with a local or remote data source, [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) simplifies the process of interacting with data by abstracting the fundamental operations and providing a consistent interface.

Data manipulation involves CRUD (Create, Read, Update, Delete) operations on records within a data source. These operations are Essential<sup style="font-size:70%">&reg;</sup> for managing data in any application. DataManager simplifies this process by providing a consistent interface for performing these operations on both local and remote data sources.

### Insert

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a way to add new records to the data source. This is especially helpful when you want to insert additional records into the data source.

The [insert](https://ej2.syncfusion.com/documentation/api/data/dataManager/#insert) method of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) class allows you to add new records to the data source.

The following example demonstrates how to insert a new record into the data source using `DataManager`. In this example, an input box is added to collect the necessary data, and a button is used to trigger the insertion process using the `insert` method of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" />
      <input type="number" v-model.number="edit.EmployeeID"  id="EmployeeID" placeholder="Employee ID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" />
      <input type="button" id="Insert" value='Insert' v-on:click="Insert" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script setup>
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

export default {
  data() {
    return {
      items: [],
      edit: {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      dataManager: null,
    };
  },
  mounted() {
    this.dataManager = new DataManager(data);
    this.items=this.dataManager.executeLocal(new Query())
  },
  methods: {
    Insert: function() {
      this.dataManager.insert({
        OrderID: this.edit.OrderID,
        CustomerID: this.edit.CustomerID,
        EmployeeID: this.edit.EmployeeID,
        ShipCountry: this.edit.ShipCountry
      });
      this.items = this.dataManager.executeLocal(new Query())
    },
  },
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #CustomerID, #EmployeeID, #ShipCountry, #Insert{
    margin-left:5px;
    margin-bottom: 5px
  }
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Option API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" />
      <input type="number" v-model.number="edit.EmployeeID"  id="EmployeeID" placeholder="Employee ID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" />
      <input type="button" id="Insert" value='Insert' v-on:click="Insert" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

export default {
  data() {
    return {
      items: [],
      edit: {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      dataManager: null,
    };
  },
  mounted() {
    this.dataManager = new DataManager(data);
    this.items=this.dataManager.executeLocal(new Query())
  },
  methods: {
    Insert: function() {
      this.dataManager.insert({
        OrderID: this.edit.OrderID,
        CustomerID: this.edit.CustomerID,
        EmployeeID: this.edit.EmployeeID,
        ShipCountry: this.edit.ShipCountry
      });
      this.items = this.dataManager.executeLocal(new Query())
    },
  },
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #CustomerID, #EmployeeID, #ShipCountry, #Insert{
    margin-left:5px;
    margin-bottom: 5px
  }
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/editing/default-cs1" %}

### Update

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a convenient method to update existing records in your data source. This feature is particularly useful when you need to modify data entries without replacing the entire data set.

The [update](https://ej2.syncfusion.com/documentation/api/data/dataManager/#update) method of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) class is the key to modifying records in the data source. It offers a straightforward way to update individual records, ensuring data accuracy and consistency.

When using the `update` method with Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager, it is Essential<sup style="font-size:70%">&reg;</sup> to define the **KeyField** (Primary key name). The KeyField serves as a unique identifier for each record in the data source. By specifying the KeyField, the update method can accurately locate and update the desired record.

The following example demonstrates how to modify or update existing records in the data source using `DataManager`. In this example, an input box is provided to edit the existing values, and a button triggers the update process using the `update` method of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" :disabled="!edit.OrderID" />
      <input type="number" v-model.number="edit.EmployeeID"  id="EmployeeID" placeholder="Employee ID" :disabled="!edit.OrderID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" :disabled="!edit.OrderID" />
      <input type="button" id="Update" value='Update' v-on:click="update" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script setup>
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

export default {
  data() {
    return {
      items: [],
      edit: {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      dataManager: null,
    };
  },
  
  mounted() {
    this.dataManager = new DataManager(data);
    this.items=this.dataManager.executeLocal(new Query())
  },
  methods: {
    update: function() {
      this.dataManager.update('OrderID',{
      OrderID: this.edit.OrderID,
      CustomerID: this.edit.CustomerID,
      EmployeeID: this.edit.EmployeeID,
      ShipCountry: this.edit.ShipCountry
    });
    this.items = this.dataManager.executeLocal(new Query())
    },
  },
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #CustomerID, #EmployeeID, #ShipCountry, #Update{
    margin-left:5px;
    margin-bottom: 5px
  }
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Option API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" :disabled="!edit.OrderID" />
      <input type="number" v-model.number="edit.EmployeeID"  id="EmployeeID" placeholder="Employee ID" :disabled="!edit.OrderID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" :disabled="!edit.OrderID" />
      <input type="button" id="Update" value='Update' v-on:click="update" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

export default {
  data() {
    return {
      items: [],
      edit: {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      dataManager: null,
    };
  },
  
  mounted() {
    this.dataManager = new DataManager(data);
    this.items=this.dataManager.executeLocal(new Query())
  },
  methods: {
    update: function() {
      this.dataManager.update('OrderID',{
      OrderID: this.edit.OrderID,
      CustomerID: this.edit.CustomerID,
      EmployeeID: this.edit.EmployeeID,
      ShipCountry: this.edit.ShipCountry
    });
    this.items = this.dataManager.executeLocal(new Query())
    },
  },
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #CustomerID, #EmployeeID, #ShipCountry, #Update{
    margin-left:5px;
    margin-bottom: 5px
  }
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/editing/default-cs2" %}

### Remove

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager offers a convenient way to remove existing records from your data source. This feature is particularly useful when you need to delete specific data entries without affecting the entire dataset.

The [remove](https://ej2.syncfusion.com/documentation/api/data/dataManager/#remove) method of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) class is the key to removing records from the data source. When using this method, it is Essential<sup style="font-size:70%">&reg;</sup> to define the **KeyField** (Primary key name). The KeyField serves as a unique identifier for each record in the data source. By specifying the KeyField, the `remove` method can accurately locate and remove the desired record.

The following example demonstrates how to remove existing records from the data source using `DataManager`. In this example, an input box is provided to collect the keyField value from the existing data, and a button triggers the removal process using the `remove` method of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="button" id="Remove" value='Remove' v-on:click="Remove" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

const items = ref([]);
const edit = ref({
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      });
const dataManager = ref(null);

onMounted(() => {
  dataManager.value = new DataManager(data);
  items.value = dataManager.value.executeLocal(new Query());
})

const Remove = function() {
  dataManager.value.remove('OrderID',{
    OrderID: edit.value.OrderID
  });
  items.value = dataManager.value.executeLocal(new Query());
}

</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #Remove{
    margin-left:5px
  }
</style>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Option API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="button" id="Remove" value='Remove' v-on:click="Remove" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

export default {
  data() {
    return {
      items: [],
      edit: {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      dataManager: null,
    };
  },
  mounted() {
    this.dataManager = new DataManager(data);
    this.items = this.dataManager.executeLocal(new Query())
  },
  methods: {
    Remove: function() {
      this.dataManager.remove('OrderID',{
      OrderID: this.edit.OrderID
    });
    this.items = this.dataManager.executeLocal(new Query())
    },
  },
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #Remove{
    margin-left:5px
  }
</style>

{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/editing/default-cs3" %}

### Batch editing

Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager offers built-in support for batch processing of CRUD (Create, Read, Update, Delete) operations on your data. This feature allows you to optimize data management by batching multiple edit operations together, improving efficiency and reducing the number of server requests.

Batch processing allows you to perform multiple CRUD operations simultaneously, optimizing performance and reducing unnecessary network overhead. The [saveChanges](https://ej2.syncfusion.com/documentation/api/data/dataManager/#savechanges) method of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) class is the key to batching edit operations. When using this method, all add, remove, and update requests are handled together at once, enhancing the efficiency of data manipulation.

The following example illustrates how to execute batch edit operations using `DataManager`. In this example, an input box is incorporated to collect the required data for the respective action. Additionally, buttons are included to initiate and execute the corresponding action within the batch edit function. Subsequently, the **save change** button is employed to implement the modifications to the data table using the `saveChanges` method provided by `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" />
      <input type="number" v-model.number="edit.EmployeeID" id="EmployeeID" placeholder="Employee ID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" />
      <input type="button" id="Insert" value='Insert' v-on:click="performAction('addedRecords')" />
      <input type="button" id="Update" value='Update' v-on:click="performAction('changedRecords')" />
      <input type="button" id="Remove" value='Remove' v-on:click="performAction('deletedRecords')" />
    </div>
    <div class="e-form">
      <label>Click to save and apply changes: </label>
      <input type="button" id="Save" value="Save Changes" v-on:click="save" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

const items = ref([]);
const edit = ref({
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      });
const changes = ref({
        changedRecords: [],
        addedRecords: [],
        deletedRecords: [],
      });
const dataManager = ref(null);

onMounted() {
  dataManager.value = new DataManager(data);
  items.value=dataManager.value.executeLocal(new Query())
}
const performAction = function(action) {
  changes.value[action].push({
    OrderID: edit.value.OrderID,
    CustomerID: edit.value.CustomerID,
    EmployeeID: edit.value.EmployeeID,
    ShipCountry: edit.value.ShipCountry
  });
  edit.value = { OrderID: null, CustomerID: null, EmployeeID: null }
}
const save = function() {
  dataManager.value.saveChanges(changes.value, 'OrderID');
  items.value = dataManager.value.executeLocal(new Query());
  changes.value = { changedRecords: [], addedRecords: [], deletedRecords: [] };
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #CustomerID, #EmployeeID, #ShipCountry, #Insert, #Update, #Remove{
    margin-left:5px;
    margin-bottom: 5px
  }
</style>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Option API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" />
      <input type="number" v-model.number="edit.EmployeeID" id="EmployeeID" placeholder="Employee ID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" />
      <input type="button" id="Insert" value='Insert' v-on:click="performAction('addedRecords')" />
      <input type="button" id="Update" value='Update' v-on:click="performAction('changedRecords')" />
      <input type="button" id="Remove" value='Remove' v-on:click="performAction('deletedRecords')" />
    </div>
    <div class="e-form">
      <label>Click to save and apply changes: </label>
      <input type="button" id="Save" value="Save Changes" v-on:click="save" />
    </div>
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

export default {
  data() {
    return {
      items: [],
      edit: {
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      changes: {
        changedRecords: [],
        addedRecords: [],
        deletedRecords: [],
      },
      dataManager: null,
    };
  },
  mounted() {
    this.dataManager = new DataManager(data);
    this.items=this.dataManager.executeLocal(new Query())
  },
  methods: {
    performAction: function(action) {
      this.changes[action].push({
        OrderID: this.edit.OrderID,
        CustomerID: this.edit.CustomerID,
        EmployeeID: this.edit.EmployeeID,
        ShipCountry: this.edit.ShipCountry
      });
      this.edit = { OrderID: null, CustomerID: null, EmployeeID: null }
    },
    save: function() {
      this.dataManager.saveChanges(this.changes, 'OrderID');
      this.items = this.dataManager.executeLocal(new Query());
      this.changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    },
  }
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
    margin-top:5px;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }

  #CustomerID, #EmployeeID, #ShipCountry, #Insert, #Update, #Remove{
    margin-left:5px;
    margin-bottom: 5px
  }
</style>

{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/editing/default-cs4" %}
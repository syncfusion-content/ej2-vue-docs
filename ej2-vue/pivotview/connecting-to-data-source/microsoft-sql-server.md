---
layout: post
title: Microsoft sql server in Vue Pivotview component | Syncfusion
description: Learn here all about Microsoft sql server in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Microsoft sql server 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Microsoft SQL Server in EJ2 Vue Pivot Table Component

This section describes how to retrieve data from SQL Server database using [Microsoft SqlClient](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient?view=dotnet-plat-ext-7.0) and bind it to the Pivot Table via a Web API controller.

## Steps to Connect the SQL Server Database via Web API Application

### Step 1: Download the Sample Application
Download the ASP.NET Core Web Application from this [GitHub](https://github.com/SyncfusionExamples/how-to-bind-SQL-database-to-pivot-table) repository.

### Step 2: Understand the Application Structure
The application named **PivotController** (server-side) that is downloaded from the above GitHub repository includes the following files:

- **PivotController.cs** file under **Controllers** folder – This helps to do data communication with Pivot Table.
- **Database1.mdf** file under **App_Data** folder – This MDF (Master Database File) file contains example data.

### Step 3: Connect to SQL Server and Retrieve Data
In the **PivotController.cs** file, the [Microsoft SqlClient](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient?view=dotnet-plat-ext-7.0) library is used to connect to a Microsoft SQL Server database and retrieve data for the Pivot Table.

1. **Establish Connection**: Use **SqlConnection** with a valid connection string to connect to the SQL Server database (e.g., **Database1.mdf**).
2. **Query and Fetch Data**: Execute a SQL query (e.g., `SELECT * FROM table1`) using **SqlCommand** to retrieve data for the Pivot Table.
3. **Structure the Data**: Use the **Fill** method of **SqlDataAdapter** to populate query results into a **DataTable** for JSON serialization.

```csharp
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace PivotController.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        private static DataTable FetchSQLResult()
        {
            string conSTR = @"<Enter your valid connection string here>";
            string xquery = "SELECT * FROM table1";
            SqlConnection sqlConnection = new(conSTR);
            sqlConnection.Open();
            SqlCommand cmd = new(xquery, sqlConnection);
            SqlDataAdapter dataAdapter = new(cmd);
            DataTable dataTable = new();
            dataAdapter.Fill(dataTable);
            return dataTable;
        }
    }
}

```

> Replace `<Enter your valid connection string here>` with the actual connection string for your SQL Server database.

### Step 4: Serialize Data to JSON
In the **PivotController.cs** file, define a **Get** method that calls **FetchSQLResult** to retrieve data from the SQL Server database as a **DataTable**. Then, use **JsonConvert.SerializeObject** from the **Newtonsoft.Json** library to convert the **DataTable** into JSON format. This JSON data will be consumed by the Pivot Table component.

> Ensure the **Newtonsoft.Json** NuGet package is installed in your project to use **JsonConvert**.

```csharp
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;

namespace PivotController.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetSQLResult")]
        public object Get()
        {
          return JsonConvert.SerializeObject(FetchSQLResult());
        }

        private static DataTable FetchSQLResult()
        {
            string conSTR = @"<Enter your valid connection string here>";
            string xquery = "SELECT * FROM table1";
            SqlConnection sqlConnection = new(conSTR);
            sqlConnection.Open();
            SqlCommand cmd = new(xquery, sqlConnection);
            SqlDataAdapter dataAdapter = new(cmd);
            DataTable dataTable = new();
            dataAdapter.Fill(dataTable);
            return dataTable;
        }
    }
}
```

### Step 5: Run the Web API Application
1. Build and run the **PivotController** application.
2. The application will be hosted at `https://localhost:7139/` (the port number may vary depending on your configuration).

### Step 6: Access the JSON Data
1. Access the Web API endpoint at `https://localhost:7139/pivot` to view the JSON data retrieved from the SQL Server database.
2. The browser will display the JSON data, as shown below, ready to be used by the Pivot Table.

![Hosted Web API URL](../images/code-web-app.jpeg)

## Connecting the Pivot Table to the Hosted Web API URL

This section explains how to connect the Pivot Table component to a Microsoft SQL Server database by retrieving data from the Web API service created in the previous section.

### Step 1: Set Up the Vue Pivot Table
1. Download the Vue Pivot Table sample from the [GitHub](https://github.com/SyncfusionExamples/how-to-bind-SQL-database-to-pivot-table) repository.
2. Ensure your Vue project is configured with the necessary EJ2 Pivot Table dependencies by following the [Getting Started](https://ej2.syncfusion.com/vue/documentation/pivotview/getting-started) documentation.

### Step 2: Configure the Web API URL in the Pivot Table
1. In the **App.ts** or **App.js** file, configure the Pivot Table to use the hosted Web API URL (`https://localhost:7139/pivot`) by setting the [url](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#url) property within the [dataSourceSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings) object.
2. Below is the sample code to configure the Pivot Table to fetch data from the Web API:

```typescript
<script setup>

import {
  FieldList,
  PivotViewComponent,
} from "@syncfusion/ej2-vue-pivotview";

export default {
  data() {
    return {
      dataSourceSettings: {
        url: 'https://localhost:7139/pivot'
        //Other codes here...
      }
    };
  }
};
</script>
<style>
  //Syncfusion Angular controls styles
</style>
```

### Step 3: Define the Pivot Table Report
1. Configure the Pivot Table report in the **App.ts** or **App.js** file to structure the data retrieved from the SQL Server database.
2. Add fields to the [rows](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#rows), [columns](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#columns), [values](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#values), and [filters](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#filters) properties of [dataSourceSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings) to define how data fields are organized and aggregated in the Pivot Table.
3. Enable the field list by setting the [showFieldList](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showfieldlist) property to **true** and including the `FieldList` module in the services section. This allows users to dynamically add or rearrange fields across the columns, rows, and values axes using an interactive user interface.

Here’s the updated sample code for **App.js** with the report configuration and field list support:

```typescript
<template>
  <div>
    <div class="control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
  
  import {
    FieldList,
    PivotViewComponent,
  } from "@syncfusion/ej2-vue-pivotview";
  
  export default {
    data() {
      return {
        dataSourceSettings: {
          url: 'https://localhost:7139/pivot',
          enableSorting: true,
          expandAll: false,
          columns: [{ name: 'Product' }],
          values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
          rows: [{ name: 'Country' }, { name: 'State' }],
          formatSettings: [{ name: 'Amount', format: 'C0' }],
          filters: []
        },
        showFieldList: true
      };
    },
    methods: {
    },
    provide('pivotview',  [FieldList]);
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>

```

### Step 4: Run and Verify the Pivot Table
1. Run the Vue application.
2. The Pivot Table will display the data fetched from the SQL Server database via the Web API, structured according to the defined report.
3. The resulting Pivot Table will look like this:

![Pivot Table bound with SQL database](../images/sql-data-binding.png)

### Additional Resources
Explore a complete example of the Vue Pivot Table integrated with an ASP.NET Core Web Application to fetch data from a SQL Server database in the [GitHub](https://github.com/SyncfusionExamples/how-to-bind-SQL-database-to-pivot-table) repository.
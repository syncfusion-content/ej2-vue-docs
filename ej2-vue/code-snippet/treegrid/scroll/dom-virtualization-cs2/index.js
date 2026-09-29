import Vue from "vue";
import { TreeGridPlugin, DomVirtualization } from "@syncfusion/ej2-vue-treegrid";

import {
  domVirtualizationData,
  domVirtualizationDataSource
} from "./data-source";

Vue.use(TreeGridPlugin);

domVirtualizationDataSource();


new Vue({
  el: '#app',
  template: `
<div id="app">
<ejs-treegrid id="TreeGrid" ref="treegrid" :dataSource="domVirtualizationData" :treeColumnIndex="2"
  idMapping="ItemID" parentIdMapping="ParentItemID" height="400" rowHeight="50" :enableDomVirtualization="true"
  :domVirtualizationSettings="{ rowBuffer: 20 }" clipMode="EllipsisWithTooltip">
  <e-columns>
    <e-column field="ItemID" headerText="ID" width="110" textAlign="Right" :isPrimaryKey="true"></e-column>

    <e-column field="ParentItemID" headerText="Parent ID" width="110" textAlign="Right" :visible="false"></e-column>

    <e-column field="ItemName" headerText="Inventory Name" width="320"></e-column>

    <e-column field="ItemType" headerText="Type" width="120" :visible="false"></e-column>

    <e-column field="Category" headerText="Category" width="200"></e-column>

    <e-column field="Region" headerText="Location" width="200" :template="'regionTemplate'"></e-column>

    <e-column field="Supplier" headerText="Supplier" width="240"></e-column>

    <e-column field="StockStatus" headerText="Stock Status" width="180" :template="'statusTemplate'"></e-column>

    <e-column field="Quantity" headerText="Quantity" width="120" textAlign="Right"></e-column>

    <e-column field="UnitPrice" headerText="Unit Price" width="130" textAlign="Right"
      :format="{ type: 'currency', currency: 'USD', format: 'C2' }"></e-column>
  </e-columns>
  <template v-slot:statusTemplate="{ data }">
    <div class="rg-badge" :class="getStatusClass(data.StockStatus)">
      {{ data.StockStatus }}
    </div>
  </template>

  <template v-slot:regionTemplate="{ data }">
    <div class="rg-region">
      <span class="rg-region-flag" v-html="getRegionFlagSvg(data.Country)"></span>
      <span class="rg-region-name">
        {{ data.Region }}
      </span>
    </div>
  </template>
</ejs-treegrid>
</div>
`,

  data() {
    return {
      domVirtualizationData,
    };
  },

  provide: {
    treegrid: [DomVirtualization]
  },

  methods: {

    getStatusClass(args) {
      const status = (args || '').toString().toLowerCase();

      if (status.indexOf('available') === 0) {
        return 'rg-badge-stock-available';
      }

      if (status.indexOf('low stock') === 0) {
        return 'rg-badge-stock-low';
      }

      if (status.indexOf('out of stock') === 0) {
        return 'rg-badge-stock-out';
      }

      if (status.indexOf('discontinued') === 0) {
        return 'rg-badge-stock-discontinued';
      }

      return '';
    },

    getRegionFlagSvg(region) {
      switch (region) {
        case 'United States':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#B22234"/><rect y="1" width="20" height="1" fill="#fff"/><rect y="3" width="20" height="1" fill="#fff"/><rect y="5" width="20" height="1" fill="#fff"/><rect y="7" width="20" height="1" fill="#fff"/><rect y="9" width="20" height="1" fill="#fff"/><rect y="11" width="20" height="1" fill="#fff"/><rect y="13" width="20" height="1" fill="#fff"/><rect width="8" height="7" fill="#3C3B6E"/></svg>';

        case 'Canada':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><rect width="4" height="14" fill="#D52B1E"/><rect x="16" width="4" height="14" fill="#D52B1E"/><path d="M10 3 L11 5 L13 5 L11.5 6.5 L12 9 L10 7.8 L8 9 L8.5 6.5 L7 5 L9 5 Z" fill="#D52B1E"/></svg>';

        case 'United Kingdom':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#012169"/><path d="M0 0L20 14M20 0L0 14" stroke="#FFF" stroke-width="3"/><path d="M10 0V14M0 7H20" stroke="#FFF" stroke-width="4"/><path d="M10 0V14M0 7H20" stroke="#C8102E" stroke-width="2"/></svg>';

        case 'France':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="6.67" height="14" fill="#0055A4"/><rect x="6.67" width="6.66" height="14" fill="#FFF"/><rect x="13.33" width="6.67" height="14" fill="#EF4135"/></svg>';

        case 'Australia':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#012169"/><rect width="8" height="6" fill="#012169"/><path d="M0 0L8 6M8 0L0 6" stroke="#FFF" stroke-width="1"/><path d="M4 0V6M0 3H8" stroke="#FFF" stroke-width="2"/><path d="M4 0V6M0 3H8" stroke="#C8102E" stroke-width="1"/><circle cx="15" cy="10" r="1" fill="#FFF"/><circle cx="13" cy="8" r="0.7" fill="#FFF"/><circle cx="17" cy="8" r="0.7" fill="#FFF"/></svg>';

        case 'Japan':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#FFF"/><circle cx="10" cy="7" r="4" fill="#BC002D"/></svg>';

        case 'Germany':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#000"/><rect y="4.67" width="20" height="4.67" fill="#DD0000"/><rect y="9.34" width="20" height="4.66" fill="#FFCE00"/></svg>';

        case 'Singapore':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="7" fill="#EF3340"/><rect y="7" width="20" height="7" fill="#FFF"/><circle cx="5" cy="4" r="2" fill="#FFF"/><circle cx="5.6" cy="4" r="1.5" fill="#EF3340"/></svg>';

        case 'Brazil':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009B3A"/><polygon points="10,2 17,7 10,12 3,7" fill="#FFDF00"/><circle cx="10" cy="7" r="2.5" fill="#002776"/></svg>';

        case 'Netherlands':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#AE1C28"/><rect y="4.67" width="20" height="4.67" fill="#FFF"/><rect y="9.34" width="20" height="4.66" fill="#21468B"/></svg>';

        case 'South Korea':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#FFF"/><circle cx="10" cy="7" r="2.2" fill="#CD2E3A"/><path d="M10 4.8A2.2 2.2 0 0 1 10 9.2A1.1 1.1 0 0 0 10 4.8" fill="#0047A0"/></svg>';

        case 'Switzerland':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#D52B1E"/><rect x="8" y="3" width="4" height="8" fill="#FFF"/><rect x="6" y="5" width="8" height="4" fill="#FFF"/></svg>';

        case 'Sweden':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#006AA7"/><rect x="6" width="2" height="14" fill="#FECC00"/><rect y="6" width="20" height="2" fill="#FECC00"/></svg>';

        case 'Italy':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="6.67" height="14" fill="#009246"/><rect x="6.67" width="6.66" height="14" fill="#FFF"/><rect x="13.33" width="6.67" height="14" fill="#CE2B37"/></svg>';

        case 'Spain':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#AA151B"/><rect y="3" width="20" height="8" fill="#F1BF00"/></svg>';

        case 'India':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#FF9933"/><rect y="4.67" width="20" height="4.67" fill="#FFF"/><rect y="9.34" width="20" height="4.66" fill="#138808"/><circle cx="10" cy="7" r="1.2" fill="none" stroke="#000080" stroke-width="0.4"/></svg>';

        default:
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#6b7280"/></svg>';
      }
    },
  }

});
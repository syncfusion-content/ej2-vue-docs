<template>
  <div id="app">
      <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :dataBound="trend" :cellTemplate="cellTemplate"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview} from "@syncfusion/ej2-vue-pivotview";
import { renewableEnergy } from './datasource.js';
import {createApp} from 'vue';

var cellTemplateVue = createApp().component("cellTemplate", {
  template: `<span class="template-wrap" v-html=getCellContent(data)></span>`,
  data() {
      return {
          data: {}
      };
  },
  methods: {
          getCellContent: function () {
              return '<span class="tempwrap sb-icon-neutral pv-icons"></span>';
          }
      }
  });

  const  dataSourceSettings= {
      dataSource: renewableEnergy,
      expandAll: true,
      enableSorting: true,
      drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
      formatSettings: [{ name: 'ProCost', format: 'C0' }],
      rows: [
          { name: 'Year', caption: 'Production Year' }
      ],
      columns: [
          { name: 'EnerType', caption: 'Energy Type' },
          { name: 'EneSource', caption: 'Energy Source' }
      ],
      values: [
          { name: 'ProCost', caption: 'Revenue Growth' }
      ],
      filters: []
    };
  const  height= 350;
  const  cellTemplate = () => {
      return { template: cellTemplateVue };
    };


 const trend = ()  => {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      var cTable = document.getElementsByClassName("e-table");
      var colLen = pivotGridObj.pivotValues[3].length;
      let cLen = cTable[1].children[0].children.length - 1;
      let rLen = cTable[1].children[1].children.length;
      for (let k = 0; k < rLen; k++) {
          if (pivotGridObj.pivotValues[k] && pivotGridObj.pivotValues[k][0] !== undefined) {
              // eslint-disable-next-line no-undef
              rowIndx = (pivotGridObj.pivotValues[k][0]).rowIndex;
              break;
          }
      }
      var rowHeaders = [].slice.call(cTable[1].children[1].querySelectorAll('.e-rowsheader'));
      var rows = pivotGridObj.dataSourceSettings.rows;
      if (rowHeaders.length > 1) {
          for (var i = 0, Cnt = rows; i < Cnt.length; i++) {
              var fields = {};
              var fieldHeaders = [];
                  for (let j = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
                      var header = rowHeaders[j];
                      if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
                         // eslint-disable-next-line no-undef
                        var headerName = rowHeaders[j].getAttribute('fieldname') + '_' + rowHeaders[j].textContent;
                          fields[rowHeaders[j].textContent] = j;
                          fieldHeaders.push(rowHeaders[j].textContent);
                      }
                  }
                  if (i === 0) {
                      for (var rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
                          if (rnt !== 0) {
                              var row = fields[fieldHeaders[rnt]];
                              var prevRow = fields[fieldHeaders[rnt - 1]];
                              for (let j = 1, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                                if (!cTable[1].children[1].children[row]) {
                                    break;
                                }
                                var node = cTable[1].children[1].children[row].childNodes[j]
                                var prevNode = cTable[1].children[1].children[prevRow].childNodes[j]
                                var ri = node.getAttribute('index');
                                var prevRi = prevNode.getAttribute('index');
                                if (ri < pivotGridObj.pivotValues.length) {
                                    if ((pivotGridObj.pivotValues[prevRi][ci]).value > (pivotGridObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
                                          let trendElement = node.querySelector('.tempwrap');
                                          trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-loss');
                                      } else if ((pivotGridObj.pivotValues[prevRi][ci]).value < (pivotGridObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
                                          let trendElement = node.querySelector('.tempwrap');
                                          trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-profit');
                                      }
                                  }
                              }
                          }
                      }
              }
          }
      }
  };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

.e-pivotview .e-columnsheader .tempwrap {
display: none;
}
.e-pivotview .e-rowsheader .tempwrap {
display: none;
}

@font-face {
font-family: 'e-pivot';
src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMjhUSmAAAAEoAAAAVmNtYXCs3q0zAAABkAAAAEpnbHlmdaItOwAAAegAAAE0aGVhZBRYEz0AAADQAAAANmhoZWEHmQNtAAAArAAAACRobXR4D7gAAAAAAYAAAAAQbG9jYQDAAHIAAAHcAAAACm1heHABDwBBAAABCAAAACBuYW1lc0cOBgAAAxwAAAIlcG9zdK9TctUAAAVEAAAARwABAAADUv9qAFoEAAAAAQAAT8kba18PPPUACwPoAAAAANin5zgAAAAA2KfnOAAAAAAD6gPoAAAACAACAAAAAAAAAAEAAAAEADUAAQAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPuAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA4jToTQNS/2oAWgPoAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAA+gAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQANgAAAAgACAACAADiNOI56E3//wAA4jTiOehN//8AAAAAAAAAAQAIAAgACAAAAAEAAwACAAAAAAAAACYAcgCaAAAAAQAAAAADTAPoABUAAAkBBhY7AREUFjsBMjY1ETMyNicBJiIB3f7KCw4SxxAMqgwQxhIPC/7FCBgD3/6tDyH9wAwQEAwCQCEPAVMJAAEAAAAAA+oDTAA0AAABMx8BAR8DDwMBDwMjLwwhLwE1NzUnPwEhPwQ1PwQCXgIFCQFxBAIEAgEDBAf+ogYKBQUEAwQDAwICAQIBAQYJCf3mAgEDAgEBAh4KCAQCAQICAgIDA0wBBf7VAwQJCQkJCQf+4QQGAgEBAQIDBAQFC50DBAQDAQICCuANAgECBQIDAqcMBQQDAQAAAQAAAAADTAPoABYAAAEGFREjIgYXARYyNwE2JisBETQmKwEiAYsIxhIPDAE5CRgJATUMDhPGEAyqDAPgCAz9wCEP/q0JCQFTDyECQAwQAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAcAAQABAAAAAAACAAcACAABAAAAAAADAAcADwABAAAAAAAEAAcAFgABAAAAAAAFAAsAHQABAAAAAAAGAAcAKAABAAAAAAAKACwALwABAAAAAAALABIAWwADAAEECQAAAAIAbQADAAEECQABAA4AbwADAAEECQACAA4AfQADAAEECQADAA4AiwADAAEECQAEAA4AmQADAAEECQAFABYApwADAAEECQAGAA4AvQADAAEECQAKAFgAywADAAEECQALACQBIyBlLWljb25zUmVndWxhcmUtaWNvbnNlLWljb25zVmVyc2lvbiAxLjBlLWljb25zRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABlAC0AaQBjAG8AbgBzAFIAZQBnAHUAbABhAHIAZQAtAGkAYwBvAG4AcwBlAC0AaQBjAG8AbgBzAFYAZQByAHMAaQBvAG4AIAAxAC4AMABlAC0AaQBjAG8AbgBzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAgEDAQQBBQADVXAxC2Fycm93LXJpZ2h0CURvd25fU29ydAAAAA==) format('truetype');
font-weight: normal;
font-style: normal;
}

.pv-icons {
font-family: 'e-pivot';
font-style: normal;
font-variant: normal;
font-weight: normal;
text-transform: none;
line-height: 1;
}

.sb-icon-profit::before {
content: '\e234';
padding-left: 30px;
margin: auto !important;
color: #219122;
size: 20px;
}

.sb-icon-neutral::before {
content: '\e84d';
padding-left: 30px;
margin: auto !important;
color: #82b5e9;
}

.sb-icon-loss::before {
content: '\e239';
padding-left: 30px;
margin: auto !important;
color: #ff2222;
}
</style>
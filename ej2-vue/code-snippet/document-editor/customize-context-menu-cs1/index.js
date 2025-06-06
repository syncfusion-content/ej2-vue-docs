
  import Vue from 'vue';
  import {
    DocumentEditorContainerPlugin,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  ;
new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
`,

    data() {
      return {
        serviceUrl:
          'https://services.syncfusion.com/vue/production/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar],
    },
    methods: {
      onCreated: function () {
        // creating Custom Options
        let menuItems = [
          {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find',
          },
        ];
        // adding Custom Options
        this.$refs.container.ej2Instances.documentEditor.contextMenu.addCustomMenu( menuItems,false);
        // custom Options Select Event
        this.$refs.container.ej2Instances.documentEditor.customContextMenuSelect =
          (args) => {
            // custom Options Functionality
            let id =
              this.$refs.container.ej2Instances.documentEditor.element.id;
            switch (args.id) {
              case id + 'search_in_google':
                // To get the selected content as plain text
                let searchContent =
                  this.$refs.container.ej2Instances.documentEditor.selection
                    .text;
                if (
                  !this.$refs.container.ej2Instances.documentEditor.selection
                    .isEmpty &&
                  /\S/.test(searchContent)
                ) {
                  window.open('http://google.com/search?q=' + searchContent);
                }
                break;
            }
          };
          //  custom options hide/show functionality
        this.$refs.container.ej2Instances.documentEditor.customContextMenuBeforeOpen = (args) => {
        let search = document.getElementById(args.ids[0]);
        search.style.display = 'none';
        let searchContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
        if (!this.$refs.container.ej2Instances.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            search.style.display = 'block';
        }
       };
      },
    },
  
});
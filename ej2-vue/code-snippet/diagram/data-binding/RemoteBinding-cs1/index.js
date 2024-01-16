
    import Vue from 'vue';
    import {DiagramPlugin,Diagram,NodeModel,Node,Connector,DataBinding,HierarchicalTree,TreeInfo,DiagramTools} from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Vue.use(DiagramPlugin);
    Diagram.Inject(DataBinding, HierarchicalTree);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :tool='tool' :getNodeDefaults='getNodeDefaults' :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
            layout: {
            type: 'HierarchicalTree', margin: { left: 0, right: 0, top: 100, bottom: 0 },
            verticalSpacing: 40,
            getLayoutInfo: (node: Node, options: TreeInfo) => {
                if (options.level === 3) {
                    node.style.fill = '#3c418d';
                }
                if (options.level === 2) {
                    node.style.fill = '#108d8d';
                    options.type = 'Center';
                    options.orientation = 'Horizontal';
                }
                if (options.level === 1) {
                    node.style.fill = '#822b86';
                }
            }
        },
            //Sets the default values of nodes
            getNodeDefaults: (obj: Node) => {
                obj.width = 80;
                obj.height = 40;
                //Initialize shape
                obj.shape = { type: 'Basic', shape: 'Rectangle' };
                obj.style = { fill: '#048785', strokeColor: 'Transparent' };
            },
            //Sets the default values of connector
            getConnectorDefaults: (connector: Connector) => {
                connector.type = 'Orthogonal';
                connector.style.strokeColor = '#048785';
                connector.targetDecorator.shape = 'None';
            },
            dataSourceSettings: {
                id: "Id",
                parentId: "ParentId",
                dataSource: new DataManager(
                  {
                    url: "https://services.syncfusion.com/vue/production/api/RemoteData",
                    crossDomain: true
                  },
                ),
                //binds the external data with node
                doBinding: (nodeModel, data, diagram) => {
                  nodeModel.annotations = [
                    {
                      /* tslint:disable:no-string-literal */
                      content: data["Label"],
                      style: { color: "white" }
                    }
                  ];
                }
              },
            //Disables all interactions except zoom/pan
            tool: DiagramTools.ZoomPan,
            snapSettings: { constraints: 0 }
            provide: {
                diagram: [DataBinding, HierarchicalTree]
            },
        }
    }

});
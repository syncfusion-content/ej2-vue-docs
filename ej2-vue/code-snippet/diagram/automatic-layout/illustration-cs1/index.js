
    import Vue from 'vue';
    import { DiagramPlugin,Diagram, HierarchicalTree, DataBinding,TreeInfo,NodeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(DataBinding, HierarchicalTree);
    Vue.use(DiagramPlugin);
    export let data = [{
        Id: "parent",
        Role: "Board"
    },
    {
        Id: "1",
        Role: "General Manager",
        Manager: "parent"
    },
    {
        Id: "2",
        Role: "Human Resource Manager",
        Manager: "1"
    },
    {
        Id: "3",
        Role: "Trainers",
        Manager: "2"
    },
    {
        Id: "4",
        Role: "Recruiting Team",
        Manager: "2"
    },
    {
        Id: "6",
        Role: "Design Manager",
        Manager: "1"
    },
    {
        Id: "7",
        Role: "Design Supervisor",
        Manager: "6"
    },
    {
        Id: "8",
        Role: "Development Supervisor",
        Manager: "6"
    },
    {
        Id: "9",
        Role: "Drafting Supervisor",
        Manager: "6"
    },
    {
        Id: "10",
        Role: "Marketing Manager",
        Manager: "1"
    },
    {
        Id: "11",
        Role: "Oversea sales Manager",
        Manager: "10"
    },
    {
        Id: "12",
        Role: "Petroleum Manager",
        Manager: "10"
    },
    {
        Id: "13",
        Role: "Service Dept. Manager",
        Manager: "10"
    }];
    let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'  :snapSettings='snapSettings':getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "590px",
                //Uses layout to auto-arrange nodes on the Diagram page
                snapSettings: {
                    constraints: 0
                }, //Uses layout to auto-arrange nodes on the Diagram page
                layout: {
                    //Sets layout type
                    type: 'OrganizationalChart',
                    //Defines getLayoutInfo
                    getLayoutInfo: (node: Node, options: TreeInfo) => {
                        if (node.data['Role'] === 'General Manager') {
                            options.assistants.push(options.children[0]);
                            options.children.splice(0, 1);
                        }
                        if (!options.hasSubTree) {
                            options.type = 'Right';
                            options.orientation = 'Vertical';
                        }
                    }
                }, //Configures data source for Diagram
                dataSourceSettings: {
                    id: 'Id',
                    parentId: 'Manager',
                    dataManager: items
                }, //Sets the default properties for nodes and connectors
                getNodeDefaults: (obj: Node, diagram: Diagram) => {
                    obj.width = 150;
                    obj.height = 50;
                    obj.borderColor = 'white';
                    obj.style.fill = '#6BA5D7';
                    obj.borderWidth = 1;
                    obj.annotations = [{
                        content: obj.data['Role'],
                        style: {
                            color: 'white'
                        }
                    }];
                    return obj;
                },
                getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
                    connector.style = {
                        strokeColor: '#6BA5D7',
                        strokeWidth: 2
                    };
                    connector.targetDecorator.style.fill = '#6BA5D7';
                    connector.targetDecorator.style.strokeColor = '#6BA5D7';
                    connector.targetDecorator.shape = 'None';
                    connector.type = 'Orthogonal';
                    return connector;
                }
            }
        },
    
});
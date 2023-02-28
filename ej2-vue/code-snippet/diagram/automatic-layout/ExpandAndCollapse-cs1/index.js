
    import Vue from 'vue';
    import { DiagramPlugin, HierarchicalTree, DataBinding,Diagram,Rect,NodeModel,
        Orientation,
        VerticalAlignment,
        PathElement,
        HorizontalAlignment,
        LayoutAnimation,
        SelectorConstraints,
        DiagramNativeElement,
        IconShapeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(LayoutAnimation);
    Vue.use(DiagramPlugin);
    let data: object[] = [{
        'Id': 'parent1',
        'Name': 'Maria ',
        'Designation': 'Managing Director',
        'RatingColor': '#C34444'
    },
    {
        'Id': 'parent',
        'Name': ' sam',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent1',
        'RatingColor': '#C34444'
    },
    {
        'Id': 'parent3',
        'Name': ' sam geo',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent1',
        'RatingColor': '#C34444'
    },
    {
        'Id': '80',
        'Name': ' david',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent3',
        'RatingColor': '#C34444'
    },
    {
        'Id': '82',
        'Name': ' pirlo',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent',
        'RatingColor': '#C34444'
    }];
    let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height'  :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                selectedItems: {
                    constraints: ~SelectorConstraints.ResizeAll
                },
                snapSettings: {
                    constraints: 0
                },
                layout: {
                    // set enableAnimation as true
                    enableAnimation: true,
                    type: 'OrganizationalChart',
                    margin: {
                        top: 20
                    }, // define the getLayoutInfo
                    getLayoutInfo: (node: Node, tree: TreeInfo) => {
                        if (!tree.hasSubTree) {
                            tree.orientation = 'vertical';
                            tree.type = 'alternate';
                        }
                    }
                }, // define the dataSourceSettings
                dataSourceSettings: {
                    id: 'Id',
                    parentId: 'ReportingPerson',
                    dataManager: items
                },
                // define the node defaults
                getNodeDefaults: (obj: Node, diagram: Diagram) => {
                    obj.expandIcon = {
                        height: 15,
                        width: 15,
                        shape: "Plus",
                        fill: 'lightgray',
                        offset: {
                            x: .5,
                            y: .85
                        }
                    }
                    obj.collapseIcon.offset = {
                        x: .5,
                        y: .85
                    }
                    obj.collapseIcon.height = 15;
                    obj.collapseIcon.width = 15;
                    obj.collapseIcon.shape = "Minus";
                    obj.height = 50;
                    obj.borderColor = 'white';
                    obj.backgroundColor = '#6BA5D7';
                    obj.borderWidth = 1;
                    obj.style = {
                        fill: 'transparent',
                        strokeWidth: 2
                    };
                    return obj;
                }, // define the connector defaults
                getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
                    connector.style = {
                        strokeColor: '#6BA5D7',
                        strokeWidth: 2
                    };
                    connector.targetDecorator.style.fill  =  '#6BA5D7';
                    connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
                    connector.targetDecorator.shape = 'None';
                    connector.type = 'Orthogonal';
                    return connector;
                }
            }
        },
        provide: {
            diagram: [DataBinding, HierarchicalTree]
        },
    
});
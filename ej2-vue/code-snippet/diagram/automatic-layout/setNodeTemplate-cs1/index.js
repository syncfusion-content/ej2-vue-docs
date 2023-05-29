
    import Vue from 'vue';
    import { DiagramPlugin, HierarchicalTree, DataBinding,Diagram,Rect,NodeModel,
        Orientation,
        VerticalAlignment,
        PathElement,
        HorizontalAlignment,
        LayoutAnimation
        DiagramNativeElement,
        IconShapeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(LayoutAnimation);
    Vue.use(DiagramPlugin);
    let data: object[] = [{
        Name: "Steve-Ceo"
    },
    {
        Name: "Kevin-Manager",
        ReportingPerson: "Steve-Ceo",
        color: 'darkcyan'
    },
    {
        Name: "Peter-Manager",
        ReportingPerson: "Steve-Ceo",
        color: 'white'
    },
    {
        Name: "John- Manager",
        ReportingPerson: "Peter-Manager",
        color: 'darkcyan'
    },
    {
        Name: "Mary-CSE ",
        ReportingPerson: "Peter-Manager",
        color: 'white'
    },
    {
        Name: "Jim-CSE ",
        ReportingPerson: "Kevin-Manager",
        color: 'darkcyan'
    },
    {
        Name: "Martin-CSE",
        ReportingPerson: "Kevin-Manager",
        color: 'white'
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
                layout: {
                    type: 'HierarchicalTree',
                    bounds: new Rect(0, 0, 500, 500),
                    horizontalSpacing: 25,
                    verticalSpacing: 30,
                    horizontalAlignment: 'Left',
                    verticalAlignment: 'Top'
                },
                dataSourceSettings: {
                    id: 'Name',
                    parentId: 'ReportingPerson',
                    dataManager: items
                },
                getNodeDefaults: (obj: Node) => {
                    obj.shape = {
                        type: 'Text',
                        content: (obj.data as {
                            Name: 'string'
                        }).Name
                    };
                    obj.style = {
                        fill: 'None',
                        strokeColor: 'none',
                        strokeWidth: 2,
                        bold: true,
                        color: 'white'
                    };
                    obj.width = 50;
                    obj.height = 40;
                    obj.borderColor = 'white';
                    obj.backgroundColor = '#6BA5D7';
                    obj.borderWidth = 1;
                    (obj.shape as TextModel).margin = {
                        left: 25,
                        right: 25,
                        top: 25,
                        bottom: 25
                    };
                    return obj;
                },
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
                },
                setNodeTemplate: function(obj, diagram) {
                    obj.style.borderColor = (obj.data as {
                        color: 'string'
                    }).color;
                }
            }
        },
        provide: {
            diagram: [DataBinding, HierarchicalTree]
        },
    
});
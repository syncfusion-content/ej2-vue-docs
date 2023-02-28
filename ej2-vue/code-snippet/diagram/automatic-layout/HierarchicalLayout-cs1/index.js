
    import Vue from 'vue';
    import { DiagramPlugin,Diagram, HierarchicalTree,HierarchicalTree, DataBinding,DiagramTools,NodeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(DataBinding, HierarchicalTree);
    Vue.use(DiagramPlugin);
    export let data = [{
        Name: "Steve-Ceo"
    },
    {
        Name: "Kevin-Manager",
        ReportingPerson: "Steve-Ceo"
    },
    {
        Name: "Peter-Manager",
        ReportingPerson: "Steve-Ceo"
    },
    {
        Name: "John- Manager",
        ReportingPerson: "Peter-Manager"
    },
    {
        Name: "Mary-CSE ",
        ReportingPerson: "Peter-Manager"
    },
    {
        Name: "Jim-CSE ",
        ReportingPerson: "Kevin-Manager"
    },
    {
        Name: "Martin-CSE",
        ReportingPerson: "Kevin-Manager"
    }];
    let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                //Uses layout to auto-arrange nodes on the Diagram page
                layout: {
                    //Sets layout type
                    type: 'HierarchicalTree'
                },
                dataSourceSettings: {
                    id: 'Name',
                    parentId: 'ReportingPerson',
                    dataManager: items
                },
                getNodeDefaults: (obj) => {
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
                    obj.borderColor = 'white';
                    obj.width = 100;
                    obj.height = 40;
                    obj.backgroundColor = '#6BA5D7';
                    obj.borderWidth = 1;
                    (obj.shape as TextModel).margin = {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    };
                    return obj;
                },
                getConnectorDefaults: (connector) => {
                    connector.style = {
                        strokeColor: '#6BA5D7',
                        strokeWidth: 2
                    };
                    connector.targetDecorator.style.fill  =  '#6BA5D7';
                    connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
                    connector.type = 'Orthogonal';
                    return connector;
                },
            }
        },
        provide: {
            diagram: [DataBinding, HierarchicalTree]
        },
    
});
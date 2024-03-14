﻿define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkBoxData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, verified: true },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, verified: true },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, verified: true },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, verified: true }
            ]
        }
    ];
    exports.colSpanData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),  work1: 'Testing', work2: 'Development',
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, work1: 'support', work2: 'support' },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, work1: 'consulting', work2: 'support'  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, work1: 'support', work2: 'support' },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'), work1: 'Development', work2: 'Support',
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, work1: 'development', work2: 'support' },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, work1: 'support', work2: 'support' },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, work1: 'consulting', work2: 'support' }
            ]
        }
    ];
    exports.projectNewData = [
        {
            TaskID: 1,
            TaskName: 'Product Concept',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
                { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
                {
                    TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2,
                    Predecessor: '2', Progress: 30
                },
            ]
        },
        {
            TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4',
            Indicators: [
                {
                    'date': '04/10/2019',
                    'name': '#briefing',
                    'title': 'Product concept breifing',
                }
            ]
        },
        {
            TaskID: 6,
            TaskName: 'Market Research',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 7,
                    TaskName: 'Demand Analysis',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4,
                            Predecessor: '5', Progress: 30
                        },
                        { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5' }
                    ]
                },
                {
                    TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4,
                    Predecessor: '7, 8', Progress: 30
                },
                { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '9' },
                {
                    TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '10',
                    Indicators: [
                        {
                            'date': '04/20/2019',
                            'name': '#meeting',
                            'title': '1st board of directors meeting',
                        }
                    ]
                }
            ]
        },
        {
            TaskID: 13,
            TaskName: 'Product Design and Development',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 30, Predecessor: '12'
                },
                { TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '12' },
                { TaskID: 16, TaskName: 'Define Reliability', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '15' },
                { TaskID: 17, TaskName: 'Identifying raw materials', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '15' },
                {
                    TaskID: 18,
                    TaskName: 'Define cost plan',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'),
                            Duration: 2, Progress: 30, Predecessor: '17'
                        },
                        { TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '17' }
                    ]
                },
                {
                    TaskID: 21,
                    TaskName: 'Development of the final design',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'),
                            Duration: 2, Progress: 30, Predecessor: '19,20'
                        },
                        {
                            TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'),
                            Duration: 2, Predecessor: '22'
                        },
                        { TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '23' }
                    ]
                },
                {
                    TaskID: 25, TaskName: 'CAD Computer-aided design', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 30, Predecessor: '24'
                },
                { TaskID: 26, TaskName: 'CAM Computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '25' },
                {
                    TaskID: 27, TaskName: 'Design complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '26',
                    Indicators: [
                        {
                            'date': '05/18/2019',
                            'name': '#meeting',
                            'title': '2nd board of directors meeting',
                        }
                    ]
                }
            ]
        },
        { TaskID: 28, TaskName: 'Prototype Testing', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '27' },
        { TaskID: 29, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '28ss' },
        { TaskID: 30, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30, Predecessor: '28,29' },
        { TaskID: 31, TaskName: 'Assembling materials to finsihed goods', StartDate: new Date('04/04/2019'), Duration: 5, Predecessor: '30' },
        {
            TaskID: 32,
            TaskName: 'Feedback and Testing',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 33, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 45, Predecessor: '31'
                },
                {
                    TaskID: 34, TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 50, Predecessor: '33'
                }
            ]
        },
        {
            TaskID: 35,
            TaskName: 'Final Product Development',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 36, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'),
                    Duration: 4, Progress: 30, Predecessor: '34'
                },
                {
                    TaskID: 37, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'),
                    Duration: 4, Progress: 30, Predecessor: '36ss'
                }
            ]
        },
        {
            TaskID: 38,
            TaskName: 'Final Product',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 39, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '37' },
                {
                    TaskID: 40, TaskName: 'Marketing and presales', StartDate: new Date('04/04/2019'),
                    Duration: 4, Progress: 30, Predecessor: '39'
                }
            ]
        }
    ];
    exports.editingResources = [
        { resourceId: 1, resourceName: 'Martin Tamer' },
        { resourceId: 2, resourceName: 'Rose Fuller' },
        { resourceId: 3, resourceName: 'Margaret Buchanan' },
        { resourceId: 4, resourceName: 'Fuller King' },
        { resourceId: 5, resourceName: 'Davolio Fuller' },
        { resourceId: 6, resourceName: 'Van Jack' },
        { resourceId: 7, resourceName: 'Fuller Buchanan' },
        { resourceId: 8, resourceName: 'Jack Davolio' },
        { resourceId: 9, resourceName: 'Tamer Vinet' },
        { resourceId: 10, resourceName: 'Vinet Fuller' },
        { resourceId: 11, resourceName: 'Bergs Anton' },
        { resourceId: 12, resourceName: 'Construction Supervisor' }
    ];
    exports.editingData =[
        {
            TaskID: 1,
            TaskName: 'Product concept',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'),
                    Duration: 3, Progress: 30, resources: [2], EmailId: 'RoseFuller@gmail.com', resourcesImage: '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' },
                { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'),
                    Duration: 3, resources: [3], EmailId: 'MargaretBuchanan@gmail.com', resourcesImage: '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' },
                { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'),
                    Duration: 2, Predecessor: '2', Progress: 30, resources: [4], EmailId: 'FullerKing@gmail.com', resourcesImage: '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' }
            ]
        },
        {
            TaskID: 5, TaskName: 'Concept approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', resources: [1], EmailId: 'MartinTamer@gmail.com', resourcesImage: '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'
        },
        {
            TaskID: 6,
            TaskName: 'Market research',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 7,
                    TaskName: 'Demand analysis',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'),
                            Duration: 4, Predecessor: '5', Progress: 30, resources: [5], EmailId: 'DavolioFuller@gmail.com', resourcesImage: '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' },
                        { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'),
                            Duration: 4, Predecessor: '5', resources: [6], EmailId: 'VanJack@gmail.com', resourcesImage: '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' }
                    ]
                },
                { TaskID: 10, TaskName: 'Competitor analysis', StartDate: new Date('04/04/2019'),
                    Duration: 4, Predecessor: '7, 8', Progress: 30, resources: [4], EmailId: 'FullerKing@gmail.com', resourcesImage: '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' },
                { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/04/2019'),
                    Duration: 4, Predecessor: '9', resources: [8], EmailId: 'JackDavolio@gmail.com', resourcesImage: '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' },
            ]
        }
    ];
    exports.remoteData = [
        {
            TaskID: 1,
            TaskName: 'Germination',
            StartDate: new Date('03/01/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Dry seed (caryopsis)', StartDate: new Date('03/01/2019'), Duration: 0 },
                { TaskID: 3, TaskName: 'Seed imbibition complete', StartDate: new Date('03/01/2019'), Duration: 3, Predecessor: '2FS' },
                { TaskID: 4, TaskName: 'Radicle emerged from caryopsis', StartDate: new Date('03/04/2019'), Duration: 2, Predecessor: '3FS' },
                {
                    TaskID: 5, TaskName: 'Coleoptile emerged from caryopsis', StartDate: new Date('03/06/2019'),
                    Duration: 2, Predecessor: '4FS'
                },
                {
                    TaskID: 6, TaskName: 'Emergence: coleoptile penetrates soil surface (cracking stage)',
                    StartDate: new Date('03/08/2019'), Duration: 2, Predecessor: '5FS'
                },
            ]
        },
        {
            TaskID: 7,
            TaskName: 'Leaf development',
            StartDate: new Date('03/10/2019'),
            subtasks: [
                { TaskID: 8, TaskName: 'First leaf through coleoptile', StartDate: new Date('03/10/2019'), Duration: 1, Predecessor: '6FS' },
                { TaskID: 9, TaskName: 'First leaf unfolded', StartDate: new Date('03/11/2019'), Duration: 1, Predecessor: '8FS' },
                { TaskID: 10, TaskName: '3 leaves unfolded', StartDate: new Date('03/12/2019'), Duration: 2, Predecessor: '9FS' },
                { TaskID: 11, TaskName: '9 or more leaves unfolded', StartDate: new Date('03/14/2019'), Duration: 5, Predecessor: '10FS' },
            ]
        },
        {
            TaskID: 12,
            TaskName: 'Tillering',
            StartDate: new Date('03/18/2019'),
            subtasks: [
                {
                    TaskID: 13, TaskName: 'Beginning of tillering: first tiller detectable',
                    StartDate: new Date('03/18/2019'), Duration: 0, Predecessor: '11FS'
                },
                { TaskID: 14, TaskName: '2 tillers detectable', StartDate: new Date('03/19/2019'), Duration: 3, Predecessor: '13FS' },
                { TaskID: 15, TaskName: '3 tillers detectable', StartDate: new Date('03/22/2019'), Duration: 3, Predecessor: '14FS' },
                {
                    TaskID: 16, TaskName: 'Maximum no. of tillers detectable', StartDate: new Date('03/25/2019'),
                    Duration: 6, Predecessor: '15FS'
                },
                { TaskID: 17, TaskName: 'End of tillering', StartDate: new Date('03/30/2019'), Duration: 0, Predecessor: '16FS' },
            ]
        },
        {
            TaskID: 18,
            TaskName: 'Stem elongation',
            StartDate: new Date('03/30/2019'),
            subtasks: [
                {
                    TaskID: 19,
                    TaskName: 'Beginning of stem elongation: pseudostem and tillers erect, first internode begins to elongate,' +
                        'top of inflorescence at least 1 cm above tillering node',
                    StartDate: new Date('03/30/2019'),
                    Duration: 0,
                    Predecessor: '17FS'
                },
                {
                    TaskID: 20, TaskName: 'First node at least 1 cm above tillering node', StartDate: new Date('03/31/2019'),
                    Duration: 1, Predecessor: '19FS'
                },
                {
                    TaskID: 21, TaskName: 'Node 3 at least 2 cm above node 2', StartDate: new Date('04/01/2019'),
                    Duration: 2, Predecessor: '20FS'
                },
                {
                    TaskID: 22, TaskName: 'Flag leaf just visible, still rolled', StartDate: new Date('04/03/2019'),
                    Duration: 4, Predecessor: '21FS'
                },
                {
                    TaskID: 23, TaskName: 'Flag leaf stage: flag leaf fully unrolled, ligule just visible', StartDate: new Date('04/07/2019'),
                    Duration: 2, Predecessor: '22FS'
                },
            ]
        },
        {
            TaskID: 24,
            TaskName: 'Booting',
            StartDate: new Date('04/09/2019'),
            subtasks: [
                {
                    TaskID: 25, TaskName: 'Early boot stage: flag leaf sheath extending', StartDate: new Date('04/09/2019'),
                    Duration: 2, Predecessor: '23FS'
                },
                {
                    TaskID: 26, TaskName: 'Mid boot stage: flag leaf sheath just visibly swollen', StartDate: new Date('04/11/2019'),
                    Duration: 2, Predecessor: '25FS'
                },
                {
                    TaskID: 27, TaskName: 'Late boot stage: flag leaf sheath swollen', StartDate: new Date('04/13/2019'),
                    Duration: 2, Predecessor: '26FS'
                },
                { TaskID: 28, TaskName: 'Flag leaf sheath opening', StartDate: new Date('04/15/2019'), Duration: 2, Predecessor: '27FS' },
                {
                    TaskID: 29, TaskName: 'First awns visible (in awned forms only)', StartDate: new Date('04/17/2019'),
                    Duration: 2, Predecessor: '28FS'
                },
            ]
        },
        {
            TaskID: 30,
            TaskName: 'Inflorescence emergence, heading',
            StartDate: new Date('04/18/2019'),
            subtasks: [
                {
                    TaskID: 31, TaskName: 'Beginning of heading: tip of inflorescence emerged from sheath, first spikelet just visible',
                    StartDate: new Date('04/18/2019'), Duration: 0, Predecessor: '29FS'
                },
                { TaskID: 32, TaskName: '20% of inflorescence emerged', StartDate: new Date('04/19/2019'), Duration: 3, Predecessor: '31FS' },
                { TaskID: 33, TaskName: '40% of inflorescence emerged', StartDate: new Date('04/22/2019'), Duration: 2, Predecessor: '32FS' },
                {
                    TaskID: 34, TaskName: 'Middle of heading: half of inflorescence emerged', StartDate: new Date('04/23/2019'),
                    Duration: 0, Predecessor: '33FS'
                },
                { TaskID: 35, TaskName: '60% of inflorescence emerged', StartDate: new Date('04/24/2019'), Duration: 2, Predecessor: '34FS' },
                { TaskID: 36, TaskName: '80% of inflorescence emerged', StartDate: new Date('04/26/2019'), Duration: 3, Predecessor: '35FS' },
                {
                    TaskID: 37, TaskName: 'End of heading: inflorescence fully emerged', StartDate: new Date('04/28/2019'),
                    Duration: 0, Predecessor: '36FS'
                },
            ]
        },
        {
            TaskID: 38,
            TaskName: 'Flowering, anthesis',
            StartDate: new Date('04/28/2019'),
            subtasks: [
                {
                    TaskID: 39, TaskName: 'Beginning of flowering: first anthers visible', StartDate: new Date('04/28/2019'),
                    Duration: 0, Predecessor: '37FS'
                },
                {
                    TaskID: 40, TaskName: 'Full flowering: 50% of anthers mature', StartDate: new Date('04/29/2019'),
                    Duration: 5, Predecessor: '39FS'
                },
                {
                    TaskID: 41, TaskName: 'spikelet have completed flowering', StartDate: new Date('05/04/2019'),
                    Duration: 5, Predecessor: '40FS'
                },
                { TaskID: 42, TaskName: 'End of flowering', StartDate: new Date('05/08/2019'), Duration: 0, Predecessor: '41FS' },
            ]
        },
        {
            TaskID: 43,
            TaskName: 'Development of fruit',
            StartDate: new Date('05/08/2019'),
            subtasks: [
                {
                    TaskID: 44, TaskName: 'Watery ripe: first grains have reached half their final size',
                    StartDate: new Date('05/08/2019'), Duration: 0, Predecessor: '42FS'
                },
                { TaskID: 45, TaskName: 'Early milk', StartDate: new Date('05/09/2019'), Duration: 3, Predecessor: '44FS' },
                {
                    TaskID: 46, TaskName: 'Medium milk: grain content milky, grains reached final size,still green',
                    StartDate: new Date('05/12/2019'), Duration: 3, Predecessor: '45FS'
                },
                { TaskID: 47, TaskName: 'Late milk', StartDate: new Date('05/15/2019'), Duration: 2, Predecessor: '46FS' },
            ]
        },
        {
            TaskID: 48,
            TaskName: 'Ripening',
            StartDate: new Date('05/17/2019'),
            subtasks: [
                { TaskID: 49, TaskName: 'Early dough', StartDate: new Date('05/17/2019'), Duration: 6, Predecessor: '47FS' },
                {
                    TaskID: 50, TaskName: 'Soft dough: grain content soft but dry. Fingernail impression not held',
                    StartDate: new Date('05/23/2019'), Duration: 2, Predecessor: '49FS'
                },
                {
                    TaskID: 51, TaskName: 'Hard dough: grain content solid. Fingernail impression held',
                    StartDate: new Date('05/25/2019'), Duration: 2, Predecessor: '50FS'
                },
                {
                    TaskID: 52, TaskName: 'Fully ripe: grain hard, difficult to divide with thumbnail',
                    StartDate: new Date('05/27/2019'), Duration: 2, Predecessor: '51FS'
                },
            ]
        },
        {
            TaskID: 53,
            TaskName: 'Senescence',
            StartDate: new Date('05/29/2019'),
            subtasks: [
                {
                    TaskID: 54, TaskName: 'Over-ripe: grain very hard, cannot be dented by thumbnail',
                    StartDate: new Date('05/29/2019'), Duration: 3, Predecessor: '52FS'
                },
                { TaskID: 55, TaskName: 'Grains loosening in day-time', StartDate: new Date('06/01/2019'), Duration: 1, Predecessor: '54FS' },
                { TaskID: 56, TaskName: 'Plant dead and collapsing', StartDate: new Date('06/02/2019'), Duration: 4, Predecessor: '55FS' },
                { TaskID: 57, TaskName: 'Harvested product', StartDate: new Date('06/06/2019'), Duration: 2, Predecessor: '56FS' },
            ]
        },
    ];
    exports.filteredData = [
        {
            TaskID: 1,
            TaskName: 'Launch and flight to lunar orbit',
            StartDate: new Date('07/16/1969'),
            subtasks: [
                {
                    TaskID: 2, TaskName: 'Apollo 11 blasts off from launch pad', StartDate: new Date('07/16/1969 03:32:00 AM'),
                    EndDate: new Date('07/16/1969 03:32:00 AM'), Duration: 0,
                },
                {
                    TaskID: 3, TaskName: 'Entry to Earth’s orbit', StartDate: new Date('07/16/1969 03:32:00 AM'),
                    EndDate: new Date('07/16/1969 03:44:00 AM'), Predecessor: '2FS'
                },
                {
                    TaskID: 4, TaskName: 'Travelling in earth’s orbit', StartDate: new Date('07/16/1969 03:44:00 AM'),
                    EndDate: new Date('07/16/1969 04:22:13 AM'), Predecessor: '3FS'
                },
                {
                    TaskID: 5, TaskName: 'Trajectory change toward the Moon', StartDate: new Date('07/16/1969 04:22:13 AM'),
                    EndDate: new Date('07/16/1969 04:52:00 AM'), Predecessor: '4FS'
                },
                {
                    TaskID: 6, TaskName: 'extraction maneuver performed', StartDate: new Date('07/16/1969 04:52:00 AM'),
                    EndDate: new Date('07/16/1969 04:52:00 AM'), Predecessor: '5FS'
                },
                {
                    TaskID: 7, TaskName: 'Travelling toward moon and entering into lunar orbit', StartDate: new Date('07/16/1969 04:52:00 AM'),
                    EndDate: new Date('07/16/1969 04:21:50 PM'), Predecessor: '6FS'
                },
                {
                    TaskID: 8, TaskName: 'Midcourse correction, sharpening the course and testing the engine',
                    StartDate: new Date('07/16/1969 11:22:00 PM'), EndDate: new Date('07/17/1969 05:21:50 AM')
                },
                {
                    TaskID: 9, TaskName: 'Reached half the distance spanning between earth and moon',
                    StartDate: new Date('07/17/1969 05:22:00 AM'), EndDate: new Date('07/17/1969 08:00:50 PM')
                },
                {
                    TaskID: 10, TaskName: 'Reached 3/4th distance spanning between earth and moon',
                    StartDate: new Date('07/17/1969 8:02:00 PM'), EndDate: new Date('07/18/1969 04:21:50 PM')
                },
                {
                    TaskID: 11, TaskName: 'Reached distance 45000 miles from moon',
                    StartDate: new Date('07/18/1969 11:22:00 PM'), EndDate: new Date('07/19/1969 05:21:50 PM')
                },
            ]
        },
        {
            TaskID: 12,
            TaskName: 'Lunar descent',
            StartDate: new Date('07/19/1969 05:21:50 PM'),
            subtasks: [
                {
                    TaskID: 13, TaskName: 'Lunar Orbiting (30 orbits)', StartDate: new Date('07/19/1969 05:21:50 PM'),
                    EndDate: new Date('07/20/1969 12:52:00 AM'), Predecessor: '11FS'
                },
                {
                    TaskID: 14, TaskName: 'Landing site identified', StartDate: new Date('07/20/1969 12:52:00 AM'),
                    EndDate: new Date('07/20/1969 12:52:00 AM'), Predecessor: '13FS'
                },
                {
                    TaskID: 15, TaskName: 'Eagle separated from Columbia.', StartDate: new Date('07/20/1969 05:44:00 PM'),
                    EndDate: new Date('07/20/1969 05:44:00 PM')
                },
                {
                    TaskID: 16, TaskName: 'Eagle’s decent to Moon', StartDate: new Date('07/20/1969 05:44:00 PM'),
                    EndDate: new Date('07/20/1969 08:16:40 PM'), Predecessor: '15FS'
                }
            ]
        },
        {
            TaskID: 17,
            TaskName: 'Landing',
            StartDate: new Date('07/20/1969 08:17:40 PM'),
            subtasks: [
                {
                    TaskID: 18, TaskName: 'Eagle’s touch down', StartDate: new Date('07/20/1969 08:17:40 PM'),
                    EndDate: new Date('07/20/1969 08:17:40 PM')
                },
                {
                    TaskID: 19, TaskName: 'Radio communication and Performing post landing checklist',
                    StartDate: new Date('07/20/1969 08:17:40 PM'), EndDate: new Date('07/20/1969 11:43:00 PM'), Predecessor: '18FS'
                },
                {
                    TaskID: 20, TaskName: 'Preparations for EVA (Extra Vehicular Activity)',
                    StartDate: new Date('07/20/1969 11:43:00 PM'), EndDate: new Date('07/21/1969 02:39:33 AM'), Predecessor: '19FS'
                },
                {
                    TaskID: 21, TaskName: 'Hatch open and climbing down the moon', StartDate: new Date('07/21/1969 02:39:33 AM'),
                    EndDate: new Date('07/21/1969 02:56:15 AM'), Predecessor: '20FS'
                },
                {
                    TaskID: 22, TaskName: 'Armstrong stepped down on the moon', StartDate: new Date('07/21/1969 02:56:15 AM'),
                    EndDate: new Date('07/21/1969 03:11:00 AM'), Predecessor: '21FS'
                },
            ]
        },
        {
            TaskID: 23,
            TaskName: 'Lunar surface operations',
            StartDate: new Date('07/21/1969'),
            subtasks: [
                {
                    TaskID: 24, TaskName: 'Soil sample collections', StartDate: new Date('07/21/1969 02:56:15 AM'),
                    EndDate: new Date('07/21/1969 03:11:00 AM')
                },
                {
                    TaskID: 25, TaskName: 'Aldrin joined Armstrong', StartDate: new Date('07/21/1969 03:11:00 AM'),
                    EndDate: new Date('07/21/1969 03:41:00 AM'), Predecessor: '24FS'
                },
                {
                    TaskID: 26, TaskName: 'planted the Lunar Flag Assembly', StartDate: new Date('07/21/1969 03:41:00 AM'),
                    EndDate: new Date('07/21/1969 03:46:00 AM'), Predecessor: '25FS'
                },
                {
                    TaskID: 27, TaskName: 'President Richard Nixon’s telephone-radio transmission ',
                    StartDate: new Date('07/21/1969 03:48:00 AM'), EndDate: new Date('07/21/1969 03:51:00 AM')
                },
                {
                    TaskID: 28, TaskName: 'Collect rock samples, photos and other mission controls',
                    StartDate: new Date('07/21/1969 03:52:00 AM'), EndDate: new Date('07/21/1969 04:50:00 AM')
                },
            ]
        },
        {
            TaskID: 29,
            TaskName: 'Lunar ascent',
            StartDate: new Date('07/21/1969'),
            subtasks: [
                {
                    TaskID: 30, TaskName: 'Climbing the eagle to ascent', StartDate: new Date('07/21/1969 04:51:00 AM'),
                    EndDate: new Date('07/21/1969 05:00:00 AM')
                },
                {
                    TaskID: 31, TaskName: 'Hatch closing', StartDate: new Date('07/21/1969 05:01:00 AM'),
                    EndDate: new Date('07/21/1969 05:01:00 AM'), Predecessor: '30FS'
                },
                {
                    TaskID: 32, TaskName: 'Final housekeeping', StartDate: new Date('07/21/1969 05:02:00 AM'),
                    EndDate: new Date('07/21/1969 08:00:00 AM')
                },
                {
                    TaskID: 33, TaskName: 'Resting of astronauts', StartDate: new Date('07/21/1969 08:00:00 AM'),
                    EndDate: new Date('07/21/1969 03:00:00 PM'), Predecessor: '32FS'
                },
                {
                    TaskID: 34, TaskName: 'Preparation for lift off and Ascent engine started', StartDate: new Date('07/21/1969 03:00:00 PM'),
                    EndDate: new Date('07/21/1969 05:54:00 PM'), Predecessor: '33FS'
                },
                {
                    TaskID: 35, TaskName: 'Eagle lifted off', StartDate: new Date('07/21/1969 05:54:00 PM'),
                    EndDate: new Date('07/21/1969 05:54:00 PM'), Predecessor: '34FS'
                },
                {
                    TaskID: 36, TaskName: 'Eagle’s travel toward Columbia', StartDate: new Date('07/21/1969 05:54:00 PM'),
                    EndDate: new Date('07/21/1969 09:23:00 PM'), Predecessor: '35FS'
                },
            ]
        },
        {
            TaskID: 37,
            TaskName: 'Return',
            StartDate: new Date('07/21/1969 09:24:00 PM'),
            subtasks: [
                {
                    TaskID: 38, TaskName: 'Eagle docked with Columbia', StartDate: new Date('07/21/1969 09:24:00 PM'),
                    EndDate: new Date('07/21/1969 09:35:00 PM')
                },
                {
                    TaskID: 39, TaskName: 'Eagle’s ascent stage jettisoned into lunar orbit', StartDate: new Date('07/21/1969 09:35:00 PM'),
                    EndDate: new Date('07/21/1969 11:41:00 PM'), Predecessor: '38FS'
                },
            ]
        },
        {
            TaskID: 40,
            TaskName: 'Decent toward earth  and Splashdown',
            StartDate: new Date('07/21/1969'),
            subtasks: [
                {
                    TaskID: 41, TaskName: 'Spacecraft reaches 1/4th distance spanning between moon and earth',
                    StartDate: new Date('07/21/1969 11:50:00 PM'), EndDate: new Date('07/22/1969 04:40:00 PM')
                },
                {
                    TaskID: 42, TaskName: 'Spacecraft travels to midway point of journey',
                    StartDate: new Date('07/22/1969 04:40:00 PM'), EndDate: new Date('07/23/1969 04:00:00 PM'), Predecessor: '41FS'
                },
                {
                    TaskID: 43, TaskName: 'Spacecraft travels to 3/4th point of journey', StartDate: new Date('07/23/1969 04:40:00 PM'),
                    EndDate: new Date('07/24/1969 10:00:00 AM'), Predecessor: '42FS'
                },
                {
                    TaskID: 44, TaskName: 'Crew prepares for splashdown', StartDate: new Date('07/24/1969 11:47:00 AM'),
                    EndDate: new Date('07/24/1969 04:20:00 PM')
                },
                {
                    TaskID: 45, TaskName: 'Command and service modules separates', StartDate: new Date('07/24/1969 04:20:00 PM'),
                    EndDate: new Date('07/24/1969 04:35:00 PM'), Predecessor: '44FS'
                },
                {
                    TaskID: 46, TaskName: 'Command module re-enters the Earth’s atmosphere', StartDate: new Date('07/24/1969 04:35:00 PM'),
                    EndDate: new Date('07/24/1969 04:50:00 PM'), Predecessor: '45FS'
                },
                {
                    TaskID: 47, TaskName: 'Spacecraft splashes near USS hornet', StartDate: new Date('07/24/1969 04:51:00 PM'),
                    EndDate: new Date('07/24/1969 04:51:00 PM')
                },
            ]
        }
    ];
    exports.customizedData = [
        {
            TaskId: 1, TaskName: '90th Academy awards kicks-off',
            StartDate: new Date('03/05/2015 06:00:00 PM'), EndDate: new Date('03/05/2015 06:00:00 PM'), Duration: 0,
        },
        {
            TaskId: 2, TaskName: 'Oscar moments', Predecessor: '1FS', column3: 'Jimmy kimmel hosts the show',
            StartDate: new Date('03/05/2015 06:00:00 PM'), EndDate: new Date('03/05/2015 06:15:00 PM')
        },
        {
            TaskId: 3, TaskName: 'Actor in a supporting role', Predecessor: '2FS',
            StartDate: new Date('03/05/2015 06:16:00 PM'), EndDate: new Date('03/05/2015 06:25:00 PM'),
            Winner: 'Sam Rockwell', Movie: 'Three Billboards Outside Ebbing, Missouri.'
        },
        {
            TaskId: 4, TaskName: 'Hair and makeup', Movie: 'Darkest Hour', Predecessor: '3FS',
            StartDate: new Date('03/05/2015 06:26:00 PM'), EndDate: new Date('03/05/2015 06:32:00 PM')
        },
        {
            TaskId: 5, TaskName: 'Costume design', Winner: 'Mark Bridges', Movie: 'Phantom Thread', Predecessor: '4FS',
            StartDate: new Date('03/05/2015 06:33:00 PM'), EndDate: new Date('03/05/2015 06:40:00 PM')
        },
        {
            TaskId: 6, TaskName: 'Documentary feature', Winner: 'Bryan Fogel', Movie: ' Icarus', Predecessor: '5FS',
            StartDate: new Date('03/05/2015 06:41:00 PM'), EndDate: new Date('03/05/2015 06:58:00 PM')
        },
        {
            TaskId: 7, TaskName: 'Best sound editing and sound mixing', Winner: 'Richard King and Alex Gibson', Movie: 'Dunkirk',
            StartDate: new Date('03/05/2015 06:59:00 PM'), EndDate: new Date('03/05/2015 07:10:00 PM'), Predecessor: '6FS'
        },
        {
            TaskId: 8, TaskName: 'Production design', Movie: 'The Shape of Water', Predecessor: '7FS',
            StartDate: new Date('03/05/2015 07:11:00 PM'), EndDate: new Date('03/05/2015 07:15:00 PM')
        },
        {
            TaskId: 9, TaskName: 'Oscar performance', column3: 'Second performance of the night is "Remember Me" from Coco',
            StartDate: new Date('03/05/2015 07:16:00 PM'), EndDate: new Date('03/05/2015 07:23:00 PM'), Predecessor: '8FS'
        },
        {
            TaskId: 10, TaskName: 'Best foreign language film goes', Movie: 'A Fantastic Woman', Predecessor: '9FS',
            StartDate: new Date('03/05/2015 07:24:00 PM'), EndDate: new Date('03/05/2015 07:29:00 PM')
        },
        {
            TaskId: 11, TaskName: 'Best supporting actress', Winner: 'Allison Janney', Movie: 'I, Tonya',
            StartDate: new Date('03/05/2015 07:30:00 PM'), EndDate: new Date('03/05/2015 07:35:00 PM'), Predecessor: '10FS'
        },
        {
            TaskId: 12, TaskName: 'Best animated short', Winner: 'Kobe Bryant', Movie: 'Dear Basketball',
            StartDate: new Date('03/05/2015 07:36:00 PM'), EndDate: new Date('03/05/2015 07:45:00 PM'), Predecessor: '11FS'
        },
        {
            TaskId: 13, TaskName: 'Award for best animated feature.', Movie: 'Coco', Predecessor: '12FS',
            StartDate: new Date('03/05/2015 07:46:00 PM'), EndDate: new Date('03/05/2015 07:52:00 PM')
        },
        {
            TaskId: 14, TaskName: 'Best visual effects.', Movie: 'Blade Runner 2049', Predecessor: '13FS',
            StartDate: new Date('03/05/2015 07:53:00 PM'), EndDate: new Date('03/05/2015 07:56:00 PM')
        },
        {
            TaskId: 15, TaskName: 'Achievement in film editing', Movie: 'Dunkirk', Predecessor: '14FS',
            StartDate: new Date('03/05/2015 07:57:00 PM'), EndDate: new Date('03/05/2015 07:59:00 PM')
        },
        {
            TaskId: 16, TaskName: 'Oscar moments', column3: 'Jimmy Kimmel surprises moviegoers along with celebrities',
            StartDate: new Date('03/05/2015 08:00:00 PM'), EndDate: new Date('03/05/2015 08:09:00 PM'), Predecessor: '15FS'
        },
        {
            TaskId: 17, TaskName: 'Best documentary short', Movie: 'Heaven is a Traffic Jam on the 405', Predecessor: '16FS',
            StartDate: new Date('03/05/2015 08:10:00 PM'), EndDate: new Date('03/05/2015 08:12:00 PM')
        },
        {
            TaskId: 18, TaskName: 'Best live action short film', Movie: 'The Silent Child', Predecessor: '17FS',
            StartDate: new Date('03/05/2015 08:13:00 PM'), EndDate: new Date('03/05/2015 08:15:00 PM')
        },
        {
            TaskId: 19, TaskName: 'Oscar performance',
            column3: 'Jimmy Kimmel surprCommon and Andra Day performs "Stand Up for Something" by "Marshall"',
            StartDate: new Date('03/05/2015 08:16:00 PM'), EndDate: new Date('03/05/2015 08:25:00 PM'), Predecessor: '18FS'
        },
        {
            TaskId: 20, TaskName: 'Oscar moments',
            column3: 'The Oscars are showcasing the #MeToo and #TimesUp movements with a montage and interviews with actors and filmmakers',
            StartDate: new Date('03/05/2015 08:26:00 PM'), EndDate: new Date('03/05/2015 08:29:00 PM'), Predecessor: '19FS'
        },
        {
            TaskId: 21, TaskName: 'Oscar for best adapted screenplay', Winner: 'James Ivory', Movie: 'Call Me By Your Name',
            StartDate: new Date('03/05/2015 08:30:00 PM'), EndDate: new Date('03/05/2015 08:35:00 PM'), Predecessor: '20FS'
        },
        {
            TaskId: 22, TaskName: 'Oscar for best original screenplay', Winner: 'Jordan Peele', Movie: 'Get Out',
            StartDate: new Date('03/05/2015 08:36:00 PM'), EndDate: new Date('03/05/2015 08:44:00 PM'), Predecessor: '21FS'
        },
        {
            TaskId: 23, TaskName: 'Oscar moments',
            column3: 'Who’s trending on Twitter at the Oscars? Actors Timothée Chalamet, Chadwick Boseman,' +
                'Tom Holland, Lupita Nyong’o and Adam Rippon.',
            StartDate: new Date('03/05/2015 08:40:00 PM'), EndDate: new Date('03/05/2015 08:45:00 PM'), Predecessor: '22FS'
        },
        {
            TaskId: 24, TaskName: 'Best cinematography', Winner: 'Roger A. Deakins', Movie: 'Blade Runner 2049',
            StartDate: new Date('03/05/2015 08:46:00 PM'), EndDate: new Date('03/05/2015 08:48:00 PM'), Predecessor: '23FS'
        },
        {
            TaskId: 25, TaskName: 'Oscar performance',
            column3: 'Keala Settle performs the nominated song "This is Me" from "The Greatest Showman".',
            StartDate: new Date('03/05/2015 08:49:00 PM'), EndDate: new Date('03/05/2015 08:54:00 PM'), Predecessor: '24FS'
        },
        {
            TaskId: 26, TaskName: 'Best original score', Movie: 'The Shape of Water', Predecessor: '25FS',
            StartDate: new Date('03/05/2015 08:55:00 PM'), EndDate: new Date('03/05/2015 08:59:00 PM')
        },
        {
            TaskId: 27, TaskName: 'Award for original song', Winner: 'Remember Me', Movie: 'Coco', Predecessor: '26FS',
            StartDate: new Date('03/05/2015 09:00:00 PM'), EndDate: new Date('03/05/2015 09:07:00 PM')
        },
        {
            TaskId: 28, TaskName: 'Oscar moments', column3: 'Time to pay tribute to those in the cinema world we lost last year',
            StartDate: new Date('03/05/2015 09:05:00 PM'), EndDate: new Date('03/05/2015 09:11:00 PM'), Predecessor: '27FS'
        },
        {
            TaskId: 29, TaskName: 'Oscar for best director', Winner: 'Guillermo del Toro', Movie: 'The Shape of Water',
            StartDate: new Date('03/05/2015 09:12:00 PM'), EndDate: new Date('03/05/2015 09:19:00 PM'), Predecessor: '28FS'
        },
        {
            TaskId: 30, TaskName: 'Best actor in a leading role', Winner: 'Gary Oldman', Movie: 'The Shape of Water',
            StartDate: new Date('03/05/2015 09:20:00 PM'), EndDate: new Date('03/05/2015 09:29:00 PM'), Predecessor: '29FS'
        },
        {
            TaskId: 31, TaskName: 'Best leading actress', Winner: 'Frances McDormand', Movie: 'Three Billboards Outside Ebbing, Missouri',
            StartDate: new Date('03/05/2015 09:30:00 PM'), EndDate: new Date('03/05/2015 09:44:00 PM'), Predecessor: '30FS'
        },
        {
            TaskId: 32, TaskName: 'Oscar for best picture.', Movie: 'The Shape of Water', Predecessor: '31FS',
            StartDate: new Date('03/05/2015 09:45:00 PM'), EndDate: new Date('03/05/2015 10:00:00 PM')
        },
        {
            TaskId: 33, TaskName: '90th Academy awards wind-up', Predecessor: '32FS',
            StartDate: new Date('03/05/2015 10:00:00 PM'), EndDate: new Date('03/05/2015 10:00:00 PM'), Duration: 0
        }
    ];
    exports.projectResources = [
        { resourceId: 1, resourceName: 'Project Manager' },
        { resourceId: 2, resourceName: 'Software Analyst' },
        { resourceId: 3, resourceName: 'Developer' },
        { resourceId: 4, resourceName: 'Testing Engineer' }
    ];
    exports.projectData = [
        {
            taskID: 1,
            taskName: 'Project Schedule',
            startDate: new Date('02/08/2019'),
            endDate: new Date('03/15/2019'),
            subtasks: [
                {
                    taskID: 2,
                    taskName: 'Planning',
                    startDate: new Date('02/08/2019'),
                    endDate: new Date('02/12/2019'),
                    subtasks: [
                        {
                            taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/08/2019'),
                            endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                        },
                        {
                            taskID: 4, taskName: 'Plan budget', startDate: new Date('02/08/2019'),
                            endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                        },
                        {
                            taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/08/2019'),
                            endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                        },
                        {
                            taskID: 6, taskName: 'Planning complete', startDate: new Date('02/10/2019'),
                            endDate: new Date('02/10/2019'), duration: 0, predecessor: '3FS,4FS,5FS'
                        }
                    ]
                }, {
                    taskID: 7,
                    taskName: 'Design',
                    startDate: new Date('02/15/2019'),
                    endDate: new Date('02/19/2019'),
                    subtasks: [
                        {
                            taskID: 8, taskName: 'Software Specification', startDate: new Date('02/15/2019'),
                            endDate: new Date('02/17/2019'), duration: 3, progress: '60', predecessor: '6FS', resourceId: [2]
                        },
                        {
                            taskID: 9, taskName: 'Develop prototype', startDate: new Date('02/15/2019'),
                            endDate: new Date('02/17/2019'), duration: 3, progress: '100', predecessor: '6FS', resourceId: [3]
                        },
                        {
                            taskID: 10, taskName: 'Get approval from customer', startDate: new Date('02/18/2019'),
                            endDate: new Date('02/19/2019'), duration: 2, progress: '100', predecessor: '9FS', resourceId: [1]
                        },
                        {
                            taskID: 11, taskName: 'Design complete', startDate: new Date('02/17/2019'),
                            endDate: new Date('02/17/2019'), duration: 0, predecessor: '10FS'
                        }
                    ]
                },
                {
                    taskID: 12,
                    taskName: 'Implementation Phase',
                    startDate: new Date('02/25/2019'),
                    endDate: new Date('03/05/2019'),
                    subtasks: [
                        {
                            taskID: 13,
                            taskName: 'Phase 1',
                            startDate: new Date('02/25/2019'),
                            endDate: new Date('03/07/2019'),
                            subtasks: [{
                                    taskID: 14,
                                    taskName: 'Implementation Module 1',
                                    startDate: new Date('02/25/2019'),
                                    endDate: new Date('03/07/2019'),
                                    subtasks: [
                                        {
                                            taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', predecessor: '11FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', predecessor: '11FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 17, taskName: 'Testing', startDate: new Date('02/25/2019'),
                                            endDate: new Date('02/26/2019'), duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: [4]
                                        },
                                        {
                                            taskID: 18, taskName: 'Bug fix', startDate: new Date('03/01/2019'),
                                            endDate: new Date('03/02/2019'), duration: 2, progress: '0', predecessor: '17FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 19, taskName: 'Customer review meeting', startDate: new Date('03/03/2019'),
                                            endDate: new Date('03/07/2019'), duration: 2, progress: '0', predecessor: '18FS', resourceId: [1]
                                        },
                                        {
                                            taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('03/05/2019'),
                                            endDate: new Date('03/05/2019'), duration: 0, predecessor: '19FS'
                                        }
                                    ]
                                }]
                        },
                        {
                            taskID: 21,
                            taskName: 'Phase 2',
                            startDate: new Date('02/25/2019'),
                            endDate: new Date('03/05/2019'),
                            subtasks: [{
                                    taskID: 22,
                                    taskName: 'Implementation Module 2',
                                    startDate: new Date('02/25/2019'),
                                    endDate: new Date('03/05/2019'),
                                    subtasks: [
                                        {
                                            taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/25/2019'), duration: 4, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/25/2019'), duration: 4, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 25, taskName: 'Testing', startDate: new Date('02/26/2019'),
                                            endDate: new Date('03/01/2019'), duration: 2, progress: '0', predecessor: '23FS,24FS', resourceId: [4]
                                        },
                                        {
                                            taskID: 26, taskName: 'Bug fix', startDate: new Date('03/02/2019'),
                                            endDate: new Date('03/03/2019'), duration: 2, progress: '0', predecessor: '25FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 27, taskName: 'Customer review meeting', startDate: new Date('03/07/2019'),
                                            endDate: new Date('03/05/2019'), duration: 2, progress: '0', predecessor: '26FS', resourceId: [1]
                                        },
                                        {
                                            taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('03/03/2019'),
                                            endDate: new Date('03/03/2019'), duration: 0, predecessor: '27FS'
                                        }
                                    ]
                                }]
                        },
                        {
                            taskID: 29,
                            taskName: 'Phase 3',
                            startDate: new Date('02/25/2019'),
                            endDate: new Date('03/07/2019'),
                            subtasks: [{
                                    taskID: 30,
                                    taskName: 'Implementation Module 3',
                                    startDate: new Date('02/25/2019'),
                                    endDate: new Date('03/07/2019'),
                                    subtasks: [
                                        {
                                            taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 33, taskName: 'Testing', startDate: new Date('02/25/2019'), endDate: new Date('02/26/2019'),
                                            duration: 2, progress: '0', predecessor: '31FS,32FS', resourceId: [4]
                                        },
                                        {
                                            taskID: 34, taskName: 'Bug fix', startDate: new Date('03/01/2019'), endDate: new Date('03/05/2019'),
                                            duration: 2, progress: '0', predecessor: '33FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 35, taskName: 'Customer review meeting', startDate: new Date('03/03/2019'),
                                            endDate: new Date('03/04/2019'), duration: 2, progress: '0', predecessor: '34FS',
                                            resourceId: [1]
                                        },
                                        {
                                            taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('03/02/2019'),
                                            endDate: new Date('03/02/2019'), duration: 0, predecessor: '35FS'
                                        },
                                    ]
                                }]
                        }
                    ]
                },
                {
                    taskID: 37, taskName: 'Integration', startDate: new Date('03/08/2019'), endDate: new Date('03/10/2019'), duration: 3,
                    progress: '0', predecessor: '20FS,28FS,36FS', resourceId: [3]
                },
                {
                    taskID: 38, taskName: 'Final Testing', startDate: new Date('03/11/2019'), endDate: new Date('03/12/2019'), duration: 2,
                    progress: '0', predecessor: '37FS', resourceId: [4]
                },
                {
                    taskID: 39, taskName: 'Final Delivery', startDate: new Date('03/10/2019'), endDate: new Date('03/10/2019'),
                    duration: 0, predecessor: '38FS'
                }
            ]
        }
    ];
    exports.baselineData = [
        {
            TaskId: 1, TaskName: 'Receive vehicle and create job card', BaselineStartDate: new Date('03/05/2018 10:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 10:00:00 AM'), StartDate: new Date('03/05/2018 10:00:00 AM'),
            EndDate: new Date('03/05/2018 10:00:00 AM')
        },
        {
            TaskId: 2, TaskName: 'Allot mechanic and send vehicle to service bay', BaselineStartDate: new Date('03/05/2018 10:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 10:15:00 AM'), StartDate: new Date('03/05/2018 10:15:00 AM'),
            EndDate: new Date('03/05/2018 10:20:00 AM')
        },
        {
            TaskId: 3, TaskName: 'Change the Receive vehicle and create job cardengine oil',
            BaselineStartDate: new Date('03/05/2018 10:15:00 AM'),
            BaselineEndDate: new Date('03/05/2018 10:45:00 AM'), StartDate: new Date('03/05/2018 10:20:00 AM'),
            EndDate: new Date('03/05/2018 10:35:00 AM')
        },
        {
            TaskId: 4, TaskName: 'Replace the oil filter', BaselineStartDate: new Date('03/05/2018 10:45:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:15:00 AM'), StartDate: new Date('03/05/2018 10:35:00 AM'),
            EndDate: new Date('03/05/2018 11:00:00 AM')
        },
        {
            TaskId: 5, TaskName: 'Replace the air filter', BaselineStartDate: new Date('03/05/2018 10:45:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:15:00 AM'), StartDate: new Date('03/05/2018 10:35:00 AM'),
            EndDate: new Date('03/05/2018 11:00:00 AM')
        },
        {
            TaskId: 6, TaskName: 'Replace the fuel filter', BaselineStartDate: new Date('03/05/2018 11:15:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:25:00 AM'), StartDate: new Date('03/05/2018 11:00:00 AM'),
            EndDate: new Date('03/05/2018 11:20:00 AM')
        },
        {
            TaskId: 7, TaskName: 'Replace the cabin filter', BaselineStartDate: new Date('03/05/2018 11:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:20:00 AM'), StartDate: new Date('03/05/2018 11:00:00 AM'),
            EndDate: new Date('03/05/2018 11:25:00 AM')
        },
        {
            TaskId: 8, TaskName: 'Replace the spark plugs', BaselineStartDate: new Date('03/05/2018 11:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:30:00 AM'), StartDate: new Date('03/05/2018 11:25:00 AM'),
            EndDate: new Date('03/05/2018 11:45:00 AM')
        },
        {
            TaskId: 9, TaskName: 'Check level and refill brake fluid/clutch fluid', BaselineStartDate: new Date('03/05/2018 11:20:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:40:00 AM'), StartDate: new Date('03/05/2018 11:30:00 AM'),
            EndDate: new Date('03/05/2018 11:50:00 AM')
        },
        {
            TaskId: 10, TaskName: 'Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out.',
            BaselineStartDate: new Date('03/05/2018 11:40:00 AM'),
            BaselineEndDate: new Date('03/05/2018 12:00:00 PM'), StartDate: new Date('03/05/2018 11:50:00 AM'),
            EndDate: new Date('03/05/2018 12:20:00 PM')
        },
        {
            TaskId: 11, TaskName: 'Check level and refill power steering fluid', BaselineStartDate: new Date('03/05/2018 11:40:00 AM'),
            BaselineEndDate: new Date('03/05/2018 12:00:00 PM'), StartDate: new Date('03/05/2018 11:50:00 AM'),
            EndDate: new Date('03/05/2018 12:15:00 PM')
        },
        {
            TaskId: 12, TaskName: 'Check level and refill Automatic/Manual Transmission Fluid',
            BaselineStartDate: new Date('03/05/2018 12:00:00 PM'),
            BaselineEndDate: new Date('03/05/2018 12:35:00 PM'), StartDate: new Date('03/05/2018 11:50:00 AM'),
            EndDate: new Date('03/05/2018 12:20:00 PM')
        },
        {
            TaskId: 13, TaskName: 'Grease and lubricate components', BaselineStartDate: new Date('03/05/2018 12:20:00 PM'),
            BaselineEndDate: new Date('03/05/2018 12:35:00 PM'), StartDate: new Date('03/05/2018 12:20:00 PM'),
            EndDate: new Date('03/05/2018 12:45:00 PM')
        },
        {
            TaskId: 14, TaskName: 'Inspect and replace the timing belt or timing chain if needed',
            BaselineStartDate: new Date('03/05/2018 12:35:00 PM'),
            BaselineEndDate: new Date('03/05/2018 1:00:00 PM'), StartDate: new Date('03/05/2018 12:45:00 PM'),
            EndDate: new Date('03/05/2018 1:00:00 PM')
        },
        {
            TaskId: 15, TaskName: 'Wheel Balancing', BaselineStartDate: new Date('03/05/2018 1:00:00 PM'),
            BaselineEndDate: new Date('03/05/2018 1:20:00 PM'), StartDate: new Date('03/05/2018 1:00:00 PM'),
            EndDate: new Date('03/05/2018 1:45:00 PM')
        },
        {
            TaskId: 16, TaskName: 'Wheel Alignment', BaselineStartDate: new Date('03/05/2018 1:20:00 PM'),
            BaselineEndDate: new Date('03/05/2018 1:45:00 PM'), StartDate: new Date('03/05/2018 1:45:00 PM'),
            EndDate: new Date('03/05/2018 2:45:00 PM')
        },
        {
            TaskId: 17, TaskName: 'Check for proper operation of all lights, wipers etc.', BaselineStartDate: new Date('03/05/2018 1:50:00 PM'),
            BaselineEndDate: new Date('03/05/2018 02:30:00 PM'), StartDate: new Date('03/05/2018 02:45:00 PM'),
            EndDate: new Date('03/05/2018 03:30:00 PM')
        },
        {
            TaskId: 18, TaskName: 'Check for any Error codes in the ECU and take corrective action.',
            BaselineStartDate: new Date('03/05/2018 2:30:00 PM'),
            BaselineEndDate: new Date('03/05/2018 3:30:00 PM'), StartDate: new Date('03/05/2018 03:30:00 PM'),
            EndDate: new Date('03/05/2018 04:15:00 PM')
        },
        {
            TaskId: 19, TaskName: 'Use scan tool read trouble code', BaselineStartDate: new Date('03/05/2018 03:30:00 PM'),
            BaselineEndDate: new Date('03/05/2018 04:45:00 PM'), StartDate: new Date('03/05/2018 04:15:00 PM'),
            EndDate: new Date('03/05/2018 04:45:00 PM')
        },
        {
            TaskId: 20, TaskName: 'Exterior washing', BaselineStartDate: new Date('03/05/2018 04:45:00 PM'),
            BaselineEndDate: new Date('03/05/2018 05:15:00 PM'), StartDate: new Date('03/05/2018 04:45:00 PM'),
            EndDate: new Date('03/05/2018 05:30:00 PM')
        },
        {
            TaskId: 21, TaskName: 'Interior vacuuming', BaselineStartDate: new Date('03/05/2018 05:15:00 PM'),
            BaselineEndDate: new Date('03/05/2018 05:45:00 PM'), StartDate: new Date('03/05/2018 05:30:00 PM'),
            EndDate: new Date('03/05/2018 06:00:00 PM')
        },
        {
            TaskId: 22, TaskName: 'Final service inspection', BaselineStartDate: new Date('03/05/2018 05:45:00 PM'),
            BaselineEndDate: new Date('03/05/2018 06:00:00 PM'), StartDate: new Date('03/05/2018 06:00:00 PM'),
            EndDate: new Date('03/05/2018 06:30:00 PM')
        },
        {
            TaskId: 23, TaskName: 'Vehicle handover', BaselineStartDate: new Date('03/05/2018 06:00:00 PM'),
            BaselineEndDate: new Date('03/05/2018 06:00:00 PM'), StartDate: new Date('03/05/2018 06:30:00 PM'),
            EndDate: new Date('03/05/2018 06:30:00 PM')
        }
    ];
});

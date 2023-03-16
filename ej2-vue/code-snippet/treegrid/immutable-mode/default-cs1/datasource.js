define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sampleData = [
        {
            taskID: 1000,
            taskName: 'Phase 2',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/28/2017'),
            priority: 'High',
            approved: false,
            duration: 12,
            progress: 60,
            subtasks: [{
                    taskID: 1001,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
                    subtasks: [
                        { taskID: 1002, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 1003, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 1004, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 1005, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 1006, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 1007, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false }
                    ]
                }]
        }
    ];

    exports.sampleData2 = [];
    exports.dataSource1 = function() {
    for (var i = 1; i < 500; i++) {
        exports.sampleData2.push({
            taskID: i,
            taskName: 'Implementation Phase',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'Normal',
            approved: false,
            duration: 11,
            subtasks: [
                {
                    taskID: ++i,
                    taskName: 'Phase 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 12,
                    subtasks: [{
                            taskID: ++i,
                            taskName: 'Implementation Module 2',
                            startDate: new Date('02/17/2017'),
                            endDate: new Date('02/28/2017'),
                            priority: 'Critical',
                            approved: false,
                            duration: 12
                        }]
                }
            ]
        });
    }
}

});

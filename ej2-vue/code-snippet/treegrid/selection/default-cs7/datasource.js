    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NUM_ROOTS = 60;
    var CHILDREN_PER_ROOT = 8;
    var TOTAL_RECORDS = NUM_ROOTS + NUM_ROOTS * CHILDREN_PER_ROOT;
    console.log(`Generating ${TOTAL_RECORDS} records (last 2 years)`);
    var employees = [
        'Nancy Davolio', 'Andrew Fuller', 'Janet Leverling', 'Margaret Peacock', 'Steven Buchanan',
        'Michael Suyama', 'Robert King', 'Anne Dodsworth', 'John Heart', 'Robert Reagan',
        'Wally Hobbs', 'Arnie Schwartz', 'Stu Pizaro', 'Sandra Johnson', 'Karen Goodson',
        'Hannah Brookly', 'Ed Holmes', 'Victor Norris', 'Maggie Boxter', 'Samantha Bright',
        'Robin Cosworth', 'Samantha Piper', 'Clark Morgan', 'Brad Farkus', 'Taylor Riley',
        'Brett Wade', 'Cynthia Stanwick', 'Greta Sims', 'Olivia Peyton'
    ];
    var priorities = ['Low', 'Normal', 'High', 'Urgent'];
    var progressStates = ['Not Started', 'In Progress', 'Completed'];
    var rootTasks = [
        'Planning Phase', 'Design Sprint', 'Development Cycle', 'Testing & QA', 'Deployment Rollout',
        'Marketing Campaign', 'Sales Pipeline', 'Customer Support', 'Content Strategy', 'Product Launch',
        'Budget Review', 'Team Training', 'Compliance Audit', 'Vendor Negotiation', 'Performance Review',
        'Infrastructure Upgrade', 'Security Assessment', 'User Feedback Analysis', 'Analytics Dashboard',
        'API Integration', 'Mobile App Update', 'Backend Optimization', 'Frontend Redesign',
        'Database Migration', 'Cloud Migration', 'DevOps Pipeline', 'Quality Assurance', 'Documentation Update',
        'Training Materials', 'Onboarding Process', 'Offboarding Process', 'HR Policy Review',
        'Finance Reporting', 'Legal Compliance', 'Risk Management', 'Crisis Response Plan',
        'Innovation Workshop', 'R&D Project', 'Prototype Development', 'Market Research',
        'Competitor Analysis', 'SWOT Analysis', 'Strategic Planning', 'Goal Setting', 'KPI Definition',
        'Quarterly Review', 'Annual Audit', 'Succession Planning', 'Talent Acquisition'
    ];
    var childTasks = [
        'Define Scope', 'Gather Requirements', 'Wireframe Design', 'Code Implementation', 'Unit Testing',
        'Integration Testing', 'Bug Fixes', 'User Acceptance', 'Deploy to Staging', 'Go-Live Prep',
        'Post-Launch Review', 'Metrics Analysis', 'Stakeholder Meeting', 'Resource Allocation',
        'Risk Assessment', 'Budget Approval', 'Timeline Update', 'Progress Report', 'Feedback Collection',
        'Revision Cycle', 'Final Approval', 'Documentation', 'Training Session', 'Handover Meeting'
    ];
    var START_DATE = new Date('2023-11-10T00:00:00');
    var END_DATE = new Date('2025-11-10T00:00:00');
    function randomDate(start, end) {
        var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return d.toISOString().split('T')[0];
    }
    export var taskData = [];
    let id = 1;
    for (let i = 0; i < NUM_ROOTS; i++) {
        var start = randomDate(START_DATE, END_DATE);
        var due = randomDate(new Date(start), END_DATE);
        var state = progressStates[Math.floor(Math.random() * progressStates.length)];
        taskData.push({
            TaskID: id,
            ParentID: null,
            Task: rootTasks[i % rootTasks.length] + (i >= rootTasks.length ? ` ${i + 1}` : ''),
            AssignedTo: employees[Math.floor(Math.random() * employees.length)],
            StartDate: start,
            DueDate: due,
            Priority: priorities[Math.floor(Math.random() * priorities.length)],
            Progress: state,
            Status: state === 'Completed' ? 100 : (state === 'In Progress' ? 50 : 0)
        });
        var rootId = id;
        id++;
        for (let c = 0; c < CHILDREN_PER_ROOT; c++) {
            var cStart = randomDate(new Date(start), new Date(due));
            var cDue = randomDate(new Date(cStart), new Date(due));
            var cState = progressStates[Math.floor(Math.random() * progressStates.length)];
            taskData.push({
                TaskID: id,
                ParentID: rootId,
                Task: childTasks[c % childTasks.length] + (c >= childTasks.length ? ` ${c + 1}` : ''),
                AssignedTo: employees[Math.floor(Math.random() * employees.length)],
                StartDate: cStart,
                DueDate: cDue,
                Priority: priorities[Math.floor(Math.random() * priorities.length)],
                Progress: cState,
                Status: cState === 'Completed' ? 100 : (cState === 'In Progress' ? 50 : 0)
            });
            id++;
        }
    }

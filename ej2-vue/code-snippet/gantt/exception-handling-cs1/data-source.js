define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.editingData = [
        { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction', ParentID: 1 },
        { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2', resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.From an engineer or company specializing in soil testing', ParentID: 1 },
        { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, ParentID: 1 },

        { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '4', Progress: 30, resources: 4, info: 'Develop floor plans and obtain a materials list for estimations', ParentID: 5 },
        { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '6', resources: [4, 8], info: '', ParentID: 5 },
        { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '7', resources: [12, 5], info: '', ParentID: 5 },

        { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30, resources: [12], info: 'If required obtain approval from HOA (homeowners association) or ARC (architectural review committee)', ParentID: null },

        { TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9', ParentID: null },

        { TaskID: 11, TaskName: 'Site Work', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 12, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '9', resources: [6, 7], info: 'Clear the building site (demolition of existing home if necessary)', ParentID: 11 },
        { TaskID: 13, TaskName: 'Install temporary power service', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '12', resources: [6, 7], info: '', ParentID: 11 },

        { TaskID: 14, TaskName: 'Foundation', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 15, TaskName: 'Excavate for foundations', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '13', resources: [2, 8], info: 'Excavate the foundation and dig footers (Scope of work is dependent of foundation designed by engineer)', ParentID: 14 },
        { TaskID: 16, TaskName: 'Dig footer', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '15FF', resources: [8], info: '', ParentID: 14 },
        { TaskID: 17, TaskName: 'Install plumbing grounds', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '15', resources: [9], info: '', ParentID: 14 },
        { TaskID: 18, TaskName: 'Pour a foundation and footer with concrete', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '17', resources: [8, 9, 10], info: '', ParentID: 14 },
        { TaskID: 19, TaskName: 'Cure basement walls', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '18', resources: [10], info: '', ParentID: 14 },

        { TaskID: 20, TaskName: 'Framing', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 21, TaskName: 'Add load-bearing structure', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '19', resources: [4, 5], info: 'Build the main load-bearing structure out of thick pieces of wood andpossibly metal I-beams for large spans with few supports', ParentID: 20 },
        { TaskID: 22, TaskName: 'Install floor joists', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '21', resources: [2, 3], info: 'Add floor and ceiling joists and install subfloor panels', ParentID: 20 },
        { TaskID: 23, TaskName: 'Add ceiling joists', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '22SS', resources: [5], info: '', ParentID: 20 },
        { TaskID: 24, TaskName: 'Install subfloor panels', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '23', resources: [8, 9], ParentID: 20 },
        { TaskID: 25, TaskName: 'Frame floor walls', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '24', resources: [10], info: '', ParentID: 20 },
        { TaskID: 26, TaskName: 'Frame floor decking', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '25SS', resources: [4, 8], info: '', ParentID: 20 },

        { TaskID: 27, TaskName: 'Exterior finishing', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 28, TaskName: 'Cover outer walls and roof in OSB', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '26', resources: [2, 8], info: 'Cover outer walls and roof in OSB or plywood and a water-resistive barrier', ParentID: 27 },
        { TaskID: 29, TaskName: 'Add water resistive barrier', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '28', resources: [1, 10], info: 'Cover the walls with siding, typically vinyl, wood, or brick veneer but possibly stone or other materials', ParentID: 27 },
        { TaskID: 30, TaskName: 'Install roof shingles', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '29', resources: [8, 9], info: 'Install roof shingles or other covering for flat roof', ParentID: 27 },
        { TaskID: 31, TaskName: 'Install windows', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '29', resources: 7, ParentID: 27 },

        { TaskID: 32, TaskName: 'Utilities', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), info: 'Building inspector visits if necessary to approve utilities and framing', ParentID: null },

        { TaskID: 33, TaskName: 'Install internal plumbing', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '26', resources: [1, 10], ParentID: 32 },
        { TaskID: 34, TaskName: 'Install HVAC', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '33', resources: [4, 9], info: 'Add internal plumbing, HVAC, electrical, and natural gas utilities', ParentID: 32 },
        { TaskID: 35, TaskName: 'Electrical utilities', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '34', ParentID: 32 },
        { TaskID: 36, TaskName: 'Natural gas utilities', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '35', resources: 11, ParentID: 32 },
        { TaskID: 37, TaskName: 'Install bathroom fixtures', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '35', resources: [3, 7], ParentID: 32 },

        { TaskID: 38, TaskName: 'Interior finsihing', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 39, TaskName: 'Install insulation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '37', resources: [1, 8], info: 'Frame interior walls with wooden 2×4s', ParentID: 38 },
        { TaskID: 40, TaskName: 'Install  drywall panels', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '39', resources: 5, info: 'Install insulation and interior drywall panels (cementboard for wet areas) and to complete walls and ceilings', ParentID: 38 },
        { TaskID: 41, TaskName: 'Spackle', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '40', resources: 10, ParentID: 38 },
        { TaskID: 42, TaskName: 'Apply primer', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '41', resources: [10, 11], ParentID: 38 },
        { TaskID: 43, TaskName: 'Paint wall and ceilings', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '42', resources: [2, 9], ParentID: 38 },
        { TaskID: 44, TaskName: 'Install modular kitchen', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '43', resources: [5, 7], ParentID: 38 },

        { TaskID: 45, TaskName: 'Flooring', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 46, TaskName: 'Tile kitchen, bathroom and entry walls', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '44', resources: [4, 9, 3], info: 'Additional tiling on top of cementboard for wet areas, such as the bathroom and kitchen backsplash', ParentID: 45 },
        { TaskID: 47, TaskName: 'Tile floor', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '46SS', resources: [2, 8], info: 'Installation of final floor covering, such as floor tile, carpet, or wood flooring', ParentID: 45 },

        { TaskID: 48, TaskName: 'Final Acceptance', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentID: null },

        { TaskID: 49, TaskName: 'Final inspection', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '47', resources: 12, info: 'Ensure the contracted items', ParentID: 48 },
        { TaskID: 50, TaskName: 'Cleanup for occupancy', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '49', resources: [1, 5], info: 'Installation of major appliances', ParentID: 48 },
        { TaskID: 51, TaskName: 'Property Handover', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '50', info: 'Ending the contract', ParentID: 48 }
    ];
});

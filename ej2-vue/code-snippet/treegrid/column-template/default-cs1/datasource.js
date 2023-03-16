define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sampleData = [
        {
            taskID: 1,
            taskName: 'Planning',
            startDate: new Date('02/03/2017'),
            endDate: new Date('02/07/2017'),
            progress: 100,
            duration: 5,
            priority: 'Normal',
            approved: false,
            subtasks: [
                { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
                { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
                { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
                { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
            ]
        },
        {
            taskID: 6,
            taskName: 'Design',
            startDate: new Date('02/10/2017'),
            endDate: new Date('02/14/2017'),
            duration: 3,
            progress: 86,
            priority: 'High',
            approved: false,
            subtasks: [
                { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
                { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
                { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
                { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
                { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
            ]
        },
        {
            taskID: 12,
            taskName: 'Implementation Phase',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'Normal',
            approved: false,
            duration: 11,
            subtasks: [
                {
                    taskID: 13,
                    taskName: 'Phase 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    subtasks: [{
                            taskID: 14,
                            taskName: 'Implementation Module 1',
                            startDate: new Date('02/17/2017'),
                            endDate: new Date('02/27/2017'),
                            priority: 'Normal',
                            duration: 11,
                            approved: false,
                            subtasks: [
                                { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                                { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                                { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                                { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                                { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                                { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }
                            ]
                        }]
                },
                {
                    taskID: 21,
                    taskName: 'Phase 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 12,
                    subtasks: [{
                            taskID: 22,
                            taskName: 'Implementation Module 2',
                            startDate: new Date('02/17/2017'),
                            endDate: new Date('02/28/2017'),
                            priority: 'Critical',
                            approved: false,
                            duration: 12,
                            subtasks: [
                                { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                                { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                                { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                                { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                                { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                                { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, priority: 'Normal', approved: false }
                            ]
                        }]
                },
                {
                    taskID: 29,
                    taskName: 'Phase 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    approved: false,
                    duration: 11,
                    subtasks: [{
                            taskID: 30,
                            taskName: 'Implementation Module 3',
                            startDate: new Date('02/17/2017'),
                            endDate: new Date('02/27/2017'),
                            priority: 'High',
                            approved: false,
                            duration: 11,
                            subtasks: [
                                { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                                { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                                { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                                { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                                { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                                { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },
                            ]
                        }]
                }
            ]
        }
    ];
    exports.formatData =  [
        {
            orderID: '1',
            orderName: 'Order 1',
            orderDate: new Date('02/03/2017'),
            shippedDate: new Date('10/03/2018'),
            units: 1395,
            unitPrice: 47,
            price: 133.66,
            Category: 'seafood',
            subtasks: [
                { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: 235,
                orderDate: new Date('02/03/2017'), shippedDate: new Date('05/13/2018'), unitPrice: 12, price: 28.20 },
                { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: 324,
                orderDate: new Date('05/03/2017'), shippedDate: new Date('05/22/2018'), unitPrice: 8, price: 25.92 },
                { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: 488,
                orderDate: new Date('10/03/2017'), shippedDate: new Date('10/14/2018'), unitPrice: 11, price: 52.68 },
                { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: 125,
                orderDate: new Date('08/03/2017'), shippedDate: new Date('08/03/2018'), unitPrice: 9, price: 11.25 },
                { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: 223,
                orderDate: new Date('09/03/2017'), shippedDate: new Date('09/03/2018'), unitPrice: 7, price: 15.61 }
             ]
        },
        {
            orderID: '2',
            orderName: 'Order 2',
            orderDate: new Date('05/03/2017'),
            shippedDate: new Date('03/15/2018'),
            units: 1944,
            unitPrice: 58,
            price: 212.33,
            Category: 'seafood',
            subtasks: [
                { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
                orderDate: new Date('03/05/2017'), shippedDate: new Date('03/15/2018'), units: 278, unitPrice: 15, price: 41.70 },
                { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: 560,
                orderDate: new Date('07/05/2017'), shippedDate: new Date('03/15/2018'), unitPrice: 7, price: 39.20 },
                { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: 12,
                orderDate: new Date('09/03/2017'), shippedDate: new Date('09/19/2018'), price: 38.76 },
                { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: 370, unitPrice: 15,
                orderDate: new Date('11/03/2017'), shippedDate: new Date('11/13/2018'), price: 55.50 },
                { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: 413, unitPrice: 9,
                orderDate: new Date('10/23/2017'), shippedDate: new Date('10/23/2018'), price: 37.17 }
            ]
        },
        {
            orderID: '3',
            orderName: 'Order 3',
            orderDate: new Date('03/10/2017'),
            shippedDate: new Date('03/20/2018'),
            units: 1120,
            unitPrice: 33,
            price: 108.80,
            Category: 'seafood',
            subtasks: [
                { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
                orderDate: new Date('08/03/2017'), shippedDate: new Date('03/18/2018'), units: 542, unitPrice: 6, price: 32.52 },
                { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
                orderDate: new Date('03/10/2017'), shippedDate: new Date('03/20/2018'), units: 324, unitPrice: 11, price: 35.64 },
                { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: 254,
                orderDate: new Date('03/02/2017'), shippedDate: new Date('03/22/2018'), unitPrice: 16, price: 40.64 }
            ]
        }
    
    ];
    exports.headerData = [
        {
            taskID: 1,
            taskName: 'Planning',
            startDate: new Date('02/03/2017'),
            endDate: new Date('02/07/2017'),
            resourceId: '8',
            duration: 5,
            progress: '100',
            subtasks: [
                { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                    endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '2' },
                { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                    endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
                { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                    endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
                { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                    endDate: new Date('02/07/2017'), duration: 0, progress: '100', resourceId: '7' }
            ]
        },
         {
             taskID: 6,
             taskName: 'Design',
             startDate: new Date('02/10/2017'),
             endDate: new Date('02/14/2017'),
             resourceId: '1',
             progress: '60',
             duration: 3,
             subtasks: [
                 { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                    endDate: new Date('02/12/2017'), duration: 3, progress: '60', predecessor: '6FS', resourceId: '2' },
                 { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                    endDate: new Date('02/12/2017'), duration: 3, progress: '100', predecessor: '6FS', resourceId: '3' },
                 { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                    endDate: new Date('02/14/2017'), duration: 2, progress: '100', predecessor: '9FS', resourceId: '1' },
                 { taskID: 10, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                    endDate: new Date('02/14/2017'), duration: 0, progress: '100', resourceId: '9' }
             ]
         },
         {
             taskID: 11,
             taskName: 'Implementation Phase',
             startDate: new Date('02/17/2017'),
             endDate: new Date('02/27/2017'),
             resourceId: '5',
             progress: '80',
             duration: 5,
             subtasks: [
                 {
                     taskID: 12,
                     taskName: 'Phase',
                     startDate: new Date('02/17/2017'),
                     endDate: new Date('02/27/2017'),
                     resourceId: '7',
                     duration: 5,
                     progress: '50',
                     subtasks: [{
                         taskID: 13,
                         taskName: 'Implementation Module',
                         resourceId: '3',
                         progress: '50',
                         duration: 3,
                         startDate: new Date('02/17/2017'),
                         endDate: new Date('02/27/2017'),
                         subtasks: [
                            { taskID: 14, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                            { taskID: 15, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                            { taskID: 16, taskName: 'Testing', startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'), duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: '4' },
                            { taskID: 17, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'), duration: 2, progress: '0', predecessor: '17FS', resourceId: '4' },
                            { taskID: 18, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'), duration: 2, progress: '0', predecessor: '18FS', resourceId: '1' },
                            { taskID: 19, taskName: 'Phase complete', startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'), duration: 0, predecessor: '19FS', progress: '0', resourceId: '9' }
                         ]
                     }]
                 }
             ]
         }
    ];
    exports.stackedData =  [
        {
            orderID: '1',
            orderName: 'Order 1',
            orderDate: new Date('02/03/2017'),
            shippedDate: new Date('02/09/2017'),
            units: '1395',
            unitPrice: '47.00',
            price: 65565,
            shipMentCategory: 'Seafood',
            subtasks: [
                { orderID: '1.1', orderName: 'Mackerel', shipMentCategory: 'Frozen seafood', units: '35',
                    orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: '12.56', price: 439.6},
                { orderID: '1.2', orderName: 'Yellowfin Tuna', shipMentCategory: 'Frozen seafood', units: '324',
                    orderDate: new Date('05/03/2017'), shippedDate: new Date('05/10/2017'), unitPrice: '28.26', price: 9156.24 },
                { orderID: '1.3', orderName: 'Herrings', shipMentCategory: 'Frozen seafood', units: '48',
                    orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: '11.35', price: 544.8 },
                { orderID: '1.4', orderName: 'Preserved Olives', shipMentCategory: 'Edible', units: '125',
                   orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: '29.23', price: 3653.75},
                { orderID: '1.5', orderName: 'Sweet corn Frozen', shipMentCategory: 'Edible', units: '223',
                    orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2017'), unitPrice: '47.17', price: 10518.91 }
    
             ]
        },
        {
            orderID: '2',
            orderName: 'Order 2',
            orderDate: new Date('01/10/2018'),
            shippedDate: new Date('01/16/2018'),
            units: '1944',
            unitPrice: '58.45',
            price: 113626.8,
            shipMentCategory: 'Seafood',
            subtasks: [
                { orderID: '2.1', orderName: 'Tilapias', shipMentCategory: 'Frozen Seafood',
                orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: '278', unitPrice: '15.25', price: 4239.5 },
                { orderID: '2.2', orderName: 'White Shrimp', shipMentCategory: 'Frozen seafood', units: '560',
                orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: '72.45', price: 36225 },
                { orderID: '2.3', orderName: 'Fresh Cheese', shipMentCategory: 'Dairy', units: '323', unitPrice: 12.45,
                orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: 4021.35 },
                { orderID: '2.4', orderName: 'Blue Veined Cheese', shipMentCategory: 'Dairy', units: '370', unitPrice: 15.36,
                orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: 5683.2 },
                { orderID: '2.5', orderName: 'Butter', shipMentCategory: 'Dairy', units: '413', unitPrice: '19.35',
                orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: 7991.55}
            ]
        },
        {
            orderID: '3',
            orderName: 'Order 3',
            orderDate: new Date('09/10/2018'),
            shippedDate: new Date('09/20/2018'),
            units: '1120',
            unitPrice: '33.34',
            price: 37340.8,
            shipMentCategory: 'Seafood',
            subtasks: [
                { orderID: '3.1', orderName: 'Lead glassware', shipMentCategory: 'Solid crystals',
                    orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: '542', unitPrice: '46.45', price: 25175.9 },
                { orderID: '3.2', orderName: 'Pharmaceutical', shipMentCategory: 'Solid crystals',
                    orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: '324', unitPrice: '11.56', price: 3745.44 },
                { orderID: '3.3', orderName: 'Glass beads', shipMentCategory: 'Solid crystals', units: '254',
                    orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: '16.25', price: 4127.5 }
            ]
        }
    ];
    exports.textData = [{
        'Name': 'Robert King',
        'FullName': 'RobertKing',
        'Designation': 'Chief Executive Officer',
        'EmployeeID': '1',
        'EmpID': 'EMP001',
        'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
        'Contact': '(206) 555-9857',
        'Country': 'USA',
        'DOB': new Date('2/15/1963'),
    
        'Children': [{
            'Name': 'David william',
            'FullName': 'DavidWilliam',
            'Designation': 'Vice President',
            'EmployeeID': '2',
            'EmpID': 'EMP004',
            'Address': '722 Moss Bay Blvd., Kirkland',
            'Country': 'USA',
            'Contact': '(206) 555-3412',
            'DOB': new Date('5/20/1971'),
    
    
            'Children': [{
                'Name': 'Nancy Davolio',
                'FullName': 'NancyDavolio',
                'Designation': 'Marketing Executive',
                'EmployeeID': '3',
                'EmpID': 'EMP035',
                'Address': '4110 Old Redmond Rd., Redmond',
                'Country': 'USA',
                'Contact': '(206) 555-8122',
                'DOB': new Date('3/19/1966'),
                'Children': [
                    {
                        'Name': 'Andrew Fuller',
                        'FullName': 'AndrewFuller',
                        'Designation': 'Sales Representative',
                        'EmployeeID': '4',
                        'EmpID': 'EMP045',
                        'Address': '14 Garrett Hill, London',
                        'Country': 'UK',
                        'Contact': '(71) 555-4848',
                        'DOB': new Date('9/20/1980')
                    },
                {
                    'Name': 'Anne Dodsworth',
                    'FullName': 'AnneDodsworth',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '5',
                    'EmpID': 'EMP091',
                    'Address': '4726 - 11th Ave. N.E., Seattle',
                    'Country': 'USA',
                    'Contact': '(206) 555-1189',
                    'DOB': new Date('10/19/1989')
                },
                {
                    'Name': 'Michael Suyama',
                    'FullName': 'MichaelSuyama',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '6',
                    'EmpID': 'EMP110',
                    'Address': 'Coventry House Miner Rd., London',
                    'Country': 'UK',
                    'Contact': '(71) 555-3636',
                    'DOB': new Date('11/02/1987')
                },
                {
                    'Name': 'Janet Leverling',
                    'FullName': 'JanetLeverling',
                    'Designation': 'Sales Coordinator',
                    'EmployeeID': '7',
                    'EmpID': 'EMP131',
                    'Address': 'Edgeham Hollow Winchester Way, London',
                    'Country': 'UK',
                    'Contact': '(71) 555-3636',
                    'DOB': new Date('11/06/1990')
                },
                ]
    
            },
            {
                'Name': 'Romey Wilson',
                'FullName': 'RomeyWilson',
                'Designation': 'Sales Executive',
                'EmployeeID': '8',
                'EmpID': 'EMP039',
                'Address': '7 Houndstooth Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-3690',
                'DOB': new Date('02/02/1980'),
                'Children': [
                {
                    'Name': 'Margaret Peacock',
                    'FullName': 'MargaretPeacock',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '9',
                    'EmpID': 'EMP213',
                    'Address': '4726 - 11th Ave. N.E., California',
                    'Country': 'USA',
                    'Contact': '(206) 555-1989',
                    'DOB': new Date('01/21/1986')
                },
                {
                    'Name': 'Laura Callahan',
                    'FullName': 'LauraCallahan',
                    'Designation': 'Sales Coordinator',
                    'EmployeeID': '10',
                    'EmpID': 'EMP201',
                    'Address': 'Coventry House Miner Rd., London',
                    'Country': 'UK',
                    'Contact': '(71) 555-2222',
                    'DOB': new Date( '12/01/1990')
                },
                {
                    'Name': 'Steven Buchanan',
                    'FullName': 'StevenBuchanan',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '11',
                    'EmpID': 'EMP197',
                    'Address': '200 Lincoln Ave, Salinas, CA 93901',
                    'Country': 'USA',
                    'Contact': '(831) 758-7408',
                    'DOB': new Date('03/23/1987')
                },
                {
                    'Name': 'Tedd Lawson',
                    'FullName': 'TeddLawson',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '12',
                    'EmpID': 'EMP167',
                    'Address': '200 Lincoln Ave, Salinas, CA 93901',
                    'Country': 'USA',
                    'Contact': '(831) 758-7368 ',
                    'DOB': new Date('08/09/1989')
                },
                ]
            }]
        }]
    }];
    exports.complexData =  [
        {
            taskID: 1,
            taskName: 'Planning',
            startDate: new Date('02/03/2017'),
            endDate: new Date('02/07/2017'),
            progress: 100,
            duration: 5,
            assignee: {firstName: 'Nancy', lastName: 'Davolio'},
            priority: 'Normal',
            approved: false,
            subtasks: [
                { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),assignee: {firstName: 'Andrew', lastName: 'Fuller'},
                    endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
                { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),assignee: {firstName: 'Janet', lastName: 'Leverling'},
                    endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
                { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),assignee: {firstName: 'Margaret', lastName: 'Peacock'},
                    endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
                { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),assignee: {firstName: 'Steven', lastName: 'Buchanan'},
                    endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
            ]
        },
        {
            taskID: 6,
            taskName: 'Design',
            startDate: new Date('02/10/2017'),
            endDate: new Date('02/14/2017'),
            duration: 3,
            progress: 86,
            assignee: {firstName: 'Michael', lastName: 'Suyama'},
            priority: 'High',
            approved: false,
            subtasks: [
                { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),assignee: {firstName: 'Robert', lastName: 'King'},
                    endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
                { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),assignee: {firstName: 'Laura', lastName: 'Challahan'},
                    endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
                { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),assignee: {firstName: 'Anne', lastName: 'Dodsworth'},
                    endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
                { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),assignee: {firstName: 'Tamer', lastName: 'Nancy'},
                    endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
                { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),assignee: {firstName: 'Laura', lastName: 'Martin'},
                    endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
            ]
        }
    ];
    exports.stringData = [
        {
            taskID: 1,
            taskName: 'Planning',
            startDate: new Date('02/03/2017'),
            endDate: new Date('02/07/2017'),
            progress: 100,
            duration: 5,
            name: [{firstName: 'Nancy'}, {lastName: 'Davolio'}],
            priority: 'Normal',
            approved: false,
            subtasks: [
                { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),name: [{firstName: 'Andrew'}, { lastName: 'Fuller'}],
                    endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
                { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),name: [{firstName: 'Janet'}, { lastName: 'Leverling'}],
                    endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
                { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),name: [{firstName: 'Margaret'}, { lastName: 'Peacock'}],
                    endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
                { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),name: [{firstName: 'Steven'}, { lastName: 'Buchanan'}],
                    endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
            ]
        },
        {
            taskID: 6,
            taskName: 'Design',
            startDate: new Date('02/10/2017'),
            endDate: new Date('02/14/2017'),
            duration: 3,
            progress: 86,
            name: [{firstName: 'Michael'}, { lastName: 'Suyama'}],
            priority: 'High',
            approved: false,
            subtasks: [
                { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),name: [{firstName: 'Robert'}, { lastName: 'King'}],
                    endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
                { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),name: [{firstName: 'Laura'}, { lastName: 'Challahan'}],
                    endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
                { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),name: [{firstName: 'Anne'}, { lastName: 'Dodsworth'}],
                    endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
                { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),name: [{firstName: 'Tamer'}, { lastName: 'Nancy'}],
                    endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
                { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),name: [{firstName: 'Laura'}, { lastName: 'Martin'}],
                    endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
            ]
        }
    ];
var lineData =  [
        [0, 6, 4, 1, 3, 2, 5],
        [5, 4, 6, 3, 1, 2, 0],
        [6, 4, 0, 3, 2, 5, 1],
        [4, 6, 3, 0, 1, 2, 5],
        [3, 5, 6, 4, 0, 1, 2],
        [1, 3, 4, 2, 5, 0, 6],
        [2, 4, 0, 3, 5, 6, 1],
        [5, 4, 6, 3, 1, 2, 0],
        [0, 6, 4, 1, 3, 2, 5],
        [6, 4, 0, 3, 2, 5, 1],
        [4, 6, 3, 0, 1, 2, 5],
        [3, 5, 6, 4, 0, 1, 2],
        [1, 3, 4, 2, 5, 0, 6],
        [2, 4, 0, 3, 5, 6, 1],
        [5, 4, 6, 3, 1, 2, 0],
        [0, 6, 4, 1, 3, 2, 5],
        [6, 4, 0, 3, 2, 5, 1],
        [4, 6, 3, 0, 1, 2, 5],
        [2, 4, 0, 3, 5, 6, 1],
        [3, 5, 6, 4, 0, 1, 2],
        [1, 3, 4, 2, 5, 0, 6]
    ];
var columnData =  [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
    [4, 6, -3, 0, 1, 2, 5],
    [3, -5, -6, 4, 0, 1, 2],
    [1, 3, -4, -2, 5, 0, 6],
    [2, -4, 0, -3, 5, 6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, 6, 4, -1, -3, 2, 5],
    [6, -4, 0, -3, 2, 5, 1],
    [4, 6, -3, 0, -1, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
    [3, 5, 6, -4, 0, 1, 2],
    [1, 3, -4, 2, -5, 0, 6]
];   
    exports.getSparkData = (type, count) => {
        if (type === 'line') {
            return lineData[count];
        } else {
            return columnData[count];
        }
    };
var sparkdata =  [
        { x: 0, xval: '2005', yval: 1 },
        { x: 1, xval: '2006', yval: 0 },
        { x: 2, xval: '2007', yval: 0 },
        { x: 3, xval: '2008', yval: 0 },
        { x: 4, xval: '2009', yval: 0 },
        { x: 5, xval: '2010', yval: 1 },
        { x: 6, xval: '2011', yval: 0 },
        { x: 7, xval: '2012', yval: -1 },
        { x: 8, xval: '2013', yval: 0 },
        { x: 9, xval: '2014', yval: -1 },
    ];
    
           
});

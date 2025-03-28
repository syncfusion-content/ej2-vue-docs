define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.eventsData = [
        {
            Id: 1,
            Subject: "Annual Conference",
            StartTime: new Date(2025, 2, 2, 10, 0, 0),
            EndTime: new Date(2025, 2, 2, 11, 0, 0)
        },
        {
            Id: 2,
            Subject: "Tech Symposium",
            StartTime: new Date(2025, 2, 2, 10, 30, 0),
            EndTime: new Date(2025, 2, 2, 11, 30, 0)
        },
        {
            Id: 3,
            Subject: "Client Meeting",
            StartTime: new Date(2025, 2, 3, 12, 0, 0),
            EndTime: new Date(2025, 2, 3, 14, 0, 0),
            RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5"
        },
        {
            Id: 4,
            Subject: "Project Review",
            StartTime: new Date(2025, 2, 4, 11, 0, 0),
            EndTime: new Date(2025, 2, 4, 14, 0, 0)
        },
        {
            Id: 5,
            Subject: "Strategy Session",
            StartTime: new Date(2025, 2, 6, 9, 30, 0),
            EndTime: new Date(2025, 2, 6, 10, 0, 0)
        },
        {
            Id: 6,
            Subject: "Board Meeting",
            StartTime: new Date(2025, 2, 6, 9, 30, 0),
            EndTime: new Date(2025, 2, 6, 11, 0, 0)
        }
    ];
});

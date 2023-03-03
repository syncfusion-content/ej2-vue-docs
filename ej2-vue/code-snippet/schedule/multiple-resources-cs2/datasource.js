define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resourceData = [
        {
            Id: 1,
            Subject: 'Family vacation',
            StartTime: new Date(2018, 3, 1, 9, 30),
            EndTime: new Date(2018, 3, 1, 12, 0),
            IsAllDay: false,
            Location: 'London',
            OwnerId: 1,
            RoomId: 1
        }, {
            Id: 2,
            Subject: 'Holiday',
            StartTime: new Date(2018, 3, 1, 12, 30),
            EndTime: new Date(2018, 3, 1, 14, 45),
            IsAllDay: false,
            Location: 'USA',
            OwnerId: 2,
            RoomId: 2
        }, {
            Id: 3,
            Subject: 'Conference',
            StartTime: new Date(2018, 3, 2, 10, 0),
            EndTime: new Date(2018, 3, 2, 12, 30),
            IsAllDay: false,
            Location: 'Paris',
            OwnerId: 1,
            RoomId: 1
        }, {
            Id: 4,
            Subject: 'Weekend trip',
            StartTime: new Date(2018, 3, 2, 13, 0),
            EndTime: new Date(2018, 3, 2, 15, 30),
            IsAllDay: false,
            Location: 'Spain',
            OwnerId: 2,
            RoomId: 2
        }, {
            Id: 5,
            Subject: 'Weekend trip',
            StartTime: new Date(2018, 3, 3, 9, 0),
            EndTime: new Date(2018, 3, 3, 11, 30),
            IsAllDay: false,
            Location: 'Paris',
            OwnerId: 1,
            RoomId: 1
        }, {
            Id: 6,
            Subject: 'Holiday trip',
            StartTime: new Date(2018, 3, 3, 14, 0),
            EndTime: new Date(2018, 3, 3, 16, 45),
            IsAllDay: false,
            Location: 'Thailand',
            OwnerId: 2,
            RoomId: 2
        }, {
            Id: 7,
            Subject: 'World cup',
            StartTime: new Date(2018, 3, 4, 11, 15),
            EndTime: new Date(2018, 3, 4, 13, 30),
            IsAllDay: false,
            Location: 'Brazil',
            OwnerId: 1,
            RoomId: 1
        }, {
            Id: 8,
            Subject: 'Test match',
            StartTime: new Date(2018, 3, 4, 9, 15),
            EndTime: new Date(2018, 3, 4, 11, 45),
            IsAllDay: false,
            Location: 'West indies',
            OwnerId: 2,
            RoomId: 2
        }, {
            Id: 9,
            Subject: 'One-day match',
            StartTime: new Date(2018, 3, 5, 9, 30),
            EndTime: new Date(2018, 3, 5, 12, 45),
            IsAllDay: false,
            Location: 'India',
            OwnerId: 1,
            RoomId: 1
        }, {
            Id: 10,
            Subject: 'Test drive',
            StartTime: new Date(2018, 3, 5, 13, 45),
            EndTime: new Date(2018, 3, 5, 16, 30),
            IsAllDay: false,
            Location: 'London',
            OwnerId: 2,
            RoomId: 1
        }
    ];
    
    exports.doctorData = [
        {
            Id: 1,
            Subject: 'Echocardiogram',
            StartTime: new Date(2018, 3, 2, 9, 30),
            EndTime: new Date(2018, 3, 2, 11, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 2,
            Subject: 'Lumbar punctures',
            StartTime: new Date(2018, 3, 2, 9, 30),
            EndTime: new Date(2018, 3, 2, 10, 45),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 3,
            Subject: 'Osteoarthritis',
            StartTime: new Date(2018, 3, 2, 8),
            EndTime: new Date(2018, 3, 2, 10, 30),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 4,
            Subject: 'Ambulatory ECG',
            StartTime: new Date(2018, 3, 3, 12),
            EndTime: new Date(2018, 3, 3, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 5,
            Subject: 'Osteoporosis',
            StartTime: new Date(2018, 3, 3, 11),
            EndTime: new Date(2018, 3, 3, 11, 50),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 6,
            Subject: 'Neuromuscular',
            StartTime: new Date(2018, 3, 4, 11, 30),
            EndTime: new Date(2018, 3, 4, 13, 30),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 7,
            Subject: 'Rheumatoid arthritis',
            StartTime: new Date(2018, 3, 4, 13, 40),
            EndTime: new Date(2018, 3, 4, 14, 40),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 8,
            Subject: 'Cardiac Catheterization',
            StartTime: new Date(2018, 3, 5, 11, 30),
            EndTime: new Date(2018, 3, 5, 13),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 9,
            Subject: 'Growth abnormalities',
            StartTime: new Date(2018, 3, 5, 14),
            EndTime: new Date(2018, 3, 5, 15, 30),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 10,
            Subject: 'Sleep disorders',
            StartTime: new Date(2018, 3, 6, 12),
            EndTime: new Date(2018, 3, 6, 14),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 11,
            Subject: 'Torn ligaments',
            StartTime: new Date(2018, 3, 6, 13, 30),
            EndTime: new Date(2018, 3, 6, 14, 45),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 12,
            Subject: 'Coronary angiogram',
            StartTime: new Date(2018, 3, 6, 8),
            EndTime: new Date(2018, 3, 6, 8, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 13,
            Subject: 'Blood pressure',
            StartTime: new Date(2018, 3, 9, 12),
            EndTime: new Date(2018, 3, 9, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 14,
            Subject: 'Radiculopathy',
            StartTime: new Date(2018, 3, 9, 15, 45),
            EndTime: new Date(2018, 3, 9, 16, 30),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 15,
            Subject: 'Sprains and strains',
            StartTime: new Date(2018, 3, 9, 14),
            EndTime: new Date(2018, 3, 9, 15, 30),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 16,
            Subject: 'Cardiac stress testing',
            StartTime: new Date(2018, 3, 10, 10),
            EndTime: new Date(2018, 3, 10, 10, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 17,
            Subject: 'Tendon injuries',
            StartTime: new Date(2018, 3, 10, 14),
            EndTime: new Date(2018, 3, 10, 15, 30),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 18,
            Subject: 'Dementia',
            StartTime: new Date(2018, 3, 11, 15),
            EndTime: new Date(2018, 3, 11, 17),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 19,
            Subject: 'Pulled muscles',
            StartTime: new Date(2018, 3, 11, 13, 30),
            EndTime: new Date(2018, 3, 11, 15, 50),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 20,
            Subject: 'Coronary angiogram',
            StartTime: new Date(2018, 3, 12, 10, 30),
            EndTime: new Date(2018, 3, 12, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 21,
            Subject: 'Back pain',
            StartTime: new Date(2018, 3, 12, 10, 30),
            EndTime: new Date(2018, 3, 12, 11, 30),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 22,
            Subject: 'Neuropathy',
            StartTime: new Date(2018, 3, 13, 12, 30),
            EndTime: new Date(2018, 3, 13, 13, 45),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 23,
            Subject: 'Ruptured disks',
            StartTime: new Date(2018, 3, 13, 13),
            EndTime: new Date(2018, 3, 13, 15, 50),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 24,
            Subject: 'Atherosclerosis',
            StartTime: new Date(2018, 3, 13, 10),
            EndTime: new Date(2018, 3, 13, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 25,
            Subject: 'Arthroplasty',
            StartTime: new Date(2018, 3, 16, 9),
            EndTime: new Date(2018, 3, 16, 10),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 26,
            Subject: 'Hyperactivity disorder',
            StartTime: new Date(2018, 3, 16, 14),
            EndTime: new Date(2018, 3, 16, 15, 45),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 27,
            Subject: 'Muscular dystrophy',
            StartTime: new Date(2018, 3, 16, 13, 10),
            EndTime: new Date(2018, 3, 16, 15, 20),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 28,
            Subject: 'Consulting',
            StartTime: new Date(2018, 3, 17, 9, 20),
            EndTime: new Date(2018, 3, 17, 10, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 29,
            Subject: 'Hand surgery',
            StartTime: new Date(2018, 3, 17, 13, 20),
            EndTime: new Date(2018, 3, 17, 15, 22),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 30,
            Subject: 'Neuromuscular',
            StartTime: new Date(2018, 3, 18, 14),
            EndTime: new Date(2018, 3, 18, 15, 40),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 31,
            Subject: 'Spine surgery',
            StartTime: new Date(2018, 3, 18, 12, 18),
            EndTime: new Date(2018, 3, 18, 14, 23),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 32,
            Subject: 'Fibrinogen',
            StartTime: new Date(2018, 3, 19, 9),
            EndTime: new Date(2018, 3, 19, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 33,
            Subject: 'Bone tumors',
            StartTime: new Date(2018, 3, 19, 10, 45),
            EndTime: new Date(2018, 3, 19, 12, 20),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 34,
            Subject: 'Neuromuscular',
            StartTime: new Date(2018, 3, 20, 13),
            EndTime: new Date(2018, 3, 20, 17),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 35,
            Subject: 'Osteoporosis',
            StartTime: new Date(2018, 3, 20, 11, 45),
            EndTime: new Date(2018, 3, 20, 14, 30),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 36,
            Subject: 'Triglyceride',
            StartTime: new Date(2018, 3, 20, 7),
            EndTime: new Date(2018, 3, 20, 10, 45),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 37,
            Subject: 'Fibrinogen',
            StartTime: new Date(2018, 3, 23, 8),
            EndTime: new Date(2018, 3, 23, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 38,
            Subject: 'Head trauma',
            StartTime: new Date(2018, 3, 23, 12),
            EndTime: new Date(2018, 3, 23, 15),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 39,
            Subject: 'Arthroplasty',
            StartTime: new Date(2018, 3, 23, 12, 18),
            EndTime: new Date(2018, 3, 23, 13, 22),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 40,
            Subject: 'Echocardiogram',
            StartTime: new Date(2018, 3, 24, 7, 30),
            EndTime: new Date(2018, 3, 24, 12, 40),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 41,
            Subject: 'Skull reconstruction',
            StartTime: new Date(2018, 3, 24, 13, 20),
            EndTime: new Date(2018, 3, 24, 15, 45),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 42,
            Subject: 'Dementia',
            StartTime: new Date(2018, 3, 25, 12, 30),
            EndTime: new Date(2018, 3, 25, 16, 45),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 43,
            Subject: 'Orthopedic trauma',
            StartTime: new Date(2018, 3, 25, 10, 18),
            EndTime: new Date(2018, 3, 25, 12, 20),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 44,
            Subject: 'Blood pressure',
            StartTime: new Date(2018, 3, 26, 7, 50),
            EndTime: new Date(2018, 3, 26, 12, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 45,
            Subject: 'Ruptured disks',
            StartTime: new Date(2018, 3, 26, 12, 50),
            EndTime: new Date(2018, 3, 26, 15, 20),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 46,
            Subject: 'Head trauma',
            StartTime: new Date(2018, 3, 27, 11, 50),
            EndTime: new Date(2018, 3, 27, 12, 45),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 47,
            Subject: 'Cerebral palsy',
            StartTime: new Date(2018, 3, 27, 14, 50),
            EndTime: new Date(2018, 3, 27, 15, 50),
            IsAllDay: false,
            ConferenceId: 3
        }, {
            Id: 48,
            Subject: 'Consulting',
            StartTime: new Date(2018, 3, 27, 9),
            EndTime: new Date(2018, 3, 27, 11, 30),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 49,
            Subject: 'Electrocardiogram',
            StartTime: new Date(2018, 3, 30, 9, 30),
            EndTime: new Date(2018, 3, 30, 11, 50),
            IsAllDay: false,
            ConferenceId: 1
        }, {
            Id: 50,
            Subject: 'Radiculopathy',
            StartTime: new Date(2018, 3, 30, 14),
            EndTime: new Date(2018, 3, 30, 15, 30),
            IsAllDay: false,
            ConferenceId: 2
        }, {
            Id: 51,
            Subject: 'Skull reconstruction',
            StartTime: new Date(2018, 3, 30, 14),
            EndTime: new Date(2018, 3, 30, 16),
            IsAllDay: false,
            ConferenceId: 3
        }
    ];
});

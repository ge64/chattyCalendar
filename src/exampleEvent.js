export const demoEvents = [
    {
        title: 'Big Meeting',
        allDay: true,
        start: new Date(2024, 1, 1), // Note: JavaScript months are 0-based
        end: new Date(2024, 1, 1),
        isApproved: true,
    },
    {
        title: 'Vacation',
        start: new Date(2024, 1, 7),
        end: new Date(2024, 1, 10),
        isApproved: false,
    },
    {
        title: 'Team Outing',
        allDay: true,
        start: new Date(2024, 1, 5),
        end: new Date(2024, 1, 6),
        isApproved: false,
    },
    {
        title: 'Project Deadline',
        allDay: false,
        start: new Date(2024, 1, 15, 9, 0),
        end: new Date(2024, 1, 15, 17, 0),
        isApproved: true,
    },
    {
        title: 'Client Meeting',
        allDay: true,
        start: new Date(2024, 1, 20),
        end: new Date(2024, 1, 21),
        isApproved: true,
    },
    {
        title: 'Office Maintenance',
        allDay: true,
        start: new Date(2024, 1, 25),
        end: new Date(2024, 1, 28),
        isApproved: false,
    },
];


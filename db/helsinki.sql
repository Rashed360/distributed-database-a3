INSERT INTO WorkerData (WorkerId, WorkHours, OvertimeHours) VALUES
(3, 40, 5),
(7, 40, 2),
(10, 40, 4),
(12, 40, 3),
(13, 40, 6);

INSERT INTO ProjectWorker (WorkerId, ProjectId, WorkerLocation, ProjectLocation) VALUES
(2, 3, 'Stockholm', 'Helsinki'),
(3, 1, 'Helsinki', 'Stockholm'),
(3, 5, 'Helsinki', 'Stockholm'),
(5, 3, 'Stockholm', 'Helsinki'),
(7, 1, 'Helsinki', 'Stockholm'),
(9, 3, 'Copenhagen', 'Helsinki'),
(10, 3, 'Helsinki', 'Helsinki'),
(10, 4, 'Helsinki', 'Helsinki'),
(11, 4, 'Stockholm', 'Helsinki'),
(12, 2, 'Helsinki', 'Copenhagen'),
(12, 4, 'Helsinki', 'Helsinki'),
(13, 3, 'Helsinki', 'Helsinki'),
(13, 4, 'Helsinki', 'Helsinki');
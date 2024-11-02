INSERT INTO WorkerData (WorkerId, WorkHours, OvertimeHours) VALUES
(1, 40, 3),
(2, 40, 4),
(5, 40, 2),
(11, 40, 5),
(15, 40, 1);

INSERT INTO ProjectWorker (WorkerId, ProjectId, WorkerLocation, ProjectLocation) VALUES
(1, 1, 'Stockholm', 'Stockholm'),
(1, 5, 'Stockholm', 'Stockholm'),
(2, 3, 'Stockholm', 'Helsinki'),
(2, 5, 'Stockholm', 'Stockholm'),
(3, 1, 'Helsinki', 'Stockholm'),
(3, 5, 'Helsinki', 'Stockholm'),
(5, 3, 'Stockholm', 'Helsinki'),
(5, 5, 'Stockholm', 'Stockholm'),
(7, 1, 'Helsinki', 'Stockholm'),
(11, 1, 'Stockholm', 'Stockholm'),
(11, 4, 'Stockholm', 'Helsinki'),
(15, 1, 'Stockholm', 'Stockholm');
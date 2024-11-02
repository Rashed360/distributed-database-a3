INSERT INTO WorkerData (WorkerId, WorkHours, OvertimeHours) VALUES
(4, 40, 3),
(6, 40, 2),
(8, 40, 4),
(9, 40, 5),
(14, 40, 1);

INSERT INTO ProjectWorker (WorkerId, ProjectId, WorkerLocation, ProjectLocation) VALUES
(4, 2, 'Copenhagen', 'Copenhagen'),
(6, 2, 'Copenhagen', 'Copenhagen'),
(8, 2, 'Copenhagen', 'Copenhagen'),
(9, 3, 'Copenhagen', 'Helsinki'),
(12, 2, 'Helsinki', 'Copenhagen'),
(14, 2, 'Copenhagen', 'Copenhagen');
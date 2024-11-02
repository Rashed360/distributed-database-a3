INSERT INTO Workers (FirstName, LastName, Salary, Location) VALUES
('John', 'Doe', 50000, 'Helsinki'),
('Jane', 'Smith', 52000, 'Helsinki'),
('Emily', 'Davis', 48000, 'Helsinki'),
('Michael', 'Brown', 51000, 'Helsinki'),
('Anna', 'Wilson', 49500, 'Helsinki');

INSERT INTO WorkerData (WorkerId, WorkHours, OvertimeHours) VALUES
(1, 40, 5),
(2, 40, 2),
(3, 40, 4),
(4, 40, 3),
(5, 40, 6);

INSERT INTO Projects (ProjectName, Location, TotalWorkers, TotalWorkHours) VALUES
('Project1', 'Helsinki', 5, 200);

INSERT INTO ProjectWorker (WorkerId, ProjectId, WorkerLocation, ProjectLocation) VALUES
(1, 1, 'Helsinki', 'Helsinki'),
(2, 1, 'Helsinki', 'Helsinki'),
(3, 1, 'Helsinki', 'Helsinki'),
(4, 1, 'Helsinki', 'Helsinki'),
(5, 1, 'Helsinki', 'Helsinki');
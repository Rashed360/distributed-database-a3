INSERT INTO Workers (FirstName, LastName, Salary, Location) VALUES
('Lucas', 'Lee', 52000, 'Copenhagen'),
('Mia', 'White', 54000, 'Copenhagen'),
('Ethan', 'Hall', 50000, 'Copenhagen'),
('Emma', 'Young', 53000, 'Copenhagen'),
('Ava', 'King', 51000, 'Copenhagen');

INSERT INTO WorkerData (WorkerId, WorkHours, OvertimeHours) VALUES
(11, 40, 3),
(12, 40, 2),
(13, 40, 4),
(14, 40, 5),
(15, 40, 1);

INSERT INTO Projects (ProjectName, Location, TotalWorkers, TotalWorkHours) VALUES
('Project3', 'Copenhagen', 5, 200);

INSERT INTO ProjectWorker (WorkerId, ProjectId, WorkerLocation, ProjectLocation) VALUES
(11, 3, 'Copenhagen', 'Copenhagen'),
(12, 3, 'Copenhagen', 'Copenhagen'),
(13, 3, 'Copenhagen', 'Copenhagen'),
(14, 3, 'Copenhagen', 'Copenhagen'),
(15, 3, 'Copenhagen', 'Copenhagen');

INSERT INTO Workers (FirstName, LastName, Salary, Location) VALUES
('Peter', 'Jones', 53000, 'Stockholm'),
('Olivia', 'Taylor', 51000, 'Stockholm'),
('Liam', 'Anderson', 49000, 'Stockholm'),
('Sophia', 'Thomas', 55000, 'Stockholm'),
('James', 'Martin', 50000, 'Stockholm');

INSERT INTO WorkerData (WorkerId, WorkHours, OvertimeHours) VALUES
(6, 40, 3),
(7, 40, 4),
(8, 40, 2),
(9, 40, 5),
(10, 40, 1);

INSERT INTO Projects (ProjectName, Location, TotalWorkers, TotalWorkHours) VALUES
('Project2', 'Stockholm', 5, 200);

INSERT INTO ProjectWorker (WorkerId, ProjectId, WorkerLocation, ProjectLocation) VALUES
(6, 2, 'Stockholm', 'Stockholm'),
(7, 2, 'Stockholm', 'Stockholm'),
(8, 2, 'Stockholm', 'Stockholm'),
(9, 2, 'Stockholm', 'Stockholm'),
(10, 2, 'Stockholm', 'Stockholm');

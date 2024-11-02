CREATE TABLE IF NOT EXISTS Workers (
    WorkerId SERIAL PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Salary INT,
    Location VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS WorkerData (
    WorkerDataId SERIAL PRIMARY KEY,
    WorkerId INT REFERENCES Workers(WorkerId),
    WorkHours INT,
    OvertimeHours INT
);

CREATE TABLE IF NOT EXISTS Projects (
    ProjectId SERIAL PRIMARY KEY,
    ProjectName VARCHAR(50),
    Location VARCHAR(20),
    TotalWorkers INT,
    TotalWorkHours INT
);

CREATE TABLE IF NOT EXISTS ProjectWorker (
    ProjectWorkerId SERIAL PRIMARY KEY,
    WorkerId INT REFERENCES Workers(WorkerId),
    ProjectId INT REFERENCES Projects(ProjectId),
    WorkerLocation VARCHAR(20),
    ProjectLocation VARCHAR(20)
);

INSERT INTO Workers (FirstName, LastName, Salary, Location) VALUES
('Erik', 'Johansson', 53000, 'Stockholm'),
('Anna', 'Andersson', 51000, 'Stockholm'),
('Matti', 'Virtanen', 50000, 'Helsinki'),
('Lars', 'Hansen', 52000, 'Copenhagen'),
('Lars', 'Svensson', 49000, 'Stockholm'),
('Anna', 'Nielsen', 54000, 'Copenhagen'),
('Anna', 'Mäkinen', 52000, 'Helsinki'),
('Peter', 'Jensen', 50000, 'Copenhagen'),
('Kirsten', 'Pedersen', 53000, 'Copenhagen'),
('Juhani', 'Laine', 48000, 'Helsinki'),
('Karin', 'Nilsson', 55000, 'Stockholm'),
('Liisa', 'Korhonen', 51000, 'Helsinki'),
('Kari', 'Heikkinen', 49500, 'Helsinki'),
('Morten', 'Andersen', 51000, 'Copenhagen'),
('Johan', 'Karlsson', 50000, 'Stockholm');

INSERT INTO Projects (ProjectName, Location, TotalWorkers, TotalWorkHours) VALUES
('Project1', 'Stockholm', 5, 200),
('Project2', 'Copenhagen', 5, 200),
('Project3', 'Helsinki', 5, 200),
('Project4', 'Helsinki', 4, 160),
('Project5', 'Stockholm', 4, 160);
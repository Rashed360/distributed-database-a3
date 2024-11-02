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
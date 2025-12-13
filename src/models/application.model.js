// src/models/application.model.js

export const applications = [];

export const applyForJob = (application) => {
  applications.push(application);
};

export const getApplicationsByJobId = (jobId) =>
  applications.filter(a => a.jobId === jobId);


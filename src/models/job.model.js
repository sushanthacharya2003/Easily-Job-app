// src/models/job.model.js

const jobs = [];

// Create job
export const createJob = (job) => {
  jobs.push(job);
  return job;
};

// Get all jobs
export const getAllJobs = () => jobs;

// Get job by ID
export const getJobById = (id) =>
  jobs.find((job) => job.id === id);

// Update job
export const updateJob = (id, updatedData) => {
  const index = jobs.findIndex((job) => job.id === id);
  if (index === -1) return false;

  jobs[index] = { ...jobs[index], ...updatedData };
  return true;
};

// Delete job
export const deleteJob = (id) => {
  const index = jobs.findIndex((job) => job.id === id);
  if (index === -1) return false;

  jobs.splice(index, 1);
  return true;
};

// Add applicant
export const addApplicantToJob = (jobId, applicant) => {
  const job = getJobById(jobId);
  if (!job) return false;

  job.applicants.push(applicant);
  return true;
};


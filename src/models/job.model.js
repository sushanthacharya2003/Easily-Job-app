// In-memory storage for jobs
export const jobs = [];

// ✅ Create a new job (Recruiter posts a job)
export const createJob = (job) => {
  jobs.push(job);
  return true;
};

// ✅ Get all jobs (for job seekers)
export const getAllJobs = () => {
  return jobs;
};

// ✅ Get single job by ID (job details page)
export const getJobById = (jobId) => {
  return jobs.find((job) => job.id === jobId);
};

// ✅ Update a job (Recruiter edits job)
export const updateJob = (jobId, updatedData) => {
  const index = jobs.findIndex((job) => job.id === jobId);

  if (index !== -1) {
    jobs[index] = { ...jobs[index], ...updatedData };
    return true;
  }

  return false;
};

// ✅ Delete a job (Recruiter deletes job)
export const deleteJob = (jobId) => {
  const index = jobs.findIndex((job) => job.id === jobId);

  if (index !== -1) {
    jobs.splice(index, 1);
    return true;
  }

  return false;
};

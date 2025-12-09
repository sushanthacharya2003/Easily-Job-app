// In-memory storage for job applications
export const applications = [];

// ✅ Apply for a job
export const applyForJob = (application) => {
  applications.push(application);
  return true;
};

// ✅ Get all applications for a specific job (for recruiter)
export const getApplicationsByJobId = (jobId) => {
  return applications.filter(
    (application) => application.jobId === jobId
  );
};

// ✅ Get all applications by a specific user (job seeker dashboard)
export const getApplicationsByUserEmail = (email) => {
  return applications.filter(
    (application) => application.userEmail === email
  );
};

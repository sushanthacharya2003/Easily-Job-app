// Job controller placeholders
import { createJob, getJobById, getAllJobs, updateJob, deleteJob,getJobsByRecruiter } from "../models/job.model.js";

export const listJobs = (req, res) => {
  const jobs = getAllJobs();
  res.render('jobs/job-list', { jobs });
};

export const getJob = (req, res) => {
  const jobId = req.params.id;
  const job = getJobById(Number(jobId));
  res.render('jobs/job-details', { job });
};

export const listRecruiterJobs = (req, res) => {
  const recruiterEmail = req.session.user.email;
  const jobs = getJobsByRecruiter(recruiterEmail);
  res.render('jobs/job-details', { jobs });
}

export const postJob = (req, res) => {
  const { title, description, company } = req.body;
  const newJob = { id: Date.now(), title, description, company,recruiterName: req.session.user.name, recruiterEmail: req.session.user.email };
  // Save newJob to database (not implemented)
  createJob(newJob);
  return res.redirect('/jobs');
};

export const editJob = (req, res) => {
  res.render('jobs/edit-job');
};
export const updateJobController = (req, res) => {
  const jobId = req.params.id;
  const { title, description, company } = req.body;
  const updatedData = { title, description, company };
  const success = updateJob(Number(jobId), updatedData);
  if (success) {
    return res.redirect(`/jobs/${jobId}`);
  } else {
    return res.status(404).send('Job not found');
  }
};

export const deleteJobController = (req, res) => {
  const jobId = req.params.id;
  const success = deleteJob(Number(jobId));
  if (success) {
    return res.redirect('/jobs');
  } else {
    return res.status(404).send('Job not found');
  }
};
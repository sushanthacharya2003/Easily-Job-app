// src/controllers/job.controller.js
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} from "../models/job.model.js";

// List all jobs
export const listJobs = (req, res) => {
  const jobs = getAllJobs();
  res.render("jobs/list-all-jobs", { jobs });
};

// Job details
export const getJob = (req, res) => {
  const job = getJobById(Number(req.params.id));
  if (!job) return res.status(404).render("404");
  res.render("jobs/job-details", { data: job, user: req.session.user });
};

// New job form
export const showNewJobForm = (req, res) => {
  res.render("jobs/new-job");
};

// Create job
export const postJob = (req, res) => {
  const { title, description, company } = req.body;

  if (!title || !description || !company) {
    return res.status(400).send("All fields are required");
  }

  const newJob = {
    id: Date.now(),
    title,
    description,
    company,
  };

  createJob(newJob);
  res.redirect("/jobs");
};

// Edit job form
export const editJob = (req, res) => {
  const job = getJobById(Number(req.params.id));
  if (!job) return res.status(404).render("404");

  res.render("jobs/update-job", { job });
};

// Update job
export const updateJobController = (req, res) => {
  const success = updateJob(Number(req.params.id), req.body);
  if (!success) return res.status(404).render("404");

  res.redirect(`/jobs/${req.params.id}`);
};

// Delete job
export const deleteJobController = (req, res) => {
  deleteJob(Number(req.params.id));
  res.redirect("/jobs");
};


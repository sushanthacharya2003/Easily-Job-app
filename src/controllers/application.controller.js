// src/controllers/application.controller.js
import { applyForJob, getApplicationsByJobId } from "../models/application.model.js";

export const submitApplication = (req, res) => {
  const jobId = Number(req.params.jobId);
  const { email, name, contact } = req.body;

  if (!email || !name || !req.file) {
    return res.status(400).send("All fields required");
  }

  const application = {
    jobId,
    userEmail: email,
    name,
    contact,
    resume: req.file.filename,
    appliedAt: new Date(),
  };

  applyForJob(application);
  res.redirect("/jobs");
};

export const listApplicants = (req, res) => {
  const applications = getApplicationsByJobId(Number(req.params.id));
  res.render("applications/all-applicants", { applications });
};


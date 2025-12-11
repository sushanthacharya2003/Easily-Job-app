// Application controller placeholders
import { applyForJob,getApplicationsByJobId,getApplicationsByUserEmail } from "../models/application.model";
import { getJobById } from "../models/job.model.js";

export const showApplyForm = (req, res) => {
  const jobId = Number(req.params.jobId);
  const job=getJobById(jobId);
  if (!job)
    {
      return res.status(404).send('Job not found')
  }
  else{
  res.render('applications/apply-job', { job });
  }
};

export const submitApplication = (req, res) => {
  const jobId = Number( req.params.jobId);
  const job=getJobById(jobId);
  if (!job)
    {
      return res.status(404).send('Job not found')
  }
  const resumeFile= req.file? req.file.fileName: null;
  const {name, email,coverLetter}= req.body;
  const newApplication={
    id: Date.now(),
    jobId,
    applicantName:name,
    userEmail:email,
    resumeFile,
    coverLetter,
    appliedAt: new Date()
  };
  applyForJob(newApplication);
  return res.render("msgPage",{message:"Application submitted successfully!"});
}

export const listApplicationsForJob = (req, res) => {

  const jobId = Number(req.params.jobId);
  const job=getJobById(jobId);
  if (!job) {
    return res.status(404).send('No applications found for this job');
  }
  const applications = getApplicationsByJobId(jobId);
  res.render('applications/applicants', { job, applications });
}

export const listApplicationsForUser = (req, res) => {

  const userEmail = req.session.user.email;
  const applications = getApplicationsByUserEmail(userEmail);
  if (applications.length === 0) {
    return res.status(404).send('No applications found for this user');
  }
  else{
  res.render('applications/applicant-list', { applications, userEmail });
}
}


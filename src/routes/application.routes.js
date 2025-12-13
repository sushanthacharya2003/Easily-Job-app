import express from "express";
import {
  showApplyForm,
  submitApplication,
  listApplicationsForJob
} from "../controllers/application.controller.js";

import upload from "../middleware/upload.middleware.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

// Show apply form (job seeker)
router.get("/apply/:jobId", auth, showApplyForm);

// Submit application with resume upload
router.post(
  "/apply/:jobId",
  auth,
  upload.single("resume"),
  submitApplication
);

// Recruiter: view all applicants for a job
router.get(
  "/:jobId/applicants",
  auth,
  listApplicationsForJob
);

export default router;


import express from "express";
import {
  submitApplication,
  listApplicants
} from "../controllers/application.controller.js";

import { auth, recruiterOnly } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";
import { sendConfirmationMail } from "../middleware/mail.middleware.js";

const router = express.Router();

// job seeker applies
router.post(
  "/apply/:jobId",
  auth,
  upload.single("resume"),
  sendConfirmationMail,
  submitApplication
);

// recruiter views applicants
router.get(
  "/applicants/:jobId",
  auth,
  recruiterOnly,
  listApplicants
);

export default router;


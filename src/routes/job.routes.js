import express from "express";
import {
  listJobs,
  getJob,
  postJob,
  editJob,
  updateJobController,
  deleteJobController,
} from "../controllers/job.controller.js";

import { auth, recruiterOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", listJobs);
router.get("/:id", getJob);

// recruiter-only
router.post("/", auth, recruiterOnly, postJob);
router.get("/:id/edit", auth, recruiterOnly, editJob);
router.post("/:id/edit", auth, recruiterOnly, updateJobController);
router.post("/:id/delete", auth, recruiterOnly, deleteJobController);

export default router;


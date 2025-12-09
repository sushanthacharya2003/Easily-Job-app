import express from 'express';
import { listJobs, getJob, postJob, deleteJobController,editJob,updateJobController,listRecruiterJobs } from '../controllers/job.controller.js';
const router = express.Router();

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', postJob);
router.get('/:id/edit', editJob);
router.post('/:id/edit', updateJobController);
router.post('/:id/delete', deleteJobController);

export default router;

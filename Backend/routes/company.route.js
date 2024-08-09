import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getComapny,
  getComapnyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.post("/register", isAuthenticated, registerCompany);
router.get("/get", isAuthenticated, getComapny);
router.get("/get/:id", isAuthenticated, getComapnyById);
router.put("/update/:id", isAuthenticated, singleUpload, updateCompany);

export default router;

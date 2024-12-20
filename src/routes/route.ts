import express from "express";
const router = express.Router();

import { controllers } from "../controllers/controller";

const ctrl = new controllers();

router.get("/", ctrl.home);
router.post("/addStudent", ctrl.addStudent);
router.get("/deleteStudent", ctrl.deleteStudent);
router.get("/editStudent", ctrl.getEditStudent);
router.post("/editStudent", ctrl.editStudent);
router.get("/search", ctrl.search);

export default router;

import { Router } from "express";
import { isAuth } from "../../middlewares/isAuth.js";
import { withPerms } from "../../middlewares/withPerms.js";
import { StudentsController } from "./students.controller.js";
import { validateHandler } from "../../utils/validateHandler.js";
import {
  createStudentBody,
  updateStudentBody,
} from "../../validators/student.validator.js";
const student = Router();

const controller = new StudentsController();

// Get all students
student.get("/all", isAuth, controller.getAll);

// Get student by id
student.get("/:id", isAuth, controller.getById);

// Register a new student
student.post(
  "/register",
  isAuth,
  withPerms("MANAGE_STUDENTS"),
  validateHandler("body", createStudentBody),
  controller.create
);

// Update a student
student.put(
  "/update/:id",
  isAuth,
  withPerms("MANAGE_STUDENTS"),
  validateHandler("body", updateStudentBody),
  controller.update
);

// Delete a student
student.delete(
  "/delete/:id",
  isAuth,
  withPerms("MANAGE_STUDENTS"),
  controller.delete
);

export { student as studentRouter };

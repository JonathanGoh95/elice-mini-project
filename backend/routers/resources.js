import { Router } from "express";
import search from "../controllers/searchController.js";
import save from "../controllers/saveController.js";
import update from "../controllers/updateController.js";
import saved from "../controllers/savedController.js";
const router = Router();

// Search YouTube + Books
router.get("/search", search);

// Save resource
router.post("/save", save);

// Update progress
router.post("/:id/progress", update);

// List saved
router.get("/saved", saved);

export default router;

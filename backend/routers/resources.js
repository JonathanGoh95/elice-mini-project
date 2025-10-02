import { Router } from "express";
import search from "../controllers/searchController";
import save from "../controllers/saveController";
import update from "../controllers/updateController";
import saved from "../controllers/savedController";
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

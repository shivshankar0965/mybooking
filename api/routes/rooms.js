import express from "express";
const router = express.Router();

import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";

//create
router.post("/:hotelid", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//getall
router.get("/", getRooms);
export default router;

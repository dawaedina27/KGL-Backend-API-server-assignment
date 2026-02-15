import express from "express";
import Procurement from "./models/Procurement.js";
import { protect, isManager } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /procurement:
 *   post:
 *     summary: Create procurement record (Manager only)
 *     tags: [Procurement]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produceName:
 *                 type: string
 *               produceType:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               tonnage:
 *                 type: number
 *               cost:
 *                 type: number
 *               dealerName:
 *                 type: string
 *               branch:
 *                 type: string
 *                 example: Maganjo
 *               contact:
 *                 type: string
 *               sellingPrice:
 *                 type: number
 *     responses:
 *       200:
 *         description: Procurement created
 */
router.post("/", protect, isManager, async (req, res) => {
  const record = await Procurement.create(req.body);
  res.json(record);
});

/**
 * @swagger
 * /procurement:
 *   get:
 *     summary: Get all procurement records
 *     tags: [Procurement]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of procurement records
 */
router.get("/", protect, async (req, res) => {
  const data = await Procurement.find();
  res.json(data);
});

export default router;

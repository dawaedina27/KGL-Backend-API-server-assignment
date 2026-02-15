import express from "express";
import Sale from "./models/Sale.js";
import { protect, isSalesAgent } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /sales/cash:
 *   post:
 *     summary: Record a cash sale
 *     tags: [Sales]
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
 *               tonnage:
 *                 type: number
 *               amountPaid:
 *                 type: number
 *               buyerName:
 *                 type: string
 *               salesAgentName:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cash sale recorded
 */
router.post("/cash", protect, isSalesAgent, async (req, res) => {
  const sale = await Sale.create({ ...req.body, saleType: "cash" });
  res.json(sale);
});

/**
 * @swagger
 * /sales/credit:
 *   post:
 *     summary: Record a credit sale
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               buyerName:
 *                 type: string
 *               nin:
 *                 type: string
 *               location:
 *                 type: string
 *               contact:
 *                 type: string
 *               amountDue:
 *                 type: number
 *               salesAgentName:
 *                 type: string
 *               dueDate:
 *                 type: string
 *               produceName:
 *                 type: string
 *               produceType:
 *                 type: string
 *               tonnage:
 *                 type: number
 *               dispatchDate:
 *                 type: string
 *     responses:
 *       200:
 *         description: Credit sale recorded
 */
router.post("/credit", protect, isSalesAgent, async (req, res) => {
  const sale = await Sale.create({ ...req.body, saleType: "credit" });
  res.json(sale);
});

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Get all sales
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of sales
 */
router.get("/", protect, async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
});

export default router;

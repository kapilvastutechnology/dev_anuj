import express from "express";
import { createOrder, getOrders } from "../controllers/orderControllers.js";
import { notAllowed } from "../utils/notAllowed.js";
import { checkUser } from "../middlewares/checkUser.js";

const router = express.Router();

router.route('/api/orders')
.get(getOrders)
.post(checkUser,createOrder).all(notAllowed)

export default router;

import express from "express";
import { createOrder, getOrder, getOrders } from "../controllers/orderControllers.js";
import { notAllowed } from "../utils/notAllowed.js";
import { checkUser } from "../middlewares/checkUser.js";

const router = express.Router();

router.route('/api/orders')
.get(checkUser,getOrders)
.post(checkUser,createOrder).all(notAllowed)
router.route('/api/orders/:id').get(checkUser,getOrder).all(notAllowed);
export default router;

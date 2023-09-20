import { Hono } from "hono";

import { middleware } from "../auth";
import AuthController from "../controllers/auth";

const router = new Hono();
const authController = new AuthController();

router.get("/signin", authController.signin);
router.get("/signin/callback", authController.callback);
router.get("/me", middleware, authController.me);

export default router;
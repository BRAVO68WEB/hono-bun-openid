import { Hono } from "hono";

import auth from "./auth.routes";

const router = new Hono();

router.route("/auth", auth);

export default router;